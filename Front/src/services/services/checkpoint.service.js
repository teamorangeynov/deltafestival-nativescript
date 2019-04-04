"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var base_service_1 = require("../base-service");
var api_configuration_1 = require("../api-configuration");
var operators_1 = require("rxjs/operators");
var CheckpointService = /** @class */ (function (_super) {
    __extends(CheckpointService, _super);
    function CheckpointService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @return Success
     */
    CheckpointService.prototype.GetCheckpointsItemsResponse = function () {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + "/api/Checkpoint", __body, {
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
    CheckpointService.prototype.GetCheckpointsItems = function () {
        return this.GetCheckpointsItemsResponse().pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param item undefined
     * @return Success
     */
    CheckpointService.prototype.PostCheckpointItemResponse = function (item) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        __body = item;
        var req = new http_1.HttpRequest('POST', this.rootUrl + "/api/Checkpoint", __body, {
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
    CheckpointService.prototype.PostCheckpointItem = function (item) {
        return this.PostCheckpointItemResponse(item).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param id undefined
     * @return Success
     */
    CheckpointService.prototype.GetCheckpointItemResponse = function (id) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + ("/api/Checkpoint/" + id), __body, {
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
    CheckpointService.prototype.GetCheckpointItem = function (id) {
        return this.GetCheckpointItemResponse(id).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `CheckpointService.PutCheckpointItemParams` containing the following parameters:
     *
     * - `id`:
     *
     * - `item`:
     */
    CheckpointService.prototype.PutCheckpointItemResponse = function (params) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        __body = params.item;
        var req = new http_1.HttpRequest('PUT', this.rootUrl + ("/api/Checkpoint/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(operators_1.filter(function (_r) { return _r instanceof http_1.HttpResponse; }), operators_1.map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `CheckpointService.PutCheckpointItemParams` containing the following parameters:
     *
     * - `id`:
     *
     * - `item`:
     */
    CheckpointService.prototype.PutCheckpointItem = function (params) {
        return this.PutCheckpointItemResponse(params).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param id undefined
     */
    CheckpointService.prototype.DeleteCheckpointItemResponse = function (id) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('DELETE', this.rootUrl + ("/api/Checkpoint/" + id), __body, {
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
    CheckpointService.prototype.DeleteCheckpointItem = function (id) {
        return this.DeleteCheckpointItemResponse(id).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    CheckpointService.GetCheckpointsItemsPath = '/api/Checkpoint';
    CheckpointService.PostCheckpointItemPath = '/api/Checkpoint';
    CheckpointService.GetCheckpointItemPath = '/api/Checkpoint/{id}';
    CheckpointService.PutCheckpointItemPath = '/api/Checkpoint/{id}';
    CheckpointService.DeleteCheckpointItemPath = '/api/Checkpoint/{id}';
    CheckpointService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [api_configuration_1.ApiConfiguration,
            http_1.HttpClient])
    ], CheckpointService);
    return CheckpointService;
}(base_service_1.BaseService));
exports.CheckpointService = CheckpointService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2twb2ludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hlY2twb2ludC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0JBQW9CO0FBQ3BCLHNDQUEyQztBQUMzQyw2Q0FBMEY7QUFDMUYsZ0RBQStEO0FBQy9ELDBEQUEyRTtBQUczRSw0Q0FBa0U7QUFNbEU7SUFBZ0MscUNBQWE7SUFPM0MsMkJBQ0UsTUFBdUIsRUFDdkIsSUFBZ0I7ZUFFaEIsa0JBQU0sTUFBTSxFQUFFLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSCx1REFBMkIsR0FBM0I7UUFDRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxrQkFBVyxFQUFFLENBQUM7UUFDbEMsSUFBSSxNQUFNLEdBQVEsSUFBSSxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLElBQUksa0JBQVcsQ0FDdkIsS0FBSyxFQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLEVBQ2hDLE1BQU0sRUFDTjtZQUNFLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLFlBQVksRUFBRSxNQUFNO1NBQ3JCLENBQUMsQ0FBQztRQUVMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNyQyxrQkFBUSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxZQUFZLG1CQUFZLEVBQTFCLENBQTBCLENBQUMsRUFDMUMsZUFBSyxDQUFDLFVBQUMsRUFBRTtZQUNQLE9BQU8sRUFBNkMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUNEOztPQUVHO0lBQ0gsK0NBQW1CLEdBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQyxJQUFJLENBQzVDLGVBQUss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QU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNyQyxrQkFBUSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxZQUFZLG1CQUFZLEVBQTFCLENBQTBCLENBQUMsRUFDMUMsZUFBSyxDQUFDLFVBQUMsRUFBRTtZQUNQLE9BQU8sRUFBZ0MsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUNEOztPQUVHO0lBQ0gsZ0RBQW9CLEdBQXBCLFVBQXFCLEVBQVU7UUFDN0IsT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUMvQyxlQUFLLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsSUFBWSxFQUFmLENBQWUsQ0FBQyxDQUM3QixDQUFDO0lBQ0osQ0FBQztJQWpNZSx5Q0FBdUIsR0FBRyxpQkFBaUIsQ0FBQztJQUM1Qyx3Q0FBc0IsR0FBRyxpQkFBaUIsQ0FBQztJQUMzQyx1Q0FBcUIsR0FBRyxzQkFBc0IsQ0FBQztJQUMvQyx1Q0FBcUIsR0FBRyxzQkFBc0IsQ0FBQztJQUMvQywwQ0FBd0IsR0FBRyxzQkFBc0IsQ0FBQztJQUw5RCxpQkFBaUI7UUFIdEIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBU1Usb0NBQWU7WUFDakIsaUJBQVU7T0FUZCxpQkFBaUIsQ0FtTXRCO0lBQUQsd0JBQUM7Q0FBQSxBQW5NRCxDQUFnQywwQkFBYSxHQW1NNUM7QUFhUSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBCYXNlU2VydmljZSBhcyBfX0Jhc2VTZXJ2aWNlIH0gZnJvbSAnLi4vYmFzZS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpQ29uZmlndXJhdGlvbiBhcyBfX0NvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9hcGktY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IFN0cmljdEh0dHBSZXNwb25zZSBhcyBfX1N0cmljdEh0dHBSZXNwb25zZSB9IGZyb20gJy4uL3N0cmljdC1odHRwLXJlc3BvbnNlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSBhcyBfX09ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIGFzIF9fbWFwLCBmaWx0ZXIgYXMgX19maWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBDaGVja3BvaW50IH0gZnJvbSAnLi4vbW9kZWxzL2NoZWNrcG9pbnQnO1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5jbGFzcyBDaGVja3BvaW50U2VydmljZSBleHRlbmRzIF9fQmFzZVNlcnZpY2Uge1xyXG4gIHN0YXRpYyByZWFkb25seSBHZXRDaGVja3BvaW50c0l0ZW1zUGF0aCA9ICcvYXBpL0NoZWNrcG9pbnQnO1xyXG4gIHN0YXRpYyByZWFkb25seSBQb3N0Q2hlY2twb2ludEl0ZW1QYXRoID0gJy9hcGkvQ2hlY2twb2ludCc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IEdldENoZWNrcG9pbnRJdGVtUGF0aCA9ICcvYXBpL0NoZWNrcG9pbnQve2lkfSc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IFB1dENoZWNrcG9pbnRJdGVtUGF0aCA9ICcvYXBpL0NoZWNrcG9pbnQve2lkfSc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IERlbGV0ZUNoZWNrcG9pbnRJdGVtUGF0aCA9ICcvYXBpL0NoZWNrcG9pbnQve2lkfSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY29uZmlnOiBfX0NvbmZpZ3VyYXRpb24sXHJcbiAgICBodHRwOiBIdHRwQ2xpZW50XHJcbiAgKSB7XHJcbiAgICBzdXBlcihjb25maWcsIGh0dHApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybiBTdWNjZXNzXHJcbiAgICovXHJcbiAgR2V0Q2hlY2twb2ludHNJdGVtc1Jlc3BvbnNlKCk6IF9fT2JzZXJ2YWJsZTxfX1N0cmljdEh0dHBSZXNwb25zZTxBcnJheTxDaGVja3BvaW50Pj4+IHtcclxuICAgIGxldCBfX3BhcmFtcyA9IHRoaXMubmV3UGFyYW1zKCk7XHJcbiAgICBsZXQgX19oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBsZXQgX19ib2R5OiBhbnkgPSBudWxsO1xyXG4gICAgbGV0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdDxhbnk+KFxyXG4gICAgICAnR0VUJyxcclxuICAgICAgdGhpcy5yb290VXJsICsgYC9hcGkvQ2hlY2twb2ludGAsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8QXJyYXk8Q2hlY2twb2ludD4+O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQHJldHVybiBTdWNjZXNzXHJcbiAgICovXHJcbiAgR2V0Q2hlY2twb2ludHNJdGVtcygpOiBfX09ic2VydmFibGU8QXJyYXk8Q2hlY2twb2ludD4+IHtcclxuICAgIHJldHVybiB0aGlzLkdldENoZWNrcG9pbnRzSXRlbXNSZXNwb25zZSgpLnBpcGUoXHJcbiAgICAgIF9fbWFwKF9yID0+IF9yLmJvZHkgYXMgQXJyYXk8Q2hlY2twb2ludD4pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGl0ZW0gdW5kZWZpbmVkXHJcbiAgICogQHJldHVybiBTdWNjZXNzXHJcbiAgICovXHJcbiAgUG9zdENoZWNrcG9pbnRJdGVtUmVzcG9uc2UoaXRlbT86IENoZWNrcG9pbnQpOiBfX09ic2VydmFibGU8X19TdHJpY3RIdHRwUmVzcG9uc2U8Q2hlY2twb2ludD4+IHtcclxuICAgIGxldCBfX3BhcmFtcyA9IHRoaXMubmV3UGFyYW1zKCk7XHJcbiAgICBsZXQgX19oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBsZXQgX19ib2R5OiBhbnkgPSBudWxsO1xyXG4gICAgX19ib2R5ID0gaXRlbTtcclxuICAgIGxldCByZXEgPSBuZXcgSHR0cFJlcXVlc3Q8YW55PihcclxuICAgICAgJ1BPU1QnLFxyXG4gICAgICB0aGlzLnJvb3RVcmwgKyBgL2FwaS9DaGVja3BvaW50YCxcclxuICAgICAgX19ib2R5LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczogX19oZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczogX19wYXJhbXMsXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbidcclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0PGFueT4ocmVxKS5waXBlKFxyXG4gICAgICBfX2ZpbHRlcihfciA9PiBfciBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSksXHJcbiAgICAgIF9fbWFwKChfcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBfciBhcyBfX1N0cmljdEh0dHBSZXNwb25zZTxDaGVja3BvaW50PjtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBpdGVtIHVuZGVmaW5lZFxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIFBvc3RDaGVja3BvaW50SXRlbShpdGVtPzogQ2hlY2twb2ludCk6IF9fT2JzZXJ2YWJsZTxDaGVja3BvaW50PiB7XHJcbiAgICByZXR1cm4gdGhpcy5Qb3N0Q2hlY2twb2ludEl0ZW1SZXNwb25zZShpdGVtKS5waXBlKFxyXG4gICAgICBfX21hcChfciA9PiBfci5ib2R5IGFzIENoZWNrcG9pbnQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGlkIHVuZGVmaW5lZFxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIEdldENoZWNrcG9pbnRJdGVtUmVzcG9uc2UoaWQ6IG51bWJlcik6IF9fT2JzZXJ2YWJsZTxfX1N0cmljdEh0dHBSZXNwb25zZTxDaGVja3BvaW50Pj4ge1xyXG4gICAgbGV0IF9fcGFyYW1zID0gdGhpcy5uZXdQYXJhbXMoKTtcclxuICAgIGxldCBfX2hlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgIGxldCBfX2JvZHk6IGFueSA9IG51bGw7XHJcblxyXG4gICAgbGV0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdDxhbnk+KFxyXG4gICAgICAnR0VUJyxcclxuICAgICAgdGhpcy5yb290VXJsICsgYC9hcGkvQ2hlY2twb2ludC8ke2lkfWAsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8Q2hlY2twb2ludD47XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAcGFyYW0gaWQgdW5kZWZpbmVkXHJcbiAgICogQHJldHVybiBTdWNjZXNzXHJcbiAgICovXHJcbiAgR2V0Q2hlY2twb2ludEl0ZW0oaWQ6IG51bWJlcik6IF9fT2JzZXJ2YWJsZTxDaGVja3BvaW50PiB7XHJcbiAgICByZXR1cm4gdGhpcy5HZXRDaGVja3BvaW50SXRlbVJlc3BvbnNlKGlkKS5waXBlKFxyXG4gICAgICBfX21hcChfciA9PiBfci5ib2R5IGFzIENoZWNrcG9pbnQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHBhcmFtcyBUaGUgYENoZWNrcG9pbnRTZXJ2aWNlLlB1dENoZWNrcG9pbnRJdGVtUGFyYW1zYCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcclxuICAgKlxyXG4gICAqIC0gYGlkYDpcclxuICAgKlxyXG4gICAqIC0gYGl0ZW1gOlxyXG4gICAqL1xyXG4gIFB1dENoZWNrcG9pbnRJdGVtUmVzcG9uc2UocGFyYW1zOiBDaGVja3BvaW50U2VydmljZS5QdXRDaGVja3BvaW50SXRlbVBhcmFtcyk6IF9fT2JzZXJ2YWJsZTxfX1N0cmljdEh0dHBSZXNwb25zZTxudWxsPj4ge1xyXG4gICAgbGV0IF9fcGFyYW1zID0gdGhpcy5uZXdQYXJhbXMoKTtcclxuICAgIGxldCBfX2hlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgIGxldCBfX2JvZHk6IGFueSA9IG51bGw7XHJcblxyXG4gICAgX19ib2R5ID0gcGFyYW1zLml0ZW07XHJcbiAgICBsZXQgcmVxID0gbmV3IEh0dHBSZXF1ZXN0PGFueT4oXHJcbiAgICAgICdQVVQnLFxyXG4gICAgICB0aGlzLnJvb3RVcmwgKyBgL2FwaS9DaGVja3BvaW50LyR7cGFyYW1zLmlkfWAsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8bnVsbD47XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAcGFyYW0gcGFyYW1zIFRoZSBgQ2hlY2twb2ludFNlcnZpY2UuUHV0Q2hlY2twb2ludEl0ZW1QYXJhbXNgIGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxyXG4gICAqXHJcbiAgICogLSBgaWRgOlxyXG4gICAqXHJcbiAgICogLSBgaXRlbWA6XHJcbiAgICovXHJcbiAgUHV0Q2hlY2twb2ludEl0ZW0ocGFyYW1zOiBDaGVja3BvaW50U2VydmljZS5QdXRDaGVja3BvaW50SXRlbVBhcmFtcyk6IF9fT2JzZXJ2YWJsZTxudWxsPiB7XHJcbiAgICByZXR1cm4gdGhpcy5QdXRDaGVja3BvaW50SXRlbVJlc3BvbnNlKHBhcmFtcykucGlwZShcclxuICAgICAgX19tYXAoX3IgPT4gX3IuYm9keSBhcyBudWxsKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBpZCB1bmRlZmluZWRcclxuICAgKi9cclxuICBEZWxldGVDaGVja3BvaW50SXRlbVJlc3BvbnNlKGlkOiBudW1iZXIpOiBfX09ic2VydmFibGU8X19TdHJpY3RIdHRwUmVzcG9uc2U8bnVsbD4+IHtcclxuICAgIGxldCBfX3BhcmFtcyA9IHRoaXMubmV3UGFyYW1zKCk7XHJcbiAgICBsZXQgX19oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBsZXQgX19ib2R5OiBhbnkgPSBudWxsO1xyXG5cclxuICAgIGxldCByZXEgPSBuZXcgSHR0cFJlcXVlc3Q8YW55PihcclxuICAgICAgJ0RFTEVURScsXHJcbiAgICAgIHRoaXMucm9vdFVybCArIGAvYXBpL0NoZWNrcG9pbnQvJHtpZH1gLFxyXG4gICAgICBfX2JvZHksXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiBfX2hlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiBfX3BhcmFtcyxcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3Q8YW55PihyZXEpLnBpcGUoXHJcbiAgICAgIF9fZmlsdGVyKF9yID0+IF9yIGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSxcclxuICAgICAgX19tYXAoKF9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIF9yIGFzIF9fU3RyaWN0SHR0cFJlc3BvbnNlPG51bGw+O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGlkIHVuZGVmaW5lZFxyXG4gICAqL1xyXG4gIERlbGV0ZUNoZWNrcG9pbnRJdGVtKGlkOiBudW1iZXIpOiBfX09ic2VydmFibGU8bnVsbD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuRGVsZXRlQ2hlY2twb2ludEl0ZW1SZXNwb25zZShpZCkucGlwZShcclxuICAgICAgX19tYXAoX3IgPT4gX3IuYm9keSBhcyBudWxsKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZSBDaGVja3BvaW50U2VydmljZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhcmFtZXRlcnMgZm9yIFB1dENoZWNrcG9pbnRJdGVtXHJcbiAgICovXHJcbiAgZXhwb3J0IGludGVyZmFjZSBQdXRDaGVja3BvaW50SXRlbVBhcmFtcyB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgaXRlbT86IENoZWNrcG9pbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBDaGVja3BvaW50U2VydmljZSB9XHJcbiJdfQ==