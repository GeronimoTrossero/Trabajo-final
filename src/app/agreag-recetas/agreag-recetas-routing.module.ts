import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgreagRecetasPage } from './agreag-recetas.page';

const routes: Routes = [
  {
    path: '',
    component: AgreagRecetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgreagRecetasPageRoutingModule {}
