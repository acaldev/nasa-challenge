import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RoverPhoto } from '../../models';
import { NasaService } from '../../services';

@Component({
  selector: 'app-rover-photo-list',
  templateUrl: './rover-photo-list.component.html',
  styleUrls: ['./rover-photo-list.component.scss']
})
export class RoverPhotoListComponent implements OnInit, OnDestroy {
  roversSubscription: Subscription;
  photos: RoverPhoto[];

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  ngOnDestroy(): void {
    this.roversSubscription?.unsubscribe();
  }

  getPhotos(rover: string = undefined): void {
    const selected: string = rover ? rover : 'curiosity';
    this.roversSubscription = this.nasaService.getRovers(selected).subscribe(
      ({ photos }) => {
        this.photos = photos;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  select(rover: string): void {
    this.getPhotos(rover);
  }
}
