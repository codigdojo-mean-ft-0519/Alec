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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{Title}}</h1>\n<h1>New Task</h1>\n<p> {{ newTask | json }} </p>\n<div id=\"newForm\">\n  <form (submit)=\"onSubmit()\">\n  <p>Title: <input id=\"top\" class=\"fields\" type=\"text\" name=\"newTaskTitle\" [(ngModel)]=\"newTask.title\"/></p>\n  <p>Description: <input class=\"fields\" type=\"text\" name=\"newTaskDescription\" [(ngModel)]=\"newTask.description\"/></p>\n  <input  id=\"create\" type=\"submit\" value=\"Create Task\"/>\n  </form>\n</div>\n<!-- <button (click)='getTasksFromService()'>Click to show all Tasks</button> -->\n<div *ngIf='tasks'>\n  <p>hello</p>\n  <table>\n    <tr>\n      <th>Title</th>\n      <th>Description</th>\n      <th>Action</th>\n    </tr>\n    <tr *ngFor='let x of tasks'>\n      <td>{{x.title}}</td>\n      <td>{{x.description}}</td>\n      <td><button (click)='onDelete(x)'>Delete</button>\n          <button (click)='editForm(x)'>Edit</button></td>\n    </tr>\n  </table>\n</div>\n<!-- EDIT FORM   -->\n<div *ngIf='toggleEddit'>\n  <h2>Edit task</h2>\n  <form (submit)=\"onEdit()\">\n    <p>Title: <input id=\"top\" class=\"fields\" type=\"text\" name=\"newTaskTitle\" [(ngModel)]=\"newTask.title\" value='{{selectedTask}}'/></p>\n    <p>Description: <input class=\"fields\" type=\"text\" name=\"newTaskDescription\" [(ngModel)]=\"newTask.description\"/></p>\n    <input  id=\"create\" type=\"submit\" value=\"update Task\"/>\n    </form>\n</div>\n\n"

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
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.service */ "./src/app/task.service.ts");
/* harmony import */ var _task_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.model */ "./src/app/task.model.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(taskService) {
        this.taskService = taskService;
        this.Title = 'Restful Tasks API';
        this.newTask = new _task_model__WEBPACK_IMPORTED_MODULE_3__["Task"]();
        this.toggleEddit = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getTasksFromService();
    };
    AppComponent.prototype.getTasksFromService = function () {
        var _this = this;
        var observable = this.taskService.getTasks();
        observable.subscribe(function (data) {
            _this.tasks = data;
            console.log('we got this', _this.tasks);
        });
    };
    AppComponent.prototype.showTask = function (id) {
        var _this = this;
        console.log("this is our id from componets " + id);
        this.taskService.getTask(id).subscribe(function (task) {
            console.log(task);
            _this.selectedTask = task;
        });
    };
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        var observable = this.taskService.createTask(this.newTask);
        observable.subscribe(function (data) {
            console.log('got POST data back', data);
            _this.newTask = new _task_model__WEBPACK_IMPORTED_MODULE_3__["Task"]();
            _this.getTasksFromService();
        });
    };
    AppComponent.prototype.onDelete = function (task) {
        var _this = this;
        this.taskService.deleteTask(task).subscribe(function (deletedTask) {
            _this.tasks = _this.tasks.filter(function (taskFromArray) { return taskFromArray.id !== deletedTask.id; });
            _this.getTasksFromService();
        });
    };
    AppComponent.prototype.editForm = function (task) {
        this.selectedTask = this.selectedTask === task ? null : task;
        this.toggleEddit = true;
    };
    AppComponent.prototype.onEdit = function () {
        var _this = this;
        this.taskService.editTask(this.selectedTask).subscribe(function (editedTask) {
            console.log("deleted book: " + editedTask);
            _this.selectedTask = null;
            _this.getTasksFromService();
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/task.model.ts":
/*!*******************************!*\
  !*** ./src/app/task.model.ts ***!
  \*******************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/task.service.ts":
/*!*********************************!*\
  !*** ./src/app/task.service.ts ***!
  \*********************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.getTasks();
    }
    TaskService.prototype.getTasks = function () {
        return this.http.get('/tasks');
    };
    TaskService.prototype.getTask = function (id) {
        console.log("this is the id: " + id);
        return this.http.get("/tasks/" + id);
    };
    TaskService.prototype.createTask = function (newTask) {
        return this.http.post('/tasks', newTask);
    };
    TaskService.prototype.editTask = function (editTask) {
        console.log('edit task', editTask);
        return this.http.put("/tasks/update/" + editTask.id, editTask);
    };
    TaskService.prototype.deleteTask = function (task) {
        console.log("deleted:  " + task);
        return this.http.delete("/tasks/delete/" + task);
    };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskService);
    return TaskService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\amitc\Desktop\School_structure\mean-assignment-landscape\05-angular\03-dom-manipulation\angular-restful\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map