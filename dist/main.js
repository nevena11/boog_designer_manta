(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <app-boog id=\"modelCreation\"></app-boog>\n</div>\n\n<div class=\"row\">\n  <app-conditions></app-conditions>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/boog/boog.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/boog/boog.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n<head>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n        integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n</head>\n-->\n<div class=\"col-md-5\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h4>3D view</h4>\n            <div  *ngFor=\"let img of images; let item = index\" class=\"option\" [ngClass]=\"{'--is-active': selectedItem === item}\"\n                (click)=\"selectedItemId = item\" data-option=item (click)=\"selectOption(item)\">\n                <img src=\"{{img}}\" alt=\"\" />\n            </div>\n        </div>\n    </div>\n\n    <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n                    <h4 class=\"panel-title\">\n                        <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\"\n                            aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                            Change background color\n                        </a>\n                    </h4>\n                </div>\n                <div id=\"collapseOne\" class=\"panel-collapse collapse\" role=\"tabpanel\"\n                    aria-labelledby=\"headingOne\">\n                    <div class=\"panel-body\">\n                        <div id=\"js-tray\" class=\"tray\">\n                            <div id=\"js-tray-slide\" class=\"tray__slide\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n                    <h4 class=\"panel-title\">\n                        <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\"\n                            aria-expanded=\"true\" aria-controls=\"collapseTwo\">\n                            Add logo or velcro\n                        </a>\n                    </h4>\n                </div>\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\"\n                    aria-labelledby=\"headingTwo\">\n                    <div class=\"panel-body\">\n                        <div class=\"row\">\n                            <input type=\"radio\" name=\"image\" ngModel class=\"input-hidden col-sm-2\" value=\"none\">\n                            <p class=\"col-sm-3\">None</p>\n                            <div class=\"col-sm-7\"></div>\n                            <input type=\"radio\" name=\"image\" ngModel class=\"input-hidden col-sm-2\" value=\"img\">\n                            <img class=\"col-sm-3\" src=\"../../assets/images/imageUpload.jpg\" />\n                            <p class=\"col-sm-7\">Upload an image in png only</p>\n                            <input type=\"radio\" name=\"image\" ngModel id=\"velcro\" class=\"input-hidden col-sm-2\"\n                                value=\"levaStrana\">\n                            <img class=\"col-sm-3\" src=\"//placekitten.com/151/151\" />\n                            <p class=\"col-sm-7\">Velcro area </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n                    <h4 class=\"panel-title\">\n                        <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\"\n                            href=\"#collapseThree\" aria-expanded=\"true\" aria-controls=\"collapseThree\">\n                            Add text\n                        </a>\n                    </h4>\n                </div>\n                <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\"\n                    aria-labelledby=\"headingThree\">\n                    <div class=\"panel-body panel3\">\n                        <label class=\"col-sm-4\">\n                            <input type=\"radio\" name=\"text\" ngModel class=\"input-hidden\" value=\"none\">\n                            <p>NONE</p>\n                        </label>\n                        <label class=\"col-sm-4\">\n                            <input type=\"radio\" name=\"text\" ngModel class=\"input-hidden\" value=\"start\">\n                            <p>START</p>\n                        </label>\n                        <label class=\"col-sm-4\">\n                            <input type=\"radio\" name=\"text\" ngModel class=\"input-hidden\" value=\"finish\">\n                            <p>FINISH</p>\n                        </label>\n                        <label class=\"col-sm-12\">\n                            <input type=\"radio\" name=\"text\" ngModel class=\"input-hidden\" value=\"startFinish\">\n                            <p>START(front) / FINISH(back)</p>\n                        </label>\n                    </div>\n                </div>\n            </div>\n\n    </div>\n</div>\n<!--                     Desna strana                 -->\n\n<div class=\"col-md-7\">\n    <div id=\"body\">\n\n        <div class=\"loading\" id=\"js-loader\">\n            <div class=\"loader\"></div>\n        </div>\n\n        <span class=\"drag-notice\" id=\"js-drag-notice\">Drag to rotate 360&#176;</span>\n\n        <div class=\"options\">\n            <!-- <div *ngFor=\"let img of images; let item = index\">\n        <div class=\"option\" [ngClass]=\"{'--is-active': selectedItem === item}\" (click)=\"selectedItemId = item\"\n            data-option=item (click)=\"selectOption(item)\">\n            <img src=\"{{img}}\" alt=\"\" />\n        </div>\n    </div> -->\n        </div>\n\n        <canvas #c id=\"c\"> </canvas>\n\n        <div class=\"controls\">\n            <div class=\"info\">\n                <div class=\"info__message\">\n                    <p><strong>&nbsp;Grab&nbsp;</strong> to rotate boog. <strong>&nbsp;Scroll&nbsp;</strong> to zoom.</p>\n                </div>\n            </div>\n            <!-- <div id=\"js-tray\" class=\"tray\">\n                <div id=\"js-tray-slide\" class=\"tray__slide\"></div>\n            </div> -->\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/conditions/conditions.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conditions/conditions.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n\n  <div class=\"container\" *ngIf=\"conditions\">\n\n    <div class=\"row\">\n      <div class=\"col-md-3 box\">\n        <div class=\"col-sm-7 left-side\">\n          <img src=\"../../assets/images/blower.jpeg\" alt=\"\">\n        </div>\n        <div class=\"col-sm-5\">\n          <div class=\"row\">\n            <input (change)=\"blowerChange($event)\" name=\"blower\" value=\"blower\" type=\"checkbox\" ngModel/>\n            Blower\n            <br>\n          </div>\n          <div class=\"row\">\n            <h2>Included</h2>\n          </div>\n          <div class=\"row\">\n            <h5>{{blower.price}}&euro;</h5>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-3 box\">\n        <div class=\"col-sm-7 left-side\">\n          <img src=\"../../assets/images/basket.jpg\" alt=\"Basket\">\n        </div>\n        <div class=\"col-sm-5\">\n          <div class=\"row\">\n            <h5><input type=\"checkbox\" name=\"basket\" value=\"basket\" (change)=\"basketChange($event)\" ngModel>Storage\n              basket</h5>\n          </div>\n          <div class=\"row\">\n            <h5>{{basket.description}}</h5>\n          </div>\n          <div class=\"row\">\n            <h5>{{basket.price}}&euro;</h5>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-3 box\">\n        <div class=\"col-sm-7 left-side\">\n          <img src=\"../../assets/images/delivery.png\" alt=\"\">\n        </div>\n        <div class=\"col-sm-5\">\n          <div class=\"row\">\n            <h4><input type=\"checkbox\" name=\"delivery\" value=\"delivery\" (change)=\"deliveryChange($event)\" ngModel>\n              Delivery\n            </h4>\n          </div>\n          <div class=\"row\">\n            <h5> {{delivery.description}} </h5>\n          </div>\n          <div class=\"row\">\n            <h5>{{delivery.price}}&euro;</h5>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-2\" style=\"padding: 10px;\">\n        <div style=\"text-align: center;\">\n          <h1><strong>{{total}} &euro;</strong></h1>\n        </div>\n        <div class=\"row\">\n          <button class=\"btn btn-block btn-primary btn-lg\" type=\"submit\" style=\"contain: content;\">\n            <h4>REQUEST QUOTATION</h4>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/request-quotation/request-quotation.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/request-quotation/request-quotation.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"container\">\n  <div class=\"row\">\n    <h1><strong>999, - *</strong></h1>\n  </div>\n  <div class=\"row\">\n    <button class=\"btn btn-block btn-primary btn-lg\" type=\"submit\"><h4>REQUEST QUOTATION</h4></button>\n  </div>\n</div> -->");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color.service */ "./src/app/color.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        this.service = service;
        this.pricesMaker = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.service.getColors().subscribe((response) => {
        //   //("Response", response);
        //   this.color = response[0].colors;
        // });
    };
    AppComponent.prototype.onBasketIncluded = function (event) {
        if (event.target.checked === true) {
            this.pricesMaker.push(event.target.defaultValue);
        }
    };
    AppComponent.prototype.onBlowerIncluded = function (event) {
        if (event.target.checked === true) {
            this.pricesMaker.push(event.target.defaultValue);
        }
    };
    AppComponent.prototype.onDeliveryIncluded = function (event) {
        if (event.target.checked === true) {
            this.pricesMaker.push(event.target.defaultValue);
        }
    };
    AppComponent.prototype.onPricesAccepted = function () {
        console.log(this.pricesMaker);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "color", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [".row { background: #DCDCDC; padding: 20px; }"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _conditions_conditions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conditions/conditions.component */ "./src/app/conditions/conditions.component.ts");
/* harmony import */ var _request_quotation_request_quotation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./request-quotation/request-quotation.component */ "./src/app/request-quotation/request-quotation.component.ts");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./color.service */ "./src/app/color.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _boog_boog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./boog/boog.component */ "./src/app/boog/boog.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _conditions_conditions_component__WEBPACK_IMPORTED_MODULE_6__["ConditionsComponent"],
                _request_quotation_request_quotation_component__WEBPACK_IMPORTED_MODULE_7__["RequestQuotationComponent"],
                _boog_boog_component__WEBPACK_IMPORTED_MODULE_10__["BoogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [_color_service__WEBPACK_IMPORTED_MODULE_8__["ColorService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/boog/boog.component.scss":
/*!******************************************!*\
  !*** ./src/app/boog/boog.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n@import url(\"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css\");\n@charset \"UTF-8\";\nbody,\n* {\n  touch-action: manipulation;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n.frame {\n  top: 0;\n  position: absolute;\n  left: 0;\n  padding: 1rem;\n}\n.frame__title {\n  font-size: 1rem;\n  display: inline-block;\n}\n.frame__links {\n  display: inline-block;\n  margin: 0 2rem;\n  text-transform: lowercase;\n}\n.frame__links a {\n  display: inline-block;\n  margin: 0 0.25rem;\n  text-decoration: none;\n  color: red;\n}\n.frame__links a:focus,\n.frame__links a:hover {\n  text-decoration: underline;\n}\n#c {\n  width: 100%;\n  height: 100%;\n  display: block;\n  top: 0;\n  left: 0;\n}\n#js-tray {\n  margin-left: 5px;\n}\n.controls {\n  /*position: absolute;*/\n  /*bottom: 0;*/\n  /*width: 100%;*/\n}\n.option {\n  background-size: cover;\n  background-position: 50%;\n  background-color: white;\n  margin: 3px;\n  padding: 2px;\n  height: 45px;\n  width: 45px;\n  border: 1px solid silver;\n  display: inline-block;\n  /*display: flex;\n  justify-content: center;\n  align-items: center;*/\n  cursor: pointer;\n}\n.option img {\n  height: 100%;\n  width: auto;\n}\n.option:hover {\n  border: 1px solid red;\n}\n.option.--is-active {\n  border: 1px solid gray;\n  cursor: default;\n  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.8);\n}\n.info {\n  padding: 0 1em;\n  display: flex;\n  justify-content: flex-end;\n}\n.info p {\n  margin-top: 0;\n}\n.tray {\n  /*width: 100%;*/\n  /*height: 50px;*/\n  /*position: relative;*/\n  overflow-x: hidden;\n}\n.tray__slide {\n  /*max-width: 100%;*/\n  /*position: absolute;*/\n  /*display: flex;*/\n  left: 0;\n  /*   transform: translateX(-50%);\n  animation: wheelin 1s 2s ease-in-out forwards; */\n}\n:host ::ng-deep .tray__swatch {\n  transition: 0.1s ease-in;\n  height: 20px;\n  width: 20px;\n  margin: 3px;\n  /*flex: 1;*/\n  display: inline-block;\n  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);\n  background-size: cover;\n  background-position: center;\n}\n:host ::ng-deep .tray__swatch:hover {\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);\n  cursor: pointer;\n}\n.drag-notice {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2em;\n  width: 10em;\n  height: 10em;\n  box-sizing: border-box;\n  font-size: 0.9em;\n  font-weight: 800;\n  text-transform: uppercase;\n  text-align: center;\n  border-radius: 5em;\n  background: white;\n  position: absolute;\n  margin-left: 45%;\n}\n.drag-notice.start {\n  -webkit-animation: popout 0.25s 3s forwards;\n  animation: popout 0.25s 3s forwards;\n}\n@-webkit-keyframes popout {\n  to {\n    transform: scale(0);\n  }\n}\n@keyframes popout {\n  to {\n    transform: scale(0);\n  }\n}\n@-webkit-keyframes wheelin {\n  to {\n    transform: translateX(0);\n  }\n}\n@keyframes wheelin {\n  to {\n    transform: translateX(0);\n  }\n}\n@media (max-width: 960px) {\n  .options {\n    top: 0;\n  }\n\n  .info {\n    padding: 0 1em 1em 0;\n  }\n\n  .info__message {\n    display: flex;\n    align-items: flex-end;\n  }\n\n  .info__message p {\n    margin: 0;\n    font-size: 0.7em;\n  }\n\n  .frame {\n    left: auto;\n    right: 0;\n    padding-left: 6rem;\n  }\n\n  .frame__links {\n    display: block;\n    margin: 0;\n    text-align: right;\n  }\n}\n@media (max-width: 720px) {\n  .info {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0 1em 1em;\n  }\n\n  .info__message {\n    margin-bottom: 1em;\n  }\n}\n@media (max-width: 680px) {\n  .info {\n    padding: 1em 2em;\n  }\n\n  .info__message {\n    display: none;\n  }\n\n  .options {\n    bottom: 50px;\n  }\n\n  .option {\n    height: 35px;\n    width: 35px;\n  }\n}\n.loading {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #f1f1f1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.loader {\n  -ms-perspective: 120px;\n  perspective: 120px;\n  width: 100px;\n  height: 100px;\n}\n.loader::before {\n  content: \"\";\n  position: absolute;\n  left: 25px;\n  top: 25px;\n  width: 50px;\n  height: 50px;\n  background-color: #ff0000;\n  -webkit-animation: flip 1s infinite;\n          animation: flip 1s infinite;\n}\n@-webkit-keyframes flip {\n  0% {\n    transform: rotate(0);\n  }\n  50% {\n    transform: rotateY(180deg);\n  }\n  100% {\n    transform: rotateY(180deg) rotateX(180deg);\n  }\n}\n@keyframes flip {\n  0% {\n    transform: rotate(0);\n  }\n  50% {\n    transform: rotateY(180deg);\n  }\n  100% {\n    transform: rotateY(180deg) rotateX(180deg);\n  }\n}\n.containter {\n  background-color: gray;\n}\nimg {\n  width: 50px;\n}\n.panel-heading {\n  /*width: 37rem;*/\n  padding: 15px;\n}\n.panel-title > a:before {\n  float: right !important;\n  font-family: FontAwesome;\n  content: \"\";\n  padding-right: 5px;\n}\n.panel-title > a.collapsed:before {\n  float: right !important;\n  content: \"\";\n}\n.panel-title > a:hover,\n.panel-title > a:active,\n.panel-title > a:focus {\n  text-decoration: none;\n}\n.panel3 label {\n  display: flex;\n}\n.panel3 p {\n  margin: 0 1rem;\n  text-align: center;\n}\n.panel3 input {\n  margin: 0;\n}\n.row {\n  text-align: left;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vZy9DOlxcVXNlcnNcXGplbGVuYWpcXERvd25sb2Fkc1xcYm9vZy1kZXNpZ25lci1kZXZlbG9wL3NyY1xcYXBwXFxib29nXFxib29nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ib29nL2Jvb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFRLDBGQUFBO0FDQVIsZ0JBQWdCO0FERWhCOztFQUVFLDBCQUFBO0FDQ0Y7QURFQTs7O0VBR0Usc0JBQUE7QUNDRjtBREVBO0VBQ0UsTUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7QUNDRjtBREVBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FDQ0Y7QURFQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDQ0Y7QURFQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNDRjtBREVBOztFQUVFLDBCQUFBO0FDQ0Y7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDQ0Y7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7QURDQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNFRjtBREtBO0VBQ0Usc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQTs7dUJBQUE7RUFHQSxlQUFBO0FDRkY7QURJQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDREY7QURHQTtFQUNFLHFCQUFBO0FDQUY7QURHQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0FDQUY7QURHQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNBRjtBREdBO0VBQ0UsYUFBQTtBQ0FGO0FER0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURHQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLE9BQUE7RUFDQTtrREFBQTtBQ0NGO0FER0E7RUFDRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0FGO0FER0E7RUFDRSwwQ0FBQTtFQUNBLGVBQUE7QUNBRjtBREdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREdBO0VBQ0UsMkNBQUE7RUFDQSxtQ0FBQTtBQ0FGO0FER0E7RUFDRTtJQUVFLG1CQUFBO0VDQUY7QUFDRjtBREdBO0VBQ0U7SUFFRSxtQkFBQTtFQ0RGO0FBQ0Y7QURJQTtFQUNFO0lBRUUsd0JBQUE7RUNGRjtBQUNGO0FES0E7RUFDRTtJQUVFLHdCQUFBO0VDSEY7QUFDRjtBRE1BO0VBQ0U7SUFDRSxNQUFBO0VDSkY7O0VET0E7SUFDRSxvQkFBQTtFQ0pGOztFRE9BO0lBQ0UsYUFBQTtJQUNBLHFCQUFBO0VDSkY7O0VET0E7SUFDRSxTQUFBO0lBQ0EsZ0JBQUE7RUNKRjs7RURPQTtJQUNFLFVBQUE7SUFDQSxRQUFBO0lBQ0Esa0JBQUE7RUNKRjs7RURPQTtJQUNFLGNBQUE7SUFDQSxTQUFBO0lBQ0EsaUJBQUE7RUNKRjtBQUNGO0FET0E7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VDTEY7O0VEUUE7SUFDRSxrQkFBQTtFQ0xGO0FBQ0Y7QURRQTtFQUNFO0lBQ0UsZ0JBQUE7RUNORjs7RURTQTtJQUNFLGFBQUE7RUNORjs7RURTQTtJQUNFLFlBQUE7RUNORjs7RURTQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VDTkY7QUFDRjtBRFNBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1BGO0FEVUE7RUFHRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNQRjtBRFVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ1BGO0FEVUE7RUFDRTtJQUNFLG9CQUFBO0VDUEY7RURVQTtJQUNFLDBCQUFBO0VDUkY7RURXQTtJQUNFLDBDQUFBO0VDVEY7QUFDRjtBREZBO0VBQ0U7SUFDRSxvQkFBQTtFQ1BGO0VEVUE7SUFDRSwwQkFBQTtFQ1JGO0VEV0E7SUFDRSwwQ0FBQTtFQ1RGO0FBQ0Y7QURZQTtFQUNFLHNCQUFBO0FDVkY7QURhQTtFQUNFLFdBQUE7QUNWRjtBRGFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDVkY7QURhQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNWRjtBRFlBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FDVEY7QURXQTs7O0VBR0UscUJBQUE7QUNSRjtBRFlFO0VBQ0UsYUFBQTtBQ1RKO0FEV0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNUSjtBRFdFO0VBQ0UsU0FBQTtBQ1RKO0FEYUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9ib29nL2Jvb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNS4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiKTtcblxuYm9keSxcbioge1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZyYW1lIHtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5mcmFtZV9fdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZyYW1lX19saW5rcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDJyZW07XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG59XG5cbi5mcmFtZV9fbGlua3MgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDAuMjVyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmZyYW1lX19saW5rcyBhOmZvY3VzLFxuLmZyYW1lX19saW5rcyBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbiNjIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuI2pzLXRyYXkge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmNvbnRyb2xzIHtcbiAgLypwb3NpdGlvbjogYWJzb2x1dGU7Ki9cbiAgLypib3R0b206IDA7Ki9cbiAgLyp3aWR0aDogMTAwJTsqL1xufVxuXG4ub3B0aW9ucyB7XG5cbn1cblxuLm9wdGlvbiB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogM3B4O1xuICBwYWRkaW5nOiAycHg7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHNpbHZlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAvKmRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyovXG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5vcHRpb24gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbn1cbi5vcHRpb246aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi5vcHRpb24uLS1pcy1hY3RpdmUge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuLmluZm8ge1xuICBwYWRkaW5nOiAwIDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmluZm8gcCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi50cmF5IHtcbiAgLyp3aWR0aDogMTAwJTsqL1xuICAvKmhlaWdodDogNTBweDsqL1xuICAvKnBvc2l0aW9uOiByZWxhdGl2ZTsqL1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi50cmF5X19zbGlkZSB7XG4gIC8qbWF4LXdpZHRoOiAxMDAlOyovXG4gIC8qcG9zaXRpb246IGFic29sdXRlOyovXG4gIC8qZGlzcGxheTogZmxleDsqL1xuICBsZWZ0OiAwO1xuICAvKiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYW5pbWF0aW9uOiB3aGVlbGluIDFzIDJzIGVhc2UtaW4tb3V0IGZvcndhcmRzOyAqL1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRyYXlfX3N3YXRjaCB7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luOiAzcHg7XG4gIC8qZmxleDogMTsqL1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRyYXlfX3N3YXRjaDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJhZy1ub3RpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMmVtO1xuICB3aWR0aDogMTBlbTtcbiAgaGVpZ2h0OiAxMGVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVlbTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDQ1JTtcbn1cblxuLmRyYWctbm90aWNlLnN0YXJ0IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHBvcG91dCAwLjI1cyAzcyBmb3J3YXJkcztcbiAgYW5pbWF0aW9uOiBwb3BvdXQgMC4yNXMgM3MgZm9yd2FyZHM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBwb3BvdXQge1xuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwb3BvdXQge1xuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHdoZWVsaW4ge1xuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgd2hlZWxpbiB7XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5vcHRpb25zIHtcbiAgICB0b3A6IDA7XG4gIH1cblxuICAuaW5mbyB7XG4gICAgcGFkZGluZzogMCAxZW0gMWVtIDA7XG4gIH1cblxuICAuaW5mb19fbWVzc2FnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIH1cblxuICAuaW5mb19fbWVzc2FnZSBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgfVxuXG4gIC5mcmFtZSB7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDZyZW07XG4gIH1cblxuICAuZnJhbWVfX2xpbmtzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5pbmZvIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxZW0gMWVtO1xuICB9XG5cbiAgLmluZm9fX21lc3NhZ2Uge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjgwcHgpIHtcbiAgLmluZm8ge1xuICAgIHBhZGRpbmc6IDFlbSAyZW07XG4gIH1cblxuICAuaW5mb19fbWVzc2FnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5vcHRpb25zIHtcbiAgICBib3R0b206IDUwcHg7XG4gIH1cblxuICAub3B0aW9uIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gIH1cbn1cblxuLmxvYWRpbmcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDUwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9hZGVyIHtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTIwcHg7XG4gIC1tb3otcGVyc3BlY3RpdmU6IDEyMHB4O1xuICAtbXMtcGVyc3BlY3RpdmU6IDEyMHB4O1xuICBwZXJzcGVjdGl2ZTogMTIwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmxvYWRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyNXB4O1xuICB0b3A6IDI1cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gIGFuaW1hdGlvbjogZmxpcCAxcyBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBmbGlwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHJvdGF0ZVgoMTgwZGVnKTtcbiAgfVxufVxuXG4uY29udGFpbnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG5cbmltZyB7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4ucGFuZWwtaGVhZGluZyB7XG4gIC8qd2lkdGg6IDM3cmVtOyovXG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5wYW5lbC10aXRsZSA+IGE6YmVmb3JlIHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgY29udGVudDogXCJcXGYwNjhcIjtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLnBhbmVsLXRpdGxlID4gYS5jb2xsYXBzZWQ6YmVmb3JlIHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGNvbnRlbnQ6IFwiXFxmMDY3XCI7XG59XG4ucGFuZWwtdGl0bGUgPiBhOmhvdmVyLFxuLnBhbmVsLXRpdGxlID4gYTphY3RpdmUsXG4ucGFuZWwtdGl0bGUgPiBhOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucGFuZWwzIHtcbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgcCB7XG4gICAgbWFyZ2luOiAwIDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGlucHV0IHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLnJvdyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCJAY2hhcnNldCBcIlVURi04XCI7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNS4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiKTtcbmJvZHksXG4qIHtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5mcmFtZSB7XG4gIHRvcDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uZnJhbWVfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5mcmFtZV9fbGlua3Mge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAycmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuXG4uZnJhbWVfX2xpbmtzIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAwLjI1cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5mcmFtZV9fbGlua3MgYTpmb2N1cyxcbi5mcmFtZV9fbGlua3MgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4jYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbiNqcy10cmF5IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmNvbnRyb2xzIHtcbiAgLypwb3NpdGlvbjogYWJzb2x1dGU7Ki9cbiAgLypib3R0b206IDA7Ki9cbiAgLyp3aWR0aDogMTAwJTsqL1xufVxuXG4ub3B0aW9uIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAzcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8qZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7Ki9cbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ub3B0aW9uIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5vcHRpb246aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi5vcHRpb24uLS1pcy1hY3RpdmUge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuLmluZm8ge1xuICBwYWRkaW5nOiAwIDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmluZm8gcCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi50cmF5IHtcbiAgLyp3aWR0aDogMTAwJTsqL1xuICAvKmhlaWdodDogNTBweDsqL1xuICAvKnBvc2l0aW9uOiByZWxhdGl2ZTsqL1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi50cmF5X19zbGlkZSB7XG4gIC8qbWF4LXdpZHRoOiAxMDAlOyovXG4gIC8qcG9zaXRpb246IGFic29sdXRlOyovXG4gIC8qZGlzcGxheTogZmxleDsqL1xuICBsZWZ0OiAwO1xuICAvKiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYW5pbWF0aW9uOiB3aGVlbGluIDFzIDJzIGVhc2UtaW4tb3V0IGZvcndhcmRzOyAqL1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRyYXlfX3N3YXRjaCB7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luOiAzcHg7XG4gIC8qZmxleDogMTsqL1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRyYXlfX3N3YXRjaDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJhZy1ub3RpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMmVtO1xuICB3aWR0aDogMTBlbTtcbiAgaGVpZ2h0OiAxMGVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVlbTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDQ1JTtcbn1cblxuLmRyYWctbm90aWNlLnN0YXJ0IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHBvcG91dCAwLjI1cyAzcyBmb3J3YXJkcztcbiAgYW5pbWF0aW9uOiBwb3BvdXQgMC4yNXMgM3MgZm9yd2FyZHM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBwb3BvdXQge1xuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcG9wb3V0IHtcbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgd2hlZWxpbiB7XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgd2hlZWxpbiB7XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NjBweCkge1xuICAub3B0aW9ucyB7XG4gICAgdG9wOiAwO1xuICB9XG5cbiAgLmluZm8ge1xuICAgIHBhZGRpbmc6IDAgMWVtIDFlbSAwO1xuICB9XG5cbiAgLmluZm9fX21lc3NhZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICB9XG5cbiAgLmluZm9fX21lc3NhZ2UgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gIH1cblxuICAuZnJhbWUge1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiA2cmVtO1xuICB9XG5cbiAgLmZyYW1lX19saW5rcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLmluZm8ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDFlbSAxZW07XG4gIH1cblxuICAuaW5mb19fbWVzc2FnZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjgwcHgpIHtcbiAgLmluZm8ge1xuICAgIHBhZGRpbmc6IDFlbSAyZW07XG4gIH1cblxuICAuaW5mb19fbWVzc2FnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5vcHRpb25zIHtcbiAgICBib3R0b206IDUwcHg7XG4gIH1cblxuICAub3B0aW9uIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gIH1cbn1cbi5sb2FkaW5nIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA1MDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvYWRlciB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEyMHB4O1xuICAtbW96LXBlcnNwZWN0aXZlOiAxMjBweDtcbiAgLW1zLXBlcnNwZWN0aXZlOiAxMjBweDtcbiAgcGVyc3BlY3RpdmU6IDEyMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5sb2FkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjVweDtcbiAgdG9wOiAyNXB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICBhbmltYXRpb246IGZsaXAgMXMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgZmxpcCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHJvdGF0ZVgoMTgwZGVnKTtcbiAgfVxufVxuLmNvbnRhaW50ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuXG5pbWcge1xuICB3aWR0aDogNTBweDtcbn1cblxuLnBhbmVsLWhlYWRpbmcge1xuICAvKndpZHRoOiAzN3JlbTsqL1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ucGFuZWwtdGl0bGUgPiBhOmJlZm9yZSB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIGNvbnRlbnQ6IFwi74GoXCI7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLnBhbmVsLXRpdGxlID4gYS5jb2xsYXBzZWQ6YmVmb3JlIHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGNvbnRlbnQ6IFwi74GnXCI7XG59XG5cbi5wYW5lbC10aXRsZSA+IGE6aG92ZXIsXG4ucGFuZWwtdGl0bGUgPiBhOmFjdGl2ZSxcbi5wYW5lbC10aXRsZSA+IGE6Zm9jdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5wYW5lbDMgbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnBhbmVsMyBwIHtcbiAgbWFyZ2luOiAwIDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wYW5lbDMgaW5wdXQge1xuICBtYXJnaW46IDA7XG59XG5cbi5yb3cge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/boog/boog.component.ts":
/*!****************************************!*\
  !*** ./src/app/boog/boog.component.ts ***!
  \****************************************/
/*! exports provided: BoogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoogComponent", function() { return BoogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three_full__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three-full */ "./node_modules/three-full/builds/Three.es.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../color.service */ "./src/app/color.service.ts");





var BoogComponent = /** @class */ (function () {
    function BoogComponent(document, service) {
        this.service = service;
        this.activeOption = '0';
        this.loaded = false;
        this.initRotate = 65;
        this.selectedItem = 0;
        this.colors = [];
        this.document = document;
    }
    BoogComponent.prototype.ngOnInit = function () {
        var _this = this;
        var me = this;
        var modelCreationElement = document.getElementById('c');
        me.c = this.document.getElementById('c');
        var scene = new three_full__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        me.renderer = new three_full__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]({
            alpha: true,
            antialias: true
        });
        me.renderer.setClearColor(new three_full__WEBPACK_IMPORTED_MODULE_2__["Color"](0xEEEEEE, 1.0));
        var LOADER = document.getElementById('js-loader');
        me.TRAY = document.getElementById('js-tray-slide');
        me.DRAG_NOTICE = document.getElementById('js-drag-notice');
        var MODEL_PATH = "../../assets/images/boog1.glb";
        var BACKGROUND_COLOR = 0xf1f1f1;
        me.scene = new three_full__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        me.scene.background = new three_full__WEBPACK_IMPORTED_MODULE_2__["Color"](BACKGROUND_COLOR);
        me.canvas = this.c;
        me.renderer = new three_full__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]({ canvas: me.canvas, antialias: true });
        me.renderer.setClearColor(new three_full__WEBPACK_IMPORTED_MODULE_2__["Color"](0xEEEEEE, 1.0));
        me.renderer.shadowMap.enabled = true;
        me.renderer.setPixelRatio(window.devicePixelRatio);
        var cameraFar = 50;
        // Add a camera
        me.camera = new three_full__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](50, window.innerWidth / window.innerHeight, 0.1, 1000);
        me.camera.position.z = cameraFar;
        me.camera.position.x = 50;
        me.images = new Array();
        for (var i = 0; i < 6; i++) {
            me.images[i] = "../../assets/images/" + i + ".jpg";
        }
        // Initial material
        me.INITIAL_MTL = new three_full__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({ color: 0xf1f1f1, shininess: 10 });
        me.INITIAL_MAP = [
            { childID: "0", mtl: me.INITIAL_MTL },
            { childID: "1", mtl: me.INITIAL_MTL },
            { childID: "2", mtl: me.INITIAL_MTL },
            { childID: "3", mtl: me.INITIAL_MTL },
            { childID: "4", mtl: me.INITIAL_MTL },
            { childID: "5", mtl: me.INITIAL_MTL }
        ];
        me.loader = new three_full__WEBPACK_IMPORTED_MODULE_2__["GLTFLoader"]();
        me.loader.load(MODEL_PATH, function (gltf) {
            me.theModel = gltf.scene;
            me.theModel.traverse(function (o) {
                if (o.isMesh) {
                    o.castShadow = true;
                    o.receiveShadow = true;
                }
            });
            me.theModel.scale.set(2, 2, 2);
            me.theModel.rotation.y = Math.PI;
            for (var _i = 0, _a = me.INITIAL_MAP; _i < _a.length; _i++) {
                var object = _a[_i];
                me.initColor(me.theModel, object.childID, object.mtl);
            }
            me.scene.add(me.theModel);
            LOADER.remove();
        }, undefined, function (error) {
            console.error(error);
        });
        // Add lights
        me.hemiLight = new three_full__WEBPACK_IMPORTED_MODULE_2__["HemisphereLight"](0xffffff, 0xffffff, 0.61);
        me.hemiLight.position.set(0, 50, 0);
        // Add hemisphere light to scene   
        me.scene.add(me.hemiLight);
        me.dirLight = new three_full__WEBPACK_IMPORTED_MODULE_2__["DirectionalLight"](0xffffff, 0.54);
        me.dirLight.position.set(-8, 12, 8);
        me.dirLight.castShadow = true;
        me.dirLight.shadow.mapSize = new three_full__WEBPACK_IMPORTED_MODULE_2__["Vector2"](1024, 1024);
        // Add directional Light to scene    
        me.scene.add(me.dirLight);
        // Floor
        me.floorGeometry = new three_full__WEBPACK_IMPORTED_MODULE_2__["PlaneGeometry"](5000, 5000, 1, 1);
        me.floorMaterial = new three_full__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({
            color: 0xeeeeee,
            shininess: 0
        });
        me.floor = new three_full__WEBPACK_IMPORTED_MODULE_2__["Mesh"](me.floorGeometry, me.floorMaterial);
        me.floor.rotation.x = -0.5 * Math.PI;
        me.floor.receiveShadow = false;
        me.floor.position.y = -1;
        me.scene.add(me.floor);
        me.controls = new three_full__WEBPACK_IMPORTED_MODULE_2__["OrbitControls"](me.camera, me.renderer.domElement);
        me.controls.maxPolarAngle = Math.PI / 2;
        me.controls.minPolarAngle = Math.PI / 3;
        me.controls.enableDamping = true;
        me.controls.enablePan = false;
        me.controls.dampingFactor = 0.1;
        me.controls.autoRotate = false;
        me.controls.autoRotateSpeed = 0.2;
        var animate = function () {
            me.controls.update();
            me.renderer.render(me.scene, me.camera);
            requestAnimationFrame(animate);
            if (me.resizeRendererToDisplaySize(me.renderer)) {
                var canvas = me.renderer.domElement;
                me.camera.aspect = canvas.clientWidth / canvas.clientHeight;
                me.camera.updateProjectionMatrix();
            }
            if (me.theModel != null && me.loaded == false) {
                me.initialRotation();
                me.DRAG_NOTICE.classList.add('start');
            }
        };
        animate();
        me.service.getColors().subscribe(function (response) {
            (response.results).forEach(function (item) {
                _this.colors.push({
                    color: (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item).value).substr(1, 6)
                });
            });
            me.buildColors(_this.colors);
            // Swatches
            me.swatches = document.querySelectorAll(".tray__swatch");
            for (var _i = 0, _a = me.swatches; _i < _a.length; _i++) {
                var swatch = _a[_i];
                swatch.addEventListener('click', function ($event) { return _this.selectSwatch($event); });
            }
        });
    };
    //EOOnInit
    BoogComponent.prototype.initColor = function (parent, type, mtl) {
        parent.traverse(function (o) {
            if (o.isMesh) {
                if (o.name.includes(type)) {
                    o.material = mtl;
                    o.nameID = type;
                }
            }
        });
    };
    BoogComponent.prototype.resizeRendererToDisplaySize = function (renderer) {
        var canvas = renderer.domElement;
        var width = window.innerWidth;
        var height = window.innerHeight;
        var canvasPixelWidth = canvas.width / window.devicePixelRatio;
        var canvasPixelHeight = canvas.height / window.devicePixelRatio;
        var needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    };
    BoogComponent.prototype.buildColors = function (colors) {
        var _this = this;
        colors.forEach(function (color, i) {
            var swatch = document.createElement('div');
            swatch.classList.add('tray__swatch');
            swatch.style.background = "#" + color.color;
            swatch.setAttribute('data-key', i);
            _this.TRAY.append(swatch);
        });
    };
    BoogComponent.prototype.selectOption = function (e) {
        this.selectedItem = e;
        if (e != 0) {
            this.controls.enabled = false;
        }
        else
            this.controls.enabled = true;
    };
    BoogComponent.prototype.selectSwatch = function (e) {
        var _this = this;
        var me = this;
        var color = this.colors[parseInt(e.target.dataset.key)];
        var new_mtl;
        new_mtl = new three_full__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({
            color: parseInt('0x' + color.color)
        });
        if (this.selectedItem == 0) {
            this.INITIAL_MAP.forEach(function (i) {
                me.setMaterial(_this.theModel, i.childID, new_mtl);
            });
        }
        else
            me.setMaterial(this.theModel, this.selectedItem, new_mtl);
    };
    BoogComponent.prototype.setMaterial = function (parent, type, mtl) {
        parent.traverse(function (o) {
            if (o.isMesh && o.nameID != null) {
                if (o.nameID == type) {
                    o.material = mtl;
                }
            }
        });
    };
    BoogComponent.prototype.initialRotation = function () {
        this.initRotate++;
        if (this.initRotate <= 120) {
            this.theModel.rotation.y += Math.PI / 70;
        }
        else {
            this.loaded = true;
        }
    };
    BoogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _color_service__WEBPACK_IMPORTED_MODULE_4__["ColorService"] }
    ]; };
    BoogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-boog',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./boog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/boog/boog.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./boog.component.scss */ "./src/app/boog/boog.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _color_service__WEBPACK_IMPORTED_MODULE_4__["ColorService"]])
    ], BoogComponent);
    return BoogComponent;
}());



