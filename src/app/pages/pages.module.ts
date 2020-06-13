import { NgModule } from '@angular/core';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
  declarations: [
    DasboardComponent,
    PagesComponent,
    ProgressComponent,
    Graficas1Component
  ],
  exports: [
    DasboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ]
})

export class PagesModule { }