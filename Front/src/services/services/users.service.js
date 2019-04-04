"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var base_service_1 = require("../base-service");
var api_configuration_1 = require("../api-configuration");
var operators_1 = require("rxjs/operators");
var UsersService = /** @class */ (function (_super) {
    __extends(UsersService, _super);
    function UsersService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @return Success
     */
    UsersService.prototype.GetUsersResponse = function () {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + "/api/Users", __body, {
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
    UsersService.prototype.GetUsers = function () {
        return this.GetUsersResponse().pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param user undefined
     * @return Success
     */
    UsersService.prototype.PostUserResponse = function (user) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        __body = user;
        var req = new http_1.HttpRequest('POST', this.rootUrl + "/api/Users", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(operators_1.filter(function (_r) { return _r instanceof http_1.HttpResponse; }), operators_1.map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param user undefined
     * @return Success
     */
    UsersService.prototype.PostUser = function (user) {
        return this.PostUserResponse(user).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param id undefined
     * @return Success
     */
    UsersService.prototype.GetUserResponse = function (id) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + ("/api/Users/" + id), __body, {
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
    UsersService.prototype.GetUser = function (id) {
        return this.GetUserResponse(id).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `UsersService.PutUserParams` containing the following parameters:
     *
     * - `id`:
     *
     * - `user`:
     */
    UsersService.prototype.PutUserResponse = function (params) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        __body = params.user;
        var req = new http_1.HttpRequest('PUT', this.rootUrl + ("/api/Users/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(operators_1.filter(function (_r) { return _r instanceof http_1.HttpResponse; }), operators_1.map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `UsersService.PutUserParams` containing the following parameters:
     *
     * - `id`:
     *
     * - `user`:
     */
    UsersService.prototype.PutUser = function (params) {
        return this.PutUserResponse(params).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param id undefined
     * @return Success
     */
    UsersService.prototype.DeleteUserResponse = function (id) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('DELETE', this.rootUrl + ("/api/Users/" + id), __body, {
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
    UsersService.prototype.DeleteUser = function (id) {
        return this.DeleteUserResponse(id).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    UsersService.GetUsersPath = '/api/Users';
    UsersService.PostUserPath = '/api/Users';
    UsersService.GetUserPath = '/api/Users/{id}';
    UsersService.PutUserPath = '/api/Users/{id}';
    UsersService.DeleteUserPath = '/api/Users/{id}';
    UsersService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [api_configuration_1.ApiConfiguration,
            http_1.HttpClient])
    ], UsersService);
    return UsersService;
}(base_service_1.BaseService));
exports.UsersService = UsersService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQkFBb0I7QUFDcEIsc0NBQTJDO0FBQzNDLDZDQUEwRjtBQUMxRixnREFBK0Q7QUFDL0QsMERBQTJFO0FBRzNFLDRDQUFrRTtBQU1sRTtJQUEyQixnQ0FBYTtJQU90QyxzQkFDRSxNQUF1QixFQUN2QixJQUFnQjtlQUVoQixrQkFBTSxNQUFNLEVBQUUsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNILHVDQUFnQixHQUFoQjtRQUNFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQyxJQUFJLFNBQVMsR0FBRyxJQUFJLGtCQUFXLEVBQUUsQ0FBQztRQUNsQyxJQUFJLE1BQU0sR0FBUSxJQUFJLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxrQkFBVyxDQUN2QixLQUFLLEVBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLEVBQzNCLE1BQU0sRUFDTjtZQUNFLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLFlBQVksRUFBRSxNQUFNO1NBQ3JCLENBQUMsQ0FBQztRQUVMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNyQyxrQkFBUSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxZQUFZLG1CQUFZLEVBQTFCLENBQTBCLENBQUMsRUFDMUMsZUFBSyxDQUFDLFVBQUMsRUFBRTtZQUNQLE9BQU8sRUFBdUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUNEOztPQUVHO0lBQ0gsK0JBQVEsR0FBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUNqQyxlQUFLLENBQUMsVUFBQSxFQUFF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Q0FBQyxJQUFJLENBQ3JDLGtCQUFRLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLFlBQVksbUJBQVksRUFBMUIsQ0FBMEIsQ0FBQyxFQUMxQyxlQUFLLENBQUMsVUFBQyxFQUFFO1lBQ1AsT0FBTyxFQUFnQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsaUNBQVUsR0FBVixVQUFXLEVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNyQyxlQUFLLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsSUFBWSxFQUFmLENBQWUsQ0FBQyxDQUM3QixDQUFDO0lBQ0osQ0FBQztJQW5NZSx5QkFBWSxHQUFHLFlBQVksQ0FBQztJQUM1Qix5QkFBWSxHQUFHLFlBQVksQ0FBQztJQUM1Qix3QkFBVyxHQUFHLGlCQUFpQixDQUFDO0lBQ2hDLHdCQUFXLEdBQUcsaUJBQWlCLENBQUM7SUFDaEMsMkJBQWMsR0FBRyxpQkFBaUIsQ0FBQztJQUwvQyxZQUFZO1FBSGpCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQVNVLG9DQUFlO1lBQ2pCLGlCQUFVO09BVGQsWUFBWSxDQXFNakI7SUFBRCxtQkFBQztDQUFBLEFBck1ELENBQTJCLDBCQUFhLEdBcU12QztBQWFRLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQmFzZVNlcnZpY2UgYXMgX19CYXNlU2VydmljZSB9IGZyb20gJy4uL2Jhc2Utc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaUNvbmZpZ3VyYXRpb24gYXMgX19Db25maWd1cmF0aW9uIH0gZnJvbSAnLi4vYXBpLWNvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBTdHJpY3RIdHRwUmVzcG9uc2UgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2UgfSBmcm9tICcuLi9zdHJpY3QtaHR0cC1yZXNwb25zZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgX19PYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCBhcyBfX21hcCwgZmlsdGVyIGFzIF9fZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVscy91c2VyJztcclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuY2xhc3MgVXNlcnNTZXJ2aWNlIGV4dGVuZHMgX19CYXNlU2VydmljZSB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IEdldFVzZXJzUGF0aCA9ICcvYXBpL1VzZXJzJztcclxuICBzdGF0aWMgcmVhZG9ubHkgUG9zdFVzZXJQYXRoID0gJy9hcGkvVXNlcnMnO1xyXG4gIHN0YXRpYyByZWFkb25seSBHZXRVc2VyUGF0aCA9ICcvYXBpL1VzZXJzL3tpZH0nO1xyXG4gIHN0YXRpYyByZWFkb25seSBQdXRVc2VyUGF0aCA9ICcvYXBpL1VzZXJzL3tpZH0nO1xyXG4gIHN0YXRpYyByZWFkb25seSBEZWxldGVVc2VyUGF0aCA9ICcvYXBpL1VzZXJzL3tpZH0nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNvbmZpZzogX19Db25maWd1cmF0aW9uLFxyXG4gICAgaHR0cDogSHR0cENsaWVudFxyXG4gICkge1xyXG4gICAgc3VwZXIoY29uZmlnLCBodHRwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIEdldFVzZXJzUmVzcG9uc2UoKTogX19PYnNlcnZhYmxlPF9fU3RyaWN0SHR0cFJlc3BvbnNlPEFycmF5PFVzZXI+Pj4ge1xyXG4gICAgbGV0IF9fcGFyYW1zID0gdGhpcy5uZXdQYXJhbXMoKTtcclxuICAgIGxldCBfX2hlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgIGxldCBfX2JvZHk6IGFueSA9IG51bGw7XHJcbiAgICBsZXQgcmVxID0gbmV3IEh0dHBSZXF1ZXN0PGFueT4oXHJcbiAgICAgICdHRVQnLFxyXG4gICAgICB0aGlzLnJvb3RVcmwgKyBgL2FwaS9Vc2Vyc2AsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8QXJyYXk8VXNlcj4+O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQHJldHVybiBTdWNjZXNzXHJcbiAgICovXHJcbiAgR2V0VXNlcnMoKTogX19PYnNlcnZhYmxlPEFycmF5PFVzZXI+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5HZXRVc2Vyc1Jlc3BvbnNlKCkucGlwZShcclxuICAgICAgX19tYXAoX3IgPT4gX3IuYm9keSBhcyBBcnJheTxVc2VyPilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gdXNlciB1bmRlZmluZWRcclxuICAgKiBAcmV0dXJuIFN1Y2Nlc3NcclxuICAgKi9cclxuICBQb3N0VXNlclJlc3BvbnNlKHVzZXI/OiBVc2VyKTogX19PYnNlcnZhYmxlPF9fU3RyaWN0SHR0cFJlc3BvbnNlPFVzZXI+PiB7XHJcbiAgICBsZXQgX19wYXJhbXMgPSB0aGlzLm5ld1BhcmFtcygpO1xyXG4gICAgbGV0IF9faGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG4gICAgbGV0IF9fYm9keTogYW55ID0gbnVsbDtcclxuICAgIF9fYm9keSA9IHVzZXI7XHJcbiAgICBsZXQgcmVxID0gbmV3IEh0dHBSZXF1ZXN0PGFueT4oXHJcbiAgICAgICdQT1NUJyxcclxuICAgICAgdGhpcy5yb290VXJsICsgYC9hcGkvVXNlcnNgLFxyXG4gICAgICBfX2JvZHksXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiBfX2hlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiBfX3BhcmFtcyxcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3Q8YW55PihyZXEpLnBpcGUoXHJcbiAgICAgIF9fZmlsdGVyKF9yID0+IF9yIGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSxcclxuICAgICAgX19tYXAoKF9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIF9yIGFzIF9fU3RyaWN0SHR0cFJlc3BvbnNlPFVzZXI+O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHVzZXIgdW5kZWZpbmVkXHJcbiAgICogQHJldHVybiBTdWNjZXNzXHJcbiAgICovXHJcbiAgUG9zdFVzZXIodXNlcj86IFVzZXIpOiBfX09ic2VydmFibGU8VXNlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuUG9zdFVzZXJSZXNwb25zZSh1c2VyKS5waXBlKFxyXG4gICAgICBfX21hcChfciA9PiBfci5ib2R5IGFzIFVzZXIpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGlkIHVuZGVmaW5lZFxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIEdldFVzZXJSZXNwb25zZShpZDogbnVtYmVyKTogX19PYnNlcnZhYmxlPF9fU3RyaWN0SHR0cFJlc3BvbnNlPFVzZXI+PiB7XHJcbiAgICBsZXQgX19wYXJhbXMgPSB0aGlzLm5ld1BhcmFtcygpO1xyXG4gICAgbGV0IF9faGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG4gICAgbGV0IF9fYm9keTogYW55ID0gbnVsbDtcclxuXHJcbiAgICBsZXQgcmVxID0gbmV3IEh0dHBSZXF1ZXN0PGFueT4oXHJcbiAgICAgICdHRVQnLFxyXG4gICAgICB0aGlzLnJvb3RVcmwgKyBgL2FwaS9Vc2Vycy8ke2lkfWAsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8VXNlcj47XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAcGFyYW0gaWQgdW5kZWZpbmVkXHJcbiAgICogQHJldHVybiBTdWNjZXNzXHJcbiAgICovXHJcbiAgR2V0VXNlcihpZDogbnVtYmVyKTogX19PYnNlcnZhYmxlPFVzZXI+IHtcclxuICAgIHJldHVybiB0aGlzLkdldFVzZXJSZXNwb25zZShpZCkucGlwZShcclxuICAgICAgX19tYXAoX3IgPT4gX3IuYm9keSBhcyBVc2VyKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBwYXJhbXMgVGhlIGBVc2Vyc1NlcnZpY2UuUHV0VXNlclBhcmFtc2AgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6XHJcbiAgICpcclxuICAgKiAtIGBpZGA6XHJcbiAgICpcclxuICAgKiAtIGB1c2VyYDpcclxuICAgKi9cclxuICBQdXRVc2VyUmVzcG9uc2UocGFyYW1zOiBVc2Vyc1NlcnZpY2UuUHV0VXNlclBhcmFtcyk6IF9fT2JzZXJ2YWJsZTxfX1N0cmljdEh0dHBSZXNwb25zZTxudWxsPj4ge1xyXG4gICAgbGV0IF9fcGFyYW1zID0gdGhpcy5uZXdQYXJhbXMoKTtcclxuICAgIGxldCBfX2hlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgIGxldCBfX2JvZHk6IGFueSA9IG51bGw7XHJcblxyXG4gICAgX19ib2R5ID0gcGFyYW1zLnVzZXI7XHJcbiAgICBsZXQgcmVxID0gbmV3IEh0dHBSZXF1ZXN0PGFueT4oXHJcbiAgICAgICdQVVQnLFxyXG4gICAgICB0aGlzLnJvb3RVcmwgKyBgL2FwaS9Vc2Vycy8ke3BhcmFtcy5pZH1gLFxyXG4gICAgICBfX2JvZHksXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiBfX2hlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiBfX3BhcmFtcyxcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3Q8YW55PihyZXEpLnBpcGUoXHJcbiAgICAgIF9fZmlsdGVyKF9yID0+IF9yIGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSxcclxuICAgICAgX19tYXAoKF9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIF9yIGFzIF9fU3RyaWN0SHR0cFJlc3BvbnNlPG51bGw+O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHBhcmFtcyBUaGUgYFVzZXJzU2VydmljZS5QdXRVc2VyUGFyYW1zYCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcclxuICAgKlxyXG4gICAqIC0gYGlkYDpcclxuICAgKlxyXG4gICAqIC0gYHVzZXJgOlxyXG4gICAqL1xyXG4gIFB1dFVzZXIocGFyYW1zOiBVc2Vyc1NlcnZpY2UuUHV0VXNlclBhcmFtcyk6IF9fT2JzZXJ2YWJsZTxudWxsPiB7XHJcbiAgICByZXR1cm4gdGhpcy5QdXRVc2VyUmVzcG9uc2UocGFyYW1zKS5waXBlKFxyXG4gICAgICBfX21hcChfciA9PiBfci5ib2R5IGFzIG51bGwpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGlkIHVuZGVmaW5lZFxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIERlbGV0ZVVzZXJSZXNwb25zZShpZDogbnVtYmVyKTogX19PYnNlcnZhYmxlPF9fU3RyaWN0SHR0cFJlc3BvbnNlPFVzZXI+PiB7XHJcbiAgICBsZXQgX19wYXJhbXMgPSB0aGlzLm5ld1BhcmFtcygpO1xyXG4gICAgbGV0IF9faGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG4gICAgbGV0IF9fYm9keTogYW55ID0gbnVsbDtcclxuXHJcbiAgICBsZXQgcmVxID0gbmV3IEh0dHBSZXF1ZXN0PGFueT4oXHJcbiAgICAgICdERUxFVEUnLFxyXG4gICAgICB0aGlzLnJvb3RVcmwgKyBgL2FwaS9Vc2Vycy8ke2lkfWAsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8VXNlcj47XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAcGFyYW0gaWQgdW5kZWZpbmVkXHJcbiAgICogQHJldHVybiBTdWNjZXNzXHJcbiAgICovXHJcbiAgRGVsZXRlVXNlcihpZDogbnVtYmVyKTogX19PYnNlcnZhYmxlPFVzZXI+IHtcclxuICAgIHJldHVybiB0aGlzLkRlbGV0ZVVzZXJSZXNwb25zZShpZCkucGlwZShcclxuICAgICAgX19tYXAoX3IgPT4gX3IuYm9keSBhcyBVc2VyKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZSBVc2Vyc1NlcnZpY2Uge1xyXG5cclxuICAvKipcclxuICAgKiBQYXJhbWV0ZXJzIGZvciBQdXRVc2VyXHJcbiAgICovXHJcbiAgZXhwb3J0IGludGVyZmFjZSBQdXRVc2VyUGFyYW1zIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICB1c2VyPzogVXNlcjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFVzZXJzU2VydmljZSB9XHJcbiJdfQ==