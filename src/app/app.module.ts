import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { CardSearchModule } from './card-search/card-search.module';
import { DeckModule } from './deck/deck.module';

import { AppComponent } from './app.component';
import { InfoService } from './info.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CardSearchModule,
    DeckModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
