"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var base_service_1 = require("../base-service");
var api_configuration_1 = require("../api-configuration");
var operators_1 = require("rxjs/operators");
var UserConcertService = /** @class */ (function (_super) {
    __extends(UserConcertService, _super);
    function UserConcertService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @return Success
     */
    UserConcertService.prototype.GetUserConcertsItemsResponse = function () {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + "/api/UserConcert", __body, {
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
    UserConcertService.prototype.GetUserConcertsItems = function () {
        return this.GetUserConcertsItemsResponse().pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param item undefined
     * @return Success
     */
    UserConcertService.prototype.PostUserConcertItemResponse = function (item) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        __body = item;
        var req = new http_1.HttpRequest('POST', this.rootUrl + "/api/UserConcert", __body, {
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
    UserConcertService.prototype.PostUserConcertItem = function (item) {
        return this.PostUserConcertItemResponse(item).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param id undefined
     * @return Success
     */
    UserConcertService.prototype.GetUserConcertItemResponse = function (id) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + ("/api/UserConcert/" + id), __body, {
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
    UserConcertService.prototype.GetUserConcertItem = function (id) {
        return this.GetUserConcertItemResponse(id).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `UserConcertService.PutUserConcertItemParams` containing the following parameters:
     *
     * - `id`:
     *
     * - `item`:
     */
    UserConcertService.prototype.PutUserConcertItemResponse = function (params) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        __body = params.item;
        var req = new http_1.HttpRequest('PUT', this.rootUrl + ("/api/UserConcert/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(operators_1.filter(function (_r) { return _r instanceof http_1.HttpResponse; }), operators_1.map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `UserConcertService.PutUserConcertItemParams` containing the following parameters:
     *
     * - `id`:
     *
     * - `item`:
     */
    UserConcertService.prototype.PutUserConcertItem = function (params) {
        return this.PutUserConcertItemResponse(params).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param id undefined
     */
    UserConcertService.prototype.DeleteUserConcertItemResponse = function (id) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('DELETE', this.rootUrl + ("/api/UserConcert/" + id), __body, {
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
    UserConcertService.prototype.DeleteUserConcertItem = function (id) {
        return this.DeleteUserConcertItemResponse(id).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    UserConcertService.GetUserConcertsItemsPath = '/api/UserConcert';
    UserConcertService.PostUserConcertItemPath = '/api/UserConcert';
    UserConcertService.GetUserConcertItemPath = '/api/UserConcert/{id}';
    UserConcertService.PutUserConcertItemPath = '/api/UserConcert/{id}';
    UserConcertService.DeleteUserConcertItemPath = '/api/UserConcert/{id}';
    UserConcertService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [api_configuration_1.ApiConfiguration,
            http_1.HttpClient])
    ], UserConcertService);
    return UserConcertService;
}(base_service_1.BaseService));
exports.UserConcertService = UserConcertService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25jZXJ0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyLWNvbmNlcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9CQUFvQjtBQUNwQixzQ0FBMkM7QUFDM0MsNkNBQTBGO0FBQzFGLGdEQUErRDtBQUMvRCwwREFBMkU7QUFHM0UsNENBQWtFO0FBTWxFO0lBQWlDLHNDQUFhO0lBTzVDLDRCQUNFLE1BQXVCLEVBQ3ZCLElBQWdCO2VBRWhCLGtCQUFNLE1BQU0sRUFBRSxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0gseURBQTRCLEdBQTVCO1FBQ0UsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hDLElBQUksU0FBUyxHQUFHLElBQUksa0JBQVcsRUFBRSxDQUFDO1FBQ2xDLElBQUksTUFBTSxHQUFRLElBQUksQ0FBQztRQUN2QixJQUFJLEdBQUcsR0FBRyxJQUFJLGtCQUFXLENBQ3ZCLEtBQUssRUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLGtCQUFrQixFQUNqQyxNQUFNLEVBQ047WUFDRSxPQUFPLEVBQUUsU0FBUztZQUNsQixNQUFNLEVBQUUsUUFBUTtZQUNoQixZQUFZLEVBQUUsTUFBTTtTQUNyQixDQUFDLENBQUM7UUFFTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDckMsa0JBQVEsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsWUFBWSxtQkFBWSxFQUExQixDQUEwQixDQUFDLEVBQzFDLGVBQUssQ0FBQyxVQUFDLEVBQUU7WUFDUCxPQUFPLEVBQThDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFDRDs7T0FFRztJQUNILGlEQUFvQixHQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUMsSUFBSSxDQUM3Qyxl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TCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDckMsa0JBQVEsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsWUFBWSxtQkFBWSxFQUExQixDQUEwQixDQUFDLEVBQzFDLGVBQUssQ0FBQyxVQUFDLEVBQUU7WUFDUCxPQUFPLEVBQWdDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFDRDs7T0FFRztJQUNILGtEQUFxQixHQUFyQixVQUFzQixFQUFVO1FBQzlCLE9BQU8sSUFBSSxDQUFDLDZCQUE2QixDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDaEQsZUFBSyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQVksRUFBZixDQUFlLENBQUMsQ0FDN0IsQ0FBQztJQUNKLENBQUM7SUFqTWUsMkNBQXdCLEdBQUcsa0JBQWtCLENBQUM7SUFDOUMsMENBQXVCLEdBQUcsa0JBQWtCLENBQUM7SUFDN0MseUNBQXNCLEdBQUcsdUJBQXVCLENBQUM7SUFDakQseUNBQXNCLEdBQUcsdUJBQXVCLENBQUM7SUFDakQsNENBQXlCLEdBQUcsdUJBQXVCLENBQUM7SUFMaEUsa0JBQWtCO1FBSHZCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQVNVLG9DQUFlO1lBQ2pCLGlCQUFVO09BVGQsa0JBQWtCLENBbU12QjtJQUFELHlCQUFDO0NBQUEsQUFuTUQsQ0FBaUMsMEJBQWEsR0FtTTdDO0FBYVEsZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQmFzZVNlcnZpY2UgYXMgX19CYXNlU2VydmljZSB9IGZyb20gJy4uL2Jhc2Utc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaUNvbmZpZ3VyYXRpb24gYXMgX19Db25maWd1cmF0aW9uIH0gZnJvbSAnLi4vYXBpLWNvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBTdHJpY3RIdHRwUmVzcG9uc2UgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2UgfSBmcm9tICcuLi9zdHJpY3QtaHR0cC1yZXNwb25zZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgX19PYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCBhcyBfX21hcCwgZmlsdGVyIGFzIF9fZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgVXNlckNvbmNlcnQgfSBmcm9tICcuLi9tb2RlbHMvdXNlci1jb25jZXJ0JztcclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuY2xhc3MgVXNlckNvbmNlcnRTZXJ2aWNlIGV4dGVuZHMgX19CYXNlU2VydmljZSB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IEdldFVzZXJDb25jZXJ0c0l0ZW1zUGF0aCA9ICcvYXBpL1VzZXJDb25jZXJ0JztcclxuICBzdGF0aWMgcmVhZG9ubHkgUG9zdFVzZXJDb25jZXJ0SXRlbVBhdGggPSAnL2FwaS9Vc2VyQ29uY2VydCc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IEdldFVzZXJDb25jZXJ0SXRlbVBhdGggPSAnL2FwaS9Vc2VyQ29uY2VydC97aWR9JztcclxuICBzdGF0aWMgcmVhZG9ubHkgUHV0VXNlckNvbmNlcnRJdGVtUGF0aCA9ICcvYXBpL1VzZXJDb25jZXJ0L3tpZH0nO1xyXG4gIHN0YXRpYyByZWFkb25seSBEZWxldGVVc2VyQ29uY2VydEl0ZW1QYXRoID0gJy9hcGkvVXNlckNvbmNlcnQve2lkfSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY29uZmlnOiBfX0NvbmZpZ3VyYXRpb24sXHJcbiAgICBodHRwOiBIdHRwQ2xpZW50XHJcbiAgKSB7XHJcbiAgICBzdXBlcihjb25maWcsIGh0dHApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybiBTdWNjZXNzXHJcbiAgICovXHJcbiAgR2V0VXNlckNvbmNlcnRzSXRlbXNSZXNwb25zZSgpOiBfX09ic2VydmFibGU8X19TdHJpY3RIdHRwUmVzcG9uc2U8QXJyYXk8VXNlckNvbmNlcnQ+Pj4ge1xyXG4gICAgbGV0IF9fcGFyYW1zID0gdGhpcy5uZXdQYXJhbXMoKTtcclxuICAgIGxldCBfX2hlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgIGxldCBfX2JvZHk6IGFueSA9IG51bGw7XHJcbiAgICBsZXQgcmVxID0gbmV3IEh0dHBSZXF1ZXN0PGFueT4oXHJcbiAgICAgICdHRVQnLFxyXG4gICAgICB0aGlzLnJvb3RVcmwgKyBgL2FwaS9Vc2VyQ29uY2VydGAsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8QXJyYXk8VXNlckNvbmNlcnQ+PjtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIEdldFVzZXJDb25jZXJ0c0l0ZW1zKCk6IF9fT2JzZXJ2YWJsZTxBcnJheTxVc2VyQ29uY2VydD4+IHtcclxuICAgIHJldHVybiB0aGlzLkdldFVzZXJDb25jZXJ0c0l0ZW1zUmVzcG9uc2UoKS5waXBlKFxyXG4gICAgICBfX21hcChfciA9PiBfci5ib2R5IGFzIEFycmF5PFVzZXJDb25jZXJ0PilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gaXRlbSB1bmRlZmluZWRcclxuICAgKiBAcmV0dXJuIFN1Y2Nlc3NcclxuICAgKi9cclxuICBQb3N0VXNlckNvbmNlcnRJdGVtUmVzcG9uc2UoaXRlbT86IFVzZXJDb25jZXJ0KTogX19PYnNlcnZhYmxlPF9fU3RyaWN0SHR0cFJlc3BvbnNlPFVzZXJDb25jZXJ0Pj4ge1xyXG4gICAgbGV0IF9fcGFyYW1zID0gdGhpcy5uZXdQYXJhbXMoKTtcclxuICAgIGxldCBfX2hlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgIGxldCBfX2JvZHk6IGFueSA9IG51bGw7XHJcbiAgICBfX2JvZHkgPSBpdGVtO1xyXG4gICAgbGV0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdDxhbnk+KFxyXG4gICAgICAnUE9TVCcsXHJcbiAgICAgIHRoaXMucm9vdFVybCArIGAvYXBpL1VzZXJDb25jZXJ0YCxcclxuICAgICAgX19ib2R5LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczogX19oZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczogX19wYXJhbXMsXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbidcclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0PGFueT4ocmVxKS5waXBlKFxyXG4gICAgICBfX2ZpbHRlcihfciA9PiBfciBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSksXHJcbiAgICAgIF9fbWFwKChfcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBfciBhcyBfX1N0cmljdEh0dHBSZXNwb25zZTxVc2VyQ29uY2VydD47XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAcGFyYW0gaXRlbSB1bmRlZmluZWRcclxuICAgKiBAcmV0dXJuIFN1Y2Nlc3NcclxuICAgKi9cclxuICBQb3N0VXNlckNvbmNlcnRJdGVtKGl0ZW0/OiBVc2VyQ29uY2VydCk6IF9fT2JzZXJ2YWJsZTxVc2VyQ29uY2VydD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuUG9zdFVzZXJDb25jZXJ0SXRlbVJlc3BvbnNlKGl0ZW0pLnBpcGUoXHJcbiAgICAgIF9fbWFwKF9yID0+IF9yLmJvZHkgYXMgVXNlckNvbmNlcnQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGlkIHVuZGVmaW5lZFxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIEdldFVzZXJDb25jZXJ0SXRlbVJlc3BvbnNlKGlkOiBudW1iZXIpOiBfX09ic2VydmFibGU8X19TdHJpY3RIdHRwUmVzcG9uc2U8VXNlckNvbmNlcnQ+PiB7XHJcbiAgICBsZXQgX19wYXJhbXMgPSB0aGlzLm5ld1BhcmFtcygpO1xyXG4gICAgbGV0IF9faGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG4gICAgbGV0IF9fYm9keTogYW55ID0gbnVsbDtcclxuXHJcbiAgICBsZXQgcmVxID0gbmV3IEh0dHBSZXF1ZXN0PGFueT4oXHJcbiAgICAgICdHRVQnLFxyXG4gICAgICB0aGlzLnJvb3RVcmwgKyBgL2FwaS9Vc2VyQ29uY2VydC8ke2lkfWAsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8VXNlckNvbmNlcnQ+O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGlkIHVuZGVmaW5lZFxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIEdldFVzZXJDb25jZXJ0SXRlbShpZDogbnVtYmVyKTogX19PYnNlcnZhYmxlPFVzZXJDb25jZXJ0PiB7XHJcbiAgICByZXR1cm4gdGhpcy5HZXRVc2VyQ29uY2VydEl0ZW1SZXNwb25zZShpZCkucGlwZShcclxuICAgICAgX19tYXAoX3IgPT4gX3IuYm9keSBhcyBVc2VyQ29uY2VydClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gcGFyYW1zIFRoZSBgVXNlckNvbmNlcnRTZXJ2aWNlLlB1dFVzZXJDb25jZXJ0SXRlbVBhcmFtc2AgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6XHJcbiAgICpcclxuICAgKiAtIGBpZGA6XHJcbiAgICpcclxuICAgKiAtIGBpdGVtYDpcclxuICAgKi9cclxuICBQdXRVc2VyQ29uY2VydEl0ZW1SZXNwb25zZShwYXJhbXM6IFVzZXJDb25jZXJ0U2VydmljZS5QdXRVc2VyQ29uY2VydEl0ZW1QYXJhbXMpOiBfX09ic2VydmFibGU8X19TdHJpY3RIdHRwUmVzcG9uc2U8bnVsbD4+IHtcclxuICAgIGxldCBfX3BhcmFtcyA9IHRoaXMubmV3UGFyYW1zKCk7XHJcbiAgICBsZXQgX19oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBsZXQgX19ib2R5OiBhbnkgPSBudWxsO1xyXG5cclxuICAgIF9fYm9keSA9IHBhcmFtcy5pdGVtO1xyXG4gICAgbGV0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdDxhbnk+KFxyXG4gICAgICAnUFVUJyxcclxuICAgICAgdGhpcy5yb290VXJsICsgYC9hcGkvVXNlckNvbmNlcnQvJHtwYXJhbXMuaWR9YCxcclxuICAgICAgX19ib2R5LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczogX19oZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczogX19wYXJhbXMsXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbidcclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0PGFueT4ocmVxKS5waXBlKFxyXG4gICAgICBfX2ZpbHRlcihfciA9PiBfciBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSksXHJcbiAgICAgIF9fbWFwKChfcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBfciBhcyBfX1N0cmljdEh0dHBSZXNwb25zZTxudWxsPjtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBwYXJhbXMgVGhlIGBVc2VyQ29uY2VydFNlcnZpY2UuUHV0VXNlckNvbmNlcnRJdGVtUGFyYW1zYCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcclxuICAgKlxyXG4gICAqIC0gYGlkYDpcclxuICAgKlxyXG4gICAqIC0gYGl0ZW1gOlxyXG4gICAqL1xyXG4gIFB1dFVzZXJDb25jZXJ0SXRlbShwYXJhbXM6IFVzZXJDb25jZXJ0U2VydmljZS5QdXRVc2VyQ29uY2VydEl0ZW1QYXJhbXMpOiBfX09ic2VydmFibGU8bnVsbD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuUHV0VXNlckNvbmNlcnRJdGVtUmVzcG9uc2UocGFyYW1zKS5waXBlKFxyXG4gICAgICBfX21hcChfciA9PiBfci5ib2R5IGFzIG51bGwpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGlkIHVuZGVmaW5lZFxyXG4gICAqL1xyXG4gIERlbGV0ZVVzZXJDb25jZXJ0SXRlbVJlc3BvbnNlKGlkOiBudW1iZXIpOiBfX09ic2VydmFibGU8X19TdHJpY3RIdHRwUmVzcG9uc2U8bnVsbD4+IHtcclxuICAgIGxldCBfX3BhcmFtcyA9IHRoaXMubmV3UGFyYW1zKCk7XHJcbiAgICBsZXQgX19oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBsZXQgX19ib2R5OiBhbnkgPSBudWxsO1xyXG5cclxuICAgIGxldCByZXEgPSBuZXcgSHR0cFJlcXVlc3Q8YW55PihcclxuICAgICAgJ0RFTEVURScsXHJcbiAgICAgIHRoaXMucm9vdFVybCArIGAvYXBpL1VzZXJDb25jZXJ0LyR7aWR9YCxcclxuICAgICAgX19ib2R5LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczogX19oZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczogX19wYXJhbXMsXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbidcclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0PGFueT4ocmVxKS5waXBlKFxyXG4gICAgICBfX2ZpbHRlcihfciA9PiBfciBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSksXHJcbiAgICAgIF9fbWFwKChfcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBfciBhcyBfX1N0cmljdEh0dHBSZXNwb25zZTxudWxsPjtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBpZCB1bmRlZmluZWRcclxuICAgKi9cclxuICBEZWxldGVVc2VyQ29uY2VydEl0ZW0oaWQ6IG51bWJlcik6IF9fT2JzZXJ2YWJsZTxudWxsPiB7XHJcbiAgICByZXR1cm4gdGhpcy5EZWxldGVVc2VyQ29uY2VydEl0ZW1SZXNwb25zZShpZCkucGlwZShcclxuICAgICAgX19tYXAoX3IgPT4gX3IuYm9keSBhcyBudWxsKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZSBVc2VyQ29uY2VydFNlcnZpY2Uge1xyXG5cclxuICAvKipcclxuICAgKiBQYXJhbWV0ZXJzIGZvciBQdXRVc2VyQ29uY2VydEl0ZW1cclxuICAgKi9cclxuICBleHBvcnQgaW50ZXJmYWNlIFB1dFVzZXJDb25jZXJ0SXRlbVBhcmFtcyB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgaXRlbT86IFVzZXJDb25jZXJ0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgVXNlckNvbmNlcnRTZXJ2aWNlIH1cclxuIl19