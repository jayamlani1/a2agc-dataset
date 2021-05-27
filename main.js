(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/a2agc-dataset/a2agc-dataset/website/src/main.ts */"zUnb");


/***/ }),

/***/ "2Gxr":
/*!*****************************************************************!*\
  !*** ./src/app/pages/data-er-diagram/data-er-diagram.module.ts ***!
  \*****************************************************************/
/*! exports provided: DataErDiagramModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataErDiagramModule", function() { return DataErDiagramModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _data_er_diagram_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-er-diagram-routing.module */ "TWL7");
/* harmony import */ var _data_er_diagram_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-er-diagram.component */ "AOIW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class DataErDiagramModule {
}
DataErDiagramModule.ɵfac = function DataErDiagramModule_Factory(t) { return new (t || DataErDiagramModule)(); };
DataErDiagramModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DataErDiagramModule });
DataErDiagramModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _data_er_diagram_routing_module__WEBPACK_IMPORTED_MODULE_1__["DataErDiagramRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DataErDiagramModule, { declarations: [_data_er_diagram_component__WEBPACK_IMPORTED_MODULE_2__["DataErDiagramComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _data_er_diagram_routing_module__WEBPACK_IMPORTED_MODULE_1__["DataErDiagramRoutingModule"]] }); })();


/***/ }),

/***/ "3MaC":
/*!********************************************************************!*\
  !*** ./src/app/pages/visualization/visualization-data-resolver.ts ***!
  \********************************************************************/
/*! exports provided: VisualizationDataResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationDataResolver", function() { return VisualizationDataResolver; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_state_visualizations_visualizations_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/state/visualizations/visualizations.state */ "iSGQ");




class VisualizationDataResolver {
    constructor(service) {
        this.service = service;
    }
    resolve(route, _state) {
        const id = route.paramMap.get('id');
        if (id === null) {
            return rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"];
        }
        return this.service.entities$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])(id), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
}
VisualizationDataResolver.ɵfac = function VisualizationDataResolver_Factory(t) { return new (t || VisualizationDataResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_state_visualizations_visualizations_state__WEBPACK_IMPORTED_MODULE_3__["VisualizationsState"])); };
VisualizationDataResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: VisualizationDataResolver, factory: VisualizationDataResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "3PK8":
/*!****************************************************************************!*\
  !*** ./src/app/pages/data-schema-browser/data-schema-browser.component.ts ***!
  \****************************************************************************/
/*! exports provided: DataSchemaBrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSchemaBrowserComponent", function() { return DataSchemaBrowserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DataSchemaBrowserComponent {
    constructor() {
        this.clsName = 'data-schema-browser';
    }
    ngOnInit() {
    }
}
DataSchemaBrowserComponent.ɵfac = function DataSchemaBrowserComponent_Factory(t) { return new (t || DataSchemaBrowserComponent)(); };
DataSchemaBrowserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataSchemaBrowserComponent, selectors: [["agc-data-schema-browser"]], hostVars: 2, hostBindings: function DataSchemaBrowserComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 7, vars: 0, consts: [[1, "header"], [1, "title"], [1, "description"], ["title", "A2AGC Database Schema", "src", "assets/schema/index.html", 1, "schema-frame"]], template: function DataSchemaBrowserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Marion County Opioid Addiction Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Data Schema Browser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Browse the A2AGC Database Schema");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 3);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  height: 4rem;\n  margin-bottom: 4.5rem;\n  padding: 0 1rem;\n  align-items: center;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.25rem;\n}\n[_nghost-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n[_nghost-%COMP%]   .schema-frame[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  width: 100%;\n  height: calc(100vh);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RhdGEtc2NoZW1hLWJyb3dzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUU7RUFDRSxrQkFBQTtBQUFKO0FBR0U7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQURKIiwiZmlsZSI6ImRhdGEtc2NoZW1hLWJyb3dzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIC5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDQuNXJlbTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG5cbiAgLnNjaGVtYS1mcmFtZSB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmgpO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "61A3":
/*!***********************************************!*\
  !*** ./src/app/core/state/page/page.state.ts ***!
  \***********************************************/
/*! exports provided: PageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageState", function() { return PageState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_labs_data_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs-labs/data/decorators */ "4jw6");
/* harmony import */ var _ngxs_labs_data_repositories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs-labs/data/repositories */ "zmn3");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let PageState = class PageState extends _ngxs_labs_data_repositories__WEBPACK_IMPORTED_MODULE_2__["NgxsImmutableDataRepository"] {
    constructor() {
        super(...arguments);
        this.hasShownHelpModal$ = this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('hasShownHelpModal'));
    }
    setHasShownHelpModal(hasShownHelpModal) {
        this.ctx.patchState({ hasShownHelpModal });
    }
};
PageState.ɵfac = function PageState_Factory(t) { return ɵPageState_BaseFactory(t || PageState); };
PageState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: PageState, factory: PageState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_data_decorators__WEBPACK_IMPORTED_MODULE_1__["DataAction"])()
], PageState.prototype, "setHasShownHelpModal", null);
PageState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_data_decorators__WEBPACK_IMPORTED_MODULE_1__["StateRepository"])(),
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["State"])({
        name: 'page',
        defaults: {
            hasShownHelpModal: false
        }
    })
], PageState);

const ɵPageState_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](PageState);


/***/ }),

/***/ "6Rv7":
/*!***************************************************************!*\
  !*** ./src/app/pages/change-log/change-log-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ChangeLogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLogRoutingModule", function() { return ChangeLogRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _change_log_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-log.component */ "YCei");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _change_log_component__WEBPACK_IMPORTED_MODULE_1__["ChangeLogComponent"] }];
class ChangeLogRoutingModule {
}
ChangeLogRoutingModule.ɵfac = function ChangeLogRoutingModule_Factory(t) { return new (t || ChangeLogRoutingModule)(); };
ChangeLogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ChangeLogRoutingModule });
ChangeLogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ChangeLogRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "79Ke":
/*!***********************************************************!*\
  !*** ./src/app/core/components/sub-bar/sub-bar.module.ts ***!
  \***********************************************************/
/*! exports provided: SubBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubBarModule", function() { return SubBarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sub_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub-bar.component */ "qU2i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class SubBarModule {
}
SubBarModule.ɵfac = function SubBarModule_Factory(t) { return new (t || SubBarModule)(); };
SubBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SubBarModule });
SubBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SubBarModule, { declarations: [_sub_bar_component__WEBPACK_IMPORTED_MODULE_1__["SubBarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_sub_bar_component__WEBPACK_IMPORTED_MODULE_1__["SubBarComponent"]] }); })();


/***/ }),

/***/ "AOIW":
/*!********************************************************************!*\
  !*** ./src/app/pages/data-er-diagram/data-er-diagram.component.ts ***!
  \********************************************************************/
/*! exports provided: DataErDiagramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataErDiagramComponent", function() { return DataErDiagramComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DataErDiagramComponent {
    constructor() {
        this.clsName = 'data-er-diagram';
    }
    ngOnInit() {
    }
}
DataErDiagramComponent.ɵfac = function DataErDiagramComponent_Factory(t) { return new (t || DataErDiagramComponent)(); };
DataErDiagramComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataErDiagramComponent, selectors: [["agc-data-er-diagram"]], hostVars: 2, hostBindings: function DataErDiagramComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 7, vars: 0, consts: [[1, "header"], [1, "title"], [1, "description"], ["title", "Data ER Diagram", "src", "assets/schema/relationships.html", 1, "schema-frame"]], template: function DataErDiagramComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Marion County Opioid Addiction Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Data ER Diagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Entity-relationship diagram of all data tables and columns in the database");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 3);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  height: 4rem;\n  margin-bottom: 4.5rem;\n  padding: 0 1rem;\n  align-items: center;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.25rem;\n}\n[_nghost-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n[_nghost-%COMP%]   .schema-frame[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  width: 100%;\n  height: calc(100vh);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RhdGEtZXItZGlhZ3JhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFRTtFQUNFLGtCQUFBO0FBQUo7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBREoiLCJmaWxlIjoiZGF0YS1lci1kaWFncmFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcblxuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA0LjVyZW07XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAudGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxuICAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxuXG4gIC5zY2hlbWEtZnJhbWUge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoKTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BzDc":
/*!***********************************************************************!*\
  !*** ./src/app/pages/data-distributions/data-distributions.module.ts ***!
  \***********************************************************************/
/*! exports provided: DataDistributionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDistributionsModule", function() { return DataDistributionsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _data_distributions_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-distributions-routing.module */ "Po03");
/* harmony import */ var _data_distributions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-distributions.component */ "Iv4u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class DataDistributionsModule {
}
DataDistributionsModule.ɵfac = function DataDistributionsModule_Factory(t) { return new (t || DataDistributionsModule)(); };
DataDistributionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DataDistributionsModule });
DataDistributionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _data_distributions_routing_module__WEBPACK_IMPORTED_MODULE_1__["DataDistributionsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DataDistributionsModule, { declarations: [_data_distributions_component__WEBPACK_IMPORTED_MODULE_2__["DataDistributionsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _data_distributions_routing_module__WEBPACK_IMPORTED_MODULE_1__["DataDistributionsRoutingModule"]] }); })();


/***/ }),

/***/ "CXhD":
/*!*********************************************************************!*\
  !*** ./src/app/pages/visualization/visualization-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: VisualizationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationRoutingModule", function() { return VisualizationRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _visualization_data_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visualization-data-resolver */ "3MaC");
/* harmony import */ var _visualization_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visualization.component */ "G0h6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [{
        path: '',
        component: _visualization_component__WEBPACK_IMPORTED_MODULE_2__["VisualizationComponent"],
        resolve: {
            visualization: _visualization_data_resolver__WEBPACK_IMPORTED_MODULE_1__["VisualizationDataResolver"]
        }
    }];
class VisualizationRoutingModule {
}
VisualizationRoutingModule.ɵfac = function VisualizationRoutingModule_Factory(t) { return new (t || VisualizationRoutingModule)(); };
VisualizationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: VisualizationRoutingModule });
VisualizationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](VisualizationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "DjuL":
/*!********************************************************!*\
  !*** ./src/app/shared/pipes/order-by/order-by.pipe.ts ***!
  \********************************************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OrderByPipe {
    constructor(locale) {
        this.locale = locale;
    }
    transform(items, propertyKey, order, nocase) {
        if (!items || items.length === 0 || propertyKey === undefined) {
            return items;
        }
        const collator = new Intl.Collator(this.locale || undefined, {
            usage: 'sort',
            numeric: true,
            sensitivity: nocase === 'nocase' ? 'accent' : 'variant'
        });
        const compare = (x, y) => {
            const v1 = x[propertyKey];
            const v2 = y[propertyKey];
            if (v1 == null) {
                return v2 == null ? 0 : 1;
            }
            else if (v2 == null) {
                return -1;
            }
            else if (order === 'desc') {
                return -collator.compare(v1, v2);
            }
            else {
                return collator.compare(v1, v2);
            }
        };
        return [...items].sort(compare);
    }
}
OrderByPipe.ɵfac = function OrderByPipe_Factory(t) { return new (t || OrderByPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], 8)); };
OrderByPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "orderBy", type: OrderByPipe, pure: true });


/***/ }),

/***/ "EbOm":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/menu-icon/menu-icon.component.ts ***!
  \********************************************************************/
