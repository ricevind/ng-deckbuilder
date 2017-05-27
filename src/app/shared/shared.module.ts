import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { DatabaseService } from './services/database.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoaderComponent } from './loader/loader.component';
import { MdProgressBarModule, MdProgressSpinnerModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardsImageService } from './services/cards-image.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFireDatabaseModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  declarations: [
    CardComponent,
    LoaderComponent,
  ],
  exports: [
    CardComponent,
    LoaderComponent,
  ],
  providers: [
    DatabaseService,
    CardsImageService
  ],
  entryComponents: [
    CardComponent
  ]

})
export class SharedModule { }
