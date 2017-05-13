import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Deck } from './models/deck';
import { Observable } from 'rxjs/Observable';
import { Card } from './models/card';

@Injectable()
export class DeckService {
  private _deck: BehaviorSubject<Deck|null> = new BehaviorSubject(null);
  private deck$: Observable<Deck|null> = this._deck.asObservable();

  constructor() { }

  get deckStream(): Observable<Deck> {
    return this.deck$;
  }

  getDeck(): Deck {
    return this._deck.getValue();
  }

  setDeck(deck: Deck): void {
    const newDeck = JSON.parse(JSON.stringify(deck));
    this._deck.next(newDeck);
  }

  addCard(card: Card): void {
    const currentDeck = this.getDeck();
    currentDeck.cards.push(card);
    this.setDeck(currentDeck);
  }

  removeCard(card: Card|string): void {
    let cardName: string;
    if (typeof card === 'object') {
      cardName = card.name;
    } else {
      cardName = card;
    }
    const currentDeck = this.getDeck();
    const updatedCards = currentDeck.cards.filter((cardInDeck: Card) => {
      return cardInDeck.name !== cardName;
    });
    currentDeck.cards = updatedCards;
    this.setDeck(currentDeck);
  }

  // get deck
  // add card
  // remove card
  // _deckId
}
