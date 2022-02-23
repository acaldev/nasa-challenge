import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoversComponent } from './rovers.component';

const routes: Routes = [
  {
    path: '',
    component: RoversComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoversRoutingModule {}
