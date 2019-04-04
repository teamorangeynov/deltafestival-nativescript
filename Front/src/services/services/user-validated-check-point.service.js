"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var base_service_1 = require("../base-service");
var api_configuration_1 = require("../api-configuration");
var operators_1 = require("rxjs/operators");
var UserValidatedCheckPointService = /** @class */ (function (_super) {
    __extends(UserValidatedCheckPointService, _super);
    function UserValidatedCheckPointService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @return Success
     */
    UserValidatedCheckPointService.prototype.GetUserValidatedCheckpointsItemsResponse = function () {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + "/api/UserValidatedCheckPoint", __body, {
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
    UserValidatedCheckPointService.prototype.GetUserValidatedCheckpointsItems = function () {
        return this.GetUserValidatedCheckpointsItemsResponse().pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param item undefined
     * @return Success
     */
    UserValidatedCheckPointService.prototype.PostUserValidatedCheckpointResponse = function (item) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        __body = item;
        var req = new http_1.HttpRequest('POST', this.rootUrl + "/api/UserValidatedCheckPoint", __body, {
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
    UserValidatedCheckPointService.prototype.PostUserValidatedCheckpoint = function (item) {
        return this.PostUserValidatedCheckpointResponse(item).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param UserId undefined
     * @return Success
     */
    UserValidatedCheckPointService.prototype.GetUserValidatedCheckpointsItemResponse = function (UserId) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + ("/api/UserValidatedCheckPoint/" + UserId), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(operators_1.filter(function (_r) { return _r instanceof http_1.HttpResponse; }), operators_1.map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param UserId undefined
     * @return Success
     */
    UserValidatedCheckPointService.prototype.GetUserValidatedCheckpointsItem = function (UserId) {
        return this.GetUserValidatedCheckpointsItemResponse(UserId).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    UserValidatedCheckPointService.GetUserValidatedCheckpointsItemsPath = '/api/UserValidatedCheckPoint';
    UserValidatedCheckPointService.PostUserValidatedCheckpointPath = '/api/UserValidatedCheckPoint';
    UserValidatedCheckPointService.GetUserValidatedCheckpointsItemPath = '/api/UserValidatedCheckPoint/{UserId}';
    UserValidatedCheckPointService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [api_configuration_1.ApiConfiguration,
            http_1.HttpClient])
    ], UserValidatedCheckPointService);
    return UserValidatedCheckPointService;
}(base_service_1.BaseService));
exports.UserValidatedCheckPointService = UserValidatedCheckPointService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci12YWxpZGF0ZWQtY2hlY2stcG9pbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXItdmFsaWRhdGVkLWNoZWNrLXBvaW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQkFBb0I7QUFDcEIsc0NBQTJDO0FBQzNDLDZDQUEwRjtBQUMxRixnREFBK0Q7QUFDL0QsMERBQTJFO0FBRzNFLDRDQUFrRTtBQU1sRTtJQUE2QyxrREFBYTtJQUt4RCx3Q0FDRSxNQUF1QixFQUN2QixJQUFnQjtlQUVoQixrQkFBTSxNQUFNLEVBQUUsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNILGlGQUF3QyxHQUF4QztRQUNFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQyxJQUFJLFNBQVMsR0FBRyxJQUFJLGtCQUFXLEVBQUUsQ0FBQztRQUNsQyxJQUFJLE1BQU0sR0FBUSxJQUFJLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxrQkFBVyxDQUN2QixLQUFLLEVBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyw4QkFBOEIsRUFDN0MsTUFBTSxFQUNOO1lBQ0UsT0FBTyxFQUFFLFNBQVM7WUFDbEIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsWUFBWSxFQUFFLE1BQU07U0FDckIsQ0FBQyxDQUFDO1FBRUwsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ3JDLGtCQUFRLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLFlBQVksbUJBQVksRUFBMUIsQ0FBMEIsQ0FBQyxFQUMxQyxlQUFLLENBQUMsVUFBQyxFQUFFO1lBQ1AsT0FBTyxFQUEyRCxDQUFDO1FBQ3JFLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBQ0Q7O09BRUc7SUFDSCx5RUFBZ0MsR0FBaEM7UUFDRSxPQUFPLElBQUksQ0FBQyx3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Q0FBQztDQUFBLEFBcEhELENBQTZDLDBCQUFhLEdBb0h6RDtBQUtRLHdFQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIGFzIF9fQmFzZVNlcnZpY2UgfSBmcm9tICcuLi9iYXNlLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlDb25maWd1cmF0aW9uIGFzIF9fQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2FwaS1jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgU3RyaWN0SHR0cFJlc3BvbnNlIGFzIF9fU3RyaWN0SHR0cFJlc3BvbnNlIH0gZnJvbSAnLi4vc3RyaWN0LWh0dHAtcmVzcG9uc2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIF9fT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgYXMgX19tYXAsIGZpbHRlciBhcyBfX2ZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFVzZXJWYWxpZGF0ZWRDaGVja3BvaW50cyB9IGZyb20gJy4uL21vZGVscy91c2VyLXZhbGlkYXRlZC1jaGVja3BvaW50cyc7XHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmNsYXNzIFVzZXJWYWxpZGF0ZWRDaGVja1BvaW50U2VydmljZSBleHRlbmRzIF9fQmFzZVNlcnZpY2Uge1xyXG4gIHN0YXRpYyByZWFkb25seSBHZXRVc2VyVmFsaWRhdGVkQ2hlY2twb2ludHNJdGVtc1BhdGggPSAnL2FwaS9Vc2VyVmFsaWRhdGVkQ2hlY2tQb2ludCc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IFBvc3RVc2VyVmFsaWRhdGVkQ2hlY2twb2ludFBhdGggPSAnL2FwaS9Vc2VyVmFsaWRhdGVkQ2hlY2tQb2ludCc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IEdldFVzZXJWYWxpZGF0ZWRDaGVja3BvaW50c0l0ZW1QYXRoID0gJy9hcGkvVXNlclZhbGlkYXRlZENoZWNrUG9pbnQve1VzZXJJZH0nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNvbmZpZzogX19Db25maWd1cmF0aW9uLFxyXG4gICAgaHR0cDogSHR0cENsaWVudFxyXG4gICkge1xyXG4gICAgc3VwZXIoY29uZmlnLCBodHRwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIEdldFVzZXJWYWxpZGF0ZWRDaGVja3BvaW50c0l0ZW1zUmVzcG9uc2UoKTogX19PYnNlcnZhYmxlPF9fU3RyaWN0SHR0cFJlc3BvbnNlPEFycmF5PFVzZXJWYWxpZGF0ZWRDaGVja3BvaW50cz4+PiB7XHJcbiAgICBsZXQgX19wYXJhbXMgPSB0aGlzLm5ld1BhcmFtcygpO1xyXG4gICAgbGV0IF9faGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG4gICAgbGV0IF9fYm9keTogYW55ID0gbnVsbDtcclxuICAgIGxldCByZXEgPSBuZXcgSHR0cFJlcXVlc3Q8YW55PihcclxuICAgICAgJ0dFVCcsXHJcbiAgICAgIHRoaXMucm9vdFVybCArIGAvYXBpL1VzZXJWYWxpZGF0ZWRDaGVja1BvaW50YCxcclxuICAgICAgX19ib2R5LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczogX19oZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczogX19wYXJhbXMsXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbidcclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0PGFueT4ocmVxKS5waXBlKFxyXG4gICAgICBfX2ZpbHRlcihfciA9PiBfciBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSksXHJcbiAgICAgIF9fbWFwKChfcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBfciBhcyBfX1N0cmljdEh0dHBSZXNwb25zZTxBcnJheTxVc2VyVmFsaWRhdGVkQ2hlY2twb2ludHM+PjtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIEdldFVzZXJWYWxpZGF0ZWRDaGVja3BvaW50c0l0ZW1zKCk6IF9fT2JzZXJ2YWJsZTxBcnJheTxVc2VyVmFsaWRhdGVkQ2hlY2twb2ludHM+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5HZXRVc2VyVmFsaWRhdGVkQ2hlY2twb2ludHNJdGVtc1Jlc3BvbnNlKCkucGlwZShcclxuICAgICAgX19tYXAoX3IgPT4gX3IuYm9keSBhcyBBcnJheTxVc2VyVmFsaWRhdGVkQ2hlY2twb2ludHM+KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBpdGVtIHVuZGVmaW5lZFxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIFBvc3RVc2VyVmFsaWRhdGVkQ2hlY2twb2ludFJlc3BvbnNlKGl0ZW0/OiBVc2VyVmFsaWRhdGVkQ2hlY2twb2ludHMpOiBfX09ic2VydmFibGU8X19TdHJpY3RIdHRwUmVzcG9uc2U8VXNlclZhbGlkYXRlZENoZWNrcG9pbnRzPj4ge1xyXG4gICAgbGV0IF9fcGFyYW1zID0gdGhpcy5uZXdQYXJhbXMoKTtcclxuICAgIGxldCBfX2hlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgIGxldCBfX2JvZHk6IGFueSA9IG51bGw7XHJcbiAgICBfX2JvZHkgPSBpdGVtO1xyXG4gICAgbGV0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdDxhbnk+KFxyXG4gICAgICAnUE9TVCcsXHJcbiAgICAgIHRoaXMucm9vdFVybCArIGAvYXBpL1VzZXJWYWxpZGF0ZWRDaGVja1BvaW50YCxcclxuICAgICAgX19ib2R5LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczogX19oZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczogX19wYXJhbXMsXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbidcclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0PGFueT4ocmVxKS5waXBlKFxyXG4gICAgICBfX2ZpbHRlcihfciA9PiBfciBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSksXHJcbiAgICAgIF9fbWFwKChfcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBfciBhcyBfX1N0cmljdEh0dHBSZXNwb25zZTxVc2VyVmFsaWRhdGVkQ2hlY2twb2ludHM+O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGl0ZW0gdW5kZWZpbmVkXHJcbiAgICogQHJldHVybiBTdWNjZXNzXHJcbiAgICovXHJcbiAgUG9zdFVzZXJWYWxpZGF0ZWRDaGVja3BvaW50KGl0ZW0/OiBVc2VyVmFsaWRhdGVkQ2hlY2twb2ludHMpOiBfX09ic2VydmFibGU8VXNlclZhbGlkYXRlZENoZWNrcG9pbnRzPiB7XHJcbiAgICByZXR1cm4gdGhpcy5Qb3N0VXNlclZhbGlkYXRlZENoZWNrcG9pbnRSZXNwb25zZShpdGVtKS5waXBlKFxyXG4gICAgICBfX21hcChfciA9PiBfci5ib2R5IGFzIFVzZXJWYWxpZGF0ZWRDaGVja3BvaW50cylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gVXNlcklkIHVuZGVmaW5lZFxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIEdldFVzZXJWYWxpZGF0ZWRDaGVja3BvaW50c0l0ZW1SZXNwb25zZShVc2VySWQ6IG51bWJlcik6IF9fT2JzZXJ2YWJsZTxfX1N0cmljdEh0dHBSZXNwb25zZTxBcnJheTxVc2VyVmFsaWRhdGVkQ2hlY2twb2ludHM+Pj4ge1xyXG4gICAgbGV0IF9fcGFyYW1zID0gdGhpcy5uZXdQYXJhbXMoKTtcclxuICAgIGxldCBfX2hlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgIGxldCBfX2JvZHk6IGFueSA9IG51bGw7XHJcblxyXG4gICAgbGV0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdDxhbnk+KFxyXG4gICAgICAnR0VUJyxcclxuICAgICAgdGhpcy5yb290VXJsICsgYC9hcGkvVXNlclZhbGlkYXRlZENoZWNrUG9pbnQvJHtVc2VySWR9YCxcclxuICAgICAgX19ib2R5LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczogX19oZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczogX19wYXJhbXMsXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbidcclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0PGFueT4ocmVxKS5waXBlKFxyXG4gICAgICBfX2ZpbHRlcihfciA9PiBfciBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSksXHJcbiAgICAgIF9fbWFwKChfcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBfciBhcyBfX1N0cmljdEh0dHBSZXNwb25zZTxBcnJheTxVc2VyVmFsaWRhdGVkQ2hlY2twb2ludHM+PjtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBVc2VySWQgdW5kZWZpbmVkXHJcbiAgICogQHJldHVybiBTdWNjZXNzXHJcbiAgICovXHJcbiAgR2V0VXNlclZhbGlkYXRlZENoZWNrcG9pbnRzSXRlbShVc2VySWQ6IG51bWJlcik6IF9fT2JzZXJ2YWJsZTxBcnJheTxVc2VyVmFsaWRhdGVkQ2hlY2twb2ludHM+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5HZXRVc2VyVmFsaWRhdGVkQ2hlY2twb2ludHNJdGVtUmVzcG9uc2UoVXNlcklkKS5waXBlKFxyXG4gICAgICBfX21hcChfciA9PiBfci5ib2R5IGFzIEFycmF5PFVzZXJWYWxpZGF0ZWRDaGVja3BvaW50cz4pXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlIFVzZXJWYWxpZGF0ZWRDaGVja1BvaW50U2VydmljZSB7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFVzZXJWYWxpZGF0ZWRDaGVja1BvaW50U2VydmljZSB9XHJcbiJdfQ==