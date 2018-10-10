(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    width: 85%;\r\n    margin: 0 auto;\r\n    margin-top: 5rem;\r\n  }\r\n  \r\n  .content {\r\n    margin-top: 2rem;\r\n    margin-bottom: 5rem;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class='container'>\r\n    <div class='content'>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _routing_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routing/add-item/add-item.component */ "./src/app/routing/add-item/add-item.component.ts");
/* harmony import */ var _routing_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routing/item-list/item-list.component */ "./src/app/routing/item-list/item-list.component.ts");
/* harmony import */ var _routing_take_item_take_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routing/take-item/take-item.component */ "./src/app/routing/take-item/take-item.component.ts");
/* harmony import */ var _routing_history_history_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routing/history/history.component */ "./src/app/routing/history/history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: "", component: _routing_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_10__["AddItemComponent"] },
    { path: "add-item", component: _routing_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_10__["AddItemComponent"] },
    { path: "item-list", component: _routing_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_11__["ItemListComponent"] },
    { path: "take-item", component: _routing_take_item_take_item_component__WEBPACK_IMPORTED_MODULE_12__["TakeItemComponent"] },
    { path: "history", component: _routing_history_history_component__WEBPACK_IMPORTED_MODULE_13__["HistoryComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _routing_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_10__["AddItemComponent"],
                _routing_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_11__["ItemListComponent"],
                _routing_take_item_take_item_component__WEBPACK_IMPORTED_MODULE_12__["TakeItemComponent"],
                _routing_history_history_component__WEBPACK_IMPORTED_MODULE_13__["HistoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:visited , a:link {\r\n    text-decoration: none;\r\n    color: #ffffff;\r\n    \r\n}\r\n.title {\r\n    margin-right: 30px;\r\n    margin-left: 20px;\r\n}\r\n.navbar{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 2;\r\n}\r\nul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n}\r\nli {\r\n    float: left;\r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"navbar\">\r\n  <a routerLink=\".\" class=\"title\">\r\n    <mat-icon class=\"icon\">unarchive</mat-icon> {{title}}\r\n  </a>\r\n  <ul>\r\n    <li>\r\n      <a mat-button routerLink=\"add-item\">เพิ่มสินค้า</a>\r\n    </li>\r\n    <li>\r\n      <a mat-button routerLink=\"item-list\">ดูรายชื่อสินค้า</a>\r\n    </li>\r\n    <li>\r\n      <a mat-button routerLink=\"take-item\">เบิกสินค้า</a>\r\n    </li>\r\n    <li>\r\n      <a mat-button routerLink=\"history\">ดูประวัติ</a>\r\n    </li>\r\n  </ul>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.title = 'ระบบคลังสินค้า';
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/routing/add-item/add-item.component.css":
/*!*********************************************************!*\
  !*** ./src/app/routing/add-item/add-item.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routing/add-item/add-item.component.html":
/*!**********************************************************!*\
  !*** ./src/app/routing/add-item/add-item.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  เพิ่มสินค้า\r\n</h1>\r\n<div class=\"row center-lg center-md start-sm start-xs\">\r\n  <div class=\"col-lg col-md col-sm col-xs\">\r\n      <form #item = \"ngForm\"  (ngSubmit) = \"onClickSubmit(item.value)\">\r\n          <mat-form-field>\r\n            ชื่อสินค้า : <input matInput  name =\"item_name\" [(ngModel)]=\"item.item_name\">\r\n          </mat-form-field><br>\r\n\r\n          <mat-form-field>\r\n           Type: <mat-select name =\"categorys\" [(ngModel)]=\"item.categorys\">\r\n              <mat-option *ngFor=\"let category of categorys\" [value]=\"category.value\">\r\n                {{category.viewValue}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field><br>\r\n\r\n          <mat-form-field>\r\n            ราคา : <input matInput name =\"price\" [(ngModel)]=\"item.price\">\r\n          </mat-form-field><br>\r\n\r\n          <button type=\"submit\" mat-stroked-button color=\"primary\">เพิ่ม</button>\r\n      </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routing/add-item/add-item.component.ts":
/*!********************************************************!*\
  !*** ./src/app/routing/add-item/add-item.component.ts ***!
  \********************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddItemComponent = /** @class */ (function () {
    function AddItemComponent(http) {
        this.http = http;
        this.categorys = [];
    }
    AddItemComponent.prototype.onClickSubmit = function (data) {
        console.log(data);
        this.http.post("http://localhost:8080/item/" + "/" + data.item_name + "/" + data.price + "/" + data.categorys, "").subscribe(function (data) {
            console.log("POST Request is successful ", data);
        }, function (error) {
            console.log("Error", error);
        });
    };
    AddItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categorys.push();
        this.http.get("http://localhost:8080/category").subscribe(function (data) {
            console.log("GET Request is successful ", data);
            for (var index = 0; index < data["length"]; index++) {
                _this.categorys.push({
                    value: data[index].id,
                    viewValue: data[index].name
                });
            }
            //console.log(ELEMENT_DATA);
        }, function (error) {
            console.log("Error", error);
        });
    };
    AddItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-item',
            template: __webpack_require__(/*! ./add-item.component.html */ "./src/app/routing/add-item/add-item.component.html"),
            styles: [__webpack_require__(/*! ./add-item.component.css */ "./src/app/routing/add-item/add-item.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AddItemComponent);
    return AddItemComponent;
}());



/***/ }),

/***/ "./src/app/routing/history/history.component.css":
/*!*******************************************************!*\
  !*** ./src/app/routing/history/history.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }"

/***/ }),

