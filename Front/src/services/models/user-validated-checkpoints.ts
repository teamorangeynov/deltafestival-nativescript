/* tslint:disable */
import { User } from './user';
import { Checkpoint } from './checkpoint';
import { Team } from './team';
export interface UserValidatedCheckpoints {
  id?: number;
  user?: User;
  userId?: number;
  checkpoint?: Checkpoint;
  checkpointId?: number;
  timeChecked?: string;
  team?: Team;
  teamId?: number;
}
