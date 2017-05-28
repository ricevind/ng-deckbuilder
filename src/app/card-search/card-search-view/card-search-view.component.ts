import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Card } from '../../shared/models/card';

@Component({
  selector: 'card-search-view',
  templateUrl: './card-search-view.component.html',
  styleUrls: ['./card-search-view.component.scss']
})
export class CardSearchViewComponent {
  @Input()  cards: Card[];
  @Input() filter: string;
  @Output() addCard: EventEmitter<Card> = new EventEmitter();

  cardClick(card: Card): void {
    this.addCard.emit(card);
  }
}
