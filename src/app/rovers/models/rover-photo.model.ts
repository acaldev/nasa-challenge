import { Camera } from './camera.model';
import { Rover } from './rover.model';

export interface RoverPhoto {
  camera: Camera;
  earth_date: string;
  id: number;
  img_src: string;
  rover: Rover;
  sol: number;
}
