import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardCharacterComponent } from 'src/app/components/card-character/card-character.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LocationDetailsComponent } from 'src/app/components/location-details/location-details.component';
import { CharacterDetailsComponent } from 'src/app/components/character-details/character-details.component';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';


@NgModule({
  declarations: [
    HomepageComponent,
    CardCharacterComponent,
    LocationDetailsComponent,
    CharacterDetailsComponent
  ],
  entryComponents:[LocationDetailsComponent, CharacterDetailsComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule,
    MatPaginatorModule,
    MatDialogModule,
  ]
})
export class HomepageModule { }
