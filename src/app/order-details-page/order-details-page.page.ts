import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MapModalPage } from './map-modal/map-modal.page';

@Component({
  selector: 'app-order-details-page',
  templateUrl: './order-details-page.page.html',
  styleUrls: ['./order-details-page.page.scss'],
})
export class OrderDetailsPagePage {
  orderData: any;

  constructor(private route: ActivatedRoute, private modalController: ModalController) { }

  openMap(customer: any) {
    this.modalController.create({
      component: MapModalPage,
      componentProps: { customer },
      cssClass: 'map-modal'
    }).then(modal => {
      modal.present();
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const orderDataString = params['orderData'];
      if (orderDataString) {
        try {
          this.orderData = JSON.parse(orderDataString);
        } catch (error) {
          console.error('Error parsing order data:', error);
        }
      } else {
        console.error('Order data is missing.');
      }
    });
  }
}