/***/ "./src/app/routing/history/history.component.html":
/*!********************************************************!*\
  !*** ./src/app/routing/history/history.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef> ชื่อผู้เบิก </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"itemName\">\r\n    <th mat-header-cell *matHeaderCellDef> ชื่อสินค้า </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.itemName}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"amount\">\r\n    <th mat-header-cell *matHeaderCellDef> จำนวน </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.amount}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"date\">\r\n    <th mat-header-cell *matHeaderCellDef> วัน </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"time\">\r\n    <th mat-header-cell *matHeaderCellDef> เวลา </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.time}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/routing/history/history.component.ts":
/*!******************************************************!*\
  !*** ./src/app/routing/history/history.component.ts ***!
  \******************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(http) {
        this.http = http;
        this.displayedColumns = ['name', 'itemName', 'amount', 'date', 'time'];
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ELEMENT_DATA = [];
        this.http.get("http://localhost:8080/withdraw").subscribe(function (data) {
            console.log("GET Request is successful ", data);
            for (var index = 0; index < data["length"]; index++) {
                ELEMENT_DATA.push({
                    name: data[index].userId.userName,
                    itemName: data[index].itemId.itemName,
                    amount: data[index].withdraw_amount,
                    time: dateformat__WEBPACK_IMPORTED_MODULE_2___default()(new Date(data[index].date), "h:MM:ss TT"),
                    date: dateformat__WEBPACK_IMPORTED_MODULE_2___default()(new Date(data[index].date), "dd mmmm yyyy")
                });
            }
            //console.log(ELEMENT_DATA);
            _this.dataSource = ELEMENT_DATA;
        }, function (error) {
            console.log("Error", error);
        });
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/routing/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.css */ "./src/app/routing/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/routing/item-list/item-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/routing/item-list/item-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }"

/***/ }),

/***/ "./src/app/routing/item-list/item-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/routing/item-list/item-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"ค้นหา\">\r\n</mat-form-field>\r\n\r\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> รหัสสินค้า </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef> ชื่อสินค้า </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"type\">\r\n    <th mat-header-cell *matHeaderCellDef> ประเภทสินค้า </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.type}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"price\">\r\n    <th mat-header-cell *matHeaderCellDef> ราคา </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/routing/item-list/item-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/routing/item-list/item-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListComponent", function() { return ItemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemListComponent = /** @class */ (function () {
    function ItemListComponent(http) {
        this.http = http;
        this.displayedColumns = ['id', 'name', 'type', 'price'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ItemListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ItemListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ELEMENT_DATA = [];
        this.http.get("http://localhost:8080/item").subscribe(function (data) {
            console.log("GET Request is successful ", data);
            for (var index = 0; index < data["length"]; index++) {
                ELEMENT_DATA.push({
                    id: data[index].id,
                    name: data[index].itemName,
                    type: data[index].category.name,
                    price: data[index].price
                });
            }
            //console.log(ELEMENT_DATA);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        }, function (error) {
            console.log("Error", error);
        });
    };
    ItemListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-list',
            template: __webpack_require__(/*! ./item-list.component.html */ "./src/app/routing/item-list/item-list.component.html"),
            styles: [__webpack_require__(/*! ./item-list.component.css */ "./src/app/routing/item-list/item-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ItemListComponent);
    return ItemListComponent;
}());



/***/ }),

/***/ "./src/app/routing/take-item/take-item.component.css":
/*!***********************************************************!*\
  !*** ./src/app/routing/take-item/take-item.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routing/take-item/take-item.component.html":
/*!************************************************************!*\
  !*** ./src/app/routing/take-item/take-item.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  เบิกสินค้า\r\n</h1>\r\n\r\n<div class=\"center\">\r\n  <form #withdraw = \"ngForm\"  (ngSubmit) = \"onClickSubmit(withdraw.value)\" >\r\n    \r\n    <mat-form-field>\r\n      รหัสผู้เบิก : <input matInput name =\"user_id\" [(ngModel)]=\"withdraw.user_id\">\r\n    </mat-form-field><br>\r\n    <mat-form-field>\r\n      รหัสสินค้า : <input matInput name =\"item_id\"  [(ngModel)]=\"withdraw.item_id\">\r\n    </mat-form-field><br>\r\n    <mat-form-field>\r\n      จำนวน : <input matInput name = \"amount\" [(ngModel)]=\"withdraw.amount\">\r\n    </mat-form-field><br>\r\n    <button type=\"submit\" mat-stroked-button color=\"primary\">เบิก</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routing/take-item/take-item.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/routing/take-item/take-item.component.ts ***!
  \**********************************************************/
/*! exports provided: TakeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeItemComponent", function() { return TakeItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TakeItemComponent = /** @class */ (function () {
    function TakeItemComponent(http) {
        this.http = http;
    }
    TakeItemComponent.prototype.onClickSubmit = function (data) {
        var dateFormat = dateformat__WEBPACK_IMPORTED_MODULE_2__["dateformat"];
        var now = new Date();
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('user_id', data.user_id.toString())
            .set('item_id', data.item_id.toString())
            .set('amount', data.amount.toString())
            .set('time', dateFormat(now, "HH:MM:ss TT"))
            .set('date', dateFormat(now, "dd mmmm yyyy"));
        console.log(body.toString());
        this.http.post("http://localhost:8080/withdraw", body.toString(), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded') }).subscribe(function (data) {
            console.log("POST Request is successful ", data);
        }, function (error) {
            console.log("Error", error);
        });
        console.log(data);
    };
    TakeItemComponent.prototype.ngOnInit = function () {
    };
    TakeItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-take-item',
            template: __webpack_require__(/*! ./take-item.component.html */ "./src/app/routing/take-item/take-item.component.html"),
            styles: [__webpack_require__(/*! ./take-item.component.css */ "./src/app/routing/take-item/take-item.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TakeItemComponent);
    return TakeItemComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Miwtoo-NB\Documents\GitHub\ProjectSA\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map