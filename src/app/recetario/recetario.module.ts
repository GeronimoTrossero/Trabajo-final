import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetarioPageRoutingModule } from './recetario-routing.module';

import { RecetarioPage } from './recetario.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RecetarioPageRoutingModule
  ],
  declarations: [RecetarioPage]
})
export class RecetarioPageModule {}