/*! exports provided: MenuIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuIconComponent", function() { return MenuIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MenuIconComponent {
    constructor() {
        this.clsName = 'agc-menu-icon';
        this.alternateIcon = false;
    }
}
MenuIconComponent.ɵfac = function MenuIconComponent_Factory(t) { return new (t || MenuIconComponent)(); };
MenuIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuIconComponent, selectors: [["agc-menu-icon"]], hostVars: 2, hostBindings: function MenuIconComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { alternateIcon: "alternateIcon" }, decls: 6, vars: 2, consts: [[1, "icon"], [1, "bar"], [1, "text"]], template: function MenuIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MENU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("alternate", ctx.alternateIcon);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 2.25rem;\n  height: 2.25rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n[_nghost-%COMP%]   .icon[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  width: 1.875rem;\n  height: 0.25rem;\n  border-radius: 0.625rem;\n  transition: 0.4s;\n}\n[_nghost-%COMP%]   .icon[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-of-type(2) {\n  width: 2.25rem;\n  margin: 0.25rem 0;\n}\n[_nghost-%COMP%]   .icon.alternate[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-of-type(1) {\n  width: 1.75rem;\n  transform: translate(0.375rem, 0.5rem) rotate(45deg);\n}\n[_nghost-%COMP%]   .icon.alternate[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-of-type(2) {\n  opacity: 0;\n}\n[_nghost-%COMP%]   .icon.alternate[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-of-type(3) {\n  width: 1.75rem;\n  transform: translate(0.375rem, -0.5rem) rotate(-45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21lbnUtaWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDRjtBQUNFO0VBQ0Usc0JBQUE7QUFDSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ047QUFDTTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUNSO0FBSU07RUFDRSxjQUFBO0VBQ0Esb0RBQUE7QUFGUjtBQUtNO0VBQ0UsVUFBQTtBQUhSO0FBTU07RUFDRSxjQUFBO0VBQ0Esc0RBQUE7QUFKUiIsImZpbGUiOiJtZW51LWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMi4yNXJlbTtcbiAgaGVpZ2h0OiAyLjI1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgLmljb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG5cbiAgICAuYmFyIHtcbiAgICAgIHdpZHRoOiAxLjg3NXJlbTtcbiAgICAgIGhlaWdodDogMC4yNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xuICAgICAgdHJhbnNpdGlvbjogMC40cztcblxuICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgIHdpZHRoOiAyLjI1cmVtO1xuICAgICAgICBtYXJnaW46IDAuMjVyZW0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFsdGVybmF0ZSAuYmFyIHtcbiAgICAgICY6bnRoLW9mLXR5cGUoMSkge1xuICAgICAgICB3aWR0aDogMS43NXJlbTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zNzVyZW0sIDAuNXJlbSkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cblxuICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG5cbiAgICAgICY6bnRoLW9mLXR5cGUoMykge1xuICAgICAgICB3aWR0aDogMS43NXJlbTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zNzVyZW0sIC0wLjVyZW0pIHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "G0h6":
/*!****************************************************************!*\
  !*** ./src/app/pages/visualization/visualization.component.ts ***!
  \****************************************************************/
/*! exports provided: VisualizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationComponent", function() { return VisualizationComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_visualization_page_visualization_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/visualization-page/visualization-page.component */ "gyiZ");





function VisualizationComponent_agc_visualization_page_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "agc-visualization-page", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r0.visualization.title)("description", ctx_r0.visualization.description)("spec", ctx_r0.visualization.spec)("options", ctx_r0.visualization.options)("content", ctx_r0.visualization.content)("sql", ctx_r0.visualization.sql)("csv", ctx_r0.visualization.csv);
} }
class VisualizationComponent {
    constructor(route) {
        this.route = route;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        const sub = route.data.subscribe(data => {
            this.visualization = data.visualization;
        });
        this.subscriptions.add(sub);
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
VisualizationComponent.ɵfac = function VisualizationComponent_Factory(t) { return new (t || VisualizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
VisualizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VisualizationComponent, selectors: [["agc-visualization"]], decls: 1, vars: 1, consts: [[3, "title", "description", "spec", "options", "content", "sql", "csv", 4, "ngIf"], [3, "title", "description", "spec", "options", "content", "sql", "csv"]], template: function VisualizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, VisualizationComponent_agc_visualization_page_0_Template, 1, 7, "agc-visualization-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.visualization);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_visualization_page_visualization_page_component__WEBPACK_IMPORTED_MODULE_4__["VisualizationPageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXN1YWxpemF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "HVTm":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/help-tour-modal/help-tour-modal.component.ts ***!
  \********************************************************************************/
/*! exports provided: HelpTourModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpTourModalComponent", function() { return HelpTourModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function HelpTourModalComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpTourModalComponent_div_20_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.setSlide(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.currentSlide === i_r2);
} }
class HelpTourModalComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.slides = [
            {
                title: 'Select year range...',
                text: 'Set year ranges by clicking with your mouse cursor then dragging and releasing. Click again to reset.',
                img: 'assets/images/help-year-range-selector.gif'
            },
            {
                title: 'Select variables and filters...',
                text: 'Click on Variables and filter by items.  SHIFT + CLICK to add more items.',
                img: 'assets/images/help-variables-filterby3.gif'
            },
            {
                title: 'Use controls to filter...',
                text: 'Click on controls to update visualizations.  Use SHIFT + CLICK to add more items.',
                img: 'assets/images/help-filter-controls.gif'
            },
            {
                title: 'Pan and zoom...',
                text: 'Hold down SHIFT key then use the scroll-wheel to zoom.  SHIFT + CLICK (Hold) to pan.',
                img: 'assets/images/help-pan-zoom.gif'
            }
        ];
        this.currentSlide = 0;
    }
    close() {
        this.dialogRef.close();
    }
    incrementSlide() {
        if (this.currentSlide === (this.slides.length - 1)) {
            return;
        }
        this.currentSlide = this.currentSlide + 1;
    }
    decrementSlide() {
        if (this.currentSlide === 0) {
            return;
        }
        this.currentSlide = this.currentSlide - 1;
    }
    setSlide(index) {
        if (index < 0 || index >= this.slides.length) {
            return;
        }
        this.currentSlide = index;
    }
}
HelpTourModalComponent.ɵfac = function HelpTourModalComponent_Factory(t) { return new (t || HelpTourModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
HelpTourModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpTourModalComponent, selectors: [["agc-help-tour-modal"]], decls: 24, vars: 9, consts: [[1, "agc-tour", "wrapper"], [1, "container"], [1, "close"], [1, "material-icons", "close-icon", 3, "click"], [1, "content"], ["mat-dialog-title", "", 1, "title"], [1, "mat-typography"], [1, "help-text"], [1, "carousel"], [1, "material-icons", "chevron-icon", 3, "click"], [1, "gif-container"], [3, "src", "alt"], [1, "slide-row"], [1, "slide-dots"], ["class", "slide", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "button-row"], [1, "btn-outline", 3, "click"], [1, "slide", 3, "click"]], template: function HelpTourModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpTourModalComponent_Template_mat_icon_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpTourModalComponent_Template_mat_icon_click_12_listener() { return ctx.decrementSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpTourModalComponent_Template_mat_icon_click_16_listener() { return ctx.incrementSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HelpTourModalComponent_div_20_Template, 1, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpTourModalComponent_Template_button_click_22_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Got it!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.slides[ctx.currentSlide].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.slides[ctx.currentSlide].text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.currentSlide === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.slides[ctx.currentSlide].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.slides[ctx.currentSlide].img.split("/")[6]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.currentSlide === ctx.slides.length - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".mat-dialog-container {\n  padding: 0;\n  overflow: hidden;\n}\n\n  .mat-expansion-panel-header {\n  background-color: #fafafa;\n}\n\n.agc-tour.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n\n.agc-tour.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  overflow: hidden;\n}\n\n.agc-tour.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 1rem;\n  margin-right: 1rem;\n  cursor: pointer;\n}\n\n.agc-tour.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  margin-bottom: 0.5rem;\n  text-align: left;\n  font-weight: lighter;\n}\n\n.agc-tour.wrapper[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.agc-tour.wrapper[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.agc-tour.wrapper[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .gif-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  padding: 2rem;\n}\n\n.agc-tour.wrapper[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .chevron-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  height: 4rem;\n  width: 4rem;\n  cursor: pointer;\n}\n\n.agc-tour.wrapper[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .chevron-icon.disabled[_ngcontent-%COMP%] {\n  color: lightgray;\n}\n\n.agc-tour.wrapper[_ngcontent-%COMP%]   .slide-row[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  display: flex;\n}\n\n.agc-tour.wrapper[_ngcontent-%COMP%]   .slide-row[_ngcontent-%COMP%]   .slide-dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 9rem;\n}\n\n.agc-tour.wrapper[_ngcontent-%COMP%]   .slide-row[_ngcontent-%COMP%]   .slide-dots[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n  border: 1px solid darkgray;\n  background-color: white;\n  cursor: pointer;\n}\n\n.agc-tour.wrapper[_ngcontent-%COMP%]   .slide-row[_ngcontent-%COMP%]   .slide-dots[_ngcontent-%COMP%]   .slide.active[_ngcontent-%COMP%] {\n  background-color: #2a4d87;\n}\n\n.agc-tour.wrapper[_ngcontent-%COMP%]   .button-row[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  display: flex;\n}\n\n.agc-tour.wrapper[_ngcontent-%COMP%]   .button-row[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #6880aa;\n  color: #6880aa;\n  background-color: white;\n  width: 9rem;\n  height: 2.5rem;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.agc-tour.wrapper[_ngcontent-%COMP%]   .button-row[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%]:hover {\n  background-color: #6880aa;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hlbHAtdG91ci1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFJSTtFQUNFLGFBQUE7QUFETjs7QUFHTTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQURSOztBQU1NO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSlI7O0FBUUk7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQU5OOztBQVVFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBUko7O0FBVUk7RUFDRSxlQUFBO0FBUk47O0FBV0k7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FBVE47O0FBWUk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBVk47O0FBWU07RUFDRSxnQkFBQTtBQVZSOztBQWVFO0VBQ0UsNkJBQUE7RUFDQSxhQUFBO0FBYko7O0FBZUk7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFiTjs7QUFlTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQWJSOztBQWVRO0VBQ0UseUJBQUE7QUFiVjs7QUFtQkU7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUFqQko7O0FBbUJJO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFqQk47O0FBbUJNO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBakJSIiwiZmlsZSI6ImhlbHAtdG91ci1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cblxuLmFnYy10b3VyLndyYXBwZXIge1xuICAuY29udGFpbmVyIHtcbiAgICAuY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAycmVtO1xuXG4gICAgICAubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jbG9zZSB7XG4gICAgICAuY2xvc2UtaWNvbiB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICB9XG4gIH1cblxuICAuY2Fyb3VzZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuaGVscC10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG5cbiAgICAuZ2lmLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBwYWRkaW5nOiAycmVtO1xuICAgIH1cblxuICAgIC5jaGV2cm9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgaGVpZ2h0OiA0cmVtO1xuICAgICAgd2lkdGg6IDRyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zbGlkZS1yb3cge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAuc2xpZGUtZG90cyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDlyZW07XG5cbiAgICAgIC5zbGlkZSB7XG4gICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyYXk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTRkODc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYnV0dG9uLXJvdyB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLmJ0bi1vdXRsaW5lIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ODgwYWE7XG4gICAgICBjb2xvcjogICM2ODgwYWE7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiA5cmVtO1xuICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg4MGFhO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "Iv4u":
/*!**************************************************************************!*\
  !*** ./src/app/pages/data-distributions/data-distributions.component.ts ***!
  \**************************************************************************/
/*! exports provided: DataDistributionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDistributionsComponent", function() { return DataDistributionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DataDistributionsComponent {
    constructor() {
        this.clsName = 'data-schema-browser';
    }
}
DataDistributionsComponent.ɵfac = function DataDistributionsComponent_Factory(t) { return new (t || DataDistributionsComponent)(); };
DataDistributionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataDistributionsComponent, selectors: [["agc-data-distributions"]], hostVars: 2, hostBindings: function DataDistributionsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 2, vars: 0, template: function DataDistributionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "data-distributions works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhLWRpc3RyaWJ1dGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "NJGI":
/*!*********************************************************!*\
  !*** ./src/app/core/components/banner/banner.module.ts ***!
  \*********************************************************/
/*! exports provided: BannerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerModule", function() { return BannerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner.component */ "Xr4v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class BannerModule {
}
BannerModule.ɵfac = function BannerModule_Factory(t) { return new (t || BannerModule)(); };
BannerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BannerModule });
BannerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BannerModule, { declarations: [_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"]] }); })();


/***/ }),

/***/ "NgH2":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/help-modal/help-modal.component.ts ***!
  \**********************************************************************/
/*! exports provided: HelpModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpModalComponent", function() { return HelpModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");




class HelpModalComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        // Workaround for angular component issue #13870
        this.disableAnimation = true;
    }
    ngAfterViewInit() {
        // timeout required to avoid 'ExpressionChangedAfterItHasBeenCheckedError'
        setTimeout(() => this.disableAnimation = false);
    }
    close() {
        this.dialogRef.close();
    }
}
HelpModalComponent.ɵfac = function HelpModalComponent_Factory(t) { return new (t || HelpModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
HelpModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpModalComponent, selectors: [["agc-help-modal"]], decls: 42, vars: 1, consts: [[1, "agc-about", "wrapper"], [1, "container"], [1, "close"], [1, "material-icons", "close-icon", 3, "click"], [1, "content"], ["mat-dialog-title", "", 1, "title"], [1, "mat-typography"], [1, "help-title"], [1, "help-text"], [1, "gif-container"], ["src", "assets/images/help-year-range-selector.gif", "alt", "help-year-range-selector.gif"], ["src", "assets/images/help-variables-filterby3.gif", "alt", "help-variables-filterby3.gif"], ["src", "assets/images/help-filter-controls.gif", "alt", "help-filter-controls.gif"], ["src", "assets/images/help-pan-zoom.gif", "alt", "help-pan-zoom.gif"]], template: function HelpModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpModalComponent_Template_mat_icon_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-panel-title", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "SELECT YEAR RANGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Set year ranges by clicking with your mouse cursor then dragging and releasing. Click again to reset. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-panel-title", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "SELECT VARIABLES & FILTERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Click on Variables and filter by items. SHIFT + CLICK to add more items. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-panel-title", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "USE CONTROLS TO FILTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Click on controls to update visualizations. Use SHIFT + CLICK to add more items. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-panel-title", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "PAN AND ZOOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Hold down SHIFT key then use the scroll-wheel to zoom. SHIFT + CLICK (Hold) to pan. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@.disabled", ctx.disableAnimation);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelTitle"]], styles: [".mat-dialog-container {\n  padding: 0;\n  overflow: hidden;\n}\n\n  .mat-expansion-panel-header {\n  background-color: #FAFAFA;\n}\n\n.agc-about.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 2rem;\n  min-height: 43rem;\n}\n\n.agc-about.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.agc-about.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]   .help-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n}\n\n.agc-about.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.agc-about.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]   .gif-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  padding: 2rem;\n}\n\n.agc-about.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 1rem;\n  margin-right: 1rem;\n  cursor: pointer;\n}\n\n.agc-about.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  margin-bottom: 0.5rem;\n  text-align: left;\n  font-weight: lighter;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hlbHAtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBSUk7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFETjs7QUFHTTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFEUjs7QUFHUTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQURWOztBQUlRO0VBQ0UsZUFBQTtBQUZWOztBQUtRO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQUhWOztBQVNNO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBUFI7O0FBV0k7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQVROIiwiZmlsZSI6ImhlbHAtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG5cbi5hZ2MtYWJvdXQud3JhcHBlciB7XG4gIC5jb250YWluZXIge1xuICAgIC5jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICBtaW4taGVpZ2h0OiA0M3JlbTtcblxuICAgICAgLm1hdC1kaWFsb2ctY29udGVudCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcblxuICAgICAgICAuaGVscC10aXRsZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlbHAtdGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdpZi1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5jbG9zZSB7XG4gICAgICAuY2xvc2UtaWNvbiB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "OyBo":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/page-header/page-header.component.ts ***!
  \**********************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _shared_components_menu_icon_menu_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/menu-icon/menu-icon.component */ "EbOm");




class PageHeaderComponent {
    constructor() {
        this.clsName = 'agc-page-header';
        this.elevation = true;
        this.menuOpen = false;
        this.menuOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    toggleMenuOpen() {
        this.menuOpen = !this.menuOpen;
        this.menuOpenChange.emit(this.menuOpen);
    }
}
PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) { return new (t || PageHeaderComponent)(); };
PageHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageHeaderComponent, selectors: [["agc-page-header"]], hostVars: 4, hostBindings: function PageHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-elevation-z3", ctx.elevation);
    } }, inputs: { menuOpen: "menuOpen" }, outputs: { menuOpenChange: "menuOpenChange" }, decls: 7, vars: 1, consts: [["mat-flat-button", "", "color", "primary", 1, "menu", 3, "click"], [3, "alternateIcon"], [1, "logos"], ["href", "https://cns.iu.edu", "target", "_blank", "rel", "noreferrer noopener"], ["src", "assets/images/iu-white.svg", "alt", "Indiana University logo"], ["href", "https://www.regenstrief.org", "target", "_blank", "rel", "noreferrer noopener"], ["src", "assets/images/regenstrief-white.svg", "alt", "Regenstrief Institute logo"]], template: function PageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageHeaderComponent_Template_button_click_0_listener() { return ctx.toggleMenuOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "agc-menu-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alternateIcon", ctx.menuOpen);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _shared_components_menu_icon_menu_icon_component__WEBPACK_IMPORTED_MODULE_2__["MenuIconComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  height: 3.5rem;\n  align-items: center;\n}\n[_nghost-%COMP%]   .menu[_ngcontent-%COMP%] {\n  display: flex;\n  width: 5rem;\n  height: 3.5rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0;\n  border-right-width: 1px;\n  border-right-style: solid;\n}\n[_nghost-%COMP%]   .logos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 0;\n  border-left-width: 1px;\n  border-left-style: solid;\n}\n[_nghost-%COMP%]   .logos[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  height: 2.25rem;\n  margin-left: 1rem;\n}\n[_nghost-%COMP%]   .logos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 2.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0FBRko7QUFJSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUZOO0FBS0k7RUFDRSxlQUFBO0FBSE4iLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMy41cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA1cmVtO1xuICAgIGhlaWdodDogMy41cmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XG4gIH1cblxuICAubG9nb3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuXG4gICAgJiA+ICoge1xuICAgICAgaGVpZ2h0OiAyLjI1cmVtO1xuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMi4yNXJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "P6uQ":
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component */ "rVrE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]
    }
];
class AboutRoutingModule {
}
AboutRoutingModule.ɵfac = function AboutRoutingModule_Factory(t) { return new (t || AboutRoutingModule)(); };
AboutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AboutRoutingModule });
AboutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AboutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_markdown_modal_markdown_modal_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/markdown-modal/markdown-modal.module */ "lbxB");
/* harmony import */ var _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu-icon/menu-icon.module */ "zxUb");
/* harmony import */ var _components_visualization_page_visualization_page_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/visualization-page/visualization-page.module */ "xFcw");
/* harmony import */ var _pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/order-by/order-by.pipe */ "DjuL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _components_markdown_modal_markdown_modal_module__WEBPACK_IMPORTED_MODULE_1__["MarkdownModalModule"],
            _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_2__["MenuIconModule"],
            _components_visualization_page_visualization_page_module__WEBPACK_IMPORTED_MODULE_3__["VisualizationPageModule"],
        ], _components_markdown_modal_markdown_modal_module__WEBPACK_IMPORTED_MODULE_1__["MarkdownModalModule"],
        _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_2__["MenuIconModule"],
        _components_visualization_page_visualization_page_module__WEBPACK_IMPORTED_MODULE_3__["VisualizationPageModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_4__["OrderByPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _components_markdown_modal_markdown_modal_module__WEBPACK_IMPORTED_MODULE_1__["MarkdownModalModule"],
        _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_2__["MenuIconModule"],
        _components_visualization_page_visualization_page_module__WEBPACK_IMPORTED_MODULE_3__["VisualizationPageModule"]], exports: [_components_markdown_modal_markdown_modal_module__WEBPACK_IMPORTED_MODULE_1__["MarkdownModalModule"],
        _components_menu_icon_menu_icon_module__WEBPACK_IMPORTED_MODULE_2__["MenuIconModule"],
        _components_visualization_page_visualization_page_module__WEBPACK_IMPORTED_MODULE_3__["VisualizationPageModule"],
        _pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_4__["OrderByPipe"]] }); })();


/***/ }),

/***/ "Po03":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/data-distributions/data-distributions-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DataDistributionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDistributionsRoutingModule", function() { return DataDistributionsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_distributions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-distributions.component */ "Iv4u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _data_distributions_component__WEBPACK_IMPORTED_MODULE_1__["DataDistributionsComponent"] }];
class DataDistributionsRoutingModule {
}
DataDistributionsRoutingModule.ɵfac = function DataDistributionsRoutingModule_Factory(t) { return new (t || DataDistributionsRoutingModule)(); };
DataDistributionsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DataDistributionsRoutingModule });
DataDistributionsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DataDistributionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "QUfl":
/*!***************************************************!*\
  !*** ./src/app/core/state/router/router.state.ts ***!
  \***************************************************/
/*! exports provided: RouterState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterState", function() { return RouterState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngxs_labs_data_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs-labs/data/decorators */ "4jw6");
/* harmony import */ var _ngxs_labs_data_repositories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs-labs/data/repositories */ "zmn3");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/router-plugin */ "TkeJ");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");











let RouterState = class RouterState extends _ngxs_labs_data_repositories__WEBPACK_IMPORTED_MODULE_3__["NgxsImmutableDataRepository"] {
    constructor(actions$, router) {
        super();
        this.actions$ = actions$;
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.navigationStart$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((ev) => ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(ev => ev.url), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$));
        this.navigationEnd$ = this.actions$.pipe(Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["ofActionCompleted"])(_ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__["RouterNavigation"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(ev => ev.action.event.url), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
RouterState.ɵfac = function RouterState_Factory(t) { return new (t || RouterState)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
RouterState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: RouterState, factory: RouterState.ɵfac });
RouterState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_data_decorators__WEBPACK_IMPORTED_MODULE_2__["StateRepository"])(),
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["State"])({
        name: 'routerFacade'
    })
], RouterState);



/***/ }),

/***/ "R9JI":
/*!*******************************************************!*\
  !*** ./src/app/pages/change-log/change-log.module.ts ***!
  \*******************************************************/
/*! exports provided: ChangeLogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLogModule", function() { return ChangeLogModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _change_log_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-log-routing.module */ "6Rv7");
/* harmony import */ var _change_log_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-log.component */ "YCei");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ChangeLogModule {
}
ChangeLogModule.ɵfac = function ChangeLogModule_Factory(t) { return new (t || ChangeLogModule)(); };
ChangeLogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ChangeLogModule });
ChangeLogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _change_log_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChangeLogRoutingModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_1__["MarkdownModule"].forChild()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ChangeLogModule, { declarations: [_change_log_component__WEBPACK_IMPORTED_MODULE_3__["ChangeLogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _change_log_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChangeLogRoutingModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_1__["MarkdownModule"]] }); })();


/***/ }),

/***/ "S2lW":
/*!*************************************************************!*\
  !*** ./src/app/core/state/visualizations/visualizations.ts ***!
  \*************************************************************/
/*! exports provided: visualizations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visualizations", function() { return visualizations; });
/* harmony import */ var src_app_shared_components_visualization_page_shared_geomap_zoom_patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/visualization-page/shared/geomap-zoom-patch */ "qjp4");

