"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var api_configuration_1 = require("./api-configuration");
var checkpoint_service_1 = require("./services/checkpoint.service");
var concert_service_1 = require("./services/concert.service");
var concert_location_service_1 = require("./services/concert-location.service");
var localizations_service_1 = require("./services/localizations.service");
var login_service_1 = require("./services/login.service");
var moods_service_1 = require("./services/moods.service");
var ranking_service_1 = require("./services/ranking.service");
var team_service_1 = require("./services/team.service");
var team_checkpoint_service_1 = require("./services/team-checkpoint.service");
var team_members_service_1 = require("./services/team-members.service");
var teams_service_1 = require("./services/teams.service");
var test_service_1 = require("./services/test.service");
var user_service_1 = require("./services/user.service");
var user_concert_service_1 = require("./services/user-concert.service");
var user_roles_service_1 = require("./services/user-roles.service");
var users_service_1 = require("./services/users.service");
var user_validated_check_point_service_1 = require("./services/user-validated-check-point.service");
var values_service_1 = require("./services/values.service");
/**
 * Provider for all Api services, plus ApiConfiguration
 */
var ApiModule = /** @class */ (function () {
    function ApiModule() {
    }
    ApiModule_1 = ApiModule;
    ApiModule.forRoot = function (customParams) {
        return {
            ngModule: ApiModule_1,
            providers: [
                {
                    provide: api_configuration_1.ApiConfiguration,
                    useValue: { rootUrl: customParams.rootUrl }
                }
            ]
        };
    };
    var ApiModule_1;
    ApiModule = ApiModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                http_1.HttpClientModule
            ],
            exports: [
                http_1.HttpClientModule
            ],
            declarations: [],
            providers: [
                api_configuration_1.ApiConfiguration,
                checkpoint_service_1.CheckpointService,
                concert_service_1.ConcertService,
                concert_location_service_1.ConcertLocationService,
                localizations_service_1.LocalizationsService,
                login_service_1.LoginService,
                moods_service_1.MoodsService,
                ranking_service_1.RankingService,
                team_service_1.TeamService,
                team_checkpoint_service_1.TeamCheckpointService,
                team_members_service_1.TeamMembersService,
                teams_service_1.TeamsService,
                test_service_1.TestService,
                user_service_1.UserService,
                user_concert_service_1.UserConcertService,
                user_roles_service_1.UserRolesService,
                users_service_1.UsersService,
                user_validated_check_point_service_1.UserValidatedCheckPointService,
                values_service_1.ValuesService
            ],
        })
    ], ApiModule);
    return ApiModule;
}());
exports.ApiModule = ApiModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwaS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQkFBb0I7QUFDcEIsc0NBQThEO0FBQzlELDZDQUF3RDtBQUN4RCx5REFBa0Y7QUFFbEYsb0VBQWtFO0FBQ2xFLDhEQUE0RDtBQUM1RCxnRkFBNkU7QUFDN0UsMEVBQXdFO0FBQ3hFLDBEQUF3RDtBQUN4RCwwREFBd0Q7QUFDeEQsOERBQTREO0FBQzVELHdEQUFzRDtBQUN0RCw4RUFBMkU7QUFDM0Usd0VBQXFFO0FBQ3JFLDBEQUF3RDtBQUN4RCx3REFBc0Q7QUFDdEQsd0RBQXNEO0FBQ3RELHdFQUFxRTtBQUNyRSxvRUFBaUU7QUFDakUsMERBQXdEO0FBQ3hELG9HQUErRjtBQUMvRiw0REFBMEQ7QUFFMUQ7O0dBRUc7QUErQkg7SUFBQTtJQVlBLENBQUM7a0JBWlksU0FBUztJQUNiLGlCQUFPLEdBQWQsVUFBZSxZQUF1QztRQUNwRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLFdBQVM7WUFDbkIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxvQ0FBZ0I7b0JBQ3pCLFFBQVEsRUFBRSxFQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsT0FBTyxFQUFDO2lCQUMxQzthQUNGO1NBQ0YsQ0FBQTtJQUNILENBQUM7O0lBWFUsU0FBUztRQTlCckIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHVCQUFnQjthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDUCx1QkFBZ0I7YUFDakI7WUFDRCxZQUFZLEVBQUUsRUFBRTtZQUNoQixTQUFTLEVBQUU7Z0JBQ1Qsb0NBQWdCO2dCQUNoQixzQ0FBaUI7Z0JBQ2pCLGdDQUFjO2dCQUNkLGlEQUFzQjtnQkFDdEIsNENBQW9CO2dCQUNwQiw0QkFBWTtnQkFDWiw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCwwQkFBVztnQkFDWCwrQ0FBcUI7Z0JBQ3JCLHlDQUFrQjtnQkFDbEIsNEJBQVk7Z0JBQ1osMEJBQVc7Z0JBQ1gsMEJBQVc7Z0JBQ1gseUNBQWtCO2dCQUNsQixxQ0FBZ0I7Z0JBQ2hCLDRCQUFZO2dCQUNaLG1FQUE4QjtnQkFDOUIsOEJBQWE7YUFDZDtTQUNGLENBQUM7T0FDVyxTQUFTLENBWXJCO0lBQUQsZ0JBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEFwaUNvbmZpZ3VyYXRpb24sIEFwaUNvbmZpZ3VyYXRpb25JbnRlcmZhY2UgfSBmcm9tICcuL2FwaS1jb25maWd1cmF0aW9uJztcclxuXHJcbmltcG9ydCB7IENoZWNrcG9pbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jaGVja3BvaW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25jZXJ0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29uY2VydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uY2VydExvY2F0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29uY2VydC1sb2NhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xvY2FsaXphdGlvbnMuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbG9naW4uc2VydmljZSc7XHJcbmltcG9ydCB7IE1vb2RzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbW9vZHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFJhbmtpbmdTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9yYW5raW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUZWFtU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdGVhbS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGVhbUNoZWNrcG9pbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy90ZWFtLWNoZWNrcG9pbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFRlYW1NZW1iZXJzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdGVhbS1tZW1iZXJzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUZWFtc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3RlYW1zLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUZXN0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdGVzdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJDb25jZXJ0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXNlci1jb25jZXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyUm9sZXNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy91c2VyLXJvbGVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3VzZXJzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyVmFsaWRhdGVkQ2hlY2tQb2ludFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3VzZXItdmFsaWRhdGVkLWNoZWNrLXBvaW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWYWx1ZXNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy92YWx1ZXMuc2VydmljZSc7XHJcblxyXG4vKipcclxuICogUHJvdmlkZXIgZm9yIGFsbCBBcGkgc2VydmljZXMsIHBsdXMgQXBpQ29uZmlndXJhdGlvblxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQXBpQ29uZmlndXJhdGlvbixcclxuICAgIENoZWNrcG9pbnRTZXJ2aWNlLFxyXG4gICAgQ29uY2VydFNlcnZpY2UsXHJcbiAgICBDb25jZXJ0TG9jYXRpb25TZXJ2aWNlLFxyXG4gICAgTG9jYWxpemF0aW9uc1NlcnZpY2UsXHJcbiAgICBMb2dpblNlcnZpY2UsXHJcbiAgICBNb29kc1NlcnZpY2UsXHJcbiAgICBSYW5raW5nU2VydmljZSxcclxuICAgIFRlYW1TZXJ2aWNlLFxyXG4gICAgVGVhbUNoZWNrcG9pbnRTZXJ2aWNlLFxyXG4gICAgVGVhbU1lbWJlcnNTZXJ2aWNlLFxyXG4gICAgVGVhbXNTZXJ2aWNlLFxyXG4gICAgVGVzdFNlcnZpY2UsXHJcbiAgICBVc2VyU2VydmljZSxcclxuICAgIFVzZXJDb25jZXJ0U2VydmljZSxcclxuICAgIFVzZXJSb2xlc1NlcnZpY2UsXHJcbiAgICBVc2Vyc1NlcnZpY2UsXHJcbiAgICBVc2VyVmFsaWRhdGVkQ2hlY2tQb2ludFNlcnZpY2UsXHJcbiAgICBWYWx1ZXNTZXJ2aWNlXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwaU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoY3VzdG9tUGFyYW1zOiBBcGlDb25maWd1cmF0aW9uSW50ZXJmYWNlKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQXBpTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBBcGlDb25maWd1cmF0aW9uLFxyXG4gICAgICAgICAgdXNlVmFsdWU6IHtyb290VXJsOiBjdXN0b21QYXJhbXMucm9vdFVybH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19