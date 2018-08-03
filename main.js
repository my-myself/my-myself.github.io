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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"p-4 col-sm-3 col-md-2 d-none d-md-block sidebar\">\n      <h1>DAIRY APP</h1>\n      <span>Comment with no sense</span>\n    </div>\n    <main class=\"col-sm-12 col-xs-12 col-md-10 offset-md-2 p-4\">\n      <div class=\"row\">\n        <div [ngClass]=\"selectedIndex !== -1 ? 'col-md-7' : 'col-md-12'\">\n          <app-card [title]=\"'Items'\">\n            <app-items></app-items>\n          </app-card>\n        </div>\n        <div [ngClass]=\"selectedIndex !== -1 ? 'col-md-5' : 'd-none'\">\n          <app-card [title]=\"'Comments #' + selectedIndex\">\n            <app-comments></app-comments>\n          </app-card>\n        </div>\n      </div>\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  background-color: #2b2e3d;\n  color: #fff;\n  border: 1px solid #9d9ea5;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  padding: 20px;\n  overflow-x: hidden;\n  overflow-y: auto; }\n  .sidebar span {\n    font-size: 18px;\n    color: #808080; }\n"

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
/* harmony import */ var src_app_services_seclected_comments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/seclected-comments-service */ "./src/app/services/seclected-comments-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(commentsService) {
        var _this = this;
        this.commentsService = commentsService;
        this.selectedIndex = -1;
        this.subs = [];
        this.subs.push(this.commentsService.getIndex()
            .subscribe(function (index) {
            _this.selectedIndex = index > -1 ? index + 1 : -1;
        }));
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_seclected_comments_service__WEBPACK_IMPORTED_MODULE_1__["SelectedCommentsService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _components_comments_comments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/comments/comments.component */ "./src/app/components/comments/comments.component.ts");
/* harmony import */ var _components_items_items_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/items/items.component */ "./src/app/components/items/items.component.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/local-storage-service */ "./src/app/services/local-storage-service.ts");
/* harmony import */ var _services_seclected_comments_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/seclected-comments-service */ "./src/app/services/seclected-comments-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
                _components_comments_comments_component__WEBPACK_IMPORTED_MODULE_7__["CommentsComponent"],
                _components_items_items_component__WEBPACK_IMPORTED_MODULE_8__["ItemsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [_services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorageService"], _services_seclected_comments_service__WEBPACK_IMPORTED_MODULE_10__["SelectedCommentsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/card/card.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-item\">\n  <div class=\"pt-4 pr-4 pl-4 pb-0\">\n    <h1 class=\"px-2\">\n      {{title}}\n    </h1>\n  </div>\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/components/card/card.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-item {\n  background-color: #fff;\n  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);\n  color: #565a69; }\n"

/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
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

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "title", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/components/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/comments/comments.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/comments/comments.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\n  bdOpacity = 0.9\n  bdColor = \"#ffffff\"\n  size = \"large\"\n  color = \"blue\"\n  type = \"line-scale-pulse-out\">\n</ngx-spinner>\n<div *ngIf=\"!isLoading\">\n  <ul class=\"py-3\">\n    <li *ngIf=\"comments?.length < 1\" class=\"pl-4 pr-3 pt-3\">\n      <div class=\"pl-2 pb-4 d-flex\">\n        <h5>There is no comments</h5>\n      </div>\n    </li>\n    <li *ngFor=\"let comment of comments\" class=\"pl-4 pr-3 pt-3\">\n      <div class=\"item pl-2 pb-4 d-flex\">\n          <div>\n            <div class=\"avatar default mr-3\"></div>\n          </div>\n          <p>{{comment}}</p>\n      </div>\n    </li>\n  </ul>\n  <div class=\"d-flex justify-content-between pl-4 pr-3 py-3\">\n    <div class=\"avatar default mr-2\"></div>\n    <textarea [(ngModel)]=\"newComment\" (keydown.control.enter)=\"add()\" cols=\"50\" rows=\"9\" [(ngModel)]=\"newName\" class=\"comment-input flex-grow-1 ml-2 mr-3 p-2\" ></textarea>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/comments/comments.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/comments/comments.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comment-input {\n  min-height: 70px;\n  resize: none;\n  border-radius: 0;\n  font-size: 12px;\n  color: #2b2f3e; }\n\n.avatar {\n  width: 52px;\n  height: 52px; }\n\n.avatar.default {\n    background-color: #e6e6e6; }\n\nli {\n  font-size: 12px;\n  font-weight: 400; }\n\nli p {\n    color: #666666; }\n\nli:nth-child(odd) .avatar {\n    background-color: #ff8900; }\n\nli:nth-child(even) .avatar {\n    background-color: #46558b; }\n"

/***/ }),

