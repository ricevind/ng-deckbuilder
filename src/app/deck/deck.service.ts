// TODO: refactor to Map() realized it when it was too late

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Card } from '../shared/models/card';
import { Deck, CardCount } from '../shared/models/deck';

const NEW_DECK = 'newdeck';

@Injectable()
export class DeckService {
  private _deck: BehaviorSubject<Deck>;
  private deck$: Observable<Deck>;
  private cardCount = 0;

  constructor() {}

  initSubject(deck: Deck): void {
    const initDeck = deck ? deck : { name: NEW_DECK, cards: [] };
    this._deck = new BehaviorSubject(initDeck);
    this.deck$ = this._deck.asObservable();
    this.countCards();
  }

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

  countCards() {
    const currentDeck = this.getDeck();
    this.cardCount = currentDeck.cards.reduce((count: number, currentCard: CardCount): number => {
      return currentCard.count + count;
    }, 0);
  }

  addCard(card: Card): void {
    if (this.cardCount >= 30) {
      return;
    }
    const count = this._cardInDeck(card);
    switch (count) {
      case 0:
        this.cardCount += 1;
        this._addCard(card);
        break;
      case 1:
        if (card.rarity === 'Legendary') {
          return;
        }
        this.cardCount += 1;
        this._incrementCard(card);
        break;
    }
  }

  removeCard(card: Card): void {
    const count = this._cardInDeck(card);
    this.cardCount -= 1;
    switch (count) {
      case 2:
        this._decrementCard(card);
        break;
      case 1:
        this._removeCard(card);
        break;
    }
  }

  private _addCard(card: Card): void {
    const cardMeta = {
      card: card,
      count: 1
    };
    const currentDeck = this.getDeck();
    currentDeck.cards.push(cardMeta);
    this.setDeck(currentDeck);
  }

  private _incrementCard(card: Card): void {
    const currentDeck = this.getDeck();
    const cardName = card.name;
    currentDeck.cards.map((cardMeta) => {
      if (cardMeta.card.name === cardName) {
        cardMeta.count = 2;
      }
    });
    this.setDeck(currentDeck);
  }

  private _removeCard(card: Card) {
    const cardName = card.name;
    const currentDeck = this.getDeck();
    const updatedCards = currentDeck.cards.filter((cardMeta) => {
      return cardMeta.card.name !== cardName;
    });
    currentDeck.cards = updatedCards;
    this.setDeck(currentDeck);
  }

  private _decrementCard(card: Card) {
    const currentDeck = this.getDeck();
    const cardName = card.name;
    currentDeck.cards.map((cardMeta) => {
      if (cardMeta.card.name === cardName) {
        cardMeta.count = 1;
      }
    });
    this.setDeck(currentDeck);
  }

  private _cardInDeck(card: Card): number {
    let cardInDeck = 0;
    const cardName = card.name;
    const currentDeck = this.getDeck();
    currentDeck.cards.map((cardMeta) => {
      if (cardMeta.card.name === cardName) {
        cardInDeck = cardMeta.count;
      }
    });
    return cardInDeck;
  }
}
