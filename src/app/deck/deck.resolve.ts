import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DatabaseService } from '../shared/services/database.service';
import { Deck } from '../shared/models/deck';
import 'rxjs/add/operator/first';

@Injectable()
export class DeckResolve implements Resolve<Deck> {

  constructor(
    private db: DatabaseService
  ) {}

  resolve(): any {
    return this.db.retriveDeck().first();
  }
}
