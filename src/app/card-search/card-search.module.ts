import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardSearchRoutingModule } from './card-search-routing.module';
import { HsApiService } from './hs-api.service';
import { CardSearchViewComponent } from './card-search-view/card-search-view.component';
import { SharedModule } from '../shared/shared.module';
import { CardSearchFormComponent } from './card-search-form/card-search-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardSearchRoutingModule,
    SharedModule
  ],
  declarations: [
    CardSearchViewComponent,
    CardSearchFormComponent,
  ],
  exports: [
    CardSearchViewComponent,
  ],
  providers: [
    HsApiService,
  ]
})
export class CardSearchModule { }
