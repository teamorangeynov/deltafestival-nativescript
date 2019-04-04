"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var base_service_1 = require("../base-service");
var api_configuration_1 = require("../api-configuration");
var operators_1 = require("rxjs/operators");
var RankingService = /** @class */ (function (_super) {
    __extends(RankingService, _super);
    function RankingService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @param params The `RankingService.RankingBetweenTeamParams` containing the following parameters:
     *
     * - `id`:
     *
     * - `count`:
     */
    RankingService.prototype.RankingBetweenTeamResponse = function (params) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        __body = params.count;
        var req = new http_1.HttpRequest('GET', this.rootUrl + ("/api/Ranking/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(operators_1.filter(function (_r) { return _r instanceof http_1.HttpResponse; }), operators_1.map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `RankingService.RankingBetweenTeamParams` containing the following parameters:
     *
     * - `id`:
     *
     * - `count`:
     */
    RankingService.prototype.RankingBetweenTeam = function (params) {
        return this.RankingBetweenTeamResponse(params).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    RankingService.prototype.RankingResponse = function () {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + "/api/Ranking", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(operators_1.filter(function (_r) { return _r instanceof http_1.HttpResponse; }), operators_1.map(function (_r) {
            return _r;
        }));
    };
    RankingService.prototype.Ranking = function () {
        return this.RankingResponse().pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    RankingService.RankingBetweenTeamPath = '/api/Ranking/{id}';
    RankingService.RankingPath = '/api/Ranking';
    RankingService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [api_configuration_1.ApiConfiguration,
            http_1.HttpClient])
    ], RankingService);
    return RankingService;
}(base_service_1.BaseService));
exports.RankingService = RankingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFua2luZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFua2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0JBQW9CO0FBQ3BCLHNDQUEyQztBQUMzQyw2Q0FBMEY7QUFDMUYsZ0RBQStEO0FBQy9ELDBEQUEyRTtBQUczRSw0Q0FBa0U7QUFLbEU7SUFBNkIsa0NBQWE7SUFJeEMsd0JBQ0UsTUFBdUIsRUFDdkIsSUFBZ0I7ZUFFaEIsa0JBQU0sTUFBTSxFQUFFLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsbURBQTBCLEdBQTFCLFVBQTJCLE1BQStDO1FBQ3hFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQyxJQUFJLFNBQVMsR0FBRyxJQUFJLGtCQUFXLEVBQUUsQ0FBQztRQUNsQyxJQUFJLE1BQU0sR0FBUSxJQUFJLENBQUM7UUFFdkIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxrQkFBVyxDQUN2QixLQUFLLEVBQ0wsSUFBSSxDQUFDLE9BQU8sSUFBRyxrQkFBZ0IsTUFBTSxDQUFDLEVBQUksQ0FBQSxFQUMxQyxNQUFNLEVBQ047WUFDRSxPQUFPLEVBQUUsU0FBUztZQUNsQixNQUFNLEVBQUUsUUFBUTtZQUNoQixZQUFZLEVBQUUsTUFBTTtTQUNyQixDQUFDLENBQUM7UUFFTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDckMsa0JBQVEsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsWUFBWSxtQkFBWSxFQUExQixDQUEwQixDQUFDLEVBQzFDLGVBQUssQ0FBQyxVQUFDLEVBQUU7WUFDUCxPQUFPLEVBQWdDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFDRDs7Ozs7O09BTUc7SUFDSCwyQ0FBa0IsR0FBbEIsVUFBbUIsTUFBK0M7UUFDaEUsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUNqRCxlQUFLLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsSUFBWSxFQUFmLENBQWUsQ0FBQyxDQUM3QixDQUFDO0lBQ0osQ0FBQztJQUNELHdDQUFlLEdBQWY7UUFDRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxrQkFBVyxFQUFFLENBQUM7UUFDbEMsSUFBSSxNQUFNLEdBQVEsSUFBSSxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLElBQUksa0JBQVcsQ0FDdkIsS0FBSyxFQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxFQUM3QixNQUFNLEVBQ047WUFDRSxPQUFPLEVBQUUsU0FBUztZQUNsQixNQUFNLEVBQUUsUUFBUTtZQUNoQixZQUFZLEVBQUUsTUFBTTtTQUNyQixDQUFDLENBQUM7UUFFTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDckMsa0JBQVEsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsWUFBWSxtQkFBWSxFQUExQixDQUEwQixDQUFDLEVBQzFDLGVBQUssQ0FBQyxVQUFDLEVBQUU7WUFDUCxPQUFPLEVBQWdDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFBRSxnQ0FBTyxHQUFQO1FBQ0QsT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUNoQyxlQUFLLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsSUFBWSxFQUFmLENBQWUsQ0FBQyxDQUM3QixDQUFDO0lBQ0osQ0FBQztJQTVFZSxxQ0FBc0IsR0FBRyxtQkFBbUIsQ0FBQztJQUM3QywwQkFBVyxHQUFHLGNBQWMsQ0FBQztJQUZ6QyxjQUFjO1FBSG5CLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQU1VLG9DQUFlO1lBQ2pCLGlCQUFVO09BTmQsY0FBYyxDQThFbkI7SUFBRCxxQkFBQztDQUFBLEFBOUVELENBQTZCLDBCQUFhLEdBOEV6QztBQWFRLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQmFzZVNlcnZpY2UgYXMgX19CYXNlU2VydmljZSB9IGZyb20gJy4uL2Jhc2Utc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaUNvbmZpZ3VyYXRpb24gYXMgX19Db25maWd1cmF0aW9uIH0gZnJvbSAnLi4vYXBpLWNvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBTdHJpY3RIdHRwUmVzcG9uc2UgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2UgfSBmcm9tICcuLi9zdHJpY3QtaHR0cC1yZXNwb25zZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgX19PYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCBhcyBfX21hcCwgZmlsdGVyIGFzIF9fZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuY2xhc3MgUmFua2luZ1NlcnZpY2UgZXh0ZW5kcyBfX0Jhc2VTZXJ2aWNlIHtcclxuICBzdGF0aWMgcmVhZG9ubHkgUmFua2luZ0JldHdlZW5UZWFtUGF0aCA9ICcvYXBpL1Jhbmtpbmcve2lkfSc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IFJhbmtpbmdQYXRoID0gJy9hcGkvUmFua2luZyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY29uZmlnOiBfX0NvbmZpZ3VyYXRpb24sXHJcbiAgICBodHRwOiBIdHRwQ2xpZW50XHJcbiAgKSB7XHJcbiAgICBzdXBlcihjb25maWcsIGh0dHApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHBhcmFtcyBUaGUgYFJhbmtpbmdTZXJ2aWNlLlJhbmtpbmdCZXR3ZWVuVGVhbVBhcmFtc2AgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6XHJcbiAgICpcclxuICAgKiAtIGBpZGA6XHJcbiAgICpcclxuICAgKiAtIGBjb3VudGA6XHJcbiAgICovXHJcbiAgUmFua2luZ0JldHdlZW5UZWFtUmVzcG9uc2UocGFyYW1zOiBSYW5raW5nU2VydmljZS5SYW5raW5nQmV0d2VlblRlYW1QYXJhbXMpOiBfX09ic2VydmFibGU8X19TdHJpY3RIdHRwUmVzcG9uc2U8bnVsbD4+IHtcclxuICAgIGxldCBfX3BhcmFtcyA9IHRoaXMubmV3UGFyYW1zKCk7XHJcbiAgICBsZXQgX19oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBsZXQgX19ib2R5OiBhbnkgPSBudWxsO1xyXG5cclxuICAgIF9fYm9keSA9IHBhcmFtcy5jb3VudDtcclxuICAgIGxldCByZXEgPSBuZXcgSHR0cFJlcXVlc3Q8YW55PihcclxuICAgICAgJ0dFVCcsXHJcbiAgICAgIHRoaXMucm9vdFVybCArIGAvYXBpL1JhbmtpbmcvJHtwYXJhbXMuaWR9YCxcclxuICAgICAgX19ib2R5LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczogX19oZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczogX19wYXJhbXMsXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbidcclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0PGFueT4ocmVxKS5waXBlKFxyXG4gICAgICBfX2ZpbHRlcihfciA9PiBfciBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSksXHJcbiAgICAgIF9fbWFwKChfcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBfciBhcyBfX1N0cmljdEh0dHBSZXNwb25zZTxudWxsPjtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBwYXJhbXMgVGhlIGBSYW5raW5nU2VydmljZS5SYW5raW5nQmV0d2VlblRlYW1QYXJhbXNgIGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxyXG4gICAqXHJcbiAgICogLSBgaWRgOlxyXG4gICAqXHJcbiAgICogLSBgY291bnRgOlxyXG4gICAqL1xyXG4gIFJhbmtpbmdCZXR3ZWVuVGVhbShwYXJhbXM6IFJhbmtpbmdTZXJ2aWNlLlJhbmtpbmdCZXR3ZWVuVGVhbVBhcmFtcyk6IF9fT2JzZXJ2YWJsZTxudWxsPiB7XHJcbiAgICByZXR1cm4gdGhpcy5SYW5raW5nQmV0d2VlblRlYW1SZXNwb25zZShwYXJhbXMpLnBpcGUoXHJcbiAgICAgIF9fbWFwKF9yID0+IF9yLmJvZHkgYXMgbnVsbClcclxuICAgICk7XHJcbiAgfVxyXG4gIFJhbmtpbmdSZXNwb25zZSgpOiBfX09ic2VydmFibGU8X19TdHJpY3RIdHRwUmVzcG9uc2U8bnVsbD4+IHtcclxuICAgIGxldCBfX3BhcmFtcyA9IHRoaXMubmV3UGFyYW1zKCk7XHJcbiAgICBsZXQgX19oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBsZXQgX19ib2R5OiBhbnkgPSBudWxsO1xyXG4gICAgbGV0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdDxhbnk+KFxyXG4gICAgICAnR0VUJyxcclxuICAgICAgdGhpcy5yb290VXJsICsgYC9hcGkvUmFua2luZ2AsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8bnVsbD47XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH0gIFJhbmtpbmcoKTogX19PYnNlcnZhYmxlPG51bGw+IHtcclxuICAgIHJldHVybiB0aGlzLlJhbmtpbmdSZXNwb25zZSgpLnBpcGUoXHJcbiAgICAgIF9fbWFwKF9yID0+IF9yLmJvZHkgYXMgbnVsbClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUgUmFua2luZ1NlcnZpY2Uge1xyXG5cclxuICAvKipcclxuICAgKiBQYXJhbWV0ZXJzIGZvciBSYW5raW5nQmV0d2VlblRlYW1cclxuICAgKi9cclxuICBleHBvcnQgaW50ZXJmYWNlIFJhbmtpbmdCZXR3ZWVuVGVhbVBhcmFtcyB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgY291bnQ/OiBudW1iZXI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBSYW5raW5nU2VydmljZSB9XHJcbiJdfQ==