import { Component, OnInit, OnChanges, ViewChild, AfterViewInit } from '@angular/core';
import { HsApiService } from '../hs-api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import { Card } from '../../shared/card';
import { CardSearchFormComponent } from '../card-search-form/card-search-form.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-card-search-view',
  templateUrl: './card-search-view.component.html',
  styleUrls: ['./card-search-view.component.scss']
})
export class CardSearchViewComponent implements OnInit, OnChanges, AfterViewInit {
  cards: Card[];
  @ViewChild('form') formComp: CardSearchFormComponent;
  callForCards: Subscription;

  constructor(private hsApi: HsApiService) {

  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    console.log(changes, '<----changes')
  }

  ngAfterViewInit() {
    this.onCard();
  }

  onCard(): void {
    this.callForCards = this.formComp.query
      .debounceTime(500)
      .switchMap((e) => {
        console.log(this.hsApi.searchCards(e))
        return this.hsApi.searchCards(e);
      })
      .subscribe(r => {
        this.cards = r;
      },
      (error) => console.log(error));
  }

  clear() {
    this.cards = [];
    this.callForCards.unsubscribe();
    this.onCard();
  }

}
