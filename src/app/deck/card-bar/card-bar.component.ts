import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Card } from '../../shared/models/card';

@Component({
  selector: 'card-bar',
  templateUrl: './card-bar.component.html',
  styleUrls: ['./card-bar.component.scss']
})
export class CardBarComponent implements OnInit {
  @Input() card: Card;
  @Input() cardCount: string;
  @Output() removeCard = new EventEmitter<Card>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.removeCard.emit(this.card);
  }
}
