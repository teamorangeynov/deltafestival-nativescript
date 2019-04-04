/* tslint:disable */
import { Team } from './team';
import { Checkpoint } from './checkpoint';
export interface TeamCheckpoints {
  id?: number;
  team?: Team;
  teamId?: number;
  checkpoint?: Checkpoint;
  checkpointId?: number;
  timeChecked?: string;
}
