import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardSearchRoutingModule } from './card-search-routing.module';
import { HsApiService } from './hs-api.service';
import { CardSearchViewComponent } from './card-search-view/card-search-view.component';

@NgModule({
  imports: [
    CommonModule,
    CardSearchRoutingModule
  ],
  declarations: [
    CardSearchViewComponent
  ],
  exports: [
    CardSearchViewComponent,
  ],
  providers: [
    HsApiService,
  ]
})
export class CardSearchModule { }
