import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckComponent } from './deck/deck.component';
import { CardBarComponent } from './card-bar/card-bar.component';
import { DeckService } from './deck.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DeckComponent,
    CardBarComponent
  ],
  exports: [
    DeckComponent
  ],
  providers: [
    DeckService
  ]
})
export class DeckModule { }
