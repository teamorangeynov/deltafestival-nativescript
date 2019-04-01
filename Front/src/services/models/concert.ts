/* tslint:disable */
import { ConcertLocation } from './concert-location';
export interface Concert {
  id?: number;
  artist?: string;
  hour?: string;
  concertLocation?: ConcertLocation;
  concertLocationId?: number;
}
