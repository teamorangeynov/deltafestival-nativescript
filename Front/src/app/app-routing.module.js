"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("../app/pages/home/home.component");
var authentification_component_1 = require("../app/pages/authentification/authentification.component");
var ranking_component_1 = require("./pages/ranking/ranking.component");
var routes = [
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path: 'accueil', component: home_component_1.HomeComponent },
    { path: 'connexion', component: authentification_component_1.AuthentificationComponent },
    { path: 'classement', component: ranking_component_1.RankingComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUF1RDtBQUN2RCxtRUFBaUU7QUFDakUsdUdBQXFHO0FBQ3JHLHVFQUFxRTtBQUVyRSxJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUM3QyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHNEQUF5QixFQUFFO0lBQzNELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7Q0FDcEQsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkMsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztTQUN4QixDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4uL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXV0aGVudGlmaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL2FwcC9wYWdlcy9hdXRoZW50aWZpY2F0aW9uL2F1dGhlbnRpZmljYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmFua2luZ0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcmFua2luZy9yYW5raW5nLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2FjY3VlaWwnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gIHsgcGF0aDogJ2FjY3VlaWwnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdjb25uZXhpb24nLCBjb21wb25lbnQ6IEF1dGhlbnRpZmljYXRpb25Db21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdjbGFzc2VtZW50JywgY29tcG9uZW50OiBSYW5raW5nQ29tcG9uZW50IH0sXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cclxuIl19