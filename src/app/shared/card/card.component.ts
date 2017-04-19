import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  public image: HTMLImageElement;
  public isLoaded = false;

  constructor() { }

  ngOnInit() {
    this.image = new Image(300, 480);
    this.image.src = this.card.img;
    // this.image.onload = () => setTimeout(() => this.isLoaded = true, 5000 );
    this.image.onload = () => this.isLoaded = true;

  }

}
