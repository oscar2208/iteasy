import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowServicePageRoutingModule } from './show-service-routing.module';

import { ShowServicePage } from './show-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowServicePageRoutingModule
  ],
  declarations: [ShowServicePage]
})
export class ShowServicePageModule {}
