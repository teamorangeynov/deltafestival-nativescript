/* tslint:disable */
import { UserRole } from './user-role';
import { Mood } from './mood';
import { Publication } from './publication';
export interface User {
  id?: number;
  pseudo?: string;
  userRoleId?: number;
  role?: UserRole;
  moodId?: number;
  actualMood?: Mood;
  publications?: Array<Publication>;
  ticketCode?: string;
  canPublish?: boolean;
  demission?: number;
  isActive?: boolean;
}
