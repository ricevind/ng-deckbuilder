import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() card: Card;
  @ViewChild('#card') cardElement;
  public image: HTMLImageElement;
  public isLoaded = false;

  constructor() { }

  ngOnInit() {
    this.image = new Image(150, 240);
    this.image.src = this.card.img.slice(4);
    // this.image.onload = () => setTimeout(() => this.isLoaded = true, 5000 );
    this.image.onload = () => this.isLoaded = true;
  }

  ngOnDestroy() {
    this.image.src = '';
  }

}
