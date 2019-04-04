"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var base_service_1 = require("../base-service");
var api_configuration_1 = require("../api-configuration");
var operators_1 = require("rxjs/operators");
var TeamCheckpointService = /** @class */ (function (_super) {
    __extends(TeamCheckpointService, _super);
    function TeamCheckpointService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @return Success
     */
    TeamCheckpointService.prototype.GetTeamCheckpointResponse = function () {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + "/api/TeamCheckpoint", __body, {
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
    TeamCheckpointService.prototype.GetTeamCheckpoint = function () {
        return this.GetTeamCheckpointResponse().pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param item undefined
     * @return Success
     */
    TeamCheckpointService.prototype.PostTeamCheckpointResponse = function (item) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        __body = item;
        var req = new http_1.HttpRequest('POST', this.rootUrl + "/api/TeamCheckpoint", __body, {
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
    TeamCheckpointService.prototype.PostTeamCheckpoint = function (item) {
        return this.PostTeamCheckpointResponse(item).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param TeamId undefined
     * @return Success
     */
    TeamCheckpointService.prototype.GetTeamCheckpoint_1Response = function (TeamId) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + ("/api/TeamCheckpoint/teamId/" + TeamId), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(operators_1.filter(function (_r) { return _r instanceof http_1.HttpResponse; }), operators_1.map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param TeamId undefined
     * @return Success
     */
    TeamCheckpointService.prototype.GetTeamCheckpoint_1 = function (TeamId) {
        return this.GetTeamCheckpoint_1Response(TeamId).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param Id undefined
     * @return Success
     */
    TeamCheckpointService.prototype.GetTeamCheckpointByIdResponse = function (Id) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + ("/api/TeamCheckpoint/" + Id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(operators_1.filter(function (_r) { return _r instanceof http_1.HttpResponse; }), operators_1.map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param Id undefined
     * @return Success
     */
    TeamCheckpointService.prototype.GetTeamCheckpointById = function (Id) {
        return this.GetTeamCheckpointByIdResponse(Id).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `TeamCheckpointService.PutTeamCheckpointParams` containing the following parameters:
     *
     * - `id`:
     *
     * - `item`:
     */
    TeamCheckpointService.prototype.PutTeamCheckpointResponse = function (params) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        __body = params.item;
        var req = new http_1.HttpRequest('PUT', this.rootUrl + ("/api/TeamCheckpoint/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(operators_1.filter(function (_r) { return _r instanceof http_1.HttpResponse; }), operators_1.map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `TeamCheckpointService.PutTeamCheckpointParams` containing the following parameters:
     *
     * - `id`:
     *
     * - `item`:
     */
    TeamCheckpointService.prototype.PutTeamCheckpoint = function (params) {
        return this.PutTeamCheckpointResponse(params).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param id undefined
     */
    TeamCheckpointService.prototype.DeleteTeamCheckpointResponse = function (id) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('DELETE', this.rootUrl + ("/api/TeamCheckpoint/" + id), __body, {
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
    TeamCheckpointService.prototype.DeleteTeamCheckpoint = function (id) {
        return this.DeleteTeamCheckpointResponse(id).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    TeamCheckpointService.GetTeamCheckpointPath = '/api/TeamCheckpoint';
    TeamCheckpointService.PostTeamCheckpointPath = '/api/TeamCheckpoint';
    TeamCheckpointService.GetTeamCheckpoint_1Path = '/api/TeamCheckpoint/teamId/{TeamId}';
    TeamCheckpointService.GetTeamCheckpointByIdPath = '/api/TeamCheckpoint/{Id}';
    TeamCheckpointService.PutTeamCheckpointPath = '/api/TeamCheckpoint/{id}';
    TeamCheckpointService.DeleteTeamCheckpointPath = '/api/TeamCheckpoint/{id}';
    TeamCheckpointService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [api_configuration_1.ApiConfiguration,
            http_1.HttpClient])
    ], TeamCheckpointService);
    return TeamCheckpointService;
}(base_service_1.BaseService));
exports.TeamCheckpointService = TeamCheckpointService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbS1jaGVja3BvaW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZWFtLWNoZWNrcG9pbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9CQUFvQjtBQUNwQixzQ0FBMkM7QUFDM0MsNkNBQTBGO0FBQzFGLGdEQUErRDtBQUMvRCwwREFBMkU7QUFHM0UsNENBQWtFO0FBTWxFO0lBQW9DLHlDQUFhO0lBUS9DLCtCQUNFLE1BQXVCLEVBQ3ZCLElBQWdCO2VBRWhCLGtCQUFNLE1BQU0sRUFBRSxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0gseURBQXlCLEdBQXpCO1FBQ0UsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hDLElBQUksU0FBUyxHQUFHLElBQUksa0JBQVcsRUFBRSxDQUFDO1FBQ2xDLElBQUksTUFBTSxHQUFRLElBQUksQ0FBQztRQUN2QixJQUFJLEdBQUcsR0FBRyxJQUFJLGtCQUFXLENBQ3ZCLEtBQUssRUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFxQixFQUNwQyxNQUFNLEVBQ047WUFDRSxPQUFPLEVBQUUsU0FBUztZQUNsQixNQUFNLEVBQUUsUUFBUTtZQUNoQixZQUFZLEVBQUUsTUFBTTtTQUNyQixDQUFDLENBQUM7UUFFTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDckMsa0JBQVEsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsWUFBWSxtQkFBWSxFQUExQixDQUEwQixDQUFDLEVBQzFDLGVBQUssQ0FBQyxVQUFDLEVBQUU7WUFDUCxPQUFPLEVBQWtELENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFDRDs7T0FFRztJQUNILGlEQUFpQixHQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUMsSUFBSSxD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T0FBTyxFQUFnQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBQ0Q7O09BRUc7SUFDSCxvREFBb0IsR0FBcEIsVUFBcUIsRUFBVTtRQUM3QixPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQy9DLGVBQUssQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFZLEVBQWYsQ0FBZSxDQUFDLENBQzdCLENBQUM7SUFDSixDQUFDO0lBdE9lLDJDQUFxQixHQUFHLHFCQUFxQixDQUFDO0lBQzlDLDRDQUFzQixHQUFHLHFCQUFxQixDQUFDO0lBQy9DLDZDQUF1QixHQUFHLHFDQUFxQyxDQUFDO0lBQ2hFLCtDQUF5QixHQUFHLDBCQUEwQixDQUFDO0lBQ3ZELDJDQUFxQixHQUFHLDBCQUEwQixDQUFDO0lBQ25ELDhDQUF3QixHQUFHLDBCQUEwQixDQUFDO0lBTmxFLHFCQUFxQjtRQUgxQixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FVVSxvQ0FBZTtZQUNqQixpQkFBVTtPQVZkLHFCQUFxQixDQXdPMUI7SUFBRCw0QkFBQztDQUFBLEFBeE9ELENBQW9DLDBCQUFhLEdBd09oRDtBQWFRLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIGFzIF9fQmFzZVNlcnZpY2UgfSBmcm9tICcuLi9iYXNlLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlDb25maWd1cmF0aW9uIGFzIF9fQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2FwaS1jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgU3RyaWN0SHR0cFJlc3BvbnNlIGFzIF9fU3RyaWN0SHR0cFJlc3BvbnNlIH0gZnJvbSAnLi4vc3RyaWN0LWh0dHAtcmVzcG9uc2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIF9fT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgYXMgX19tYXAsIGZpbHRlciBhcyBfX2ZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFRlYW1DaGVja3BvaW50cyB9IGZyb20gJy4uL21vZGVscy90ZWFtLWNoZWNrcG9pbnRzJztcclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuY2xhc3MgVGVhbUNoZWNrcG9pbnRTZXJ2aWNlIGV4dGVuZHMgX19CYXNlU2VydmljZSB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IEdldFRlYW1DaGVja3BvaW50UGF0aCA9ICcvYXBpL1RlYW1DaGVja3BvaW50JztcclxuICBzdGF0aWMgcmVhZG9ubHkgUG9zdFRlYW1DaGVja3BvaW50UGF0aCA9ICcvYXBpL1RlYW1DaGVja3BvaW50JztcclxuICBzdGF0aWMgcmVhZG9ubHkgR2V0VGVhbUNoZWNrcG9pbnRfMVBhdGggPSAnL2FwaS9UZWFtQ2hlY2twb2ludC90ZWFtSWQve1RlYW1JZH0nO1xyXG4gIHN0YXRpYyByZWFkb25seSBHZXRUZWFtQ2hlY2twb2ludEJ5SWRQYXRoID0gJy9hcGkvVGVhbUNoZWNrcG9pbnQve0lkfSc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IFB1dFRlYW1DaGVja3BvaW50UGF0aCA9ICcvYXBpL1RlYW1DaGVja3BvaW50L3tpZH0nO1xyXG4gIHN0YXRpYyByZWFkb25seSBEZWxldGVUZWFtQ2hlY2twb2ludFBhdGggPSAnL2FwaS9UZWFtQ2hlY2twb2ludC97aWR9JztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjb25maWc6IF9fQ29uZmlndXJhdGlvbixcclxuICAgIGh0dHA6IEh0dHBDbGllbnRcclxuICApIHtcclxuICAgIHN1cGVyKGNvbmZpZywgaHR0cCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJuIFN1Y2Nlc3NcclxuICAgKi9cclxuICBHZXRUZWFtQ2hlY2twb2ludFJlc3BvbnNlKCk6IF9fT2JzZXJ2YWJsZTxfX1N0cmljdEh0dHBSZXNwb25zZTxBcnJheTxUZWFtQ2hlY2twb2ludHM+Pj4ge1xyXG4gICAgbGV0IF9fcGFyYW1zID0gdGhpcy5uZXdQYXJhbXMoKTtcclxuICAgIGxldCBfX2hlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgIGxldCBfX2JvZHk6IGFueSA9IG51bGw7XHJcbiAgICBsZXQgcmVxID0gbmV3IEh0dHBSZXF1ZXN0PGFueT4oXHJcbiAgICAgICdHRVQnLFxyXG4gICAgICB0aGlzLnJvb3RVcmwgKyBgL2FwaS9UZWFtQ2hlY2twb2ludGAsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8QXJyYXk8VGVhbUNoZWNrcG9pbnRzPj47XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAcmV0dXJuIFN1Y2Nlc3NcclxuICAgKi9cclxuICBHZXRUZWFtQ2hlY2twb2ludCgpOiBfX09ic2VydmFibGU8QXJyYXk8VGVhbUNoZWNrcG9pbnRzPj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuR2V0VGVhbUNoZWNrcG9pbnRSZXNwb25zZSgpLnBpcGUoXHJcbiAgICAgIF9fbWFwKF9yID0+IF9yLmJvZHkgYXMgQXJyYXk8VGVhbUNoZWNrcG9pbnRzPilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gaXRlbSB1bmRlZmluZWRcclxuICAgKiBAcmV0dXJuIFN1Y2Nlc3NcclxuICAgKi9cclxuICBQb3N0VGVhbUNoZWNrcG9pbnRSZXNwb25zZShpdGVtPzogVGVhbUNoZWNrcG9pbnRzKTogX19PYnNlcnZhYmxlPF9fU3RyaWN0SHR0cFJlc3BvbnNlPFRlYW1DaGVja3BvaW50cz4+IHtcclxuICAgIGxldCBfX3BhcmFtcyA9IHRoaXMubmV3UGFyYW1zKCk7XHJcbiAgICBsZXQgX19oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBsZXQgX19ib2R5OiBhbnkgPSBudWxsO1xyXG4gICAgX19ib2R5ID0gaXRlbTtcclxuICAgIGxldCByZXEgPSBuZXcgSHR0cFJlcXVlc3Q8YW55PihcclxuICAgICAgJ1BPU1QnLFxyXG4gICAgICB0aGlzLnJvb3RVcmwgKyBgL2FwaS9UZWFtQ2hlY2twb2ludGAsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8VGVhbUNoZWNrcG9pbnRzPjtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBpdGVtIHVuZGVmaW5lZFxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIFBvc3RUZWFtQ2hlY2twb2ludChpdGVtPzogVGVhbUNoZWNrcG9pbnRzKTogX19PYnNlcnZhYmxlPFRlYW1DaGVja3BvaW50cz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuUG9zdFRlYW1DaGVja3BvaW50UmVzcG9uc2UoaXRlbSkucGlwZShcclxuICAgICAgX19tYXAoX3IgPT4gX3IuYm9keSBhcyBUZWFtQ2hlY2twb2ludHMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIFRlYW1JZCB1bmRlZmluZWRcclxuICAgKiBAcmV0dXJuIFN1Y2Nlc3NcclxuICAgKi9cclxuICBHZXRUZWFtQ2hlY2twb2ludF8xUmVzcG9uc2UoVGVhbUlkOiBudW1iZXIpOiBfX09ic2VydmFibGU8X19TdHJpY3RIdHRwUmVzcG9uc2U8QXJyYXk8VGVhbUNoZWNrcG9pbnRzPj4+IHtcclxuICAgIGxldCBfX3BhcmFtcyA9IHRoaXMubmV3UGFyYW1zKCk7XHJcbiAgICBsZXQgX19oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBsZXQgX19ib2R5OiBhbnkgPSBudWxsO1xyXG5cclxuICAgIGxldCByZXEgPSBuZXcgSHR0cFJlcXVlc3Q8YW55PihcclxuICAgICAgJ0dFVCcsXHJcbiAgICAgIHRoaXMucm9vdFVybCArIGAvYXBpL1RlYW1DaGVja3BvaW50L3RlYW1JZC8ke1RlYW1JZH1gLFxyXG4gICAgICBfX2JvZHksXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiBfX2hlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiBfX3BhcmFtcyxcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3Q8YW55PihyZXEpLnBpcGUoXHJcbiAgICAgIF9fZmlsdGVyKF9yID0+IF9yIGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSxcclxuICAgICAgX19tYXAoKF9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIF9yIGFzIF9fU3RyaWN0SHR0cFJlc3BvbnNlPEFycmF5PFRlYW1DaGVja3BvaW50cz4+O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIFRlYW1JZCB1bmRlZmluZWRcclxuICAgKiBAcmV0dXJuIFN1Y2Nlc3NcclxuICAgKi9cclxuICBHZXRUZWFtQ2hlY2twb2ludF8xKFRlYW1JZDogbnVtYmVyKTogX19PYnNlcnZhYmxlPEFycmF5PFRlYW1DaGVja3BvaW50cz4+IHtcclxuICAgIHJldHVybiB0aGlzLkdldFRlYW1DaGVja3BvaW50XzFSZXNwb25zZShUZWFtSWQpLnBpcGUoXHJcbiAgICAgIF9fbWFwKF9yID0+IF9yLmJvZHkgYXMgQXJyYXk8VGVhbUNoZWNrcG9pbnRzPilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gSWQgdW5kZWZpbmVkXHJcbiAgICogQHJldHVybiBTdWNjZXNzXHJcbiAgICovXHJcbiAgR2V0VGVhbUNoZWNrcG9pbnRCeUlkUmVzcG9uc2UoSWQ6IG51bWJlcik6IF9fT2JzZXJ2YWJsZTxfX1N0cmljdEh0dHBSZXNwb25zZTxUZWFtQ2hlY2twb2ludHM+PiB7XHJcbiAgICBsZXQgX19wYXJhbXMgPSB0aGlzLm5ld1BhcmFtcygpO1xyXG4gICAgbGV0IF9faGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG4gICAgbGV0IF9fYm9keTogYW55ID0gbnVsbDtcclxuXHJcbiAgICBsZXQgcmVxID0gbmV3IEh0dHBSZXF1ZXN0PGFueT4oXHJcbiAgICAgICdHRVQnLFxyXG4gICAgICB0aGlzLnJvb3RVcmwgKyBgL2FwaS9UZWFtQ2hlY2twb2ludC8ke0lkfWAsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8VGVhbUNoZWNrcG9pbnRzPjtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBJZCB1bmRlZmluZWRcclxuICAgKiBAcmV0dXJuIFN1Y2Nlc3NcclxuICAgKi9cclxuICBHZXRUZWFtQ2hlY2twb2ludEJ5SWQoSWQ6IG51bWJlcik6IF9fT2JzZXJ2YWJsZTxUZWFtQ2hlY2twb2ludHM+IHtcclxuICAgIHJldHVybiB0aGlzLkdldFRlYW1DaGVja3BvaW50QnlJZFJlc3BvbnNlKElkKS5waXBlKFxyXG4gICAgICBfX21hcChfciA9PiBfci5ib2R5IGFzIFRlYW1DaGVja3BvaW50cylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gcGFyYW1zIFRoZSBgVGVhbUNoZWNrcG9pbnRTZXJ2aWNlLlB1dFRlYW1DaGVja3BvaW50UGFyYW1zYCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcclxuICAgKlxyXG4gICAqIC0gYGlkYDpcclxuICAgKlxyXG4gICAqIC0gYGl0ZW1gOlxyXG4gICAqL1xyXG4gIFB1dFRlYW1DaGVja3BvaW50UmVzcG9uc2UocGFyYW1zOiBUZWFtQ2hlY2twb2ludFNlcnZpY2UuUHV0VGVhbUNoZWNrcG9pbnRQYXJhbXMpOiBfX09ic2VydmFibGU8X19TdHJpY3RIdHRwUmVzcG9uc2U8bnVsbD4+IHtcclxuICAgIGxldCBfX3BhcmFtcyA9IHRoaXMubmV3UGFyYW1zKCk7XHJcbiAgICBsZXQgX19oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBsZXQgX19ib2R5OiBhbnkgPSBudWxsO1xyXG5cclxuICAgIF9fYm9keSA9IHBhcmFtcy5pdGVtO1xyXG4gICAgbGV0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdDxhbnk+KFxyXG4gICAgICAnUFVUJyxcclxuICAgICAgdGhpcy5yb290VXJsICsgYC9hcGkvVGVhbUNoZWNrcG9pbnQvJHtwYXJhbXMuaWR9YCxcclxuICAgICAgX19ib2R5LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczogX19oZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczogX19wYXJhbXMsXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbidcclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0PGFueT4ocmVxKS5waXBlKFxyXG4gICAgICBfX2ZpbHRlcihfciA9PiBfciBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSksXHJcbiAgICAgIF9fbWFwKChfcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBfciBhcyBfX1N0cmljdEh0dHBSZXNwb25zZTxudWxsPjtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBwYXJhbXMgVGhlIGBUZWFtQ2hlY2twb2ludFNlcnZpY2UuUHV0VGVhbUNoZWNrcG9pbnRQYXJhbXNgIGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxyXG4gICAqXHJcbiAgICogLSBgaWRgOlxyXG4gICAqXHJcbiAgICogLSBgaXRlbWA6XHJcbiAgICovXHJcbiAgUHV0VGVhbUNoZWNrcG9pbnQocGFyYW1zOiBUZWFtQ2hlY2twb2ludFNlcnZpY2UuUHV0VGVhbUNoZWNrcG9pbnRQYXJhbXMpOiBfX09ic2VydmFibGU8bnVsbD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuUHV0VGVhbUNoZWNrcG9pbnRSZXNwb25zZShwYXJhbXMpLnBpcGUoXHJcbiAgICAgIF9fbWFwKF9yID0+IF9yLmJvZHkgYXMgbnVsbClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gaWQgdW5kZWZpbmVkXHJcbiAgICovXHJcbiAgRGVsZXRlVGVhbUNoZWNrcG9pbnRSZXNwb25zZShpZDogbnVtYmVyKTogX19PYnNlcnZhYmxlPF9fU3RyaWN0SHR0cFJlc3BvbnNlPG51bGw+PiB7XHJcbiAgICBsZXQgX19wYXJhbXMgPSB0aGlzLm5ld1BhcmFtcygpO1xyXG4gICAgbGV0IF9faGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG4gICAgbGV0IF9fYm9keTogYW55ID0gbnVsbDtcclxuXHJcbiAgICBsZXQgcmVxID0gbmV3IEh0dHBSZXF1ZXN0PGFueT4oXHJcbiAgICAgICdERUxFVEUnLFxyXG4gICAgICB0aGlzLnJvb3RVcmwgKyBgL2FwaS9UZWFtQ2hlY2twb2ludC8ke2lkfWAsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8bnVsbD47XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAcGFyYW0gaWQgdW5kZWZpbmVkXHJcbiAgICovXHJcbiAgRGVsZXRlVGVhbUNoZWNrcG9pbnQoaWQ6IG51bWJlcik6IF9fT2JzZXJ2YWJsZTxudWxsPiB7XHJcbiAgICByZXR1cm4gdGhpcy5EZWxldGVUZWFtQ2hlY2twb2ludFJlc3BvbnNlKGlkKS5waXBlKFxyXG4gICAgICBfX21hcChfciA9PiBfci5ib2R5IGFzIG51bGwpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlIFRlYW1DaGVja3BvaW50U2VydmljZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhcmFtZXRlcnMgZm9yIFB1dFRlYW1DaGVja3BvaW50XHJcbiAgICovXHJcbiAgZXhwb3J0IGludGVyZmFjZSBQdXRUZWFtQ2hlY2twb2ludFBhcmFtcyB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgaXRlbT86IFRlYW1DaGVja3BvaW50cztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFRlYW1DaGVja3BvaW50U2VydmljZSB9XHJcbiJdfQ==