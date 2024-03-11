import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeValidationPage } from './code-validation.page';

const routes: Routes = [
  {
    path: '',
    component: CodeValidationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeValidationPageRoutingModule {}
