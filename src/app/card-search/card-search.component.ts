import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/models/card';
import { Subject } from 'rxjs/Subject';
import { HsApiService } from './hs-api.service';
import { DeckService } from '../deck/deck.service';
import { SearchFormInterface } from './card-search-form/card-search-form.component';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent implements OnInit {
  cards: Card[];
  callForCards: Subject<any> = new Subject();
  loading: boolean;
  filter: string;
  rarity: string;
  previousClass: string;

  constructor(
    private hsApi: HsApiService,
    private deckService: DeckService
  ) {}

  ngOnInit() {
    this.callForCards
      .do(() => this.loading = true)
      .switchMap((e) => {
        if (e.class === this.previousClass) {
          this.loading = false;
          return Observable.of(this.cards);
        }
        if (e.class) {
          this.previousClass = e.class;
          return this.hsApi.getCardsByClass(e.class).finally(() => this.loading = false);
        } else if (e.search) {
          return this.hsApi.searchCards(e.search).finally(() => this.loading = false);
        } else {
          this.loading = false;
          return Observable.of(this.cards);
        }
      })
      .subscribe(r => {
        this.cards = r;
      },
      (error) => console.log(error));
  }


  query(query: SearchFormInterface): void {
    this.filter = query.search ? query.search : '';
    this.rarity = query.filters.rarity ? query.filters.rarity : '';
    this.callForCards.next(query);
  }

  clear() {
    this.callForCards.next({search: '', class: ''});
    this.cards = [];
  }

  addCardToDeck(card: Card) {
    this.deckService.addCard(card);
  }


}
