/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { CheckpointService } from './services/checkpoint.service';
import { ConcertService } from './services/concert.service';
import { ConcertLocationService } from './services/concert-location.service';
import { LocalizationsService } from './services/localizations.service';
import { LoginService } from './services/login.service';
import { MoodsService } from './services/moods.service';
import { RankingService } from './services/ranking.service';
import { TeamService } from './services/team.service';
import { TeamCheckpointService } from './services/team-checkpoint.service';
import { TeamMembersService } from './services/team-members.service';
import { TeamsService } from './services/teams.service';
import { TestService } from './services/test.service';
import { UserService } from './services/user.service';
import { UserConcertService } from './services/user-concert.service';
import { UserRolesService } from './services/user-roles.service';
import { UsersService } from './services/users.service';
import { UserValidatedCheckPointService } from './services/user-validated-check-point.service';
import { ValuesService } from './services/values.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    CheckpointService,
    ConcertService,
    ConcertLocationService,
    LocalizationsService,
    LoginService,
    MoodsService,
    RankingService,
    TeamService,
    TeamCheckpointService,
    TeamMembersService,
    TeamsService,
    TestService,
    UserService,
    UserConcertService,
    UserRolesService,
    UsersService,
    UserValidatedCheckPointService,
    ValuesService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
