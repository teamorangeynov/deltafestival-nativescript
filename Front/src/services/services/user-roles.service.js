"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var base_service_1 = require("../base-service");
var api_configuration_1 = require("../api-configuration");
var operators_1 = require("rxjs/operators");
var UserRolesService = /** @class */ (function (_super) {
    __extends(UserRolesService, _super);
    function UserRolesService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @return Success
     */
    UserRolesService.prototype.GetUserRoleResponse = function () {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + "/api/UserRoles", __body, {
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
    UserRolesService.prototype.GetUserRole = function () {
        return this.GetUserRoleResponse().pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param userRole undefined
     * @return Success
     */
    UserRolesService.prototype.PostUserRoleResponse = function (userRole) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        __body = userRole;
        var req = new http_1.HttpRequest('POST', this.rootUrl + "/api/UserRoles", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(operators_1.filter(function (_r) { return _r instanceof http_1.HttpResponse; }), operators_1.map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param userRole undefined
     * @return Success
     */
    UserRolesService.prototype.PostUserRole = function (userRole) {
        return this.PostUserRoleResponse(userRole).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param id undefined
     * @return Success
     */
    UserRolesService.prototype.GetUserRole_1Response = function (id) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + ("/api/UserRoles/" + id), __body, {
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
    UserRolesService.prototype.GetUserRole_1 = function (id) {
        return this.GetUserRole_1Response(id).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `UserRolesService.PutUserRoleParams` containing the following parameters:
     *
     * - `id`:
     *
     * - `userRole`:
     */
    UserRolesService.prototype.PutUserRoleResponse = function (params) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        __body = params.userRole;
        var req = new http_1.HttpRequest('PUT', this.rootUrl + ("/api/UserRoles/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(operators_1.filter(function (_r) { return _r instanceof http_1.HttpResponse; }), operators_1.map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `UserRolesService.PutUserRoleParams` containing the following parameters:
     *
     * - `id`:
     *
     * - `userRole`:
     */
    UserRolesService.prototype.PutUserRole = function (params) {
        return this.PutUserRoleResponse(params).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param id undefined
     * @return Success
     */
    UserRolesService.prototype.DeleteUserRoleResponse = function (id) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('DELETE', this.rootUrl + ("/api/UserRoles/" + id), __body, {
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
    UserRolesService.prototype.DeleteUserRole = function (id) {
        return this.DeleteUserRoleResponse(id).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    UserRolesService.GetUserRolePath = '/api/UserRoles';
    UserRolesService.PostUserRolePath = '/api/UserRoles';
    UserRolesService.GetUserRole_1Path = '/api/UserRoles/{id}';
    UserRolesService.PutUserRolePath = '/api/UserRoles/{id}';
    UserRolesService.DeleteUserRolePath = '/api/UserRoles/{id}';
    UserRolesService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [api_configuration_1.ApiConfiguration,
            http_1.HttpClient])
    ], UserRolesService);
    return UserRolesService;
}(base_service_1.BaseService));
exports.UserRolesService = UserRolesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yb2xlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci1yb2xlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0JBQW9CO0FBQ3BCLHNDQUEyQztBQUMzQyw2Q0FBMEY7QUFDMUYsZ0RBQStEO0FBQy9ELDBEQUEyRTtBQUczRSw0Q0FBa0U7QUFNbEU7SUFBK0Isb0NBQWE7SUFPMUMsMEJBQ0UsTUFBdUIsRUFDdkIsSUFBZ0I7ZUFFaEIsa0JBQU0sTUFBTSxFQUFFLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSCw4Q0FBbUIsR0FBbkI7UUFDRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxrQkFBVyxFQUFFLENBQUM7UUFDbEMsSUFBSSxNQUFNLEdBQVEsSUFBSSxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLElBQUksa0JBQVcsQ0FDdkIsS0FBSyxFQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLEVBQy9CLE1BQU0sRUFDTjtZQUNFLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLFlBQVksRUFBRSxNQUFNO1NBQ3JCLENBQUMsQ0FBQztRQUVMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNyQyxrQkFBUSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxZQUFZLG1CQUFZLEVBQTFCLENBQTBCLENBQUMsRUFDMUMsZUFBSyxDQUFDLFVBQUMsRUFBRTtZQUNQLE9BQU8sRUFBMkMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUNEOztPQUVHO0lBQ0gsc0NBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUNwQyxlQUFLLENB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QUFDLElBQUksQ0FBQyxPQUFPLENBQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNyQyxrQkFBUSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxZQUFZLG1CQUFZLEVBQTFCLENBQTBCLENBQUMsRUFDMUMsZUFBSyxDQUFDLFVBQUMsRUFBRTtZQUNQLE9BQU8sRUFBb0MsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUNEOzs7T0FHRztJQUNILHlDQUFjLEdBQWQsVUFBZSxFQUFVO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDekMsZUFBSyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQWdCLEVBQW5CLENBQW1CLENBQUMsQ0FDakMsQ0FBQztJQUNKLENBQUM7SUFuTWUsZ0NBQWUsR0FBRyxnQkFBZ0IsQ0FBQztJQUNuQyxpQ0FBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztJQUNwQyxrQ0FBaUIsR0FBRyxxQkFBcUIsQ0FBQztJQUMxQyxnQ0FBZSxHQUFHLHFCQUFxQixDQUFDO0lBQ3hDLG1DQUFrQixHQUFHLHFCQUFxQixDQUFDO0lBTHZELGdCQUFnQjtRQUhyQixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FTVSxvQ0FBZTtZQUNqQixpQkFBVTtPQVRkLGdCQUFnQixDQXFNckI7SUFBRCx1QkFBQztDQUFBLEFBck1ELENBQStCLDBCQUFhLEdBcU0zQztBQWFRLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIGFzIF9fQmFzZVNlcnZpY2UgfSBmcm9tICcuLi9iYXNlLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlDb25maWd1cmF0aW9uIGFzIF9fQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2FwaS1jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgU3RyaWN0SHR0cFJlc3BvbnNlIGFzIF9fU3RyaWN0SHR0cFJlc3BvbnNlIH0gZnJvbSAnLi4vc3RyaWN0LWh0dHAtcmVzcG9uc2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIF9fT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgYXMgX19tYXAsIGZpbHRlciBhcyBfX2ZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFVzZXJSb2xlIH0gZnJvbSAnLi4vbW9kZWxzL3VzZXItcm9sZSc7XHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmNsYXNzIFVzZXJSb2xlc1NlcnZpY2UgZXh0ZW5kcyBfX0Jhc2VTZXJ2aWNlIHtcclxuICBzdGF0aWMgcmVhZG9ubHkgR2V0VXNlclJvbGVQYXRoID0gJy9hcGkvVXNlclJvbGVzJztcclxuICBzdGF0aWMgcmVhZG9ubHkgUG9zdFVzZXJSb2xlUGF0aCA9ICcvYXBpL1VzZXJSb2xlcyc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IEdldFVzZXJSb2xlXzFQYXRoID0gJy9hcGkvVXNlclJvbGVzL3tpZH0nO1xyXG4gIHN0YXRpYyByZWFkb25seSBQdXRVc2VyUm9sZVBhdGggPSAnL2FwaS9Vc2VyUm9sZXMve2lkfSc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IERlbGV0ZVVzZXJSb2xlUGF0aCA9ICcvYXBpL1VzZXJSb2xlcy97aWR9JztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjb25maWc6IF9fQ29uZmlndXJhdGlvbixcclxuICAgIGh0dHA6IEh0dHBDbGllbnRcclxuICApIHtcclxuICAgIHN1cGVyKGNvbmZpZywgaHR0cCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJuIFN1Y2Nlc3NcclxuICAgKi9cclxuICBHZXRVc2VyUm9sZVJlc3BvbnNlKCk6IF9fT2JzZXJ2YWJsZTxfX1N0cmljdEh0dHBSZXNwb25zZTxBcnJheTxVc2VyUm9sZT4+PiB7XHJcbiAgICBsZXQgX19wYXJhbXMgPSB0aGlzLm5ld1BhcmFtcygpO1xyXG4gICAgbGV0IF9faGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG4gICAgbGV0IF9fYm9keTogYW55ID0gbnVsbDtcclxuICAgIGxldCByZXEgPSBuZXcgSHR0cFJlcXVlc3Q8YW55PihcclxuICAgICAgJ0dFVCcsXHJcbiAgICAgIHRoaXMucm9vdFVybCArIGAvYXBpL1VzZXJSb2xlc2AsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8QXJyYXk8VXNlclJvbGU+PjtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIEdldFVzZXJSb2xlKCk6IF9fT2JzZXJ2YWJsZTxBcnJheTxVc2VyUm9sZT4+IHtcclxuICAgIHJldHVybiB0aGlzLkdldFVzZXJSb2xlUmVzcG9uc2UoKS5waXBlKFxyXG4gICAgICBfX21hcChfciA9PiBfci5ib2R5IGFzIEFycmF5PFVzZXJSb2xlPilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gdXNlclJvbGUgdW5kZWZpbmVkXHJcbiAgICogQHJldHVybiBTdWNjZXNzXHJcbiAgICovXHJcbiAgUG9zdFVzZXJSb2xlUmVzcG9uc2UodXNlclJvbGU/OiBVc2VyUm9sZSk6IF9fT2JzZXJ2YWJsZTxfX1N0cmljdEh0dHBSZXNwb25zZTxVc2VyUm9sZT4+IHtcclxuICAgIGxldCBfX3BhcmFtcyA9IHRoaXMubmV3UGFyYW1zKCk7XHJcbiAgICBsZXQgX19oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBsZXQgX19ib2R5OiBhbnkgPSBudWxsO1xyXG4gICAgX19ib2R5ID0gdXNlclJvbGU7XHJcbiAgICBsZXQgcmVxID0gbmV3IEh0dHBSZXF1ZXN0PGFueT4oXHJcbiAgICAgICdQT1NUJyxcclxuICAgICAgdGhpcy5yb290VXJsICsgYC9hcGkvVXNlclJvbGVzYCxcclxuICAgICAgX19ib2R5LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczogX19oZWFkZXJzLFxyXG4gICAgICAgIHBhcmFtczogX19wYXJhbXMsXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbidcclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0PGFueT4ocmVxKS5waXBlKFxyXG4gICAgICBfX2ZpbHRlcihfciA9PiBfciBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSksXHJcbiAgICAgIF9fbWFwKChfcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBfciBhcyBfX1N0cmljdEh0dHBSZXNwb25zZTxVc2VyUm9sZT47XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAcGFyYW0gdXNlclJvbGUgdW5kZWZpbmVkXHJcbiAgICogQHJldHVybiBTdWNjZXNzXHJcbiAgICovXHJcbiAgUG9zdFVzZXJSb2xlKHVzZXJSb2xlPzogVXNlclJvbGUpOiBfX09ic2VydmFibGU8VXNlclJvbGU+IHtcclxuICAgIHJldHVybiB0aGlzLlBvc3RVc2VyUm9sZVJlc3BvbnNlKHVzZXJSb2xlKS5waXBlKFxyXG4gICAgICBfX21hcChfciA9PiBfci5ib2R5IGFzIFVzZXJSb2xlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBpZCB1bmRlZmluZWRcclxuICAgKiBAcmV0dXJuIFN1Y2Nlc3NcclxuICAgKi9cclxuICBHZXRVc2VyUm9sZV8xUmVzcG9uc2UoaWQ6IG51bWJlcik6IF9fT2JzZXJ2YWJsZTxfX1N0cmljdEh0dHBSZXNwb25zZTxVc2VyUm9sZT4+IHtcclxuICAgIGxldCBfX3BhcmFtcyA9IHRoaXMubmV3UGFyYW1zKCk7XHJcbiAgICBsZXQgX19oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBsZXQgX19ib2R5OiBhbnkgPSBudWxsO1xyXG5cclxuICAgIGxldCByZXEgPSBuZXcgSHR0cFJlcXVlc3Q8YW55PihcclxuICAgICAgJ0dFVCcsXHJcbiAgICAgIHRoaXMucm9vdFVybCArIGAvYXBpL1VzZXJSb2xlcy8ke2lkfWAsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8VXNlclJvbGU+O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGlkIHVuZGVmaW5lZFxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIEdldFVzZXJSb2xlXzEoaWQ6IG51bWJlcik6IF9fT2JzZXJ2YWJsZTxVc2VyUm9sZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuR2V0VXNlclJvbGVfMVJlc3BvbnNlKGlkKS5waXBlKFxyXG4gICAgICBfX21hcChfciA9PiBfci5ib2R5IGFzIFVzZXJSb2xlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBwYXJhbXMgVGhlIGBVc2VyUm9sZXNTZXJ2aWNlLlB1dFVzZXJSb2xlUGFyYW1zYCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcclxuICAgKlxyXG4gICAqIC0gYGlkYDpcclxuICAgKlxyXG4gICAqIC0gYHVzZXJSb2xlYDpcclxuICAgKi9cclxuICBQdXRVc2VyUm9sZVJlc3BvbnNlKHBhcmFtczogVXNlclJvbGVzU2VydmljZS5QdXRVc2VyUm9sZVBhcmFtcyk6IF9fT2JzZXJ2YWJsZTxfX1N0cmljdEh0dHBSZXNwb25zZTxudWxsPj4ge1xyXG4gICAgbGV0IF9fcGFyYW1zID0gdGhpcy5uZXdQYXJhbXMoKTtcclxuICAgIGxldCBfX2hlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgIGxldCBfX2JvZHk6IGFueSA9IG51bGw7XHJcblxyXG4gICAgX19ib2R5ID0gcGFyYW1zLnVzZXJSb2xlO1xyXG4gICAgbGV0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdDxhbnk+KFxyXG4gICAgICAnUFVUJyxcclxuICAgICAgdGhpcy5yb290VXJsICsgYC9hcGkvVXNlclJvbGVzLyR7cGFyYW1zLmlkfWAsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8bnVsbD47XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAcGFyYW0gcGFyYW1zIFRoZSBgVXNlclJvbGVzU2VydmljZS5QdXRVc2VyUm9sZVBhcmFtc2AgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6XHJcbiAgICpcclxuICAgKiAtIGBpZGA6XHJcbiAgICpcclxuICAgKiAtIGB1c2VyUm9sZWA6XHJcbiAgICovXHJcbiAgUHV0VXNlclJvbGUocGFyYW1zOiBVc2VyUm9sZXNTZXJ2aWNlLlB1dFVzZXJSb2xlUGFyYW1zKTogX19PYnNlcnZhYmxlPG51bGw+IHtcclxuICAgIHJldHVybiB0aGlzLlB1dFVzZXJSb2xlUmVzcG9uc2UocGFyYW1zKS5waXBlKFxyXG4gICAgICBfX21hcChfciA9PiBfci5ib2R5IGFzIG51bGwpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGlkIHVuZGVmaW5lZFxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIERlbGV0ZVVzZXJSb2xlUmVzcG9uc2UoaWQ6IG51bWJlcik6IF9fT2JzZXJ2YWJsZTxfX1N0cmljdEh0dHBSZXNwb25zZTxVc2VyUm9sZT4+IHtcclxuICAgIGxldCBfX3BhcmFtcyA9IHRoaXMubmV3UGFyYW1zKCk7XHJcbiAgICBsZXQgX19oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBsZXQgX19ib2R5OiBhbnkgPSBudWxsO1xyXG5cclxuICAgIGxldCByZXEgPSBuZXcgSHR0cFJlcXVlc3Q8YW55PihcclxuICAgICAgJ0RFTEVURScsXHJcbiAgICAgIHRoaXMucm9vdFVybCArIGAvYXBpL1VzZXJSb2xlcy8ke2lkfWAsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8VXNlclJvbGU+O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGlkIHVuZGVmaW5lZFxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIERlbGV0ZVVzZXJSb2xlKGlkOiBudW1iZXIpOiBfX09ic2VydmFibGU8VXNlclJvbGU+IHtcclxuICAgIHJldHVybiB0aGlzLkRlbGV0ZVVzZXJSb2xlUmVzcG9uc2UoaWQpLnBpcGUoXHJcbiAgICAgIF9fbWFwKF9yID0+IF9yLmJvZHkgYXMgVXNlclJvbGUpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlIFVzZXJSb2xlc1NlcnZpY2Uge1xyXG5cclxuICAvKipcclxuICAgKiBQYXJhbWV0ZXJzIGZvciBQdXRVc2VyUm9sZVxyXG4gICAqL1xyXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHV0VXNlclJvbGVQYXJhbXMge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHVzZXJSb2xlPzogVXNlclJvbGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBVc2VyUm9sZXNTZXJ2aWNlIH1cclxuIl19