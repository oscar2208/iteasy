import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowServicePage } from './show-service.page';

const routes: Routes = [
  {
    path: '',
    component: ShowServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowServicePageRoutingModule {}
