import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DatabaseService } from '../shared/services/database.service';
import { Deck } from '../shared/models/deck';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/delay';

@Injectable()
export class DeckResolve implements Resolve<Deck> {

  constructor(
    private db: DatabaseService
  ) {}

  resolve(): any {
    console.log(this.db.retriveDeck());
    return this.db.retriveDeck().delay(400).first();
  }

}
