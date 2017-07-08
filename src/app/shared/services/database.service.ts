import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from '../models/user';
import { Deck } from '../models/deck';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class DatabaseService {
  private userDeck: FirebaseObjectObservable<Deck>;
  private resolveDeck: Observable<Deck>;

  constructor (
    private fb: AngularFireDatabase,
    private fbAuth: AngularFireAuth
  ) {
   this.fbAuth.authState.subscribe((user: firebase.User) => {
      this.userDeck = this.fb.object(`users/${user.uid}/deck`);
    });
  }

  saveDeck(deck: Deck): Observable<any> {
      return Observable.of(this.userDeck.set({
        cards: deck.cards,
        name: deck.name
      }));
  }

  retriveDeck(): Observable<Deck> {
    this.resolveDeck = this.fbAuth.authState.switchMap((user: firebase.User) => {
      return this.fb.object(`users/${user.uid}/deck`);
    });
    return this.resolveDeck as Observable<Deck>;
  }

}