/***/ "./src/app/components/comments/comments.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/comments/comments.component.ts ***!
  \***********************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_seclected_comments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/seclected-comments-service */ "./src/app/services/seclected-comments-service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local-storage-service */ "./src/app/services/local-storage-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(commentsService, spinner, storage) {
        var _this = this;
        this.commentsService = commentsService;
        this.spinner = spinner;
        this.storage = storage;
        this.isLoading = true;
        this.selectedIndex = -1;
        this.newComment = '';
        this.comments = [];
        this.subs = [];
        this.subs.push(this.commentsService.getIndex().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (index) {
            _this.selectedIndex = index;
            return commentsService.getItem();
        }))
            .subscribe(function (comments) {
            _this.comments = comments;
            _this.isLoading = false;
            _this.spinner.hide();
        }, function (ex) {
            alert(ex);
        }));
    }
    CommentsComponent.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    CommentsComponent.prototype.add = function () {
        if (this.newComment !== '') {
            this.storage.addComment(this.newComment, this.selectedIndex);
            this.newComment = '';
        }
    };
    CommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/components/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.scss */ "./src/app/components/comments/comments.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_seclected_comments_service__WEBPACK_IMPORTED_MODULE_3__["SelectedCommentsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/components/items/items.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/items/items.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\n  bdOpacity = 0.9\n  bdColor = \"#ffffff\"\n  size = \"large\"\n  color = \"blue\"\n  type = \"line-scale-pulse-out\">\n</ngx-spinner>\n<div *ngIf=\"!isLoading\">\n  <div class=\"d-flex justify-content-between pl-4 pr-3 py-3\">\n    <input [(ngModel)]=\"newName\" type=\"text\" class=\"flex-grow-1 ml-2 mr-3 px-3\" placeholder=\"Type name here...\"/>\n    <button (click)=\"add()\" [disabled]=\"!newName || newName === ''\" class=\"add-btn\">\n      Add new\n    </button>\n  </div>\n  <ul class=\"pb-2\">\n    <li *ngIf=\"items?.length < 1\" class=\"pl-4 pr-3 pt-3\">\n      <div class=\"pl-2 pb-4 d-flex\">\n        <h5>There is no items</h5>\n      </div>\n    </li>\n    <li (click)=\"select(i)\" [ngClass]=\"i === selectedIndex ? 'active' : ''\" *ngFor=\"let item of items; let i = index\" [attr.data-index]=\"i\" class=\"pl-4 pr-3\">\n      <div class=\"item pl-2 d-flex justify-content-between\">\n        <div class=\"py-3\">\n          {{item.title}}\n          <span class=\"count d-inline-block\">{{item.comments.length ? item.comments.length : 0}}</span>\n        </div>\n        <button (click)=\"delete(i)\" class=\"del-btn float-right my-2 px-4\">Delete</button>\n      </div>\n    </li>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/items/items.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/items/items.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  cursor: pointer;\n  outline: none;\n  box-shadow: none;\n  border: none;\n  transition: background-color 500ms cubic-bezier(0.165, 0.84, 0.44, 1); }\n  button:disabled {\n    pointer-events: none;\n    opacity: 0.7; }\n  .add-btn {\n  background-color: #27ccc0;\n  color: #fff;\n  border: none;\n  outline: none;\n  border-radius: 4px;\n  font-weight: 600;\n  min-width: 120px; }\n  .add-btn:hover {\n    background-color: #23b4ab; }\n  ul {\n  min-height: 400px; }\n  ul li {\n    cursor: pointer; }\n  .del-btn {\n  border-radius: 4px;\n  border: #ff305a solid 1px;\n  background: none;\n  color: #ff305a;\n  font-weight: 300;\n  font-size: 16px; }\n  .del-btn:hover {\n    color: #fff;\n    background-color: #ff305a; }\n  .del-btn:active {\n    border: #ff305a solid 1px;\n    outline: none;\n    box-shadow: none; }\n  .del-btn:focus {\n    border: #ff305a solid 1px;\n    outline: none;\n    box-shadow: none; }\n"