const visualizations = [
    {
        id: 'vis1-geomap-of-opioid-deaths',
        title: 'Accidental Drug Overdose Deaths',
        description: 'Marion County by Place of Injury (2010-2018)',
        spec: 'assets/pages/vis1-geomap-of-opioid-deaths/vis.vl.json',
        options: {
            renderer: 'svg', actions: true,
            patch: (spec) => {
                spec = Object(src_app_shared_components_visualization_page_shared_geomap_zoom_patch__WEBPACK_IMPORTED_MODULE_0__["createGeoZoomPatch"])({
                    center: [87.44305475, 38.76622477],
                    zoomLevels: [3200, 250000],
                    initialZoom: 6400,
                })(spec);
                // TODO: Determine width/height programmatically
                spec.width = 941;
                spec.height = 941;
                return spec;
            }
        },
        content: 'assets/pages/vis1-geomap-of-opioid-deaths/README.md',
        sql: 'assets/pages/vis1-geomap-of-opioid-deaths/data.sql',
        csv: 'assets/generated/vis-geomap-opioid-deaths.csv'
    },
    {
        id: 'vis2-age-and-gender',
        title: 'Age Group & Gender of Accidental Drug Overdose',
        description: 'Marion County Deaths & Population (2010-2018)',
        spec: 'assets/pages/vis2-age-and-gender/vis.vl.json',
        options: {},
        content: 'assets/pages/vis2-age-and-gender/README.md',
        sql: 'assets/pages/vis2-age-and-gender/data.sql',
        csv: 'assets/generated/vis2-data/death-counts.csv'
    },
    {
        id: 'vis3-heatmap-of-accidental-overdoses',
        title: 'Age Group & Gender of Accidental Drug Overdose',
        description: 'Marion County by Deaths & Population (2010-2018)',
        spec: 'assets/pages/vis3-heatmap-of-accidental-overdoses/vis.vl.json',
        options: {},
        content: 'assets/pages/vis3-heatmap-of-accidental-overdoses/README.md',
        sql: 'assets/pages/vis4-combined-visualization/data.sql',
        csv: 'assets/generated/visualization4/data.csv'
    },
    {
        id: 'vis4-combined-visualization',
        title: 'Accidental Drug Overdose Deaths',
        description: 'Marion County by Substance, Sex, & Age (2010-2018)',
        spec: 'assets/pages/vis4-combined-visualization/vis.vl.json',
        options: {},
        content: 'assets/pages/vis4-combined-visualization/README.md',
        sql: 'assets/pages/vis4-combined-visualization/data.sql',
        csv: 'assets/generated/visualization4/data.csv'
    },
    {
        id: 'vis5-opioid-trajectories',
        title: 'Opioid Death Datasets',
        description: 'Marion County by History of Opioid Prescription, Previous Overdose, Incarceration, Health Data (2010-2018)',
        spec: 'assets/pages/vis5-opioid-trajectories/vis.vl.json',
        options: {},
        content: 'assets/pages/vis5-opioid-trajectories/README.md',
        sql: 'assets/pages/vis5-opioid-trajectories/data.sql',
        csv: 'assets/generated/visualization5/data.csv'
    }
];


/***/ }),

/***/ "SXa6":
/*!***************************************************************!*\
  !*** ./src/app/core/components/page-menu/page-menu.module.ts ***!
  \***************************************************************/
/*! exports provided: PageMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageMenuModule", function() { return PageMenuModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "PCNd");
/* harmony import */ var _page_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-menu.component */ "jswo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");









class PageMenuModule {
    constructor(registry, sanitizer) {
        // Register icons needed by components
        registry.addSvgIconInNamespace('menu', 'data-storage', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/data-storage.svg'));
        registry.addSvgIconInNamespace('menu', 'data-distributions', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/data-distributions.svg'));
    }
}
PageMenuModule.ɵfac = function PageMenuModule_Factory(t) { return new (t || PageMenuModule)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"])); };
PageMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PageMenuModule });
PageMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PageMenuModule, { declarations: [_page_menu_component__WEBPACK_IMPORTED_MODULE_5__["PageMenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]], exports: [_page_menu_component__WEBPACK_IMPORTED_MODULE_5__["PageMenuComponent"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _build_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build-info */ "rBg9");
/* harmony import */ var _shared_components_markdown_modal_markdown_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/markdown-modal/markdown-modal.component */ "p6z6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_state_router_router_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/state/router/router.state */ "QUfl");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _core_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/page-header/page-header.component */ "OyBo");
/* harmony import */ var _core_components_page_menu_page_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/components/page-menu/page-menu.component */ "jswo");
/* harmony import */ var _core_components_sub_bar_sub_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/components/sub-bar/sub-bar.component */ "qU2i");
/* harmony import */ var _core_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/components/banner/banner.component */ "Xr4v");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_components_page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/components/page-footer/page-footer.component */ "mz5l");













class AppComponent {
    constructor(router, dialog, zone) {
        this.dialog = dialog;
        this.zone = zone;
        this.clsName = 'agc-root';
        // TODO move these values to state
        this.menuHeader = 'Marion County Opioid Addiction Report';
        this.pages = [
            {
                path: 'vis1-geomap-of-opioid-deaths',
                title: 'Accidental Drug Overdose Deaths',
                description: 'Marion County by Place of Injury (2010-2018)'
            },
            {
                path: 'vis2-age-and-gender',
                title: 'Age Group & Gender of Accidental Drug Overdose',
                description: 'Marion County Deaths & Population (2010-2018)'
            },
            {
                path: 'vis3-heatmap-of-accidental-overdoses',
                title: 'Accidental Drug Overdose Deaths',
                description: 'Marion County by Substance, Sex, & Age (2010-2018)'
            },
            {
                path: 'vis4-combined-visualization',
                title: 'Accidental Drug Overdose Deaths (interactive)',
                description: 'Marion County by Substance, Sex, & Age (2010-2018)'
            },
            {
                path: 'vis5-opioid-trajectories',
                title: 'Opioid Death Datasets',
                description: 'Marion County by History of Opioid Prescription, Previous Overdose, Incarceration, Health Data (2010-2018)'
            }
        ];
        this.subBarVisible = true;
        this.menuOpen = false;
        this.buildDate = _build_info__WEBPACK_IMPORTED_MODULE_1__["buildInfo"].buildDate;
        router.navigationStart$.subscribe(() => {
            this.menuOpen = false;
        });
    }
    ngAfterViewInit() {
        // NOTE: Scrollable is not available in ngOnInit even if @ViewChild has `static: true`
        this.sidenavContainer.scrollable.elementScrolled().subscribe(() => {
            // NOTE: This runs outside angular's zone
            // ALL modifications must be wrapped in calls to `this.zone.run` or related methods
            const offset = this.sidenavContainer.scrollable.measureScrollOffset('top');
            const visible = offset === 0;
            if (this.subBarVisible !== visible) {
                this.zone.run(() => {
                    this.subBarVisible = visible;
                });
            }
        });
    }
    openContactUs() {
        this.dialog.open(_shared_components_markdown_modal_markdown_modal_component__WEBPACK_IMPORTED_MODULE_2__["MarkdownModalComponent"], {
            width: '800px',
            height: '600px',
            data: {
                title: 'Contact us',
                src: 'assets/footer/contact-us.md'
            }
        });
    }
    openPrivacyPolicy() {
        this.dialog.open(_shared_components_markdown_modal_markdown_modal_component__WEBPACK_IMPORTED_MODULE_2__["MarkdownModalComponent"], {
            width: '800px',
            height: '600px',
            data: {
                title: 'Privacy Policy',
                src: 'assets/footer/privacy-policy.md'
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_state_router_router_state__WEBPACK_IMPORTED_MODULE_4__["RouterState"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["agc-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_0__["MatSidenavContainer"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sidenavContainer = _t.first);
    } }, hostVars: 2, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 11, vars: 6, consts: [[3, "menuOpen", "menuOpenChange"], ["mode", "over", 3, "opened", "openedChange", "closedStart"], [3, "header", "pages"], [3, "visible"], [1, "content"], [1, "outlet-wrapper"], [3, "buildDate", "contactClick", "privacyClick"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "agc-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("menuOpenChange", function AppComponent_Template_agc_page_header_menuOpenChange_0_listener($event) { return ctx.menuOpen = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("openedChange", function AppComponent_Template_mat_sidenav_openedChange_2_listener($event) { return ctx.menuOpen = $event; })("closedStart", function AppComponent_Template_mat_sidenav_closedStart_2_listener() { return ctx.menuOpen = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "agc-page-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "agc-sub-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "agc-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "agc-page-footer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("contactClick", function AppComponent_Template_agc_page_footer_contactClick_10_listener() { return ctx.openContactUs(); })("privacyClick", function AppComponent_Template_agc_page_footer_privacyClick_10_listener() { return ctx.openPrivacyPolicy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("menuOpen", ctx.menuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("opened", ctx.menuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("header", ctx.menuHeader)("pages", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.subBarVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("buildDate", ctx.buildDate);
    } }, directives: [_core_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__["PageHeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_0__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_0__["MatSidenav"], _core_components_page_menu_page_menu_component__WEBPACK_IMPORTED_MODULE_7__["PageMenuComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_0__["MatSidenavContent"], _core_components_sub_bar_sub_bar_component__WEBPACK_IMPORTED_MODULE_8__["SubBarComponent"], _core_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__["BannerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"], _core_components_page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_11__["PageFooterComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  overflow-y: auto;\n}\n[_nghost-%COMP%]   agc-page-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n[_nghost-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%] {\n  height: calc(100% - 3.5rem);\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 1328px;\n  flex-flow: column;\n  padding: 4.5rem 4rem;\n  align-items: center;\n  margin: auto;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .outlet-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: calc(100% - 2.625rem - 15rem - 2 * 4.5rem - 7.5rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQUNKO0FBRUU7RUFDRSwyQkFBQTtBQUFKO0FBR0U7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBREo7QUFHSTtFQUNFLFdBQUE7RUFDQSwrREFBQTtBQUROIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcblxuICBhZ2MtcGFnZS1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG5cbiAgbWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNXJlbSk7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDEzMjhweDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBwYWRkaW5nOiA0LjVyZW0gNHJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcblxuICAgIC5vdXRsZXQtd3JhcHBlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDIuNjI1cmVtIC0gMTVyZW0gLSAyICogNC41cmVtIC0gNy41cmVtKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "TWL7":
/*!*************************************************************************!*\
  !*** ./src/app/pages/data-er-diagram/data-er-diagram-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: DataErDiagramRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataErDiagramRoutingModule", function() { return DataErDiagramRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_er_diagram_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-er-diagram.component */ "AOIW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _data_er_diagram_component__WEBPACK_IMPORTED_MODULE_1__["DataErDiagramComponent"] }];
class DataErDiagramRoutingModule {
}
DataErDiagramRoutingModule.ɵfac = function DataErDiagramRoutingModule_Factory(t) { return new (t || DataErDiagramRoutingModule)(); };
DataErDiagramRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DataErDiagramRoutingModule });
DataErDiagramRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DataErDiagramRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "UoYK":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-routing.module */ "P6uQ");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.component */ "rVrE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AboutModule {
}
AboutModule.ɵfac = function AboutModule_Factory(t) { return new (t || AboutModule)(); };
AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"],
        _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutRoutingModule"]] }); })();


/***/ }),

/***/ "Xms1":
/*!*****************************************************!*\
  !*** ./src/app/core/services/theme/theme.module.ts ***!
  \*****************************************************/
/*! exports provided: ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.service */ "ayGv");



class ThemeModule {
    static forRoot(options = {}) {
        return {
            ngModule: ThemeModule,
            providers: [
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"],
                    useFactory(theme) {
                        return ref => theme.addBootstrapComponent(ref);
                    },
                    deps: [_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]],
                    multi: true
                },
                {
                    provide: _theme_service__WEBPACK_IMPORTED_MODULE_1__["THEME_OPTIONS"],
                    useValue: options
                }
            ]
        };
    }
}
ThemeModule.ɵfac = function ThemeModule_Factory(t) { return new (t || ThemeModule)(); };
ThemeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ThemeModule });
ThemeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});


/***/ }),

