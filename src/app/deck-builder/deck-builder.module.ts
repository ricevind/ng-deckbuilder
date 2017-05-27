import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckBuilderComponent } from './deck-builder.component';
import { CardSearchModule } from '../card-search/card-search.module';
import { DeckModule } from '../deck/deck.module';

@NgModule({
  imports: [
    CommonModule,
    CardSearchModule,
    DeckModule,
  ],
  declarations: [
    DeckBuilderComponent,
  ],
  exports: [
    DeckBuilderComponent
  ]
})
export class DeckBuilderModule { }