/***/ }),

/***/ "./src/app/components/items/items.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/items/items.component.ts ***!
  \*****************************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/local-storage-service */ "./src/app/services/local-storage-service.ts");
/* harmony import */ var src_app_services_seclected_comments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/seclected-comments-service */ "./src/app/services/seclected-comments-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(storage, spinner, comments) {
        var _this = this;
        this.storage = storage;
        this.spinner = spinner;
        this.comments = comments;
        this.isLoading = true;
        this.selectedIndex = -1;
        this.items = [];
        this.subs = [];
        this.spinner.show();
        this.subs.push(this.storage.getItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (items) {
            _this.items = items ? items : [];
            return comments.getIndex();
        }))
            .subscribe(function (index) {
            _this.selectedIndex = index;
            _this.isLoading = false;
            _this.spinner.hide();
        }, function (ex) {
            alert(ex);
        }));
    }
    ItemsComponent.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    ItemsComponent.prototype.add = function () {
        this.storage.addItem({
            title: this.newName,
            comments: []
        });
        this.newName = '';
    };
    ItemsComponent.prototype.delete = function (index) {
        this.storage.deleteItem(index);
        if (this.selectedIndex === index && this.items.length > 0) {
            this.select(this.items.length - 1);
        }
        else {
            this.select(-1);
        }
    };
    ItemsComponent.prototype.select = function (index) {
        var item = index >= 0 ? this.items[index].comments : null;
        this.comments.setItem(item, index);
    };
    ItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-items',
            template: __webpack_require__(/*! ./items.component.html */ "./src/app/components/items/items.component.html"),
            styles: [__webpack_require__(/*! ./items.component.scss */ "./src/app/components/items/items.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            src_app_services_seclected_comments_service__WEBPACK_IMPORTED_MODULE_4__["SelectedCommentsService"]])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./src/app/services/local-storage-service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage-service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
        this.items = [];
        this.$items = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.items = this.getItemsfromStorage();
    }
    LocalStorageService.prototype.getItems = function () {
        var items = this.getItemsfromStorage();
        this.items = items ? items : [];
        this.$items.next(this.items);
        return this.$items;
    };
    LocalStorageService.prototype.addItem = function (item) {
        if (this.$items && this.items) {
            this.items.push(item);
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].storageKey, JSON.stringify(this.items));
            this.$items.next(this.items);
        }
    };
    LocalStorageService.prototype.addComment = function (comment, index) {
        if (this.$items && this.items && this.items.length - 1 >= index) {
            this.items[index].comments.push(comment);
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].storageKey, JSON.stringify(this.items));
            this.$items.next(this.items);
        }
    };
    LocalStorageService.prototype.deleteItem = function (index) {
        if (this.$items && this.items) {
            this.items.splice(index, 1);
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].storageKey, JSON.stringify(this.items));
            this.$items.next(this.items);
        }
    };
    LocalStorageService.prototype.getItemsfromStorage = function () {
        return JSON.parse(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].storageKey));
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/services/seclected-comments-service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/seclected-comments-service.ts ***!
  \********************************************************/
/*! exports provided: SelectedCommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedCommentsService", function() { return SelectedCommentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SelectedCommentsService = /** @class */ (function () {
    function SelectedCommentsService() {
        this.$comments = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.$selectedIndex = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](-1);
    }
    SelectedCommentsService.prototype.setItem = function (comments, index) {
        if (this.$comments && this.$selectedIndex) {
            this.$comments.next(comments);
            this.$selectedIndex.next(index);
        }
    };
    SelectedCommentsService.prototype.getIndex = function () {
        return this.$selectedIndex;
    };
    SelectedCommentsService.prototype.getItem = function () {
        return this.$comments;
    };
    SelectedCommentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SelectedCommentsService);
    return SelectedCommentsService;
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
    production: false,
    storageKey: 'Items'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! /home/cubex/Projects/ng6-test/222/ng6-test-task/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map