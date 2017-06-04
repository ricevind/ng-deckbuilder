import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {

  constructor(
    private auth: AngularFireAuth, private router: Router
    ) { }

  canActivate(): Observable<boolean> {
    return this.auth.authState
      .take(1)
      .map((state: firebase.User) => !!state)
      .do(authenticated => {
        if (!authenticated) {
          this.router.navigateByUrl('/login');
        }
      });
  }
}
