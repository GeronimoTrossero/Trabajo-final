import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetarioPageRoutingModule } from './recetario-routing.module';

import { RecetarioPage } from './recetario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetarioPageRoutingModule
  ],
  declarations: [RecetarioPage]
})
export class RecetarioPageModule {}
