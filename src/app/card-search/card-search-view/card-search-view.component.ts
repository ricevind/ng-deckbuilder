import { Component, OnInit } from '@angular/core';
import { HsApiService } from '../hs-api.service';
import { Observable } from 'rxjs/Observable';
import { Card } from '../card';

@Component({
  selector: 'app-card-search-view',
  templateUrl: './card-search-view.component.html',
  styleUrls: ['./card-search-view.component.scss']
})
export class CardSearchViewComponent implements OnInit {
  public card: Card;

  constructor(private hsApi: HsApiService) {
    this.hsApi.getCardByName('Ysera').subscribe(r => {this.card = r; });

  }

  ngOnInit() {
  }

}
