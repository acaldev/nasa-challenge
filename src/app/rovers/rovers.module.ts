import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoverPhotoComponent, RoverPhotoListComponent } from './components';
import { RoversRoutingModule } from './rovers-routing.module';
import { RoversComponent } from './rovers.component';
import { NasaService } from './services';
import { RoverSelectComponent } from './components/rover-photo-list/rover-select/rover-select.component';

@NgModule({
  declarations: [RoverPhotoComponent, RoversComponent, RoverPhotoListComponent, RoverSelectComponent],
  imports: [
    CommonModule,
    RoversRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [NasaService]
})
export class RoversModule {}
