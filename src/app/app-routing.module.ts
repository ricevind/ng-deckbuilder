import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DeckBuilderComponent } from './deck-builder/deck-builder.component';
import { AuthService } from './login/auth.service';
import { SignupComponent } from './login/signup/signup.component';
import { DeckResolve } from './deck/deck.resolve';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'build-deck',
    component: DeckBuilderComponent,
    canActivate: [AuthService],
    resolve: {
      deck: DeckResolve
      }
    },
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
