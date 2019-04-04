"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var material_1 = require("@angular/material");
var table_1 = require("@angular/material/table");
var app_component_1 = require("./app.component");
var home_component_1 = require("../app/pages/home/home.component");
var authentification_component_1 = require("../app/pages/authentification/authentification.component");
var ngx_scanner_1 = require("@zxing/ngx-scanner");
var ng2_qrcode_reader_1 = require("ng2-qrcode-reader");
var ranking_component_1 = require("../app/pages/ranking/ranking.component");
var api_module_1 = require("../services/api.module");
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';
// import { NativeScriptHttpModule } from 'nativescript-angular/http';
// import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
// import { NativeScriptRouterModule } from 'nativescript-angular/router';
// import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                authentification_component_1.AuthentificationComponent,
                ranking_component_1.RankingComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                ng2_qrcode_reader_1.NgQRCodeReaderModule,
                forms_1.FormsModule,
                material_1.MatInputModule,
                ngx_scanner_1.ZXingScannerModule,
                table_1.MatTableModule,
                api_module_1.ApiModule,
            ],
            providers: [
                { provide: 'https://localhost:44398', useValue: 'https://localhost:44398' }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4REFBMEQ7QUFDMUQsc0NBQXlDO0FBQ3pDLHdDQUE2QztBQUM3QywyREFBd0Q7QUFDeEQsOENBQW1EO0FBQ25ELGlEQUF5RDtBQUV6RCxpREFBK0M7QUFDL0MsbUVBQWlFO0FBQ2pFLHVHQUFxRztBQUVyRyxrREFBd0Q7QUFDeEQsdURBQXlEO0FBQ3pELDRFQUEwRTtBQUkxRSxxREFBbUQ7QUFFbkQsd0VBQXdFO0FBQ3hFLHNFQUFzRTtBQUN0RSxpRkFBaUY7QUFDakYsMEVBQTBFO0FBQzFFLG1GQUFtRjtBQTJCbkY7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQTFCckIsZUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLHNEQUF5QjtnQkFDekIsb0NBQWdCO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGdDQUFhO2dCQUNiLHFDQUFnQjtnQkFDaEIsd0NBQW9CO2dCQUNwQixtQkFBVztnQkFDWCx5QkFBYztnQkFDZCxnQ0FBa0I7Z0JBQ2xCLHNCQUFjO2dCQUNkLHNCQUFTO2FBS1Y7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsUUFBUSxFQUFFLHlCQUF5QixFQUFFO2FBQzVFO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4uL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXV0aGVudGlmaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL2FwcC9wYWdlcy9hdXRoZW50aWZpY2F0aW9uL2F1dGhlbnRpZmljYXRpb24uY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IFpYaW5nU2Nhbm5lck1vZHVsZSB9IGZyb20gJ0B6eGluZy9uZ3gtc2Nhbm5lcic7XHJcbmltcG9ydCB7IE5nUVJDb2RlUmVhZGVyTW9kdWxlIH0gZnJvbSAnbmcyLXFyY29kZS1yZWFkZXInO1xyXG5pbXBvcnQgeyBSYW5raW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vYXBwL3BhZ2VzL3JhbmtpbmcvcmFua2luZy5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5cclxuaW1wb3J0IHsgQXBpTW9kdWxlIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpLm1vZHVsZSc7XHJcblxyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAnO1xyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyJztcclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFwcENvbXBvbmVudCxcclxuICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICBBdXRoZW50aWZpY2F0aW9uQ29tcG9uZW50LFxyXG4gICAgUmFua2luZ0NvbXBvbmVudCxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgTmdRUkNvZGVSZWFkZXJNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgWlhpbmdTY2FubmVyTW9kdWxlLFxyXG4gICAgTWF0VGFibGVNb2R1bGUsXHJcbiAgICBBcGlNb2R1bGUsXHJcbiAgICAvLyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgIC8vIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXHJcbiAgICAvLyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgICAvLyBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHsgcHJvdmlkZTogJ2h0dHBzOi8vbG9jYWxob3N0OjQ0Mzk4JywgdXNlVmFsdWU6ICdodHRwczovL2xvY2FsaG9zdDo0NDM5OCcgfVxyXG4gIF0sXHJcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=