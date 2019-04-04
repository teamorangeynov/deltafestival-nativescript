"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var http_1 = require("@angular/common/http");
/**
 * Custom parameter codec to correctly handle the plus sign in parameter
 * values. See https://github.com/angular/angular/issues/18261
 */
var ParameterCodec = /** @class */ (function () {
    function ParameterCodec() {
    }
    ParameterCodec.prototype.encodeKey = function (key) {
        return encodeURIComponent(key);
    };
    ParameterCodec.prototype.encodeValue = function (value) {
        return encodeURIComponent(value);
    };
    ParameterCodec.prototype.decodeKey = function (key) {
        return decodeURIComponent(key);
    };
    ParameterCodec.prototype.decodeValue = function (value) {
        return decodeURIComponent(value);
    };
    return ParameterCodec;
}());
var PARAMETER_CODEC = new ParameterCodec();
/**
 * Base class for API services
 */
var BaseService = /** @class */ (function () {
    function BaseService(config, http) {
        this.config = config;
        this.http = http;
        this._rootUrl = '';
    }
    Object.defineProperty(BaseService.prototype, "rootUrl", {
        /**
         * Returns the root url for API operations. If not set directly in this
         * service, will fallback to ApiConfiguration.rootUrl.
         */
        get: function () {
            return this._rootUrl || this.config.rootUrl;
        },
        /**
         * Sets the root URL for API operations in this service.
         */
        set: function (rootUrl) {
            this._rootUrl = rootUrl;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a new `HttpParams` with the correct codec
     */
    BaseService.prototype.newParams = function () {
        return new http_1.HttpParams({
            encoder: PARAMETER_CODEC
        });
    };
    return BaseService;
}());
exports.BaseService = BaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFzZS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0JBQW9CO0FBQ3BCLDZDQUFrRjtBQUdsRjs7O0dBR0c7QUFDSDtJQUFBO0lBZ0JBLENBQUM7SUFmQyxrQ0FBUyxHQUFULFVBQVUsR0FBVztRQUNuQixPQUFPLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksS0FBYTtRQUN2QixPQUFPLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxrQ0FBUyxHQUFULFVBQVUsR0FBVztRQUNuQixPQUFPLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksS0FBYTtRQUN2QixPQUFPLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFDRCxJQUFNLGVBQWUsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO0FBRTdDOztHQUVHO0FBQ0g7SUFDRSxxQkFDWSxNQUF3QixFQUN4QixJQUFnQjtRQURoQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSXBCLGFBQVEsR0FBVyxFQUFFLENBQUM7SUFGOUIsQ0FBQztJQVFELHNCQUFJLGdDQUFPO1FBSlg7OztXQUdHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDOUMsQ0FBQztRQUVEOztXQUVHO2FBQ0gsVUFBWSxPQUFlO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQzFCLENBQUM7OztPQVBBO0lBU0Q7O09BRUc7SUFDTywrQkFBUyxHQUFuQjtRQUNFLE9BQU8sSUFBSSxpQkFBVSxDQUFDO1lBQ3BCLE9BQU8sRUFBRSxlQUFlO1NBQ3pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFoQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1ldGVyQ29kZWMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEFwaUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuL2FwaS1jb25maWd1cmF0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBDdXN0b20gcGFyYW1ldGVyIGNvZGVjIHRvIGNvcnJlY3RseSBoYW5kbGUgdGhlIHBsdXMgc2lnbiBpbiBwYXJhbWV0ZXJcclxuICogdmFsdWVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTgyNjFcclxuICovXHJcbmNsYXNzIFBhcmFtZXRlckNvZGVjIGltcGxlbWVudHMgSHR0cFBhcmFtZXRlckNvZGVjIHtcclxuICBlbmNvZGVLZXkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpO1xyXG4gIH1cclxuXHJcbiAgZW5jb2RlVmFsdWUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGRlY29kZUtleShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGtleSk7XHJcbiAgfVxyXG5cclxuICBkZWNvZGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gIH1cclxufVxyXG5jb25zdCBQQVJBTUVURVJfQ09ERUMgPSBuZXcgUGFyYW1ldGVyQ29kZWMoKTtcclxuXHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBBUEkgc2VydmljZXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXNlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBBcGlDb25maWd1cmF0aW9uLFxyXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnRcclxuICApIHtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3Jvb3RVcmw6IHN0cmluZyA9ICcnO1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSByb290IHVybCBmb3IgQVBJIG9wZXJhdGlvbnMuIElmIG5vdCBzZXQgZGlyZWN0bHkgaW4gdGhpc1xyXG4gICAqIHNlcnZpY2UsIHdpbGwgZmFsbGJhY2sgdG8gQXBpQ29uZmlndXJhdGlvbi5yb290VXJsLlxyXG4gICAqL1xyXG4gIGdldCByb290VXJsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fcm9vdFVybCB8fCB0aGlzLmNvbmZpZy5yb290VXJsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgcm9vdCBVUkwgZm9yIEFQSSBvcGVyYXRpb25zIGluIHRoaXMgc2VydmljZS5cclxuICAgKi9cclxuICBzZXQgcm9vdFVybChyb290VXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3Jvb3RVcmwgPSByb290VXJsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBgSHR0cFBhcmFtc2Agd2l0aCB0aGUgY29ycmVjdCBjb2RlY1xyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBuZXdQYXJhbXMoKTogSHR0cFBhcmFtcyB7XHJcbiAgICByZXR1cm4gbmV3IEh0dHBQYXJhbXMoe1xyXG4gICAgICBlbmNvZGVyOiBQQVJBTUVURVJfQ09ERUNcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=