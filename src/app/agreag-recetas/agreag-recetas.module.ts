import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgreagRecetasPageRoutingModule } from './agreag-recetas-routing.module';

import { AgreagRecetasPage } from './agreag-recetas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgreagRecetasPageRoutingModule
  ],
  declarations: [AgreagRecetasPage]
})
export class AgreagRecetasPageModule {}
