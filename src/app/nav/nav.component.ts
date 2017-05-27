import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public isLogged: any;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(state => this.isLogged = state);
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigateByUrl('/login');
    });
  }

}
