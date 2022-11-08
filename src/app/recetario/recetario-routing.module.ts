import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetarioPage } from './recetario.page';

const routes: Routes = [
  {
    path: '',
    component: RecetarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetarioPageRoutingModule {}
