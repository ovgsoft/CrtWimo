import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { RegisterComponent } from '../login/register.component';
import { VentasComponent } from '../components/ventas/ventas.component';



const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DasboardComponent, data: { titulo: 'Dashboard' } },
      { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
      { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
      { path: 'vista1', component: RegisterComponent, data: { titulo: 'Registro' } },
      { path: 'vista2', component: VentasComponent, data: { titulo: 'Ventas' } },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
