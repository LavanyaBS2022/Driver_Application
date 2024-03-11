import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderDetailsPagePageRoutingModule } from './order-details-page-routing.module';

import { OrderDetailsPagePage } from './order-details-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderDetailsPagePageRoutingModule,
  ],
  declarations: [OrderDetailsPagePage]
})
export class OrderDetailsPagePageModule {}
