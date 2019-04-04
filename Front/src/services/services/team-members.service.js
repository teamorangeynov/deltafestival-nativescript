"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var base_service_1 = require("../base-service");
var api_configuration_1 = require("../api-configuration");
var operators_1 = require("rxjs/operators");
var TeamMembersService = /** @class */ (function (_super) {
    __extends(TeamMembersService, _super);
    function TeamMembersService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @return Success
     */
    TeamMembersService.prototype.GetTeamMembersResponse = function () {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + "/api/TeamMembers", __body, {
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
    TeamMembersService.prototype.GetTeamMembers = function () {
        return this.GetTeamMembersResponse().pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param teamMembers undefined
     * @return Success
     */
    TeamMembersService.prototype.PostTeamMembersResponse = function (teamMembers) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        __body = teamMembers;
        var req = new http_1.HttpRequest('POST', this.rootUrl + "/api/TeamMembers", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(operators_1.filter(function (_r) { return _r instanceof http_1.HttpResponse; }), operators_1.map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param teamMembers undefined
     * @return Success
     */
    TeamMembersService.prototype.PostTeamMembers = function (teamMembers) {
        return this.PostTeamMembersResponse(teamMembers).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param id undefined
     * @return Success
     */
    TeamMembersService.prototype.GetTeamMembers_1Response = function (id) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + ("/api/TeamMembers/" + id), __body, {
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
    TeamMembersService.prototype.GetTeamMembers_1 = function (id) {
        return this.GetTeamMembers_1Response(id).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `TeamMembersService.PutTeamMembersParams` containing the following parameters:
     *
     * - `id`:
     *
     * - `teamMembers`:
     */
    TeamMembersService.prototype.PutTeamMembersResponse = function (params) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        __body = params.teamMembers;
        var req = new http_1.HttpRequest('PUT', this.rootUrl + ("/api/TeamMembers/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(operators_1.filter(function (_r) { return _r instanceof http_1.HttpResponse; }), operators_1.map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `TeamMembersService.PutTeamMembersParams` containing the following parameters:
     *
     * - `id`:
     *
     * - `teamMembers`:
     */
    TeamMembersService.prototype.PutTeamMembers = function (params) {
        return this.PutTeamMembersResponse(params).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param id undefined
     * @return Success
     */
    TeamMembersService.prototype.DeleteTeamMembersResponse = function (id) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('DELETE', this.rootUrl + ("/api/TeamMembers/" + id), __body, {
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
    TeamMembersService.prototype.DeleteTeamMembers = function (id) {
        return this.DeleteTeamMembersResponse(id).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    TeamMembersService.GetTeamMembersPath = '/api/TeamMembers';
    TeamMembersService.PostTeamMembersPath = '/api/TeamMembers';
    TeamMembersService.GetTeamMembers_1Path = '/api/TeamMembers/{id}';
    TeamMembersService.PutTeamMembersPath = '/api/TeamMembers/{id}';
    TeamMembersService.DeleteTeamMembersPath = '/api/TeamMembers/{id}';
    TeamMembersService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [api_configuration_1.ApiConfiguration,
            http_1.HttpClient])
    ], TeamMembersService);
    return TeamMembersService;
}(base_service_1.BaseService));
exports.TeamMembersService = TeamMembersService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbS1tZW1iZXJzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZWFtLW1lbWJlcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9CQUFvQjtBQUNwQixzQ0FBMkM7QUFDM0MsNkNBQTBGO0FBQzFGLGdEQUErRDtBQUMvRCwwREFBMkU7QUFHM0UsNENBQWtFO0FBTWxFO0lBQWlDLHNDQUFhO0lBTzVDLDRCQUNFLE1BQXVCLEVBQ3ZCLElBQWdCO2VBRWhCLGtCQUFNLE1BQU0sRUFBRSxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsbURBQXNCLEdBQXRCO1FBQ0UsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hDLElBQUksU0FBUyxHQUFHLElBQUksa0JBQVcsRUFBRSxDQUFDO1FBQ2xDLElBQUksTUFBTSxHQUFRLElBQUksQ0FBQztRQUN2QixJQUFJLEdBQUcsR0FBRyxJQUFJLGtCQUFXLENBQ3ZCLEtBQUssRUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLGtCQUFrQixFQUNqQyxNQUFNLEVBQ047WUFDRSxPQUFPLEVBQUUsU0FBUztZQUNsQixNQUFNLEVBQUUsUUFBUTtZQUNoQixZQUFZLEVBQUUsTUFBTTtTQUNyQixDQUFDLENBQUM7UUFFTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDckMsa0JBQVEsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsWUFBWSxtQkFBWSxFQUExQixDQUEwQixDQUFDLEVBQzFDLGVBQUssQ0FBQyxVQUFDLEVBQUU7WUFDUCxPQUFPLEVBQThDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFDRDs7T0FFRztJQUNILDJDQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLElBQUksQ0FDdkMsZUFB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TyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ3JDLGtCQUFRLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLFlBQVksbUJBQVksRUFBMUIsQ0FBMEIsQ0FBQyxFQUMxQyxlQUFLLENBQUMsVUFBQyxFQUFFO1lBQ1AsT0FBTyxFQUF1QyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsOENBQWlCLEdBQWpCLFVBQWtCLEVBQVU7UUFDMUIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUM1QyxlQUFLLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsSUFBbUIsRUFBdEIsQ0FBc0IsQ0FBQyxDQUNwQyxDQUFDO0lBQ0osQ0FBQztJQW5NZSxxQ0FBa0IsR0FBRyxrQkFBa0IsQ0FBQztJQUN4QyxzQ0FBbUIsR0FBRyxrQkFBa0IsQ0FBQztJQUN6Qyx1Q0FBb0IsR0FBRyx1QkFBdUIsQ0FBQztJQUMvQyxxQ0FBa0IsR0FBRyx1QkFBdUIsQ0FBQztJQUM3Qyx3Q0FBcUIsR0FBRyx1QkFBdUIsQ0FBQztJQUw1RCxrQkFBa0I7UUFIdkIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBU1Usb0NBQWU7WUFDakIsaUJBQVU7T0FUZCxrQkFBa0IsQ0FxTXZCO0lBQUQseUJBQUM7Q0FBQSxBQXJNRCxDQUFpQywwQkFBYSxHQXFNN0M7QUFhUSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBCYXNlU2VydmljZSBhcyBfX0Jhc2VTZXJ2aWNlIH0gZnJvbSAnLi4vYmFzZS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpQ29uZmlndXJhdGlvbiBhcyBfX0NvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9hcGktY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IFN0cmljdEh0dHBSZXNwb25zZSBhcyBfX1N0cmljdEh0dHBSZXNwb25zZSB9IGZyb20gJy4uL3N0cmljdC1odHRwLXJlc3BvbnNlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSBhcyBfX09ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIGFzIF9fbWFwLCBmaWx0ZXIgYXMgX19maWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBUZWFtTWVtYmVycyB9IGZyb20gJy4uL21vZGVscy90ZWFtLW1lbWJlcnMnO1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5jbGFzcyBUZWFtTWVtYmVyc1NlcnZpY2UgZXh0ZW5kcyBfX0Jhc2VTZXJ2aWNlIHtcclxuICBzdGF0aWMgcmVhZG9ubHkgR2V0VGVhbU1lbWJlcnNQYXRoID0gJy9hcGkvVGVhbU1lbWJlcnMnO1xyXG4gIHN0YXRpYyByZWFkb25seSBQb3N0VGVhbU1lbWJlcnNQYXRoID0gJy9hcGkvVGVhbU1lbWJlcnMnO1xyXG4gIHN0YXRpYyByZWFkb25seSBHZXRUZWFtTWVtYmVyc18xUGF0aCA9ICcvYXBpL1RlYW1NZW1iZXJzL3tpZH0nO1xyXG4gIHN0YXRpYyByZWFkb25seSBQdXRUZWFtTWVtYmVyc1BhdGggPSAnL2FwaS9UZWFtTWVtYmVycy97aWR9JztcclxuICBzdGF0aWMgcmVhZG9ubHkgRGVsZXRlVGVhbU1lbWJlcnNQYXRoID0gJy9hcGkvVGVhbU1lbWJlcnMve2lkfSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY29uZmlnOiBfX0NvbmZpZ3VyYXRpb24sXHJcbiAgICBodHRwOiBIdHRwQ2xpZW50XHJcbiAgKSB7XHJcbiAgICBzdXBlcihjb25maWcsIGh0dHApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybiBTdWNjZXNzXHJcbiAgICovXHJcbiAgR2V0VGVhbU1lbWJlcnNSZXNwb25zZSgpOiBfX09ic2VydmFibGU8X19TdHJpY3RIdHRwUmVzcG9uc2U8QXJyYXk8VGVhbU1lbWJlcnM+Pj4ge1xyXG4gICAgbGV0IF9fcGFyYW1zID0gdGhpcy5uZXdQYXJhbXMoKTtcclxuICAgIGxldCBfX2hlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgIGxldCBfX2JvZHk6IGFueSA9IG51bGw7XHJcbiAgICBsZXQgcmVxID0gbmV3IEh0dHBSZXF1ZXN0PGFueT4oXHJcbiAgICAgICdHRVQnLFxyXG4gICAgICB0aGlzLnJvb3RVcmwgKyBgL2FwaS9UZWFtTWVtYmVyc2AsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8QXJyYXk8VGVhbU1lbWJlcnM+PjtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIEdldFRlYW1NZW1iZXJzKCk6IF9fT2JzZXJ2YWJsZTxBcnJheTxUZWFtTWVtYmVycz4+IHtcclxuICAgIHJldHVybiB0aGlzLkdldFRlYW1NZW1iZXJzUmVzcG9uc2UoKS5waXBlKFxyXG4gICAgICBfX21hcChfciA9PiBfci5ib2R5IGFzIEFycmF5PFRlYW1NZW1iZXJzPilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gdGVhbU1lbWJlcnMgdW5kZWZpbmVkXHJcbiAgICogQHJldHVybiBTdWNjZXNzXHJcbiAgICovXHJcbiAgUG9zdFRlYW1NZW1iZXJzUmVzcG9uc2UodGVhbU1lbWJlcnM/OiBUZWFtTWVtYmVycyk6IF9fT2JzZXJ2YWJsZTxfX1N0cmljdEh0dHBSZXNwb25zZTxUZWFtTWVtYmVycz4+IHtcclxuICAgIGxldCBfX3BhcmFtcyA9IHRoaXMubmV3UGFyYW1zKCk7XHJcbiAgICBsZXQgX19oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBsZXQgX19ib2R5OiBhbnkgPSBudWxsO1xyXG4gICAgX19ib2R5ID0gdGVhbU1lbWJlcnM7XHJcbiAgICBsZXQgcmVxID0gbmV3IEh0dHBSZXF1ZXN0PGFueT4oXHJcbiAgICAgICdQT1NUJyxcclxuICAgICAgdGhpcy5yb290VXJsICsgYC9hcGkvVGVhbU1lbWJlcnNgLFxyXG4gICAgICBfX2JvZHksXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiBfX2hlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiBfX3BhcmFtcyxcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3Q8YW55PihyZXEpLnBpcGUoXHJcbiAgICAgIF9fZmlsdGVyKF9yID0+IF9yIGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSxcclxuICAgICAgX19tYXAoKF9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIF9yIGFzIF9fU3RyaWN0SHR0cFJlc3BvbnNlPFRlYW1NZW1iZXJzPjtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB0ZWFtTWVtYmVycyB1bmRlZmluZWRcclxuICAgKiBAcmV0dXJuIFN1Y2Nlc3NcclxuICAgKi9cclxuICBQb3N0VGVhbU1lbWJlcnModGVhbU1lbWJlcnM/OiBUZWFtTWVtYmVycyk6IF9fT2JzZXJ2YWJsZTxUZWFtTWVtYmVycz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuUG9zdFRlYW1NZW1iZXJzUmVzcG9uc2UodGVhbU1lbWJlcnMpLnBpcGUoXHJcbiAgICAgIF9fbWFwKF9yID0+IF9yLmJvZHkgYXMgVGVhbU1lbWJlcnMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGlkIHVuZGVmaW5lZFxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIEdldFRlYW1NZW1iZXJzXzFSZXNwb25zZShpZDogbnVtYmVyKTogX19PYnNlcnZhYmxlPF9fU3RyaWN0SHR0cFJlc3BvbnNlPFRlYW1NZW1iZXJzPj4ge1xyXG4gICAgbGV0IF9fcGFyYW1zID0gdGhpcy5uZXdQYXJhbXMoKTtcclxuICAgIGxldCBfX2hlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgIGxldCBfX2JvZHk6IGFueSA9IG51bGw7XHJcblxyXG4gICAgbGV0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdDxhbnk+KFxyXG4gICAgICAnR0VUJyxcclxuICAgICAgdGhpcy5yb290VXJsICsgYC9hcGkvVGVhbU1lbWJlcnMvJHtpZH1gLFxyXG4gICAgICBfX2JvZHksXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiBfX2hlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiBfX3BhcmFtcyxcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3Q8YW55PihyZXEpLnBpcGUoXHJcbiAgICAgIF9fZmlsdGVyKF9yID0+IF9yIGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSxcclxuICAgICAgX19tYXAoKF9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIF9yIGFzIF9fU3RyaWN0SHR0cFJlc3BvbnNlPFRlYW1NZW1iZXJzPjtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBpZCB1bmRlZmluZWRcclxuICAgKiBAcmV0dXJuIFN1Y2Nlc3NcclxuICAgKi9cclxuICBHZXRUZWFtTWVtYmVyc18xKGlkOiBudW1iZXIpOiBfX09ic2VydmFibGU8VGVhbU1lbWJlcnM+IHtcclxuICAgIHJldHVybiB0aGlzLkdldFRlYW1NZW1iZXJzXzFSZXNwb25zZShpZCkucGlwZShcclxuICAgICAgX19tYXAoX3IgPT4gX3IuYm9keSBhcyBUZWFtTWVtYmVycylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gcGFyYW1zIFRoZSBgVGVhbU1lbWJlcnNTZXJ2aWNlLlB1dFRlYW1NZW1iZXJzUGFyYW1zYCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcclxuICAgKlxyXG4gICAqIC0gYGlkYDpcclxuICAgKlxyXG4gICAqIC0gYHRlYW1NZW1iZXJzYDpcclxuICAgKi9cclxuICBQdXRUZWFtTWVtYmVyc1Jlc3BvbnNlKHBhcmFtczogVGVhbU1lbWJlcnNTZXJ2aWNlLlB1dFRlYW1NZW1iZXJzUGFyYW1zKTogX19PYnNlcnZhYmxlPF9fU3RyaWN0SHR0cFJlc3BvbnNlPG51bGw+PiB7XHJcbiAgICBsZXQgX19wYXJhbXMgPSB0aGlzLm5ld1BhcmFtcygpO1xyXG4gICAgbGV0IF9faGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG4gICAgbGV0IF9fYm9keTogYW55ID0gbnVsbDtcclxuXHJcbiAgICBfX2JvZHkgPSBwYXJhbXMudGVhbU1lbWJlcnM7XHJcbiAgICBsZXQgcmVxID0gbmV3IEh0dHBSZXF1ZXN0PGFueT4oXHJcbiAgICAgICdQVVQnLFxyXG4gICAgICB0aGlzLnJvb3RVcmwgKyBgL2FwaS9UZWFtTWVtYmVycy8ke3BhcmFtcy5pZH1gLFxyXG4gICAgICBfX2JvZHksXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiBfX2hlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiBfX3BhcmFtcyxcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3Q8YW55PihyZXEpLnBpcGUoXHJcbiAgICAgIF9fZmlsdGVyKF9yID0+IF9yIGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSxcclxuICAgICAgX19tYXAoKF9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIF9yIGFzIF9fU3RyaWN0SHR0cFJlc3BvbnNlPG51bGw+O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHBhcmFtcyBUaGUgYFRlYW1NZW1iZXJzU2VydmljZS5QdXRUZWFtTWVtYmVyc1BhcmFtc2AgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6XHJcbiAgICpcclxuICAgKiAtIGBpZGA6XHJcbiAgICpcclxuICAgKiAtIGB0ZWFtTWVtYmVyc2A6XHJcbiAgICovXHJcbiAgUHV0VGVhbU1lbWJlcnMocGFyYW1zOiBUZWFtTWVtYmVyc1NlcnZpY2UuUHV0VGVhbU1lbWJlcnNQYXJhbXMpOiBfX09ic2VydmFibGU8bnVsbD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuUHV0VGVhbU1lbWJlcnNSZXNwb25zZShwYXJhbXMpLnBpcGUoXHJcbiAgICAgIF9fbWFwKF9yID0+IF9yLmJvZHkgYXMgbnVsbClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gaWQgdW5kZWZpbmVkXHJcbiAgICogQHJldHVybiBTdWNjZXNzXHJcbiAgICovXHJcbiAgRGVsZXRlVGVhbU1lbWJlcnNSZXNwb25zZShpZDogbnVtYmVyKTogX19PYnNlcnZhYmxlPF9fU3RyaWN0SHR0cFJlc3BvbnNlPFRlYW1NZW1iZXJzPj4ge1xyXG4gICAgbGV0IF9fcGFyYW1zID0gdGhpcy5uZXdQYXJhbXMoKTtcclxuICAgIGxldCBfX2hlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgIGxldCBfX2JvZHk6IGFueSA9IG51bGw7XHJcblxyXG4gICAgbGV0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdDxhbnk+KFxyXG4gICAgICAnREVMRVRFJyxcclxuICAgICAgdGhpcy5yb290VXJsICsgYC9hcGkvVGVhbU1lbWJlcnMvJHtpZH1gLFxyXG4gICAgICBfX2JvZHksXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiBfX2hlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiBfX3BhcmFtcyxcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3Q8YW55PihyZXEpLnBpcGUoXHJcbiAgICAgIF9fZmlsdGVyKF9yID0+IF9yIGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSxcclxuICAgICAgX19tYXAoKF9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIF9yIGFzIF9fU3RyaWN0SHR0cFJlc3BvbnNlPFRlYW1NZW1iZXJzPjtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBpZCB1bmRlZmluZWRcclxuICAgKiBAcmV0dXJuIFN1Y2Nlc3NcclxuICAgKi9cclxuICBEZWxldGVUZWFtTWVtYmVycyhpZDogbnVtYmVyKTogX19PYnNlcnZhYmxlPFRlYW1NZW1iZXJzPiB7XHJcbiAgICByZXR1cm4gdGhpcy5EZWxldGVUZWFtTWVtYmVyc1Jlc3BvbnNlKGlkKS5waXBlKFxyXG4gICAgICBfX21hcChfciA9PiBfci5ib2R5IGFzIFRlYW1NZW1iZXJzKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZSBUZWFtTWVtYmVyc1NlcnZpY2Uge1xyXG5cclxuICAvKipcclxuICAgKiBQYXJhbWV0ZXJzIGZvciBQdXRUZWFtTWVtYmVyc1xyXG4gICAqL1xyXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHV0VGVhbU1lbWJlcnNQYXJhbXMge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHRlYW1NZW1iZXJzPzogVGVhbU1lbWJlcnM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBUZWFtTWVtYmVyc1NlcnZpY2UgfVxyXG4iXX0=