import { Component } from '@angular/core';
import { staticData } from '../data';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-code-validation',
  templateUrl: './code-validation.page.html',
  styleUrls: ['./code-validation.page.scss'],
})
export class CodeValidationPage {
  enteredCode: string = '';

  constructor(private navCtrl: NavController) {}

  checkCode() {
    if (staticData[this.enteredCode]) {
      this.navCtrl.navigateForward('/order-details', {
        queryParams: { orderData: JSON.stringify(staticData[this.enteredCode]) }
      });
    } else {
      console.log('Wrong code entered');
    }
  }

}
