/* tslint:disable */
import { Role } from './role';
import { Mood } from './mood';
import { Publication } from './publication';
import { Crush } from './crush';
import { Ignored } from './ignored';
export interface User {
  id?: number;
  ticketCode?: string;
  roleId?: number;
  role?: Role;
  moodId?: number;
  actualMood?: Mood;
  publications?: Array<Publication>;
  crushes?: Array<Crush>;
  ignoredPeople?: Array<Ignored>;
  token?: string;
}
