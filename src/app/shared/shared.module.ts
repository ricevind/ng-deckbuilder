import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { DeckService } from './deck.service';
import { CardImageDirective } from './card-image.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    CardImageDirective
  ],
  exports: [
    CardComponent,
  ],
  providers: [
    DeckService
  ]
})
export class SharedModule { }
