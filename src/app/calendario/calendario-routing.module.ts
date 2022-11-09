import { NgModule, OnInit, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent, NgCalendarModule } from 'ionic2-calendar';
import { CalendarioPageModule } from './calendario.module';

import { CalendarioPage } from './calendario.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioPageRoutingModule {}
