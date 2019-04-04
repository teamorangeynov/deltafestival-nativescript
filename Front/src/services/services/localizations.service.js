"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var base_service_1 = require("../base-service");
var api_configuration_1 = require("../api-configuration");
var operators_1 = require("rxjs/operators");
var LocalizationsService = /** @class */ (function (_super) {
    __extends(LocalizationsService, _super);
    function LocalizationsService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @return Success
     */
    LocalizationsService.prototype.GetLocalizationsResponse = function () {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + "/api/Localizations", __body, {
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
    LocalizationsService.prototype.GetLocalizations = function () {
        return this.GetLocalizationsResponse().pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param localization undefined
     * @return Success
     */
    LocalizationsService.prototype.PostLocalizationResponse = function (localization) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        __body = localization;
        var req = new http_1.HttpRequest('POST', this.rootUrl + "/api/Localizations", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(operators_1.filter(function (_r) { return _r instanceof http_1.HttpResponse; }), operators_1.map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param localization undefined
     * @return Success
     */
    LocalizationsService.prototype.PostLocalization = function (localization) {
        return this.PostLocalizationResponse(localization).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param id undefined
     * @return Success
     */
    LocalizationsService.prototype.GetLocalizationResponse = function (id) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + ("/api/Localizations/" + id), __body, {
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
    LocalizationsService.prototype.GetLocalization = function (id) {
        return this.GetLocalizationResponse(id).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `LocalizationsService.PutLocalizationParams` containing the following parameters:
     *
     * - `id`:
     *
     * - `localization`:
     */
    LocalizationsService.prototype.PutLocalizationResponse = function (params) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        __body = params.localization;
        var req = new http_1.HttpRequest('PUT', this.rootUrl + ("/api/Localizations/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(operators_1.filter(function (_r) { return _r instanceof http_1.HttpResponse; }), operators_1.map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `LocalizationsService.PutLocalizationParams` containing the following parameters:
     *
     * - `id`:
     *
     * - `localization`:
     */
    LocalizationsService.prototype.PutLocalization = function (params) {
        return this.PutLocalizationResponse(params).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    /**
     * @param id undefined
     * @return Success
     */
    LocalizationsService.prototype.DeleteLocalizationResponse = function (id) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('DELETE', this.rootUrl + ("/api/Localizations/" + id), __body, {
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
    LocalizationsService.prototype.DeleteLocalization = function (id) {
        return this.DeleteLocalizationResponse(id).pipe(operators_1.map(function (_r) { return _r.body; }));
    };
    LocalizationsService.GetLocalizationsPath = '/api/Localizations';
    LocalizationsService.PostLocalizationPath = '/api/Localizations';
    LocalizationsService.GetLocalizationPath = '/api/Localizations/{id}';
    LocalizationsService.PutLocalizationPath = '/api/Localizations/{id}';
    LocalizationsService.DeleteLocalizationPath = '/api/Localizations/{id}';
    LocalizationsService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [api_configuration_1.ApiConfiguration,
            http_1.HttpClient])
    ], LocalizationsService);
    return LocalizationsService;
}(base_service_1.BaseService));
exports.LocalizationsService = LocalizationsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpemF0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jYWxpemF0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0JBQW9CO0FBQ3BCLHNDQUEyQztBQUMzQyw2Q0FBMEY7QUFDMUYsZ0RBQStEO0FBQy9ELDBEQUEyRTtBQUczRSw0Q0FBa0U7QUFNbEU7SUFBbUMsd0NBQWE7SUFPOUMsOEJBQ0UsTUFBdUIsRUFDdkIsSUFBZ0I7ZUFFaEIsa0JBQU0sTUFBTSxFQUFFLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSCx1REFBd0IsR0FBeEI7UUFDRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxrQkFBVyxFQUFFLENBQUM7UUFDbEMsSUFBSSxNQUFNLEdBQVEsSUFBSSxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLElBQUksa0JBQVcsQ0FDdkIsS0FBSyxFQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLEVBQ25DLE1BQU0sRUFDTjtZQUNFLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLFlBQVksRUFBRSxNQUFNO1NBQ3JCLENBQUMsQ0FBQztRQUVMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNyQyxrQkFBUSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxZQUFZLG1CQUFZLEVBQTFCLENBQTBCLENBQUMsRUFDMUMsZUFBSyxDQUFDLFVBQUMsRUFBRTtZQUNQLE9BQU8sRUFBK0MsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUNEOztPQUVHO0lBQ0gsK0NBQWdCLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxJQUFJLENBQ3pD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TCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDckMsa0JBQVEsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsWUFBWSxtQkFBWSxFQUExQixDQUEwQixDQUFDLEVBQzFDLGVBQUssQ0FBQyxVQUFDLEVBQUU7WUFDUCxPQUFPLEVBQXdDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFDRDs7O09BR0c7SUFDSCxpREFBa0IsR0FBbEIsVUFBbUIsRUFBVTtRQUMzQixPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzdDLGVBQUssQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFvQixFQUF2QixDQUF1QixDQUFDLENBQ3JDLENBQUM7SUFDSixDQUFDO0lBbk1lLHlDQUFvQixHQUFHLG9CQUFvQixDQUFDO0lBQzVDLHlDQUFvQixHQUFHLG9CQUFvQixDQUFDO0lBQzVDLHdDQUFtQixHQUFHLHlCQUF5QixDQUFDO0lBQ2hELHdDQUFtQixHQUFHLHlCQUF5QixDQUFDO0lBQ2hELDJDQUFzQixHQUFHLHlCQUF5QixDQUFDO0lBTC9ELG9CQUFvQjtRQUh6QixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FTVSxvQ0FBZTtZQUNqQixpQkFBVTtPQVRkLG9CQUFvQixDQXFNekI7SUFBRCwyQkFBQztDQUFBLEFBck1ELENBQW1DLDBCQUFhLEdBcU0vQztBQWFRLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIGFzIF9fQmFzZVNlcnZpY2UgfSBmcm9tICcuLi9iYXNlLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlDb25maWd1cmF0aW9uIGFzIF9fQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2FwaS1jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgU3RyaWN0SHR0cFJlc3BvbnNlIGFzIF9fU3RyaWN0SHR0cFJlc3BvbnNlIH0gZnJvbSAnLi4vc3RyaWN0LWh0dHAtcmVzcG9uc2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIF9fT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgYXMgX19tYXAsIGZpbHRlciBhcyBfX2ZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IExvY2FsaXphdGlvbiB9IGZyb20gJy4uL21vZGVscy9sb2NhbGl6YXRpb24nO1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5jbGFzcyBMb2NhbGl6YXRpb25zU2VydmljZSBleHRlbmRzIF9fQmFzZVNlcnZpY2Uge1xyXG4gIHN0YXRpYyByZWFkb25seSBHZXRMb2NhbGl6YXRpb25zUGF0aCA9ICcvYXBpL0xvY2FsaXphdGlvbnMnO1xyXG4gIHN0YXRpYyByZWFkb25seSBQb3N0TG9jYWxpemF0aW9uUGF0aCA9ICcvYXBpL0xvY2FsaXphdGlvbnMnO1xyXG4gIHN0YXRpYyByZWFkb25seSBHZXRMb2NhbGl6YXRpb25QYXRoID0gJy9hcGkvTG9jYWxpemF0aW9ucy97aWR9JztcclxuICBzdGF0aWMgcmVhZG9ubHkgUHV0TG9jYWxpemF0aW9uUGF0aCA9ICcvYXBpL0xvY2FsaXphdGlvbnMve2lkfSc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IERlbGV0ZUxvY2FsaXphdGlvblBhdGggPSAnL2FwaS9Mb2NhbGl6YXRpb25zL3tpZH0nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNvbmZpZzogX19Db25maWd1cmF0aW9uLFxyXG4gICAgaHR0cDogSHR0cENsaWVudFxyXG4gICkge1xyXG4gICAgc3VwZXIoY29uZmlnLCBodHRwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIEdldExvY2FsaXphdGlvbnNSZXNwb25zZSgpOiBfX09ic2VydmFibGU8X19TdHJpY3RIdHRwUmVzcG9uc2U8QXJyYXk8TG9jYWxpemF0aW9uPj4+IHtcclxuICAgIGxldCBfX3BhcmFtcyA9IHRoaXMubmV3UGFyYW1zKCk7XHJcbiAgICBsZXQgX19oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBsZXQgX19ib2R5OiBhbnkgPSBudWxsO1xyXG4gICAgbGV0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdDxhbnk+KFxyXG4gICAgICAnR0VUJyxcclxuICAgICAgdGhpcy5yb290VXJsICsgYC9hcGkvTG9jYWxpemF0aW9uc2AsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8QXJyYXk8TG9jYWxpemF0aW9uPj47XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAcmV0dXJuIFN1Y2Nlc3NcclxuICAgKi9cclxuICBHZXRMb2NhbGl6YXRpb25zKCk6IF9fT2JzZXJ2YWJsZTxBcnJheTxMb2NhbGl6YXRpb24+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5HZXRMb2NhbGl6YXRpb25zUmVzcG9uc2UoKS5waXBlKFxyXG4gICAgICBfX21hcChfciA9PiBfci5ib2R5IGFzIEFycmF5PExvY2FsaXphdGlvbj4pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGxvY2FsaXphdGlvbiB1bmRlZmluZWRcclxuICAgKiBAcmV0dXJuIFN1Y2Nlc3NcclxuICAgKi9cclxuICBQb3N0TG9jYWxpemF0aW9uUmVzcG9uc2UobG9jYWxpemF0aW9uPzogTG9jYWxpemF0aW9uKTogX19PYnNlcnZhYmxlPF9fU3RyaWN0SHR0cFJlc3BvbnNlPExvY2FsaXphdGlvbj4+IHtcclxuICAgIGxldCBfX3BhcmFtcyA9IHRoaXMubmV3UGFyYW1zKCk7XHJcbiAgICBsZXQgX19oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBsZXQgX19ib2R5OiBhbnkgPSBudWxsO1xyXG4gICAgX19ib2R5ID0gbG9jYWxpemF0aW9uO1xyXG4gICAgbGV0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdDxhbnk+KFxyXG4gICAgICAnUE9TVCcsXHJcbiAgICAgIHRoaXMucm9vdFVybCArIGAvYXBpL0xvY2FsaXphdGlvbnNgLFxyXG4gICAgICBfX2JvZHksXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiBfX2hlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiBfX3BhcmFtcyxcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3Q8YW55PihyZXEpLnBpcGUoXHJcbiAgICAgIF9fZmlsdGVyKF9yID0+IF9yIGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSxcclxuICAgICAgX19tYXAoKF9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIF9yIGFzIF9fU3RyaWN0SHR0cFJlc3BvbnNlPExvY2FsaXphdGlvbj47XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAcGFyYW0gbG9jYWxpemF0aW9uIHVuZGVmaW5lZFxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIFBvc3RMb2NhbGl6YXRpb24obG9jYWxpemF0aW9uPzogTG9jYWxpemF0aW9uKTogX19PYnNlcnZhYmxlPExvY2FsaXphdGlvbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuUG9zdExvY2FsaXphdGlvblJlc3BvbnNlKGxvY2FsaXphdGlvbikucGlwZShcclxuICAgICAgX19tYXAoX3IgPT4gX3IuYm9keSBhcyBMb2NhbGl6YXRpb24pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGlkIHVuZGVmaW5lZFxyXG4gICAqIEByZXR1cm4gU3VjY2Vzc1xyXG4gICAqL1xyXG4gIEdldExvY2FsaXphdGlvblJlc3BvbnNlKGlkOiBzdHJpbmcpOiBfX09ic2VydmFibGU8X19TdHJpY3RIdHRwUmVzcG9uc2U8TG9jYWxpemF0aW9uPj4ge1xyXG4gICAgbGV0IF9fcGFyYW1zID0gdGhpcy5uZXdQYXJhbXMoKTtcclxuICAgIGxldCBfX2hlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgIGxldCBfX2JvZHk6IGFueSA9IG51bGw7XHJcblxyXG4gICAgbGV0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdDxhbnk+KFxyXG4gICAgICAnR0VUJyxcclxuICAgICAgdGhpcy5yb290VXJsICsgYC9hcGkvTG9jYWxpemF0aW9ucy8ke2lkfWAsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8TG9jYWxpemF0aW9uPjtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBpZCB1bmRlZmluZWRcclxuICAgKiBAcmV0dXJuIFN1Y2Nlc3NcclxuICAgKi9cclxuICBHZXRMb2NhbGl6YXRpb24oaWQ6IHN0cmluZyk6IF9fT2JzZXJ2YWJsZTxMb2NhbGl6YXRpb24+IHtcclxuICAgIHJldHVybiB0aGlzLkdldExvY2FsaXphdGlvblJlc3BvbnNlKGlkKS5waXBlKFxyXG4gICAgICBfX21hcChfciA9PiBfci5ib2R5IGFzIExvY2FsaXphdGlvbilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gcGFyYW1zIFRoZSBgTG9jYWxpemF0aW9uc1NlcnZpY2UuUHV0TG9jYWxpemF0aW9uUGFyYW1zYCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcclxuICAgKlxyXG4gICAqIC0gYGlkYDpcclxuICAgKlxyXG4gICAqIC0gYGxvY2FsaXphdGlvbmA6XHJcbiAgICovXHJcbiAgUHV0TG9jYWxpemF0aW9uUmVzcG9uc2UocGFyYW1zOiBMb2NhbGl6YXRpb25zU2VydmljZS5QdXRMb2NhbGl6YXRpb25QYXJhbXMpOiBfX09ic2VydmFibGU8X19TdHJpY3RIdHRwUmVzcG9uc2U8bnVsbD4+IHtcclxuICAgIGxldCBfX3BhcmFtcyA9IHRoaXMubmV3UGFyYW1zKCk7XHJcbiAgICBsZXQgX19oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBsZXQgX19ib2R5OiBhbnkgPSBudWxsO1xyXG5cclxuICAgIF9fYm9keSA9IHBhcmFtcy5sb2NhbGl6YXRpb247XHJcbiAgICBsZXQgcmVxID0gbmV3IEh0dHBSZXF1ZXN0PGFueT4oXHJcbiAgICAgICdQVVQnLFxyXG4gICAgICB0aGlzLnJvb3RVcmwgKyBgL2FwaS9Mb2NhbGl6YXRpb25zLyR7cGFyYW1zLmlkfWAsXHJcbiAgICAgIF9fYm9keSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IF9faGVhZGVycyxcclxuICAgICAgICBwYXJhbXM6IF9fcGFyYW1zLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KHJlcSkucGlwZShcclxuICAgICAgX19maWx0ZXIoX3IgPT4gX3IgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpLFxyXG4gICAgICBfX21hcCgoX3IpID0+IHtcclxuICAgICAgICByZXR1cm4gX3IgYXMgX19TdHJpY3RIdHRwUmVzcG9uc2U8bnVsbD47XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAcGFyYW0gcGFyYW1zIFRoZSBgTG9jYWxpemF0aW9uc1NlcnZpY2UuUHV0TG9jYWxpemF0aW9uUGFyYW1zYCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcclxuICAgKlxyXG4gICAqIC0gYGlkYDpcclxuICAgKlxyXG4gICAqIC0gYGxvY2FsaXphdGlvbmA6XHJcbiAgICovXHJcbiAgUHV0TG9jYWxpemF0aW9uKHBhcmFtczogTG9jYWxpemF0aW9uc1NlcnZpY2UuUHV0TG9jYWxpemF0aW9uUGFyYW1zKTogX19PYnNlcnZhYmxlPG51bGw+IHtcclxuICAgIHJldHVybiB0aGlzLlB1dExvY2FsaXphdGlvblJlc3BvbnNlKHBhcmFtcykucGlwZShcclxuICAgICAgX19tYXAoX3IgPT4gX3IuYm9keSBhcyBudWxsKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBpZCB1bmRlZmluZWRcclxuICAgKiBAcmV0dXJuIFN1Y2Nlc3NcclxuICAgKi9cclxuICBEZWxldGVMb2NhbGl6YXRpb25SZXNwb25zZShpZDogc3RyaW5nKTogX19PYnNlcnZhYmxlPF9fU3RyaWN0SHR0cFJlc3BvbnNlPExvY2FsaXphdGlvbj4+IHtcclxuICAgIGxldCBfX3BhcmFtcyA9IHRoaXMubmV3UGFyYW1zKCk7XHJcbiAgICBsZXQgX19oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBsZXQgX19ib2R5OiBhbnkgPSBudWxsO1xyXG5cclxuICAgIGxldCByZXEgPSBuZXcgSHR0cFJlcXVlc3Q8YW55PihcclxuICAgICAgJ0RFTEVURScsXHJcbiAgICAgIHRoaXMucm9vdFVybCArIGAvYXBpL0xvY2FsaXphdGlvbnMvJHtpZH1gLFxyXG4gICAgICBfX2JvZHksXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiBfX2hlYWRlcnMsXHJcbiAgICAgICAgcGFyYW1zOiBfX3BhcmFtcyxcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJ1xyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3Q8YW55PihyZXEpLnBpcGUoXHJcbiAgICAgIF9fZmlsdGVyKF9yID0+IF9yIGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSxcclxuICAgICAgX19tYXAoKF9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIF9yIGFzIF9fU3RyaWN0SHR0cFJlc3BvbnNlPExvY2FsaXphdGlvbj47XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAcGFyYW0gaWQgdW5kZWZpbmVkXHJcbiAgICogQHJldHVybiBTdWNjZXNzXHJcbiAgICovXHJcbiAgRGVsZXRlTG9jYWxpemF0aW9uKGlkOiBzdHJpbmcpOiBfX09ic2VydmFibGU8TG9jYWxpemF0aW9uPiB7XHJcbiAgICByZXR1cm4gdGhpcy5EZWxldGVMb2NhbGl6YXRpb25SZXNwb25zZShpZCkucGlwZShcclxuICAgICAgX19tYXAoX3IgPT4gX3IuYm9keSBhcyBMb2NhbGl6YXRpb24pXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlIExvY2FsaXphdGlvbnNTZXJ2aWNlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogUGFyYW1ldGVycyBmb3IgUHV0TG9jYWxpemF0aW9uXHJcbiAgICovXHJcbiAgZXhwb3J0IGludGVyZmFjZSBQdXRMb2NhbGl6YXRpb25QYXJhbXMge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGxvY2FsaXphdGlvbj86IExvY2FsaXphdGlvbjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IExvY2FsaXphdGlvbnNTZXJ2aWNlIH1cclxuIl19