/***/ }),

/***/ "./src/app/color.service.ts":
/*!**********************************!*\
  !*** ./src/app/color.service.ts ***!
  \**********************************/
/*! exports provided: ColorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorService", function() { return ColorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ColorService = /** @class */ (function () {
    function ColorService(http) {
        this.http = http;
    }
    ColorService.prototype.getColors = function () {
        return this.http.get("http://startboog.nl/assets/components/boogdesigner/api/colors", {
            headers: this.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.json();
        }));
        // .catch((error: any) => Observable.throw(this.serverErrorParser.parseServerResponse(error)));
    };
    ColorService.prototype.getConditionsDetails = function () {
        return this.http.get("http://startboog.nl/assets/components/boogdesigner/api/basketoptions", {
            headers: this.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.json();
        }));
    };
    ColorService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
    ]; };
    ColorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ColorService);
    return ColorService;
}());



/***/ }),

/***/ "./src/app/conditions/conditions.component.scss":
/*!******************************************************!*\
  !*** ./src/app/conditions/conditions.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 100px;\n  height: 100px;\n}\n\n.box {\n  border: 1px solid white;\n  margin-right: 10px;\n  background-color: white;\n  border-radius: 5px;\n}\n\n.box .left-side {\n  padding-left: 0px;\n}\n\nbtn {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZGl0aW9ucy9DOlxcVXNlcnNcXGplbGVuYWpcXERvd25sb2Fkc1xcYm9vZy1kZXNpZ25lci1kZXZlbG9wL3NyY1xcYXBwXFxjb25kaXRpb25zXFxjb25kaXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb25kaXRpb25zL2NvbmRpdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDRTtFQUNFLGlCQUFBO0FDQ0o7O0FER0E7RUFDRSxlQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9jb25kaXRpb25zL2NvbmRpdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBcbiAgLmxlZnQtc2lkZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cbn1cblxuYnRuIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufSIsImltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uYm94IC5sZWZ0LXNpZGUge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuYnRuIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/conditions/conditions.component.ts":
/*!****************************************************!*\
  !*** ./src/app/conditions/conditions.component.ts ***!
  \****************************************************/
