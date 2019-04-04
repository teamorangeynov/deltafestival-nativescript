"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var base_service_1 = require("../base-service");
var api_configuration_1 = require("../api-configuration");
var operators_1 = require("rxjs/operators");
var ConcertLocationService = /** @class */ (function (_super) {
    __extends(ConcertLocationService, _super);
    function ConcertLocationService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @return Success
     */
    ConcertLocationService.prototype.GetConcertLocationsItemsResponse = function () {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + "/api/ConcertLocation", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(operators_1.filter(function (_r) { return _r instanceof http_1.HttpResponse; }), operators_1.map(function (_r) {
            return _r;
        }));
    };
    /**
     * @return Success
     */
    ConcertLocationService.prototype.GetConcertLocationsItems = function () {
        return this.GetConcertLocationsItemsResponse().pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param item undefined
     * @return Success
     */
    ConcertLocationService.prototype.PostConcertLocationItemResponse = function (item) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        __body = item;
        var req = new http_1.HttpRequest('POST', this.rootUrl + "/api/ConcertLocation", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(operators_1.filter(function (_r) { return _r instanceof http_1.HttpResponse; }), operators_1.map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param item undefined
     * @return Success
     */
    ConcertLocationService.prototype.PostConcertLocationItem = function (item) {
        return this.PostConcertLocationItemResponse(item).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param id undefined
     * @return Success
     */
    ConcertLocationService.prototype.GetConcertLocationItemResponse = function (id) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + ("/api/ConcertLocation/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(operators_1.filter(function (_r) { return _r instanceof http_1.HttpResponse; }), operators_1.map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param id undefined
     * @return Success
     */
    ConcertLocationService.prototype.GetConcertLocationItem = function (id) {
        return this.GetConcertLocationItemResponse(id).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `ConcertLocationService.PutConcertLocationItemParams` containing the following parameters:
     *
     * - `id`:
     *
     * - `item`:
     */
    ConcertLocationService.prototype.PutConcertLocationItemResponse = function (params) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        __body = params.item;
        var req = new http_1.HttpRequest('PUT', this.rootUrl + ("/api/ConcertLocation/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(operators_1.filter(function (_r) { return _r instanceof http_1.HttpResponse; }), operators_1.map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `ConcertLocationService.PutConcertLocationItemParams` containing the following parameters:
     *
     * - `id`:
     *
     * - `item`:
     */
    ConcertLocationService.prototype.PutConcertLocationItem = function (params) {
        return this.PutConcertLocationItemResponse(params).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param id undefined
     */
    ConcertLocationService.prototype.DeleteConcertLocationItemResponse = function (id) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('DELETE', this.rootUrl + ("/api/ConcertLocation/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(operators_1.filter(function (_r) { return _r instanceof http_1.HttpResponse; }), operators_1.map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param id undefined
     */
    ConcertLocationService.prototype.DeleteConcertLocationItem = function (id) {
        return this.DeleteConcertLocationItemResponse(id).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    ConcertLocationService.GetConcertLocationsItemsPath = '/api/ConcertLocation';
    ConcertLocationService.PostConcertLocationItemPath = '/api/ConcertLocation';
    ConcertLocationService.GetConcertLocationItemPath = '/api/ConcertLocation/{id}';
    ConcertLocationService.PutConcertLocationItemPath = '/api/ConcertLocation/{id}';
    ConcertLocationService.DeleteConcertLocationItemPath = '/api/ConcertLocation/{id}';
    ConcertLocationService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [api_configuration_1.ApiConfiguration,
            http_1.HttpClient])
    ], ConcertLocationService);
    return ConcertLocationService;
}(base_service_1.BaseService));
exports.ConcertLocationService = ConcertLocationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uY2VydC1sb2NhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uY2VydC1sb2NhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0JBQW9CO0FBQ3BCLHNDQUEyQztBQUMzQyw2Q0FBMEY7QUFDMUYsZ0RBQStEO0FBQy9ELDBEQUEyRTtBQUczRSw0Q0FBa0U7QUFNbEU7SUFBcUMsMENBQWE7SUFPaEQsZ0NBQ0UsTUFBdUIsRUFDdkIsSUFBZ0I7ZUFFaEIsa0JBQU0sTUFBTSxFQUFFLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxpRUFBZ0MsR0FBaEM7UUFDRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxrQkFBVyxFQUFFLENBQUM7UUFDbEMsSUFBSSxNQUFNLEdBQVEsSUFBSSxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLElBQUksa0JBQVcsQ0FDdkIsS0FBSyxFQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLEVBQ3JDLE1BQU0sRUFDTjtZQUNFLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLFlBQVksRUFBRSxNQUFNO1NBQ3JCLENBQUMsQ0FBQztRQUVMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNyQyxrQkFBUSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxZQUFZLG1CQUFZLEVBQTFCLENBQTBCLENBQUMsRUFDMUMsZUFBSyxDQUFDLFVBQUMsRUFBRTtZQUNQLE9BQU8sRUFBa0QsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUNEOztPQUVHO0lBQ0gseURBQXdCLEdBQXhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQyxJQUFJLENBQ2pELGVBQUssQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUE4QixFQUFqQyxDQUFpQyxDQUFDLENBQy9DLENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0VBQStCLEdBQS9CLFVBQWdDLElBQXNCO1FBQ3BELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQyxJQUFJLFNBQVMsR0FBRyxJQUFJLGtCQUFXLEVBQUUsQ0FBQztRQUNsQyxJQUFJLE1BQU0sR0FBUSxJQUFJLENBQUM7UUFDdkIsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLElBQUksR0FBRyxHQUFHLElBQUksa0JBQVcsQ0FDdkIsTUFBTSxFQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLEVBQ3JDLE1BQU0sRUFDTjtZQUNFLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLFlBQVksRUFBRSxNQUFNO1NBQ3JCLENBQUMsQ0FBQztRQUVMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNyQyxrQkFBUSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxZQUFZLG1CQUFZLEVBQTFCLENBQTBCLENBQUMsRUFDMUMsZUFBSyxDQUFDLFVBQUMsRUFBRTtZQUNQLE9BQU8sRUFBMkMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUNEOzs7T0FHRztJQUNILHdEQUF1QixHQUF2QixVQUF3QixJQUFzQjtRQUM1QyxPQUFPLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3BELGVBQUssQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUF1QixFQUExQixDQUEwQixDQUFDLENBQ3hDLENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsK0RBQThCLEdBQTlCLFVBQStCLEVBQVU7UUFDdkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hDLElBQUksU0FBUyxHQUFHLElBQUksa0JBQVcsRUFBRSxDQUFDO1FBQ2xDLElBQUksTUFBTSxHQUFRLElBQUksQ0FBQztRQUV2QixJQUFJLEdBQUcsR0FBRyxJQUFJLGtCQUFXLENBQ3ZCLEtBQUssRUFDTCxJQUFJLENBQUMsT0FBTyxJQUFHLDBCQUF3QixFQUFJLENBQUEsRUFDM0MsTUFBTSxFQUNOO1lBQ0UsT0FBTyxFQUFFLFNBQVM7WUFDbEIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsWUFBWSxFQUFFLE1BQU07U0FDckIsQ0FBQyxDQUFDO1FBRUwsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ3JDLGtCQUFRLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLFlBQVksbUJBQVksRUFBMUIsQ0FBMEIsQ0FBQyxFQUMxQyxlQUFLLENBQUMsVUFBQyxFQUFFO1lBQ1AsT0FBTyxFQUEyQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsdURBQXNCLEdBQXRCLFVBQXVCLEVBQVU7UUFDL0IsT0FBTyxJQUFJLENBQUMsOEJBQThCLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNqRCxlQUFLLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsSUFBdUIsRUFBMUIsQ0FBMEIsQ0FBQyxDQUN4QyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILCtEQUE4QixHQUE5QixVQUErQixNQUEyRDtRQUN4RixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxrQkFBVyxFQUFFLENBQUM7UUFDbEMsSUFBSSxNQUFNLEdBQVEsSUFBSSxDQUFDO1FBRXZCLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksR0FBRyxHQUFHLElBQUksa0JBQVcsQ0FDdkIsS0FBSyxFQUNMLElBQUksQ0FBQyxPQUFPLElBQUcsMEJBQXdCLE1BQU0sQ0FBQyxFQUFJLENBQUEsRUFDbEQsTUFBTSxFQUNOO1lBQ0UsT0FBTyxFQUFFLFNBQVM7WUFDbEIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsWUFBWSxFQUFFLE1BQU07U0FDckIsQ0FBQyxDQUFDO1FBRUwsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ3JDLGtCQUFRLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLFlBQVksbUJBQVksRUFBMUIsQ0FBMEIsQ0FBQyxFQUMxQyxlQUFLLENBQUMsVUFBQyxFQUFFO1lBQ1AsT0FBTyxFQUFnQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBQ0Q7Ozs7OztPQU1HO0lBQ0gsdURBQXNCLEdBQXRCLFVBQXVCLE1BQTJEO1FBQ2hGLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDckQsZUFBSyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQVksRUFBZixDQUFlLENBQUMsQ0FDN0IsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILGtFQUFpQyxHQUFqQyxVQUFrQyxFQUFVO1FBQzFDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQyxJQUFJLFNBQVMsR0FBRyxJQUFJLGtCQUFXLEVBQUUsQ0FBQztRQUNsQyxJQUFJLE1BQU0sR0FBUSxJQUFJLENBQUM7UUFFdkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxrQkFBVyxDQUN2QixRQUFRLEVBQ1IsSUFBSSxDQUFDLE9BQU8sSUFBRywwQkFBd0IsRUFBSSxDQUFBLEVBQzNDLE1BQU0sRUFDTjtZQUNFLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLFlBQVksRUFBRSxNQUFNO1NBQ3JCLENBQUMsQ0FBQztRQUVMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNyQyxrQkFBUSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxZQUFZLG1CQUFZLEVBQTFCLENBQTBCLENBQUMsRUFDMUMsZUFBSyxDQUFDLFVBQUMsRUFBRTtZQUNQLE9BQU8sRUFBZ0MsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUNEOztPQUVHO0lBQ0gsMERBQXlCLEdBQXpCLFVBQTBCLEVBQVU7UUFDbEMsT0FBTyxJQUFJLENBQUMsaUNBQWlDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNwRCxlQUFLLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsSUFBWSxFQUFmLENBQWUsQ0FBQyxDQUM3QixDQUFDO0lBQ0osQ0FBQztJQWpNZSxtREFBNEIsR0FBRyxzQkFBc0IsQ0FBQztJQUN0RCxrREFBMkIsR0FBRyxzQkFBc0IsQ0FBQztJQUNyRCxpREFBMEIsR0FBRywyQkFBMkIsQ0FBQztJQUN6RCxpREFBMEIsR0FBRywyQkFBMkIsQ0FBQztJQUN6RCxvREFBNkIsR0FBRywyQkFBMkIsQ0FBQztJQUx4RSxzQkFBc0I7UUFIM0IsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBU1Usb0NBQWU7WUFDakIsaUJBQVU7T0FUZCxzQkFBc0IsQ0FtTTNCO0lBQUQsNkJBQUM7Q0FBQSxBQW5NRCxDQUFxQywwQkFBYSxHQW1NakQ7QUFhUSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBCYXNlU2VydmljZSBhcyBfX0Jhc2VTZXJ2aWNlIH0gZnJvbSAnLi4vYmFzZS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpQ29uZmlndXJhdGlvbiBhcyBfX0NvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9hcGktY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IFN0cmljdEh0dHBSZXNwb25zZSBhcyBfX1N0cmljdEh0dHBSZXNwb25zZSB9IGZyb20gJy4uL3N0cmljdC1odHRwLXJlc3BvbnNlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSBhcyBfX09ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIGFzIF9fbWFwLCBmaWx0ZXIgYXMgX19maWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBDb25jZXJ0TG9jYXRpb24gfSBmcm9tICcuLi9tb2RlbHMvY29uY2VydC1sb2NhdGlvbic7XHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmNsYXNzIENvbmNlcnRMb2NhdGlvblNlcnZpY2UgZXh0ZW5kcyBfX0Jhc2VTZXJ2aWNlIHtcclxuICBzdGF0aWMgcmVhZG9ubHkgR2V0Q29uY2VydExvY2F0aW9uc0l0ZW1zUGF0aCA9ICcvYXBpL0NvbmNlcnRMb2NhdGlvbic7XHJcbiAgc3RhdGljIHJlYWRvbmx5IFBvc3RDb25jZXJ0TG9jYXRpb25JdGVtUGF0aCA9ICcvYXBpL0NvbmNlcnRMb2NhdGlvbic7XHJcbiAgc3RhdGljIHJlYWRvbmx5IEdldENvbmNlcnRMb2NhdGlvbkl0ZW1QYXRoID0gJy9hcGkvQ29uY2VydExvY2F0aW9uL3tpZH0nO1xyXG4gIHN0YXRpYyByZWFkb25seSBQdXRDb25jZXJ0TG9jYXRpb25JdGVtUGF0aCA9ICcvYXBpL0NvbmNlcnRMb2NhdGlvbi97aWR9JztcclxuICBzdGF0aWMgcmVhZG9ubHkgRGVsZXRlQ29uY2VydExvY2F0aW9uSXRlbVBhdGggPSAnL2FwaS9Db25jZXJ0TG9jYXRpb24ve2lkfSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY29uZmlnOiBfX0NvbmZpZ3VyYXRpb24sXHJcbiAgICBodHRwOiBIdHRwQ2xpZW50XHJcbiAgKSB7XHJcbiAgICBzdXBlcihjb25maWcsIGh0dHApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybiBTdWNjZXNzXHJcbiAgICovXHJcbiAgR2V0Q29uY2VydExvY2F0aW9uc0l0ZW1zUmVzcG9uc2UoKTogX19PYnNlcnZhYmxlPF9fU3RyaWN0SHR0cFJlc3BvbnNlPEFycmF5PENvbmNlcnRMb2NhdGlvbj4+PiB7XHJcbiAgICBsZXQgX19wYXJhbXMgPSB0aGlzLm5ld1BhcmFtcygpO1xyXG4gICAgbGV0IF9faGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG4gICAgbGV0IF9fYm9keTogYW55ID0gbnVsbDtcclxuICAgIGxldCByZXEgPSBuZXcgSHR0cFJlcXVlc3Q8YW55PihcclxuICAgICAgJ0dFVCcsXHJcbiAgICAgIHRoaXMucm9vdFVybCArIGAvYXBpL0NvbmNlcnRMb2NhdGlvbmAsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8QXJyYXk8Q29uY2VydExvY2F0aW9uPj47XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAcmV0dXJuIFN1Y2Nlc3NcclxuICAgKi9cclxuICBHZXRDb25jZXJ0TG9jYXRpb25zSXRlbXMoKTogX19PYnNlcnZhYmxlPEFycmF5PENvbmNlcnRMb2NhdGlvbj4+IHtcclxuICAgIHJldHVybiB0aGlzLkdldENvbmNlcnRMb2NhdGlvbnNJdGVtc1Jlc3BvbnNlKCkucGlwZShcclxuICAgICAgX19tYXAoX3IgPT4gX3IuYm9keSBhcyBBcnJheTxDb25jZXJ0TG9jYXRpb24+KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBpdGVtIHVuZGVmaW5lZFxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIFBvc3RDb25jZXJ0TG9jYXRpb25JdGVtUmVzcG9uc2UoaXRlbT86IENvbmNlcnRMb2NhdGlvbik6IF9fT2JzZXJ2YWJsZTxfX1N0cmljdEh0dHBSZXNwb25zZTxDb25jZXJ0TG9jYXRpb24+PiB7XHJcbiAgICBsZXQgX19wYXJhbXMgPSB0aGlzLm5ld1BhcmFtcygpO1xyXG4gICAgbGV0IF9faGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG4gICAgbGV0IF9fYm9keTogYW55ID0gbnVsbDtcclxuICAgIF9fYm9keSA9IGl0ZW07XHJcbiAgICBsZXQgcmVxID0gbmV3IEh0dHBSZXF1ZXN0PGFueT4oXHJcbiAgICAgICdQT1NUJyxcclxuICAgICAgdGhpcy5yb290VXJsICsgYC9hcGkvQ29uY2VydExvY2F0aW9uYCxcclxuICAgICAgX19ib2R5LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczogX19oZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczogX19wYXJhbXMsXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbidcclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0PGFueT4ocmVxKS5waXBlKFxyXG4gICAgICBfX2ZpbHRlcihfciA9PiBfciBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSksXHJcbiAgICAgIF9fbWFwKChfcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBfciBhcyBfX1N0cmljdEh0dHBSZXNwb25zZTxDb25jZXJ0TG9jYXRpb24+O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGl0ZW0gdW5kZWZpbmVkXHJcbiAgICogQHJldHVybiBTdWNjZXNzXHJcbiAgICovXHJcbiAgUG9zdENvbmNlcnRMb2NhdGlvbkl0ZW0oaXRlbT86IENvbmNlcnRMb2NhdGlvbik6IF9fT2JzZXJ2YWJsZTxDb25jZXJ0TG9jYXRpb24+IHtcclxuICAgIHJldHVybiB0aGlzLlBvc3RDb25jZXJ0TG9jYXRpb25JdGVtUmVzcG9uc2UoaXRlbSkucGlwZShcclxuICAgICAgX19tYXAoX3IgPT4gX3IuYm9keSBhcyBDb25jZXJ0TG9jYXRpb24pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGlkIHVuZGVmaW5lZFxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIEdldENvbmNlcnRMb2NhdGlvbkl0ZW1SZXNwb25zZShpZDogbnVtYmVyKTogX19PYnNlcnZhYmxlPF9fU3RyaWN0SHR0cFJlc3BvbnNlPENvbmNlcnRMb2NhdGlvbj4+IHtcclxuICAgIGxldCBfX3BhcmFtcyA9IHRoaXMubmV3UGFyYW1zKCk7XHJcbiAgICBsZXQgX19oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBsZXQgX19ib2R5OiBhbnkgPSBudWxsO1xyXG5cclxuICAgIGxldCByZXEgPSBuZXcgSHR0cFJlcXVlc3Q8YW55PihcclxuICAgICAgJ0dFVCcsXHJcbiAgICAgIHRoaXMucm9vdFVybCArIGAvYXBpL0NvbmNlcnRMb2NhdGlvbi8ke2lkfWAsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8Q29uY2VydExvY2F0aW9uPjtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBpZCB1bmRlZmluZWRcclxuICAgKiBAcmV0dXJuIFN1Y2Nlc3NcclxuICAgKi9cclxuICBHZXRDb25jZXJ0TG9jYXRpb25JdGVtKGlkOiBudW1iZXIpOiBfX09ic2VydmFibGU8Q29uY2VydExvY2F0aW9uPiB7XHJcbiAgICByZXR1cm4gdGhpcy5HZXRDb25jZXJ0TG9jYXRpb25JdGVtUmVzcG9uc2UoaWQpLnBpcGUoXHJcbiAgICAgIF9fbWFwKF9yID0+IF9yLmJvZHkgYXMgQ29uY2VydExvY2F0aW9uKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBwYXJhbXMgVGhlIGBDb25jZXJ0TG9jYXRpb25TZXJ2aWNlLlB1dENvbmNlcnRMb2NhdGlvbkl0ZW1QYXJhbXNgIGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxyXG4gICAqXHJcbiAgICogLSBgaWRgOlxyXG4gICAqXHJcbiAgICogLSBgaXRlbWA6XHJcbiAgICovXHJcbiAgUHV0Q29uY2VydExvY2F0aW9uSXRlbVJlc3BvbnNlKHBhcmFtczogQ29uY2VydExvY2F0aW9uU2VydmljZS5QdXRDb25jZXJ0TG9jYXRpb25JdGVtUGFyYW1zKTogX19PYnNlcnZhYmxlPF9fU3RyaWN0SHR0cFJlc3BvbnNlPG51bGw+PiB7XHJcbiAgICBsZXQgX19wYXJhbXMgPSB0aGlzLm5ld1BhcmFtcygpO1xyXG4gICAgbGV0IF9faGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG4gICAgbGV0IF9fYm9keTogYW55ID0gbnVsbDtcclxuXHJcbiAgICBfX2JvZHkgPSBwYXJhbXMuaXRlbTtcclxuICAgIGxldCByZXEgPSBuZXcgSHR0cFJlcXVlc3Q8YW55PihcclxuICAgICAgJ1BVVCcsXHJcbiAgICAgIHRoaXMucm9vdFVybCArIGAvYXBpL0NvbmNlcnRMb2NhdGlvbi8ke3BhcmFtcy5pZH1gLFxyXG4gICAgICBfX2JvZHksXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiBfX2hlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiBfX3BhcmFtcyxcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3Q8YW55PihyZXEpLnBpcGUoXHJcbiAgICAgIF9fZmlsdGVyKF9yID0+IF9yIGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSxcclxuICAgICAgX19tYXAoKF9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIF9yIGFzIF9fU3RyaWN0SHR0cFJlc3BvbnNlPG51bGw+O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHBhcmFtcyBUaGUgYENvbmNlcnRMb2NhdGlvblNlcnZpY2UuUHV0Q29uY2VydExvY2F0aW9uSXRlbVBhcmFtc2AgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6XHJcbiAgICpcclxuICAgKiAtIGBpZGA6XHJcbiAgICpcclxuICAgKiAtIGBpdGVtYDpcclxuICAgKi9cclxuICBQdXRDb25jZXJ0TG9jYXRpb25JdGVtKHBhcmFtczogQ29uY2VydExvY2F0aW9uU2VydmljZS5QdXRDb25jZXJ0TG9jYXRpb25JdGVtUGFyYW1zKTogX19PYnNlcnZhYmxlPG51bGw+IHtcclxuICAgIHJldHVybiB0aGlzLlB1dENvbmNlcnRMb2NhdGlvbkl0ZW1SZXNwb25zZShwYXJhbXMpLnBpcGUoXHJcbiAgICAgIF9fbWFwKF9yID0+IF9yLmJvZHkgYXMgbnVsbClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gaWQgdW5kZWZpbmVkXHJcbiAgICovXHJcbiAgRGVsZXRlQ29uY2VydExvY2F0aW9uSXRlbVJlc3BvbnNlKGlkOiBudW1iZXIpOiBfX09ic2VydmFibGU8X19TdHJpY3RIdHRwUmVzcG9uc2U8bnVsbD4+IHtcclxuICAgIGxldCBfX3BhcmFtcyA9IHRoaXMubmV3UGFyYW1zKCk7XHJcbiAgICBsZXQgX19oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBsZXQgX19ib2R5OiBhbnkgPSBudWxsO1xyXG5cclxuICAgIGxldCByZXEgPSBuZXcgSHR0cFJlcXVlc3Q8YW55PihcclxuICAgICAgJ0RFTEVURScsXHJcbiAgICAgIHRoaXMucm9vdFVybCArIGAvYXBpL0NvbmNlcnRMb2NhdGlvbi8ke2lkfWAsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8bnVsbD47XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAcGFyYW0gaWQgdW5kZWZpbmVkXHJcbiAgICovXHJcbiAgRGVsZXRlQ29uY2VydExvY2F0aW9uSXRlbShpZDogbnVtYmVyKTogX19PYnNlcnZhYmxlPG51bGw+IHtcclxuICAgIHJldHVybiB0aGlzLkRlbGV0ZUNvbmNlcnRMb2NhdGlvbkl0ZW1SZXNwb25zZShpZCkucGlwZShcclxuICAgICAgX19tYXAoX3IgPT4gX3IuYm9keSBhcyBudWxsKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZSBDb25jZXJ0TG9jYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogUGFyYW1ldGVycyBmb3IgUHV0Q29uY2VydExvY2F0aW9uSXRlbVxyXG4gICAqL1xyXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHV0Q29uY2VydExvY2F0aW9uSXRlbVBhcmFtcyB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgaXRlbT86IENvbmNlcnRMb2NhdGlvbjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IENvbmNlcnRMb2NhdGlvblNlcnZpY2UgfVxyXG4iXX0=