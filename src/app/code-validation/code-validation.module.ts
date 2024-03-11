import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeValidationPageRoutingModule } from './code-validation-routing.module';

import { CodeValidationPage } from './code-validation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodeValidationPageRoutingModule
  ],
  declarations: [CodeValidationPage]
})
export class CodeValidationPageModule {}