/*! exports provided: ConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionsComponent", function() { return ConditionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color.service */ "./src/app/color.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_conditions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/conditions */ "./src/app/model/conditions.ts");





var ConditionsComponent = /** @class */ (function () {
    function ConditionsComponent(servise) {
        this.servise = servise;
        this.blower = {};
        this.basket = {};
        this.delivery = {};
        this.conditions = [];
        this.total = 999;
        this.conditionsAdded = {
            blower: false,
            basket: false,
            delivery: false
        };
    }
    ConditionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.servise.getConditionsDetails().subscribe(function (response) {
            (response.results).forEach(function (item) {
                _this.conditions.push({
                    id: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item).id,
                    createdate: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item).createdate,
                    label: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item).label,
                    description: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item).description,
                    image: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item).image,
                    limit: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item).limit,
                    price: parseFloat(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item).price)
                });
            });
            _this.initConditionValues();
        });
    };
    ConditionsComponent.prototype.initConditionValues = function () {
        this.blower = this.conditions.find(function (cond) { return cond.label === _model_conditions__WEBPACK_IMPORTED_MODULE_4__["Condition"].Blower; });
        this.basket = this.conditions.find(function (cond) { return cond.label === _model_conditions__WEBPACK_IMPORTED_MODULE_4__["Condition"].Basket; });
        this.delivery = this.conditions.find(function (cond) { return cond.label === _model_conditions__WEBPACK_IMPORTED_MODULE_4__["Condition"].Delivery; });
    };
    ConditionsComponent.prototype.onSubmit = function () {
        console.log(this.signupForm);
        this.conditionsAdded.blower = this.signupForm.value.blower;
        this.conditionsAdded.basket = this.signupForm.value.basket;
        this.conditionsAdded.delivery = this.signupForm.value.delivery;
    };
    ConditionsComponent.prototype.blowerChange = function (event) {
        if (event.currentTarget.checked) {
            this.total += this.blower.price;
        }
        else {
            this.total -= this.blower.price;
        }
    };
    ConditionsComponent.prototype.basketChange = function (event) {
        if (event.currentTarget.checked) {
            this.total += this.basket.price;
        }
        else {
            this.total -= this.basket.price;
        }
    };
    ConditionsComponent.prototype.deliveryChange = function (event) {
        if (event.currentTarget.checked) {
            this.total += this.delivery.price;
        }
        else {
            this.total -= this.delivery.price;
        }
    };
    ConditionsComponent.ctorParameters = function () { return [
        { type: _color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], ConditionsComponent.prototype, "signupForm", void 0);
    ConditionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conditions',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!.//conditions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/conditions/conditions.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! .//conditions.component.scss */ "./src/app/conditions/conditions.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"]])
    ], ConditionsComponent);
    return ConditionsComponent;
}());



