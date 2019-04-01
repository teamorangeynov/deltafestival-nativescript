/* tslint:disable */
import { User } from './user';
import { Zone } from './zone';
export interface Localization {
  id?: string;
  longitude?: number;
  latitude?: number;
  emitTime?: string;
  userId?: number;
  user?: User;
  userTeamId?: number;
  zoneId?: number;
  zone?: Zone;
}
