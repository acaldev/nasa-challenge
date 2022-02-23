import { Component, Input } from '@angular/core';
import { RoverPhoto } from '../../..';

@Component({
  selector: 'app-rover-photo',
  templateUrl: './rover-photo.component.html',
  styleUrls: ['./rover-photo.component.scss']
})
export class RoverPhotoComponent {
  @Input() photo: RoverPhoto;
}
