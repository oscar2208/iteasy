import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSerivicioPageRoutingModule } from './add-serivicio-routing.module';

import { AddSerivicioPage } from './add-serivicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSerivicioPageRoutingModule
  ],
  declarations: [AddSerivicioPage]
})
export class AddSerivicioPageModule {}
