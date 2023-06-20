import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicioPageRoutingModule } from './servicio-routing.module';

import { ServicioPage } from './servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ServicioPage]
})
export class ServicioPageModule {}
