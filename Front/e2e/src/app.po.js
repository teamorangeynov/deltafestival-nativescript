"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var AppPage = /** @class */ (function () {
    function AppPage() {
    }
    AppPage.prototype.navigateTo = function () {
        return protractor_1.browser.get(protractor_1.browser.baseUrl);
    };
    AppPage.prototype.getTitleText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return AppPage;
}());
exports.AppPage = AppPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQWtEO0FBRWxEO0lBQUE7SUFRQSxDQUFDO0lBUEMsNEJBQVUsR0FBVjtRQUNFLE9BQU8sb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0JBQU8sQ0FBQyxPQUFPLENBQWlCLENBQUM7SUFDdEQsQ0FBQztJQUVELDhCQUFZLEdBQVo7UUFDRSxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBcUIsQ0FBQztJQUNyRSxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBicm93c2VyLCBieSwgZWxlbWVudCB9IGZyb20gJ3Byb3RyYWN0b3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcFBhZ2Uge1xyXG4gIG5hdmlnYXRlVG8oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5nZXQoYnJvd3Nlci5iYXNlVXJsKSBhcyBQcm9taXNlPGFueT47XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZVRleHQoKSB7XHJcbiAgICByZXR1cm4gZWxlbWVudChieS5jc3MoJ2FwcC1yb290IGgxJykpLmdldFRleHQoKSBhcyBQcm9taXNlPHN0cmluZz47XHJcbiAgfVxyXG59XHJcbiJdfQ==