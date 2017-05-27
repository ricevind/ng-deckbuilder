import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckComponent } from './deck/deck.component';
import { CardBarComponent } from './card-bar/card-bar.component';
import { DeckService } from './deck.service';
import { DeckResolve } from './deck.resolve';
import { RarityDirective } from './card-bar/rarity.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    DeckComponent,
    CardBarComponent,
    RarityDirective
  ],
  exports: [
    DeckComponent
  ],
  providers: [
    DeckService,
    DeckResolve
  ],
})
export class DeckModule { }
