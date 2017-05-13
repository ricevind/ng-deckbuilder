import { Component, OnInit, OnChanges, ViewChild, AfterViewInit } from '@angular/core';
import { HsApiService } from '../hs-api.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import { Card } from '../../shared/models/card';
import { Query } from '../../shared/models/query';

@Component({
  selector: 'app-card-search-view',
  templateUrl: './card-search-view.component.html',
  styleUrls: ['./card-search-view.component.scss']
})
export class CardSearchViewComponent implements OnInit, OnChanges {
  cards: Card[];
  callForCards: Subject<any> = new Subject();

  constructor(private hsApi: HsApiService) {}

  ngOnInit() {
    this.callForCards
      .debounceTime(500)
      .switchMap((e) => {
        console.log(e);
        if (e.class) {
          return this.hsApi.getCardsByClass(e.class);
        } else {
          return this.hsApi.searchCards(e.search);
        }
      })
      .subscribe(r => {
        this.cards = r;
      },
      (error) => console.log(error));
  }

  ngOnChanges(changes) {
    console.log(changes, '<----changes');
  }


  query(query): void {
    this.callForCards.next(query);
  }

  clear() {
    this.cards = [];
  }

}