/***/ }),

/***/ "./src/app/model/conditions.ts":
/*!*************************************!*\
  !*** ./src/app/model/conditions.ts ***!
  \*************************************/
/*! exports provided: Condition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Condition", function() { return Condition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Condition;
(function (Condition) {
    Condition["Blower"] = "pump";
    Condition["Basket"] = "basket";
    Condition["Delivery"] = "delivery";
})(Condition || (Condition = {}));


/***/ }),

/***/ "./src/app/request-quotation/request-quotation.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/request-quotation/request-quotation.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  width: 220px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVxdWVzdC1xdW90YXRpb24vQzpcXFVzZXJzXFxqZWxlbmFqXFxEb3dubG9hZHNcXGJvb2ctZGVzaWduZXItZGV2ZWxvcC9zcmNcXGFwcFxccmVxdWVzdC1xdW90YXRpb25cXHJlcXVlc3QtcXVvdGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXF1ZXN0LXF1b3RhdGlvbi9yZXF1ZXN0LXF1b3RhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3JlcXVlc3QtcXVvdGF0aW9uL3JlcXVlc3QtcXVvdGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgd2lkdGg6IDIyMHB4O1xufSIsImJ1dHRvbiB7XG4gIHdpZHRoOiAyMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/request-quotation/request-quotation.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/request-quotation/request-quotation.component.ts ***!
  \******************************************************************/
/*! exports provided: RequestQuotationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestQuotationComponent", function() { return RequestQuotationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RequestQuotationComponent = /** @class */ (function () {
    function RequestQuotationComponent() {
    }
    RequestQuotationComponent.prototype.ngOnInit = function () {
    };
    RequestQuotationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-quotation',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./request-quotation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/request-quotation/request-quotation.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./request-quotation.component.scss */ "./src/app/request-quotation/request-quotation.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RequestQuotationComponent);
    return RequestQuotationComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jelenaj\Downloads\boog-designer-develop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map