import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestLoginPageRoutingModule } from './request-login-routing.module';

import { RequestLoginPage } from './request-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestLoginPageRoutingModule
  ],
  declarations: [RequestLoginPage]
})
export class RequestLoginPageModule {}
