import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InfoService } from './info.service';
import { DeckBuilderModule } from './deck-builder/deck-builder.module';
import { NavComponent } from './nav/nav.component';
import { LoginModule } from './login/login.module';
import { AngularFireModule } from 'angularfire2/angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { MdIconModule, MdButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule,
    DeckBuilderModule,
    LoginModule,
    SharedModule,
    MdIconModule,
    MdButtonModule

  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
