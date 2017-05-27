import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Info } from '../../info';
import { InfoService } from '../../info.service';
import { Query } from '../../shared/models/query';
import 'rxjs/add/operator/distinctUntilChanged';

export class SearchForm {
  search = '';
  class = '';
  filters: Filters;
}

class Filters {
    mana = '';
    attack = '';
    health = '';
    rarity = '';
  };

@Component({
  selector: 'card-search-form',
  templateUrl: './card-search-form.component.html',
  styleUrls: ['./card-search-form.component.scss']
})
export class CardSearchFormComponent implements OnInit {
  @Output() onQuery: EventEmitter<string> = new EventEmitter();
  @Output() onClear: EventEmitter<string> = new EventEmitter();
  searchForm: FormGroup;
  info: Info;

  constructor(
    private infoService: InfoService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.info = this.infoService.getInfo;
    console.log(this.info);
    this.buildForm();
    this.searchForm.valueChanges
    .distinctUntilChanged()
    .subscribe((value) => {
      if (value.search === '' && value.class === '') {
        this.clear();
        return;
      }
      console.log('form emit')
      this.onQuery.emit(value);
    });
  }

  buildForm() {
    const formModel = new SearchForm();
    formModel.filters = new Filters();
    this.searchForm = this.fb.group(formModel);
  }

  clear() {
    this.searchForm.patchValue({search: ''}, {emitEvent: false});
    this.onClear.emit();
  }

}
