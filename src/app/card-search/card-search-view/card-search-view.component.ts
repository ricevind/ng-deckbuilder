import { Component, Input, EventEmitter, Output, OnChanges, SimpleChange } from '@angular/core';
import { Card } from '../../shared/models/card';

@Component({
  selector: 'card-search-view',
  templateUrl: './card-search-view.component.html',
  styleUrls: ['./card-search-view.component.scss']
})
export class CardSearchViewComponent implements OnChanges {
  @Input()  cards: Card[];
  @Input() filter: string;
  @Input() rarity: string;

  @Output() addCard: EventEmitter<Card> = new EventEmitter();

  length: number;

  ngOnChanges({cards}: any): void {
    if (cards && cards.previousValue) {
      this.length = (cards as SimpleChange).currentValue.length;
    }
  }

  cardClick(card: Card): void {
    this.addCard.emit(card);
  }

  onLoaded(): void {
    this.length -= 1;
  }
}
