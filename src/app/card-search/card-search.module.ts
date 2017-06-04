import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardSearchRoutingModule } from './card-search-routing.module';
import { HsApiService } from './hs-api.service';
import { CardSearchViewComponent } from './card-search-view/card-search-view.component';
import { SharedModule } from '../shared/shared.module';
import { CardSearchFormComponent } from './card-search-form/card-search-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardSearchComponent } from './card-search.component';
import { CardFilterPipe } from './card-search-filter.pipe';
import { CardRarityPipe } from './card-search-rarity.pipe';
import { MdProgressSpinnerModule, MdSelectModule, MdInputModule, MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardSearchRoutingModule,
    SharedModule,
    MdProgressSpinnerModule,
    MdSelectModule,
    MdButtonModule,
    MdInputModule
  ],
  declarations: [
    CardSearchViewComponent,
    CardSearchFormComponent,
    CardSearchComponent,
    CardFilterPipe,
    CardRarityPipe
  ],
  exports: [
    CardSearchComponent
  ],
  providers: [
    HsApiService,
  ]
})
export class CardSearchModule { }