/***/ "Xr4v":
/*!************************************************************!*\
  !*** ./src/app/core/components/banner/banner.component.ts ***!
  \************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BannerComponent {
    constructor() {
        this.clsName = 'agc-banner';
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["agc-banner"]], hostVars: 2, hostBindings: function BannerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 4, vars: 0, consts: [[1, "info"], [1, "filler"], ["src", "assets/images/hero-banner.jpg", "alt", "Image of a pill bottle", 1, "image"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Indiana Opioid Dashboard\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 15rem;\n  align-items: center;\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  height: 4rem;\n  padding-left: 2rem;\n  padding-right: 1rem;\n  align-items: center;\n}\n[_nghost-%COMP%]   .image[_ngcontent-%COMP%] {\n  height: 15rem;\n}\n[_nghost-%COMP%]   .filler[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Jhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0FBQUo7QUFHRTtFQUNFLFlBQUE7QUFESiIsImZpbGUiOiJiYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMTVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuaW1hZ2Uge1xuICAgIGhlaWdodDogMTVyZW07XG4gIH1cblxuICAuZmlsbGVyIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "YCei":
/*!**********************************************************!*\
  !*** ./src/app/pages/change-log/change-log.component.ts ***!
  \**********************************************************/
/*! exports provided: ChangeLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLogComponent", function() { return ChangeLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-markdown */ "lR5k");


class ChangeLogComponent {
    constructor() {
        this.clsName = 'change-log';
    }
    ngOnInit() {
    }
}
ChangeLogComponent.ɵfac = function ChangeLogComponent_Factory(t) { return new (t || ChangeLogComponent)(); };
ChangeLogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangeLogComponent, selectors: [["agc-change-log"]], hostVars: 2, hostBindings: function ChangeLogComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 4, vars: 0, consts: [[1, "header"], [1, "content"], ["src", "assets/generated/CHANGELOG.md"]], template: function ChangeLogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Marion County Opioid Addiction Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "markdown", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_1__["MarkdownComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  height: 4rem;\n  margin-bottom: 4.5rem;\n  padding: 0 1rem;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoYW5nZS1sb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJjaGFuZ2UtbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcblxuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA0LjVyZW07XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Z/G5":
/*!*************************************************************************!*\
  !*** ./src/app/pages/data-schema-browser/data-schema-browser.module.ts ***!
  \*************************************************************************/
/*! exports provided: DataSchemaBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSchemaBrowserModule", function() { return DataSchemaBrowserModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _data_schema_browser_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-schema-browser-routing.module */ "hlsx");
/* harmony import */ var _data_schema_browser_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-schema-browser.component */ "3PK8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class DataSchemaBrowserModule {
}
DataSchemaBrowserModule.ɵfac = function DataSchemaBrowserModule_Factory(t) { return new (t || DataSchemaBrowserModule)(); };
DataSchemaBrowserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DataSchemaBrowserModule });
DataSchemaBrowserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _data_schema_browser_routing_module__WEBPACK_IMPORTED_MODULE_1__["DataSchemaBrowserRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DataSchemaBrowserModule, { declarations: [_data_schema_browser_component__WEBPACK_IMPORTED_MODULE_2__["DataSchemaBrowserComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _data_schema_browser_routing_module__WEBPACK_IMPORTED_MODULE_1__["DataSchemaBrowserRoutingModule"]] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"].forRoot({
                loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
                markedOptions: {
                    provide: ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkedOptions"],
                    useValue: {
                        gfm: true
                    }
                }
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]] }); })();


/***/ }),

/***/ "ayGv":
/*!******************************************************!*\
  !*** ./src/app/core/services/theme/theme.service.ts ***!
  \******************************************************/
/*! exports provided: THEME_OPTIONS, ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_OPTIONS", function() { return THEME_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");



const THEME_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Theme options');
class ThemeService {
    constructor(options, overlay) {
        var _a, _b;
        this.elements = [];
        this.defaultTheme = (_a = options.default) !== null && _a !== void 0 ? _a : '';
        this.currentTheme = (_b = options.theme) !== null && _b !== void 0 ? _b : this.defaultTheme;
        const overlayEl = overlay === null || overlay === void 0 ? void 0 : overlay.getContainerElement();
        if (overlayEl) {
            this.addElement(overlayEl);
        }
    }
    get theme() { return this.currentTheme; }
    set theme(theme) {
        const newTheme = theme || this.defaultTheme;
        const oldTheme = this.currentTheme;
        this.currentTheme = newTheme;
        this.switchTheme(this.elements, newTheme, oldTheme);
    }
    ngOnDestroy() {
        // Make a copy of the array since it is modified during the loop
        const elements = [...this.elements];
        for (const el of elements) {
            this.removeElement(el);
        }
    }
    addBootstrapComponent(ref) {
        const el = ref.location.nativeElement;
        if (el) {
            this.addElement(el);
            ref.onDestroy(() => this.removeElement(el));
        }
    }
    addElement(el) {
        this.switchTheme([el], this.currentTheme, '');
        this.elements.push(el);
    }
    removeElement(el) {
        const index = this.elements.indexOf(el);
        if (index >= 0) {
            this.elements.splice(index, 1);
            this.switchTheme([el], '', this.currentTheme);
        }
    }
    switchTheme(elements, newTheme, oldTheme) {
        this.addClass(elements, 'color-transitions-disabled');
        this.removeClass(elements, oldTheme);
        this.addClass(elements, newTheme);
        setTimeout(() => this.removeClass(elements, 'color-transitions-disabled'));
    }
    addClass(elements, klass) {
        if (klass) {
            for (const el of elements) {
                el.classList.add(klass);
            }
        }
    }
    removeClass(elements, klass) {
        if (klass) {
            for (const el of elements) {
                el.classList.remove(klass);
            }
        }
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](THEME_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"], 8)); };
ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "dRfK":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/help-tour-modal/help-tour-modal.module.ts ***!
  \*****************************************************************************/
/*! exports provided: HelpTourModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpTourModalModule", function() { return HelpTourModalModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _help_tour_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help-tour-modal.component */ "HVTm");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class HelpTourModalModule {
}
HelpTourModalModule.ɵfac = function HelpTourModalModule_Factory(t) { return new (t || HelpTourModalModule)(); };
HelpTourModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HelpTourModalModule });
HelpTourModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HelpTourModalModule, { declarations: [_help_tour_modal_component__WEBPACK_IMPORTED_MODULE_1__["HelpTourModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]], exports: [_help_tour_modal_component__WEBPACK_IMPORTED_MODULE_1__["HelpTourModalComponent"]] }); })();


/***/ }),

/***/ "dgkL":
/*!*******************************************************************!*\
  !*** ./src/app/core/components/page-footer/page-footer.module.ts ***!
  \*******************************************************************/
/*! exports provided: PageFooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFooterModule", function() { return PageFooterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _page_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-footer.component */ "mz5l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class PageFooterModule {
}
PageFooterModule.ɵfac = function PageFooterModule_Factory(t) { return new (t || PageFooterModule)(); };
PageFooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PageFooterModule });
PageFooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PageFooterModule, { declarations: [_page_footer_component__WEBPACK_IMPORTED_MODULE_2__["PageFooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]], exports: [_page_footer_component__WEBPACK_IMPORTED_MODULE_2__["PageFooterComponent"]] }); })();


/***/ }),

/***/ "efN5":
/*!********************************************!*\
  !*** ./src/app/core/state/state.module.ts ***!
  \********************************************/
/*! exports provided: StateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateModule", function() { return StateModule; });
/* harmony import */ var _ngxs_labs_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs-labs/data */ "szHl");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/logger-plugin */ "/wON");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/router-plugin */ "TkeJ");
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/storage-plugin */ "2jgc");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _page_page_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/page.state */ "61A3");
/* harmony import */ var _router_router_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./router/router.state */ "QUfl");
/* harmony import */ var _visualizations_visualizations_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visualizations/visualizations.state */ "iSGQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");















const ROOT_STATES = [
    _router_router_state__WEBPACK_IMPORTED_MODULE_7__["RouterState"],
    _page_page_state__WEBPACK_IMPORTED_MODULE_6__["PageState"],
    _visualizations_visualizations_state__WEBPACK_IMPORTED_MODULE_8__["VisualizationsState"]
];
class StateModule {
}
StateModule.ɵfac = function StateModule_Factory(t) { return new (t || StateModule)(); };
StateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: StateModule });
StateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            // Note: Order of state modules is important!
            // The following described order MUST be maintained
            // 1. NgxsDataPluginModule - Must be before NgxsModule due to injection order bug
            // 2. NgxsModule
            // 3. NgxsStoragePluginModule
            // 4+. Other plugins
            // LAST. NgxsLoggerPluginModule
            _ngxs_labs_data__WEBPACK_IMPORTED_MODULE_0__["NgxsDataPluginModule"].forRoot(),
            _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forRoot(ROOT_STATES, {
                developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
            }),
            _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_3__["NgxsStoragePluginModule"].forRoot({
                key: []
            }),
            _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__["NgxsRouterPluginModule"].forRoot(),
            _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_1__["NgxsLoggerPluginModule"].forRoot({
                disabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](StateModule, { imports: [_ngxs_labs_data__WEBPACK_IMPORTED_MODULE_0__["NgxsDataPluginModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["ɵk"], _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_3__["NgxsStoragePluginModule"], _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__["NgxsRouterPluginModule"], _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_1__["NgxsLoggerPluginModule"]] }); })();


/***/ }),

/***/ "gyiZ":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/visualization-page/visualization-page.component.ts ***!
  \**************************************************************************************/
/*! exports provided: VisualizationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationPageComponent", function() { return VisualizationPageComponent; });
/* harmony import */ var _help_modal_help_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../help-modal/help-modal.component */ "NgH2");
/* harmony import */ var _help_tour_modal_help_tour_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../help-tour-modal/help-tour-modal.component */ "HVTm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_core_state_page_page_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/state/page/page.state */ "61A3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ngx_vega__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-vega */ "NNEg");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-markdown */ "lR5k");












function VisualizationPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.headline);
} }
function VisualizationPageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.title);
} }
function VisualizationPageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.description);
} }
const _c0 = function () { return { width: true, height: false }; };
function VisualizationPageComponent_ngx_vega_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-vega", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("viewLoading", function VisualizationPageComponent_ngx_vega_8_Template_ngx_vega_viewLoading_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.loadingVegaVisualization = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("spec", ctx_r3.spec)("options", ctx_r3.options)("autosize", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
} }
function VisualizationPageComponent_markdown_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "markdown", 19);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r4.content);
} }
function VisualizationPageComponent_mat_expansion_panel_19_markdown_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "markdown", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("load", function VisualizationPageComponent_mat_expansion_panel_19_markdown_10_Template_markdown_load_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.disableSpinner("sql"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r11.sql);
} }
function VisualizationPageComponent_mat_expansion_panel_19_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-expansion-panel", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function VisualizationPageComponent_mat_expansion_panel_19_Template_mat_expansion_panel_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.enableSpinner("sql"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Data Extraction Source Code (SQL) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "mat-spinner", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, VisualizationPageComponent_mat_expansion_panel_19_markdown_10_Template, 1, 1, "markdown", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r5.sql, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("smooth-hide", !ctx_r5.spinners.sql);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.sql && _r10.expanded);
} }
function VisualizationPageComponent_mat_expansion_panel_20_markdown_10_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "markdown", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("load", function VisualizationPageComponent_mat_expansion_panel_20_markdown_10_Template_markdown_load_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r18.disableSpinner("csv"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r17.csv);
} }
function VisualizationPageComponent_mat_expansion_panel_20_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-expansion-panel", 20, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function VisualizationPageComponent_mat_expansion_panel_20_Template_mat_expansion_panel_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.enableSpinner("csv"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Extracted Data (CSV) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "mat-spinner", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, VisualizationPageComponent_mat_expansion_panel_20_markdown_10_Template, 1, 1, "markdown", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r6.csv, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("smooth-hide", !ctx_r6.spinners.csv);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.csv && _r16.expanded);
} }
function VisualizationPageComponent_mat_expansion_panel_21_markdown_10_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "markdown", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("load", function VisualizationPageComponent_mat_expansion_panel_21_markdown_10_Template_markdown_load_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r24.disableSpinner("spec"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r23.specString);
} }
function VisualizationPageComponent_mat_expansion_panel_21_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-expansion-panel", 20, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function VisualizationPageComponent_mat_expansion_panel_21_Template_mat_expansion_panel_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.enableSpinner("spec"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Visualization Source Code (Vega Lite Spec) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "mat-spinner", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, VisualizationPageComponent_mat_expansion_panel_21_markdown_10_Template, 1, 1, "markdown", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r7.specString, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("smooth-hide", !ctx_r7.spinners.spec);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.spec && _r22.expanded);
} }
class VisualizationPageComponent {
    constructor(dialog, page) {
        this.dialog = dialog;
        this.page = page;
        this.clsName = 'agc-visualization-page';
        this.headline = 'Marion County Opioid Addiction Report';
        this.options = { renderer: 'canvas', actions: true, width: 1268 };
        this.csvSpinnerActive = true;
        this.spinners = {
            sql: true,
            csv: true,
            spec: true
        };
        this.loadingVegaVisualization = true;
    }
    ngOnInit() {
        if (!this.page.snapshot.hasShownHelpModal) {
            this.dialog.open(_help_tour_modal_help_tour_modal_component__WEBPACK_IMPORTED_MODULE_1__["HelpTourModalComponent"], {
                width: '50rem',
                data: {}
            });
            this.page.setHasShownHelpModal(true);
        }
    }
    disableSpinner(key) {
        this.spinners = Object.assign(Object.assign({}, this.spinners), { [key]: false });
    }
    enableSpinner(key) {
        this.spinners = Object.assign(Object.assign({}, this.spinners), { [key]: true });
    }
    get specString() {
        return this.spec;
    }
    launchHelpDialog() {
        this.dialog.open(_help_modal_help_modal_component__WEBPACK_IMPORTED_MODULE_0__["HelpModalComponent"], {
            width: '60rem',
            data: {}
        });
    }
}
VisualizationPageComponent.ɵfac = function VisualizationPageComponent_Factory(t) { return new (t || VisualizationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_state_page_page_state__WEBPACK_IMPORTED_MODULE_4__["PageState"])); };
VisualizationPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VisualizationPageComponent, selectors: [["agc-visualization-page"]], hostVars: 2, hostBindings: function VisualizationPageComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { headline: "headline", title: "title", description: "description", spec: "spec", options: "options", content: "content", sql: "sql", csv: "csv" }, decls: 22, vars: 12, consts: [["class", "header", 4, "ngIf"], [1, "content"], [1, "center-box"], ["class", "title", 4, "ngIf"], ["class", "description", 4, "ngIf"], [1, "loading-message"], [1, "visualization"], [3, "spec", "options", "autosize", "viewLoading", 4, "ngIf"], ["mat-icon-button", "", "color", "accent", "disableRipple", "", 1, "help", 3, "click"], ["title", "Help", 1, "qmark"], ["ngClass", "info"], ["ngClass", "storage-icon", "svgIcon", "menu:data-storage"], [3, "src", 4, "ngIf"], ["multi", ""], [3, "closed", 4, "ngIf"], [1, "header"], [1, "title"], [1, "description"], [3, "spec", "options", "autosize", "viewLoading"], [3, "src"], [3, "closed"], ["sqlPanel", ""], [1, "file-download-area"], ["target", "_blank", "rel", "noreferrer noopener", 1, "file-download", 3, "href"], [1, "spinner"], ["lineNumbers", "", 3, "src", "load", 4, "ngIf"], ["lineNumbers", "", 3, "src", "load"], ["csvPanel", ""], ["class", "csvContent", "lineNumbers", "", 3, "src", "load", 4, "ngIf"], ["lineNumbers", "", 1, "csvContent", 3, "src", "load"], ["specPanel", ""]], template: function VisualizationPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, VisualizationPageComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, VisualizationPageComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, VisualizationPageComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mat-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, VisualizationPageComponent_ngx_vega_8_Template, 1, 4, "ngx-vega", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisualizationPageComponent_Template_button_click_9_listener() { return ctx.launchHelpDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-expansion-panel", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " DATA & GRAPHIC VARIABLE EXTRACTION INFORMATION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, VisualizationPageComponent_markdown_17_Template, 1, 1, "markdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-accordion", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, VisualizationPageComponent_mat_expansion_panel_19_Template, 11, 4, "mat-expansion-panel", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, VisualizationPageComponent_mat_expansion_panel_20_Template, 11, 4, "mat-expansion-panel", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, VisualizationPageComponent_mat_expansion_panel_21_Template, 11, 4, "mat-expansion-panel", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.headline);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("smooth-hide", !ctx.loadingVegaVisualization);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.spec);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("smooth-show", !ctx.loadingVegaVisualization);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sql);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.csv);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.spec);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatAccordion"], ngx_vega__WEBPACK_IMPORTED_MODULE_10__["VegaComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_11__["MarkdownComponent"]], styles: [".mat-expanded .mat-expanded .mat-expansion-panel-content {\n  min-height: 13rem;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n[_nghost-%COMP%]   markdown[_ngcontent-%COMP%] {\n  display: block;\n}\n\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  height: 4rem;\n  margin-bottom: 4.5rem;\n  padding: 0 1rem;\n  align-items: center;\n  font-weight: 300;\n  font-size: 2.25rem;\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  align-items: center;\n  width: 100%;\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .center-box[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.25rem;\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .loading-message[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 2;\n  left: 50%;\n  top: 50%;\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .visualization[_ngcontent-%COMP%] {\n  position: relative;\n  padding-right: 2.375rem;\n  display: flex;\n  width: 100%;\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .visualization[_ngcontent-%COMP%]:hover   ngx-vega[_ngcontent-%COMP%]     summary, [_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .visualization[_ngcontent-%COMP%]:hover   .help[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 0.2s ease;\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .visualization[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n  opacity: 0.2;\n  transition: opacity 0.4s ease-in;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 50%;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n  background: white;\n  color: #1b1e23;\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .visualization[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%], [_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .visualization[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%]   .qmark[_ngcontent-%COMP%] {\n  width: 1.75rem;\n  height: 1.75rem;\n  line-height: 1.75rem;\n  font-size: 1.25rem;\n  vertical-align: baseline;\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .visualization[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%]     .mat-button-focus-overlay {\n  display: none;\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  opacity: 0;\n  margin-top: 2rem;\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   .file-download-area[_ngcontent-%COMP%] {\n  margin-top: 0.625rem;\n  margin-bottom: 2.5rem;\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   .file-download-area[_ngcontent-%COMP%]   .file-download[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2rem;\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  left: 50%;\n  top: 8rem;\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   markdown[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 0;\n}\n\n[_nghost-%COMP%]   .smooth-show[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n  transition: opacity 0.75s;\n}\n\n[_nghost-%COMP%]   .smooth-hide[_ngcontent-%COMP%] {\n  opacity: 0 !important;\n  transition: opacity 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Zpc3VhbGl6YXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0FBQUo7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQURGOztBQUdFO0VBQ0UsY0FBQTtBQURKOztBQUlFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUhKOztBQUtJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFITjs7QUFNSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFKTjs7QUFPSTtFQUNFLGtCQUFBO0FBTE47O0FBUUk7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBTk47O0FBU0k7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFQTjs7QUFVUTtFQUNFLFVBQUE7RUFDQSw2QkFBQTtBQVJWOztBQVlNO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVZSOztBQVlRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUFWVjs7QUFhUTtFQUNFLGFBQUE7QUFYVjs7QUFnQkk7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFkTjs7QUFrQk07RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFoQlI7O0FBa0JRO0VBQ0Usb0JBQUE7QUFoQlY7O0FBb0JNO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQWxCUjs7QUFvQlE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFsQlY7O0FBc0JNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFwQlI7O0FBdUJNO0VBQ0Usc0JBQUE7QUFyQlI7O0FBMEJFO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtBQXhCSjs7QUEyQkU7RUFDRSxxQkFBQTtFQUNBLHdCQUFBO0FBekJKIiwiZmlsZSI6InZpc3VhbGl6YXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gIC5tYXQtZXhwYW5kZWQgLm1hdC1leHBhbmRlZCAubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcbiAgICBtaW4taGVpZ2h0OiAxM3JlbTtcbiAgfVxufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcblxuICBtYXJrZG93biB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA0LjVyZW07XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDIuMjVyZW07XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5jZW50ZXItYm94IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgfVxuXG4gICAgLmxvYWRpbmctbWVzc2FnZSB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgfVxuXG4gICAgLnZpc3VhbGl6YXRpb24ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZy1yaWdodDogMi4zNzVyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBuZ3gtdmVnYSA6Om5nLWRlZXAgc3VtbWFyeSwgLmhlbHAge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmhlbHAge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgb3BhY2l0eTogMC4yO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbjtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6ICMxYjFlMjM7XG5cbiAgICAgICAgJiwgLnFtYXJrIHtcbiAgICAgICAgICB3aWR0aDogMS43NXJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDEuNzVyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIDo6bmctZGVlcCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmluZm8ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuXG4gICAgbWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgICBtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuXG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZmlsZS1kb3dubG9hZC1hcmVhIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMC42MjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcblxuICAgICAgICAuZmlsZS1kb3dubG9hZCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiAycmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5zcGlubmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRvcDogOHJlbTtcbiAgICAgIH1cblxuICAgICAgbWFya2Rvd24ge1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDAuNXJlbSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zbW9vdGgtc2hvdyB7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjc1cztcbiAgfVxuXG4gIC5zbW9vdGgtaGlkZSB7XG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "hJT/":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/help-modal/help-modal.module.ts ***!
  \*******************************************************************/
/*! exports provided: HelpModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpModalModule", function() { return HelpModalModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _help_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help-modal.component */ "NgH2");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class HelpModalModule {
}
HelpModalModule.ɵfac = function HelpModalModule_Factory(t) { return new (t || HelpModalModule)(); };
HelpModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: HelpModalModule });
HelpModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](HelpModalModule, { declarations: [_help_modal_component__WEBPACK_IMPORTED_MODULE_1__["HelpModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"]], exports: [_help_modal_component__WEBPACK_IMPORTED_MODULE_1__["HelpModalComponent"]] }); })();


/***/ }),

/***/ "hlsx":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/data-schema-browser/data-schema-browser-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DataSchemaBrowserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSchemaBrowserRoutingModule", function() { return DataSchemaBrowserRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_schema_browser_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-schema-browser.component */ "3PK8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _data_schema_browser_component__WEBPACK_IMPORTED_MODULE_1__["DataSchemaBrowserComponent"] }];
class DataSchemaBrowserRoutingModule {
}
DataSchemaBrowserRoutingModule.ɵfac = function DataSchemaBrowserRoutingModule_Factory(t) { return new (t || DataSchemaBrowserRoutingModule)(); };
DataSchemaBrowserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DataSchemaBrowserRoutingModule });
DataSchemaBrowserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DataSchemaBrowserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "iSGQ":
/*!*******************************************************************!*\
  !*** ./src/app/core/state/visualizations/visualizations.state.ts ***!
  \*******************************************************************/
/*! exports provided: VisualizationsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationsState", function() { return VisualizationsState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_labs_data_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs-labs/data/decorators */ "4jw6");
/* harmony import */ var _ngxs_labs_data_repositories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs-labs/data/repositories */ "zmn3");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _visualizations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visualizations */ "S2lW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let VisualizationsState = class VisualizationsState extends _ngxs_labs_data_repositories__WEBPACK_IMPORTED_MODULE_2__["NgxsDataEntityCollectionsRepository"] {
    ngxsOnInit() {
        this.setAll(_visualizations__WEBPACK_IMPORTED_MODULE_4__["visualizations"]);
    }
};
VisualizationsState.ɵfac = function VisualizationsState_Factory(t) { return ɵVisualizationsState_BaseFactory(t || VisualizationsState); };
VisualizationsState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: VisualizationsState, factory: VisualizationsState.ɵfac });
VisualizationsState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_data_decorators__WEBPACK_IMPORTED_MODULE_1__["StateRepository"])(),
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["State"])({
        name: 'visualizations'
    })
], VisualizationsState);

const ɵVisualizationsState_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](VisualizationsState);


/***/ }),

/***/ "jswo":
/*!******************************************************************!*\
  !*** ./src/app/core/components/page-menu/page-menu.component.ts ***!
  \******************************************************************/
/*! exports provided: PageMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageMenuComponent", function() { return PageMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _shared_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pipes/order-by/order-by.pipe */ "DjuL");






const _c0 = function (a1) { return ["/visualization", a1]; };
function PageMenuComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, page_r1.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r1.description);
} }
class PageMenuComponent {
    constructor() {
        this.clsName = 'agc-page-menu';
        this.header = '';
        this.pages = [];
    }
    linkId(_index, link) {
        return link.path;
    }
}
PageMenuComponent.ɵfac = function PageMenuComponent_Factory(t) { return new (t || PageMenuComponent)(); };
PageMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageMenuComponent, selectors: [["agc-page-menu"]], hostVars: 2, hostBindings: function PageMenuComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { header: "header", pages: "pages" }, decls: 34, vars: 6, consts: [[1, "header"], [1, "pages"], ["class", "link", "routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "info"], ["routerLink", "/data-distributions", "routerLinkActive", "active", 1, "link", "distributions"], ["svgIcon", "menu:data-distributions"], [1, "title"], ["routerLink", "/about", "routerLinkActive", "active", 1, "link", "about"], ["routerLink", "/data-schema-browser", "routerLinkActive", "active", 1, "link", "schema"], ["svgIcon", "menu:data-storage"], ["routerLink", "/data-er-diagram", "routerLinkActive", "active", 1, "link", "er-diagram"], ["routerLink", "/change-log", "routerLinkActive", "active", 1, "link", "changelog"], ["routerLinkActive", "active", 1, "link", 3, "routerLink"], [1, "description"]], template: function PageMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PageMenuComponent_a_3_Template, 6, 5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "orderBy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Data Distributions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "info_outlined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Data Schema Browser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "bar_chart_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Data ER Diagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "published_with_changes_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Changelog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.header, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 3, ctx.pages, "order"))("ngForTrackBy", ctx.linkId);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"]], pipes: [_shared_pipes_order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderByPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 30rem;\n  padding-bottom: 2rem;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%], [_nghost-%COMP%]   .pages[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(mat-divider), [_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  height: 4rem;\n  align-items: center;\n}\n[_nghost-%COMP%]   .pages[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n}\n[_nghost-%COMP%]   .pages[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  outline: none;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .pages[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n[_nghost-%COMP%]   .pages[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  display: flex;\n  height: 2.25rem;\n  align-items: center;\n  cursor: pointer;\n  outline: none;\n  text-decoration: none;\n  transition: color 0.3s ease-in-out;\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhZ2UtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFDRjtBQUNFOzs7RUFHRSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0UsaUJBQUE7QUFESjtBQUdJO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0FBRE47QUFHTTtFQUNFLGlCQUFBO0FBRFI7QUFJTTtFQUNFLG9CQUFBO0FBRlI7QUFPRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7QUFMSjtBQU9JO0VBQ0Usb0JBQUE7QUFMTiIsImZpbGUiOiJwYWdlLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzByZW07XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xuXG4gIC5oZWFkZXIsXG4gIC5wYWdlcyAubGluayA6bm90KG1hdC1kaXZpZGVyKSxcbiAgLmluZm8gLmxpbmsge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbiAgfVxuXG4gIC5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAucGFnZXMge1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuXG4gICAgLmxpbmsge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgICB9XG5cbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5pbmZvIC5saW5rIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMi4yNXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xuXG4gICAgbWF0LWljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgfVxuICB9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "lbxB":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/markdown-modal/markdown-modal.module.ts ***!
  \***************************************************************************/
/*! exports provided: MarkdownModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownModalModule", function() { return MarkdownModalModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _markdown_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./markdown-modal.component */ "p6z6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class MarkdownModalModule {
}
MarkdownModalModule.ɵfac = function MarkdownModalModule_Factory(t) { return new (t || MarkdownModalModule)(); };
MarkdownModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: MarkdownModalModule });
MarkdownModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MarkdownModalModule, { declarations: [_markdown_modal_component__WEBPACK_IMPORTED_MODULE_5__["MarkdownModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"]], exports: [_markdown_modal_component__WEBPACK_IMPORTED_MODULE_5__["MarkdownModalComponent"]] }); })();


/***/ }),

/***/ "mz5l":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/page-footer/page-footer.component.ts ***!
  \**********************************************************************/
/*! exports provided: PageFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFooterComponent", function() { return PageFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class PageFooterComponent {
    constructor() {
        this.clsName = 'agc-page-footer';
        this.buildDate = new Date();
        this.contactClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.privacyClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
PageFooterComponent.ɵfac = function PageFooterComponent_Factory(t) { return new (t || PageFooterComponent)(); };
PageFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageFooterComponent, selectors: [["agc-page-footer"]], hostVars: 2, hostBindings: function PageFooterComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, inputs: { buildDate: "buildDate" }, outputs: { contactClick: "contactClick", privacyClick: "privacyClick" }, decls: 12, vars: 4, consts: [[1, "resources"], ["mat-button", "", "disableRipple", "", 1, "contact", 3, "click"], ["mat-button", "", "disableRipple", "", 1, "privacy", 3, "click"], [1, "filler"], [1, "build-date"], [1, "copyright"]], template: function PageFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageFooterComponent_Template_button_click_1_listener() { return ctx.contactClick.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageFooterComponent_Template_button_click_3_listener() { return ctx.privacyClick.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Copyright \u00A9 2020 Indiana University, Regenstrief Institute - All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" This site was last updated on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 1, ctx.buildDate, "MM/dd/yyyy, h:mm a"), " ");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .resources[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 4.5rem;\n  align-items: center;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n[_nghost-%COMP%]   .resources[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%], [_nghost-%COMP%]   .resources[_ngcontent-%COMP%]   .privacy[_ngcontent-%COMP%] {\n  transition: color 0.3s;\n}\n[_nghost-%COMP%]   .resources[_ngcontent-%COMP%]   .filler[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n[_nghost-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 3rem;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhZ2UtZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxzQkFBQTtBQUNOO0FBRUk7RUFDRSxZQUFBO0FBQU47QUFJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUZKIiwiZmlsZSI6InBhZ2UtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcblxuICAucmVzb3VyY2VzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0LjVyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcblxuICAgIC5jb250YWN0LCAucHJpdmFjeSB7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xuICAgIH1cblxuICAgIC5maWxsZXIge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cbiAgfVxuXG4gIC5jb3B5cmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "p6z6":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/markdown-modal/markdown-modal.component.ts ***!
  \******************************************************************************/
/*! exports provided: MarkdownModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownModalComponent", function() { return MarkdownModalComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







class MarkdownModalComponent {
    constructor(data) {
        this.data = data;
    }
}
MarkdownModalComponent.ɵfac = function MarkdownModalComponent_Factory(t) { return new (t || MarkdownModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
MarkdownModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MarkdownModalComponent, selectors: [["agc-markdown-modal"]], decls: 10, vars: 4, consts: [["mat-dialog-title", "", 1, "header"], [1, "title"], [1, "filler"], ["mat-icon-button", "", "mat-dialog-close", "", "tabindex", "-1", 1, "close"], [3, "src"]], template: function MarkdownModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "markdown", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx.data.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.data.src);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .filler[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21hcmtkb3duLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0UsWUFBQTtBQUNOIiwiZmlsZSI6Im1hcmtkb3duLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcblxuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuZmlsbGVyIHtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _components_banner_banner_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/banner/banner.module */ "NJGI");
/* harmony import */ var _components_page_footer_page_footer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/page-footer/page-footer.module */ "dgkL");
/* harmony import */ var _components_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/page-header/page-header.module */ "rUvl");
/* harmony import */ var _components_page_menu_page_menu_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page-menu/page-menu.module */ "SXa6");
/* harmony import */ var _components_sub_bar_sub_bar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sub-bar/sub-bar.module */ "79Ke");
/* harmony import */ var _services_theme_theme_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/theme/theme.module */ "Xms1");
/* harmony import */ var _state_state_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state/state.module */ "efN5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









class CoreModule {
    constructor(other) {
        if (other) {
            throw new Error('CoreModule should only be imported once in the AppModule!');
        }
    }
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](CoreModule, 12)); };
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            // Services
            _services_theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"].forRoot(),
            _state_state_module__WEBPACK_IMPORTED_MODULE_6__["StateModule"],
            // Components
            _components_banner_banner_module__WEBPACK_IMPORTED_MODULE_0__["BannerModule"],
            _components_page_footer_page_footer_module__WEBPACK_IMPORTED_MODULE_1__["PageFooterModule"],
            _components_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_2__["PageHeaderModule"],
            _components_page_menu_page_menu_module__WEBPACK_IMPORTED_MODULE_3__["PageMenuModule"],
            _components_sub_bar_sub_bar_module__WEBPACK_IMPORTED_MODULE_4__["SubBarModule"]
        ], 
        // Module forwarding
        _components_banner_banner_module__WEBPACK_IMPORTED_MODULE_0__["BannerModule"],
        _components_page_footer_page_footer_module__WEBPACK_IMPORTED_MODULE_1__["PageFooterModule"],
        _components_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_2__["PageHeaderModule"],
        _components_page_menu_page_menu_module__WEBPACK_IMPORTED_MODULE_3__["PageMenuModule"],
        _components_sub_bar_sub_bar_module__WEBPACK_IMPORTED_MODULE_4__["SubBarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_services_theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"], _state_state_module__WEBPACK_IMPORTED_MODULE_6__["StateModule"],
        // Components
        _components_banner_banner_module__WEBPACK_IMPORTED_MODULE_0__["BannerModule"],
        _components_page_footer_page_footer_module__WEBPACK_IMPORTED_MODULE_1__["PageFooterModule"],
        _components_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_2__["PageHeaderModule"],
        _components_page_menu_page_menu_module__WEBPACK_IMPORTED_MODULE_3__["PageMenuModule"],
        _components_sub_bar_sub_bar_module__WEBPACK_IMPORTED_MODULE_4__["SubBarModule"]], exports: [
        // Module forwarding
        _components_banner_banner_module__WEBPACK_IMPORTED_MODULE_0__["BannerModule"],
        _components_page_footer_page_footer_module__WEBPACK_IMPORTED_MODULE_1__["PageFooterModule"],
        _components_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_2__["PageHeaderModule"],
        _components_page_menu_page_menu_module__WEBPACK_IMPORTED_MODULE_3__["PageMenuModule"],
        _components_sub_bar_sub_bar_module__WEBPACK_IMPORTED_MODULE_4__["SubBarModule"]] }); })();


/***/ }),

/***/ "qU2i":
/*!**************************************************************!*\
  !*** ./src/app/core/components/sub-bar/sub-bar.component.ts ***!
  \**************************************************************/
/*! exports provided: SubBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubBarComponent", function() { return SubBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SubBarComponent {
    constructor() {
        this.clsName = 'agc-sub-bar';
        this.visible = true;
    }
}
SubBarComponent.ɵfac = function SubBarComponent_Factory(t) { return new (t || SubBarComponent)(); };
SubBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubBarComponent, selectors: [["agc-sub-bar"]], hostVars: 4, hostBindings: function SubBarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx.visible);
    } }, inputs: { visible: "visible" }, decls: 0, vars: 0, template: function SubBarComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 2.625rem;\n  transition: height 0.3s ease-in-out;\n}\n[_nghost-%COMP%]:not(.visible) {\n  height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N1Yi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBQUNGO0FBQ0U7RUFDRSxTQUFBO0FBQ0oiLCJmaWxlIjoic3ViLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMi42MjVyZW07XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xuXG4gICY6bm90KC52aXNpYmxlKSB7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "qjp4":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/visualization-page/shared/geomap-zoom-patch.ts ***!
  \**********************************************************************************/
/*! exports provided: INDIANA_ZOOM_CONFIG, USA_ZOOM_CONFIG, addGeoZoom, createGeoZoomPatch, patchIndianaGeoZoom, patchUsaGeoZoom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INDIANA_ZOOM_CONFIG", function() { return INDIANA_ZOOM_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USA_ZOOM_CONFIG", function() { return USA_ZOOM_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGeoZoom", function() { return addGeoZoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGeoZoomPatch", function() { return createGeoZoomPatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchIndianaGeoZoom", function() { return patchIndianaGeoZoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchUsaGeoZoom", function() { return patchUsaGeoZoom; });
const INDIANA_ZOOM_CONFIG = {
    center: [86.44305475, 39.76622477],
    zoomLevels: [3200, 250000],
    initialZoom: 6400,
};
const USA_ZOOM_CONFIG = {
    center: [96, 39],
    zoomLevels: [10, 250000],
    initialZoom: 600
};
/**
 * Adds zooming functionality to a vega spec with a geographic projection.
 *
 * @param spec - The vega specification object.
 * @param opts - The zoom configuration.
 */
function addGeoZoom(spec, opts) {
    const signals = spec.signals || (spec.signals = []);
    const projection = spec.projections ? spec.projections[0] : undefined; // Assumes single geo projection
    if (!projection || projection.type === 'albersUsa') {
        return; // albersUsa only does zoom, no pan. Do not patch in this case.
    }
    // spec.autosize = {type: 'none', contains: 'padding'};
    signals.push({ name: 'tx', update: 'width / 2 - 300' }, // add to other patch
    { name: 'ty', update: 'height / 2' }, {
        name: 'scale',
        value: opts.initialZoom != null ? opts.initialZoom : opts.zoomLevels[0],
        on: [{
                events: { type: 'wheel', consume: true, filter: 'event.shiftKey' },
                update: [
                    'clamp(scale * pow(1.0015, -event.deltaY * pow(48, event.deltaMode)), ',
                    opts.zoomLevels[0],
                    ', ',
                    opts.zoomLevels[1],
                    ')'
                ].join('')
            }]
    }, {
        name: 'angles',
        value: [0, 0],
        on: [{
                events: 'mousedown',
                update: '[rotateX, centerY]'
            }]
    }, {
        name: 'cloned',
        value: null,
        on: [{
                events: 'mousedown',
                update: 'copy(\'' + projection.name + '\')'
            }]
    }, {
        name: 'start',
        value: null,
        on: [{
                events: 'mousedown',
                update: 'invert(cloned, xy())'
            }]
    }, {
        name: 'drag',
        value: null,
        on: [{
                events: '[mousedown[event.shiftKey], window:mouseup] > window:mousemove',
                update: 'invert(cloned, xy())'
            }]
    }, {
        name: 'delta',
        value: null,
        on: [{
                events: { signal: 'drag' },
                update: '[drag[0] - start[0], start[1] - drag[1]]'
            }]
    }, {
        name: 'rotateX',
        value: opts.center[0],
        on: [{
                events: { signal: 'delta' },
                update: 'angles[0] + delta[0]'
            }]
    }, {
        name: 'centerY',
        value: opts.center[1],
        on: [{
                events: { signal: 'delta' },
                update: 'clamp(angles[1] + delta[1], -60, 60)'
            }]
    });
    Object.assign(projection, {
        scale: { signal: 'scale' },
        rotate: [{ signal: 'rotateX' }, 0, 0],
        center: [0, { signal: 'centerY' }],
        translate: [{ signal: 'tx' }, { signal: 'ty' }]
    });
    delete projection.size;
}
function createGeoZoomPatch(opts) {
    return (spec) => {
        addGeoZoom(spec, opts);
        return spec;
    };
}
/**
 * Patches a vega specification to add geographical zooming focused on Indiana.
 *
 * @param spec - The vega specification object.
 */
const patchIndianaGeoZoom = createGeoZoomPatch(INDIANA_ZOOM_CONFIG);
/**
 * Patches a vega specification to add geographical zooming focused on USA.
 *
 * @param spec - The vega specification object.
 */
const patchUsaGeoZoom = createGeoZoomPatch(USA_ZOOM_CONFIG);


/***/ }),

/***/ "rBg9":
/*!*******************************!*\
  !*** ./src/app/build-info.ts ***!
  \*******************************/
/*! exports provided: buildInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildInfo", function() { return buildInfo; });
const buildInfo = {
    version: '1.0.0',
    lastCommitDate: new Date(1603996553000),
    buildDate: new Date(1603996944707)
};


/***/ }),

/***/ "rUvl":
/*!*******************************************************************!*\
  !*** ./src/app/core/components/page-header/page-header.module.ts ***!
  \*******************************************************************/
/*! exports provided: PageHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function() { return PageHeaderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "PCNd");
/* harmony import */ var _page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-header.component */ "OyBo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class PageHeaderModule {
}
PageHeaderModule.ɵfac = function PageHeaderModule_Factory(t) { return new (t || PageHeaderModule)(); };
PageHeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PageHeaderModule });
PageHeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PageHeaderModule, { declarations: [_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]], exports: [_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"]] }); })();


/***/ }),

/***/ "rVrE":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");



class AboutComponent {
    constructor() {
        this.clsName = 'agc-about';
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["agc-about"]], hostVars: 2, hostBindings: function AboutComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.clsName);
    } }, decls: 25, vars: 0, consts: [[1, "header"], [1, "content"], ["src", "assets/pages/about/index.md", 1, "index"], ["multi", "", 1, "panels"], ["src", "assets/pages/about/helping.md"], ["src", "assets/pages/about/data.md"], ["src", "assets/pages/about/connect.md"], ["src", "assets/pages/about/credits.md"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ADDICTIONS DATA ANALYSES AND VISUALIZATIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "markdown", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-accordion", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "HOW WE'RE HELPING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "markdown", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "THE DATA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "markdown", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "CONNECT WITH US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "markdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "CREDITS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "markdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_1__["MarkdownComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   markdown[_ngcontent-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  height: 4rem;\n  margin-bottom: 4.5rem;\n  padding: 0 1rem;\n  align-items: center;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .index[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   markdown[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQURKO0FBR0k7RUFDRSxvQkFBQTtBQUROO0FBS007RUFDRSxpQkFBQTtBQUhSO0FBTU07RUFDRSxzQkFBQTtBQUpSIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcblxuICBtYXJrZG93biB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA0LjVyZW07XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG5cbiAgICAuaW5kZXgge1xuICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgfVxuXG4gICAgbWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgICBtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuXG4gICAgICBtYXJrZG93biB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMC41cmVtIDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_about_about_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/about/about.module */ "UoYK");
/* harmony import */ var _pages_change_log_change_log_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/change-log/change-log.module */ "R9JI");
/* harmony import */ var _pages_data_er_diagram_data_er_diagram_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/data-er-diagram/data-er-diagram.module */ "2Gxr");
/* harmony import */ var _pages_data_schema_browser_data_schema_browser_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/data-schema-browser/data-schema-browser.module */ "Z/G5");
/* harmony import */ var _pages_visualization_visualization_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/visualization/visualization.module */ "wsAT");
/* harmony import */ var _pages_data_distributions_data_distributions_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/data-distributions/data-distributions.module */ "BzDc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'about' },
    { path: 'about', loadChildren: () => _pages_about_about_module__WEBPACK_IMPORTED_MODULE_1__["AboutModule"] },
    { path: 'change-log', loadChildren: () => _pages_change_log_change_log_module__WEBPACK_IMPORTED_MODULE_2__["ChangeLogModule"] },
    { path: 'data-er-diagram', loadChildren: () => _pages_data_er_diagram_data_er_diagram_module__WEBPACK_IMPORTED_MODULE_3__["DataErDiagramModule"] },
    { path: 'data-schema-browser', loadChildren: () => _pages_data_schema_browser_data_schema_browser_module__WEBPACK_IMPORTED_MODULE_4__["DataSchemaBrowserModule"] },
    { path: 'visualization/:id', loadChildren: () => _pages_visualization_visualization_module__WEBPACK_IMPORTED_MODULE_5__["VisualizationModule"] },
    { path: 'data-distributions', loadChildren: () => _pages_data_distributions_data_distributions_module__WEBPACK_IMPORTED_MODULE_6__["DataDistributionsModule"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wsAT":
/*!*************************************************************!*\
  !*** ./src/app/pages/visualization/visualization.module.ts ***!
  \*************************************************************/
/*! exports provided: VisualizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationModule", function() { return VisualizationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _visualization_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visualization-routing.module */ "CXhD");
/* harmony import */ var _visualization_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visualization.component */ "G0h6");
/* harmony import */ var _shared_components_visualization_page_visualization_page_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/visualization-page/visualization-page.module */ "xFcw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class VisualizationModule {
}
VisualizationModule.ɵfac = function VisualizationModule_Factory(t) { return new (t || VisualizationModule)(); };
VisualizationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: VisualizationModule });
VisualizationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _visualization_routing_module__WEBPACK_IMPORTED_MODULE_1__["VisualizationRoutingModule"],
            _shared_components_visualization_page_visualization_page_module__WEBPACK_IMPORTED_MODULE_3__["VisualizationPageModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](VisualizationModule, { declarations: [_visualization_component__WEBPACK_IMPORTED_MODULE_2__["VisualizationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _visualization_routing_module__WEBPACK_IMPORTED_MODULE_1__["VisualizationRoutingModule"],
        _shared_components_visualization_page_visualization_page_module__WEBPACK_IMPORTED_MODULE_3__["VisualizationPageModule"]] }); })();


/***/ }),

/***/ "xFcw":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/visualization-page/visualization-page.module.ts ***!
  \***********************************************************************************/
/*! exports provided: VisualizationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationPageModule", function() { return VisualizationPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var ngx_vega__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-vega */ "NNEg");
/* harmony import */ var _help_modal_help_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../help-modal/help-modal.module */ "hJT/");
/* harmony import */ var _help_tour_modal_help_tour_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../help-tour-modal/help-tour-modal.module */ "dRfK");
/* harmony import */ var _visualization_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./visualization-page.component */ "gyiZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












class VisualizationPageModule {
}
VisualizationPageModule.ɵfac = function VisualizationPageModule_Factory(t) { return new (t || VisualizationPageModule)(); };
VisualizationPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: VisualizationPageModule });
VisualizationPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"].forChild(),
            ngx_vega__WEBPACK_IMPORTED_MODULE_6__["NgxVegaModule"],
            _help_modal_help_modal_module__WEBPACK_IMPORTED_MODULE_7__["HelpModalModule"],
            _help_tour_modal_help_tour_modal_module__WEBPACK_IMPORTED_MODULE_8__["HelpTourModalModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](VisualizationPageModule, { declarations: [_visualization_page_component__WEBPACK_IMPORTED_MODULE_9__["VisualizationPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"], ngx_vega__WEBPACK_IMPORTED_MODULE_6__["NgxVegaModule"],
        _help_modal_help_modal_module__WEBPACK_IMPORTED_MODULE_7__["HelpModalModule"],
        _help_tour_modal_help_tour_modal_module__WEBPACK_IMPORTED_MODULE_8__["HelpTourModalModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"]], exports: [_visualization_page_component__WEBPACK_IMPORTED_MODULE_9__["VisualizationPageComponent"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zxUb":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/menu-icon/menu-icon.module.ts ***!
  \*****************************************************************/
/*! exports provided: MenuIconModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuIconModule", function() { return MenuIconModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _menu_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-icon.component */ "EbOm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class MenuIconModule {
}
MenuIconModule.ɵfac = function MenuIconModule_Factory(t) { return new (t || MenuIconModule)(); };
MenuIconModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MenuIconModule });
MenuIconModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MenuIconModule, { declarations: [_menu_icon_component__WEBPACK_IMPORTED_MODULE_1__["MenuIconComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_menu_icon_component__WEBPACK_IMPORTED_MODULE_1__["MenuIconComponent"]] }); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map