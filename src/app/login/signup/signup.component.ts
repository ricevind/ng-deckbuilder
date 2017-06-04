import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public email: any;
  public password: any;
  public passwordCopy: any;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  onClick() {
    if (this.email && this.password && this.password === this.passwordCopy) {
      this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then(() => alert('konto utworzone, zaloguj się w /login'))
      .catch((e) => {
        alert('coś poszło nie tak upss...');
      }) ;
      return;
    }
    alert('passwor dont match or no email provided');
  }

}
