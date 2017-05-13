import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Deck } from '../../shared/models/deck';
import { DeckService } from '../deck.service';
import { Card } from '../../shared/models/card';

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  public deck: Deck;

  constructor(
    private deckService: DeckService
  ) { }

  ngOnInit() {
    this.deckService.deckStream.subscribe((deck: Deck) => {
      this.deck = deck;
    });
  }

  onRemoveCard(card: Card): void {
    this.deckService.removeCard(card);
  }

}
