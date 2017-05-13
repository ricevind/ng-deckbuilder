import { Component, OnInit, Input, OnDestroy, ViewChild, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() card: Card;
  @Output() sendCard = new EventEmitter();
  @ViewChild('#card') cardElement;

  public image: HTMLImageElement;
  public isLoaded = false;

  constructor() { }

  ngOnInit() {
    this.image = new Image(150, 240);
    this.image.src = this.card.img;
    // this.image.onload = () => setTimeout(() => this.isLoaded = true, 5000 );
    this.image.onload = () => this.isLoaded = true;
  }

  ngOnDestroy() {
    this.image.src = '';
  }

  onClick(): void {
    this.sendCard.emit(this.card);
  }

}
