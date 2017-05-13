import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-bar',
  templateUrl: './card-bar.component.html',
  styleUrls: ['./card-bar.component.scss']
})
export class CardBarComponent implements OnInit {
  @Input() cardName: string;
  @Input() cardCost: string;
  @Input() cardCount: string;

  constructor() { }

  ngOnInit() {
  }

}
