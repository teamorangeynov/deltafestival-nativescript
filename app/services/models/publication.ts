/* tslint:disable */
import { User } from './user';
export interface Publication {
  id?: number;
  userId?: number;
  user?: User;
  file?: string;
  date?: string;
  message?: string;
  like?: boolean;
  hashtag?: string;
}
