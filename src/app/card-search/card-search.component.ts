import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/models/card';
import { Subject } from 'rxjs/Subject';
import { HsApiService } from './hs-api.service';
import { DeckService } from '../deck/deck.service';
import { SearchFormInterface } from './card-search-form/card-search-form.component';
import { Observable } from 'rxjs/Observable';
import { CardsImageService } from '../shared/services/cards-image.service';

@Component({
  selector: 'card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent implements OnInit {
  cards: Card[];
  callForCards: Subject<any> = new Subject();
  filter: string;
  rarity: string;
  previousClass: string;
  loading: boolean;

  constructor(
    private hsApi: HsApiService,
    private deckService: DeckService,
    private cis: CardsImageService
  ) {}

  ngOnInit() {
    this.cis.isLoadingImages
      .subscribe(l => this.loading = l);

    this.callForCards
      .switchMap((e) => {
        if (e.class === this.previousClass) {
          return Observable.of(this.cards);
        }
        if (e.class) {
          this.previousClass = e.class;
          return this.hsApi.getCardsByClass(e.class);
        } else if (e.search) {
          return this.hsApi.searchCards(e.search);
        } else {
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
