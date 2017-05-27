import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Deck } from '../../shared/models/deck';
import { DeckService } from '../deck.service';
import { Card } from '../../shared/models/card';
import { DatabaseService } from '../../shared/services/database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  public deck: Deck;

  constructor(
    private deckService: DeckService,
    private databaseService: DatabaseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
        const savedDeck = this.route.snapshot.data['deck'];
        console.log(savedDeck);
        if (savedDeck.cards) {
          this.deckService.initSubject(savedDeck);
        } else {
          this.deckService.initSubject(null);
        }
        this.deckService.deckStream.subscribe((deck: Deck) => {
          this.deck = deck;
        });
  }

  onRemoveCard(card: Card): void {
    this.deckService.removeCard(card);
  }

  onSaveDeck(): void {
    this.databaseService.saveDeck(this.deck);
  }

}
