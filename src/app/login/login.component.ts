import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Error} from 'firebase/auth';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: any;
  public password: any;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClick() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(() => this.router.navigateByUrl('/build-deck'))
      .catch((err: Error) => {
        if (err.code === 'auth/wrong-password') {
          alert('wrong password try again');
          return;
        }
        if (err.code === 'auth/user-not-found') {
          this.router.navigateByUrl('/signup');
        }
      });
  }

}
