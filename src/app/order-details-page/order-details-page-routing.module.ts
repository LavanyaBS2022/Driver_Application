import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderDetailsPagePage } from './order-details-page.page';

const routes: Routes = [
  {
    path: '',
    component: OrderDetailsPagePage
  },
  {
    path: 'map-modal',
    loadChildren: () => import('./map-modal/map-modal.module').then( m => m.MapModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderDetailsPagePageRoutingModule {}
