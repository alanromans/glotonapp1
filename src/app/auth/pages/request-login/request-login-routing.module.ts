import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestLoginPage } from './request-login.page';

const routes: Routes = [
  {
    path: '',
    component: RequestLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestLoginPageRoutingModule {}
