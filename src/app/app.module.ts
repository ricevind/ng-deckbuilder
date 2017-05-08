import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardSearchModule } from './card-search/card-search.module';
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
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
