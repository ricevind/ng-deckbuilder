import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Info } from '../../info';
import { InfoService } from '../../info.service';
import { Query } from '../../shared/query';

@Component({
  selector: 'app-card-search-form',
  templateUrl: './card-search-form.component.html',
  styleUrls: ['./card-search-form.component.scss']
})
export class CardSearchFormComponent implements OnInit {
  @Output() onQuery: EventEmitter<string> = new EventEmitter();
  @Output() onClear: EventEmitter<string> = new EventEmitter();
  searchForm: FormGroup;
  info: Info;

  constructor(private infoService: InfoService, private fb: FormBuilder, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.info = this.infoService.getInfo;
    this.buildForm();
    this.searchForm.valueChanges.subscribe((value) => {
      if (value.search === '') {
        this.clear();
        return;
      }
      this.onQuery.emit(value);
    });
  }

  buildForm() {
    const formModel = {
      search: '',
      class: ''
    };
    this.searchForm = this.fb.group(formModel);
  }

  clear() {
    this.searchForm.patchValue({search: ''}, {emitEvent: false});
    this.onClear.emit();
  }

}
