import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/models/card';
import { Subject } from 'rxjs/Subject';
import { HsApiService } from './hs-api.service';
import { DeckService } from '../deck/deck.service';

@Component({
  selector: 'card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent implements OnInit {
  cards: Card[];
  callForCards: Subject<any> = new Subject();
  loading: boolean;

  constructor(
    private hsApi: HsApiService,
    private deckService: DeckService
  ) {}

  ngOnInit() {
    this.callForCards
      .do(() => this.loading = true)
      .switchMap((e) => {
        console.log(e);
        if (e.class) {
          return this.hsApi.getCardsByClass(e.class).finally(() => this.loading = false);
        } else {
          return this.hsApi.searchCards(e.search).finally(() => this.loading = false);
        }
      })
      .subscribe(r => {
        this.cards = r;
      },
      (error) => console.log(error));
  }


  query(query): void {
    this.callForCards.next(query);
  }

  clear() {
    this.cards = [];
  }

  addCardToDeck(card: Card) {
    this.deckService.addCard(card);
  }


}
