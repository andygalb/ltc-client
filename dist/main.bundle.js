webpackJsonp([1,4],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = (function () {
    function Question() {
    }
    return Question;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sequence; });
var Sequence = (function () {
    function Sequence() {
    }
    return Sequence;
}());

//# sourceMappingURL=sequence.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseSequenceQuestionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseSequenceQuestionService = (function () {
    function CourseSequenceQuestionService(http) {
        this.http = http;
        //serverAddress = 'http://localhost:3000';
        this.serverAddress = 'https://ltc-project.herokuapp.com';
    }
    CourseSequenceQuestionService.prototype.getAllQuestions = function () {
        return this.http.get(this.serverAddress + '/api/question/all').map(function (res) { return res.json(); });
    };
    CourseSequenceQuestionService.prototype.getAllCourses = function () {
        return this.http.get(this.serverAddress + '/api/course/all').map(function (res) { return res.json(); });
    };
    CourseSequenceQuestionService.prototype.addCourse = function (course) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(course);
        return this.http.put(this.serverAddress + '/api/course', JSON.stringify(course), { headers: headers }).map(function (res) { return res.json(); });
    };
    CourseSequenceQuestionService.prototype.updateCourse = function (course) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(course);
        return this.http.post(this.serverAddress + '/api/course/' + course._id, JSON.stringify(course), { headers: headers }).map(function (res) { return res.json(); });
    };
    CourseSequenceQuestionService.prototype.deleteCourse = function (course) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.serverAddress + '/api/course/' + course._id, { headers: headers }).map(function (res) { return res.json(); });
    };
    CourseSequenceQuestionService.prototype.deleteSequence = function (sequence) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.serverAddress + '/api/sequence/' + sequence._id, { headers: headers }).map(function (res) { return res.json(); });
    };
    CourseSequenceQuestionService.prototype.deleteQuestion = function (question) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.serverAddress + '/api/question/' + question._id, { headers: headers }).map(function (res) { return res.json(); });
    };
    CourseSequenceQuestionService.prototype.getQuestionByID = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serverAddress + '/api/question/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    CourseSequenceQuestionService.prototype.addQuestion = function (question) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(question);
        return this.http.put(this.serverAddress + '/api/question', JSON.stringify(question), { headers: headers }).map(function (res) { return res.json(); });
    };
    CourseSequenceQuestionService.prototype.addSequence = function (sequence) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.serverAddress + '/api/sequence', JSON.stringify(sequence), { headers: headers }).map(function (res) { return res.json(); });
    };
    CourseSequenceQuestionService.prototype.updateSequence = function (sequence) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.serverAddress + '/api/sequence/' + sequence._id, JSON.stringify(sequence), { headers: headers }).map(function (res) { return res.json(); });
    };
    CourseSequenceQuestionService.prototype.updateQuestion = function (question) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.serverAddress + '/api/question/' + question._id, JSON.stringify(question), { headers: headers }).map(function (res) { return res.json(); });
    };
    CourseSequenceQuestionService.prototype.getSequenceByID = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        console.log("Calling sequence by ID");
        console.log(id);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serverAddress + '/api/sequence/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    CourseSequenceQuestionService.prototype.getCourseByID = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serverAddress + '/api/course/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    CourseSequenceQuestionService.prototype.getMultipleSequences = function (sequences) {
        console.log("Multiple Seqeunces is being called");
        console.log(JSON.stringify(sequences));
        var objectToSend = { sequences: sequences };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.serverAddress + '/api/multiple/sequences', JSON.stringify(objectToSend), { headers: headers }).map(function (res) { return res.json(); });
    };
    CourseSequenceQuestionService.prototype.getMultipleQuestions = function (questions) {
        console.log(JSON.stringify(questions));
        var objectToSend = { questions: questions };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.serverAddress + '/api/multiple/questions', JSON.stringify(objectToSend), { headers: headers }).map(function (res) { return res.json(); });
    };
    CourseSequenceQuestionService.prototype.isAnswerCorrect = function (question, givenAnswer) {
        var isCorrect = false;
        if (question.questionAnswer.text == givenAnswer) {
            isCorrect = true;
        }
        return isCorrect;
    };
    return CourseSequenceQuestionService;
}());
CourseSequenceQuestionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CourseSequenceQuestionService);

var _a;
//# sourceMappingURL=course-sequence-question.service.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_user__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(http, router) {
        this.http = http;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__model_user__["a" /* User */]();
        this.isUserLoggedIn = false;
        //serverAddress = "http://localhost:3000";
        this.serverAddress = 'https://ltc-project.herokuapp.com';
        this.router = router;
    }
    UserService.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.serverAddress + '/api/user/login/', JSON.stringify(user), { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.initiateUser = function (user) {
        this.user = user;
    };
    UserService.prototype.logOut = function () {
        this.user = null;
        this.isUserLoggedIn = false;
        this.router.navigate(['home']);
    };
    UserService.prototype.getCurrentUser = function () {
        return this.user;
    };
    //This should only be called if it's a correct answer!
    UserService.prototype.addCorrectAnswer = function (questionID, answer) {
        var result = new __WEBPACK_IMPORTED_MODULE_1__model_user__["b" /* Result */];
        result._id = questionID;
        result.type = "question";
        result.dateTime = Date.now();
        result.answer = answer;
        result.courseID = this.currentCourseID;
        result.courseTitle = this.currentCourseTitle;
        result.sequenceID = this.currentSequenceID;
        result.sequenceTitle = this.currentSequenceTitle;
        result.questionID = this.currentQuestionID;
        result.questionTitle = this.currentQuestionTitle;
        this.user.results.push(result);
        this.updateUserResultsInDatabase().subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.error("Error updating user's results!");
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(err);
        }, function () {
            return true;
        });
    };
    UserService.prototype.updateUserResultsInDatabase = function () {
        //The user results in the database must also be updated, not just the local version
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.serverAddress + '/api/user/results/', { '_id': this.user._id, 'results': this.user.results }, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.hasUserAlreadyAnsweredQuestion = function (questionID) {
        var alreadyAnsweredQuestion = false;
        for (var i = 0; i < this.user.results.length; i++) {
            if (this.user.results[i]._id == questionID) {
                alreadyAnsweredQuestion = true;
                break;
            }
        }
        return alreadyAnsweredQuestion;
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 227;


/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(251);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'about',
        template: __webpack_require__(310),
    })
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__course_sequence_question_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(courseSequenceQuestionService, userService, mdIconRegistry) {
        this.courseSequenceQuestionService = courseSequenceQuestionService;
        this.title = 'LTC';
        mdIconRegistry
            .addSvgIconSetInNamespace('core', 'fonts/core-icon-set.svg');
        this.userService = userService;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.logOut = function () {
        this.userService.logOut();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(311),
        providers: [__WEBPACK_IMPORTED_MODULE_1__course_sequence_question_service__["a" /* CourseSequenceQuestionService */], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]],
        viewProviders: [__WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdIconRegistry */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__course_sequence_question_service__["a" /* CourseSequenceQuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__course_sequence_question_service__["a" /* CourseSequenceQuestionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdIconRegistry */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__student_student_component__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__teacher_teacher_component__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__question_component__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__question_edit_component__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__course_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__course_edit_component__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sequence_edit_component__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sequence_component__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__about_about_component__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_component__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_component__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: 'student', component: __WEBPACK_IMPORTED_MODULE_7__student_student_component__["a" /* StudentComponent */] },
    { path: 'student/course/:courseID', component: __WEBPACK_IMPORTED_MODULE_11__course_component__["a" /* CourseComponent */] },
    { path: 'student/sequence/:sequenceID', component: __WEBPACK_IMPORTED_MODULE_14__sequence_component__["a" /* SequenceComponent */] },
    { path: 'student/question/:questionID', component: __WEBPACK_IMPORTED_MODULE_9__question_component__["a" /* QuestionComponent */] },
    { path: 'teacher', component: __WEBPACK_IMPORTED_MODULE_8__teacher_teacher_component__["a" /* TeacherComponent */] },
    { path: 'teacher/course/:courseID', component: __WEBPACK_IMPORTED_MODULE_11__course_component__["a" /* CourseComponent */] },
    { path: 'teacher/course/edit/:courseID', component: __WEBPACK_IMPORTED_MODULE_12__course_edit_component__["a" /* CourseEditComponent */] },
    { path: 'teacher/sequence/:sequenceID', component: __WEBPACK_IMPORTED_MODULE_14__sequence_component__["a" /* SequenceComponent */] },
    { path: 'teacher/sequence/edit/:sequenceID', component: __WEBPACK_IMPORTED_MODULE_13__sequence_edit_component__["a" /* SequenceEditComponent */] },
    { path: 'teacher/question/:questionID', component: __WEBPACK_IMPORTED_MODULE_9__question_component__["a" /* QuestionComponent */] },
    { path: 'teacher/question/edit/:questionID', component: __WEBPACK_IMPORTED_MODULE_10__question_edit_component__["a" /* QuestionEditComponent */] },
    { path: 'question', component: __WEBPACK_IMPORTED_MODULE_9__question_component__["a" /* QuestionComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_15__about_about_component__["a" /* AboutComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */] },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__student_student_component__["a" /* StudentComponent */],
            __WEBPACK_IMPORTED_MODULE_8__teacher_teacher_component__["a" /* TeacherComponent */],
            __WEBPACK_IMPORTED_MODULE_9__question_component__["a" /* QuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__course_component__["a" /* CourseComponent */],
            __WEBPACK_IMPORTED_MODULE_12__course_edit_component__["a" /* CourseEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__sequence_edit_component__["a" /* SequenceEditComponent */],
            __WEBPACK_IMPORTED_MODULE_10__question_edit_component__["a" /* QuestionEditComponent */],
            __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__sequence_component__["a" /* SequenceComponent */],
            __WEBPACK_IMPORTED_MODULE_9__question_component__["a" /* QuestionComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_sequence__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_sequence_question_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var CourseComponent = (function () {
    function CourseComponent(route, courseSequenceQuestionService, userService, fb) {
        this.route = route;
        this.courseSequenceQuestionService = courseSequenceQuestionService;
        this.title = 'LTC';
        this.profile = {};
        this.sequenceForm = fb.group({
            title: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]],
            description: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]],
        });
        this.userService = userService;
    }
    CourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        var courseID = this.route.snapshot.params['courseID'];
        this.courseSequenceQuestionService.getCourseByID(courseID).subscribe(function (data) {
            _this.selectedCourse = data;
            _this.courseSequenceQuestionService.currentCourse = data;
            console.log(_this.selectedCourse);
        }, function (err) {
            console.error("Error getting course!");
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(err);
        }, function () {
            _this.reloadDisplay();
            _this.userService.currentCourseID = _this.selectedCourse._id;
            _this.userService.currentCourseTitle = _this.selectedCourse.courseTitle;
        });
        //console.log(this.selectedCourse.sequences);
        // this.sequencesToShow=this.courseSequenceQuestionService.getSequencesByID(this.selectedCourse.sequences);
        // console.log(this.sequencesToShow);
        // this.sequencesToShow.push(this.sequences[0]);
    };
    CourseComponent.prototype.createNewSequence = function () {
        this.newSequence = new __WEBPACK_IMPORTED_MODULE_1__model_sequence__["a" /* Sequence */]();
    };
    //After a sequence is successfully created it has to be added to the course.
    CourseComponent.prototype.submitNewSequence = function (sequence) {
        var _this = this;
        this.courseSequenceQuestionService.addSequence(this.newSequence).subscribe(function (data) {
            console.log("The sequence was created and now data has been returned.");
            console.log("The data is:");
            console.log(data);
            _this.response = data;
            _this.newSequenceID = data.sequenceID;
        }, function (err) {
            console.error("Error adding sequence");
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(err);
        }, function () {
            //TODO Case when sequence could not be created must be handled
            _this.selectedCourse.sequences.push(_this.newSequenceID);
            _this.courseSequenceQuestionService.updateCourse(_this.selectedCourse).subscribe(function (data) {
                console.log(data);
                _this.response = data;
            }, function (err) {
                console.error("Error adding sequence to course");
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(err);
            }, function () {
                _this.reloadDisplay();
                _this.newSequence = null;
            });
        });
    };
    CourseComponent.prototype.onSelectSequence = function (sequence) {
        this.selectedSequence = sequence;
    };
    CourseComponent.prototype.reloadDisplay = function () {
        var _this = this;
        this.courseSequenceQuestionService.getMultipleSequences(this.selectedCourse.sequences).subscribe(function (data) {
            console.log(data);
            _this.sequencesToShow = data;
        }),
            function (err) {
                console.error("Error getting sequences!");
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(err);
            };
    };
    CourseComponent.prototype.onDelete = function (sequence) {
        var _this = this;
        this.courseSequenceQuestionService.deleteSequence(sequence).subscribe(function (data) { return _this.response = data; }, function (err) {
            console.error("Error deleting sequence!");
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(err);
        }, function () {
            _this.reloadDisplay();
        });
    };
    return CourseComponent;
}());
CourseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'course',
        template: __webpack_require__(312),
    }),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* FormBuilder */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__course_sequence_question_service__["a" /* CourseSequenceQuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__course_sequence_question_service__["a" /* CourseSequenceQuestionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* FormBuilder */]) === "function" && _d || Object])
], CourseComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=course.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_sequence__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_sequence_question_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CourseEditComponent = (function () {
    function CourseEditComponent(route, courseSequenceQuestionService, fb) {
        this.route = route;
        this.courseSequenceQuestionService = courseSequenceQuestionService;
        this.title = 'LTC';
        this.profile = {};
        this.sequenceForm = fb.group({
            title: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]],
            description: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]],
        });
    }
    CourseEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var courseID = this.route.snapshot.params['courseID'];
        this.courseSequenceQuestionService.getCourseByID(courseID).subscribe(function (data) {
            _this.selectedCourse = data;
            _this.courseSequenceQuestionService.currentCourse = data;
            console.log(_this.selectedCourse);
        }, function (err) {
            console.error("Error getting course!");
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(err);
        }, function () {
            _this.reloadDisplay();
        });
        //console.log(this.selectedCourse.sequences);
        // this.sequencesToShow=this.courseSequenceQuestionService.getSequencesByID(this.selectedCourse.sequences);
        // console.log(this.sequencesToShow);
        // this.sequencesToShow.push(this.sequences[0]);
    };
    CourseEditComponent.prototype.createNewSequence = function () {
        this.newSequence = new __WEBPACK_IMPORTED_MODULE_1__model_sequence__["a" /* Sequence */]();
    };
    //After a sequence is successfully created it has to be added to the course.
    CourseEditComponent.prototype.submitNewSequence = function (sequence) {
        var _this = this;
        this.courseSequenceQuestionService.addSequence(this.newSequence).subscribe(function (data) {
            console.log("The sequence was created and now data has been returned.");
            console.log("The data is:");
            console.log(data);
            _this.response = data;
            _this.newSequenceID = data.sequenceID;
        }, function (err) {
            console.error("Error adding sequence");
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(err);
        }, function () {
            //TODO Case when sequence could not be created must be handled
            _this.selectedCourse.sequences.push(_this.newSequenceID);
            _this.courseSequenceQuestionService.updateCourse(_this.selectedCourse).subscribe(function (data) {
                console.log(data);
                _this.response = data;
            }, function (err) {
                console.error("Error adding sequence to course");
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(err);
            }, function () {
                _this.reloadDisplay();
                _this.newSequence = null;
            });
        });
    };
    CourseEditComponent.prototype.onSelectSequence = function (sequence) {
        this.selectedSequence = sequence;
    };
    CourseEditComponent.prototype.reloadDisplay = function () {
        var _this = this;
        this.courseSequenceQuestionService.getMultipleSequences(this.selectedCourse.sequences).subscribe(function (data) {
            console.log(data);
            _this.sequencesToShow = data;
        }),
            function (err) {
                console.error("Error getting sequences!");
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(err);
            };
    };
    CourseEditComponent.prototype.onDelete = function (sequence) {
        var _this = this;
        this.courseSequenceQuestionService.deleteSequence(sequence).subscribe(function (data) { return _this.response = data; }, function (err) {
            console.error("Error deleting sequence!");
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(err);
        }, function () {
            _this.reloadDisplay();
        });
    };
    CourseEditComponent.prototype.saveChanges = function () {
        var _this = this;
        this.courseSequenceQuestionService.updateCourse(this.selectedCourse).subscribe(function (data) {
            console.log(data);
            _this.response = data;
        }, function (err) {
            console.error("Error updating course");
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(err);
        }, function () {
            _this.reloadDisplay();
        });
    };
    return CourseEditComponent;
}());
CourseEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'course',
        template: __webpack_require__(313),
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* FormBuilder */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__course_sequence_question_service__["a" /* CourseSequenceQuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__course_sequence_question_service__["a" /* CourseSequenceQuestionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* FormBuilder */]) === "function" && _c || Object])
], CourseEditComponent);

var _a, _b, _c;
//# sourceMappingURL=course.edit.component.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'home',
        template: __webpack_require__(314),
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_user__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.tempUser = new __WEBPACK_IMPORTED_MODULE_2__model_user__["a" /* User */]();
        this.tempUser.local = {
            userType: '',
            firstName: '',
            username: '',
            password: '',
            lastName: ''
        };
    };
    LoginComponent.prototype.doLogIn = function () {
        var _this = this;
        console.log("Logging in");
        this.userService.loginUser(this.tempUser).subscribe(function (data) {
            console.log("This is what was returned in data:");
            console.log(data);
            if (data.local.username != null) {
                _this.userService.initiateUser(data);
                _this.userService.isUserLoggedIn = true;
                console.log(_this.userService.user);
                _this.tempUser = null;
                if (_this.userService.user.local.userType == "teacher") {
                    _this.router.navigate(['teacher']);
                }
                if (_this.userService.user.local.userType == "student") {
                    _this.router.navigate(['student']);
                }
            }
            ;
        }, function (err) {
            console.error("Error logging in!");
            alert("Could not log in");
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(err);
        }, function () {
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'login',
        template: __webpack_require__(315),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__course_sequence_question_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var QuestionComponent = (function () {
    function QuestionComponent(route, router, userService, courseSequenceQuestionService, fb) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.courseSequenceQuestionService = courseSequenceQuestionService;
        this.title = 'LTC';
        this.alreadyCorrect = false;
        this.questionForm = fb.group({
            answer: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
        });
        this.router = router;
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var questionID = this.route.snapshot.params['questionID'];
        this.courseSequenceQuestionService.getQuestionByID(questionID).subscribe(function (data) {
            _this.selectedQuestion = data;
            _this.courseSequenceQuestionService.currentQuestion = data;
            _this.userService.currentQuestionID = _this.selectedQuestion._id;
            _this.userService.currentQuestionTitle = _this.selectedQuestion.questionTitle;
            _this.alreadyCorrect = _this.userService.hasUserAlreadyAnsweredQuestion(_this.selectedQuestion._id);
            if (_this.alreadyCorrect) {
                _this.feedback = "You have already answered this question.";
            }
        }, function (err) {
            console.error("Error getting question!");
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(err);
        });
        /*
        this.selectedQuestion = this.courseSequenceQuestionService.getQuestionByID(questionID);
    
        */
    };
    QuestionComponent.prototype.submitAnswer = function (event) {
        var isCorrect = this.courseSequenceQuestionService.isAnswerCorrect(this.selectedQuestion, this.questionForm.value.answer);
        if (isCorrect) {
            this.userService.addCorrectAnswer(this.selectedQuestion._id, this.questionForm.value.answer);
            this.feedback = "Right answer!";
            this.alreadyCorrect = true;
        }
        else {
            this.feedback = "Wrong answer - try again.";
        }
    };
    QuestionComponent.prototype.backToSequence = function () {
        this.router.navigate(['/student/sequence/' + this.courseSequenceQuestionService.currentSequence._id]);
    };
    return QuestionComponent;
}());
QuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'question',
        template: __webpack_require__(316),
    }),
    __param(4, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* FormBuilder */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__course_sequence_question_service__["a" /* CourseSequenceQuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__course_sequence_question_service__["a" /* CourseSequenceQuestionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* FormBuilder */]) === "function" && _e || Object])
], QuestionComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=question.component.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_sequence_question_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var QuestionEditComponent = (function () {
    function QuestionEditComponent(route, router, userService, courseSequenceQuestionService, fb) {
        this.route = route;
        this.userService = userService;
        this.courseSequenceQuestionService = courseSequenceQuestionService;
        this.title = 'LTC';
        this.alreadyCorrect = false;
        this.questionForm = fb.group({
            answer: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
        });
        this.router = router;
    }
    QuestionEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var questionID = this.route.snapshot.params['questionID'];
        this.courseSequenceQuestionService.getQuestionByID(questionID).subscribe(function (data) {
            _this.selectedQuestion = data;
            _this.courseSequenceQuestionService.currentQuestion = data;
        }, function (err) {
            console.error("Error getting question!");
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(err);
        });
    };
    QuestionEditComponent.prototype.saveChanges = function () {
        var _this = this;
        this.courseSequenceQuestionService.updateQuestion(this.selectedQuestion).subscribe(function (data) {
            console.log(data);
            _this.response = data;
        }, function (err) {
            console.error("Error updating question");
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(err);
        }, function () {
            _this.router.navigate(['teacher/sequence/edit/' + _this.courseSequenceQuestionService.currentSequence._id]);
        });
    };
    return QuestionEditComponent;
}());
QuestionEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'question',
        template: __webpack_require__(317),
    }),
    __param(4, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* FormBuilder */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__course_sequence_question_service__["a" /* CourseSequenceQuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__course_sequence_question_service__["a" /* CourseSequenceQuestionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* FormBuilder */]) === "function" && _e || Object])
], QuestionEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=question.edit.component.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_question__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_sequence_question_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SequenceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var SequenceComponent = (function () {
    function SequenceComponent(route, courseSequenceQuestionService, userService, fb) {
        this.route = route;
        this.courseSequenceQuestionService = courseSequenceQuestionService;
        this.userService = userService;
        this.title = 'LTC';
        this.questionForm = fb.group({
            title: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required]],
            questionText: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required]],
            questionAnswer: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required]],
        });
    }
    SequenceComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sequenceID = this.route.snapshot.params['sequenceID'];
        console.log("THe sequence ID is:" + sequenceID);
        this.courseSequenceQuestionService.getSequenceByID(sequenceID).subscribe(function (data) {
            console.log("Attempting to load seqeunce in ngInit");
            console.log(data);
            _this.selectedSequence = data;
            _this.courseSequenceQuestionService.currentSequence = data;
        }, function (err) {
            console.error("Error getting sequence!");
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(err);
        }, function () {
            _this.userService.currentSequenceID = _this.selectedSequence._id;
            _this.userService.currentSequenceTitle = _this.selectedSequence.sequenceTitle;
            console.log("Attempting to load questions");
            _this.courseSequenceQuestionService.getMultipleQuestions(_this.selectedSequence.questions).subscribe(function (data) {
                console.log("Got data back");
                console.log(data);
                _this.questionsToShow = data;
            }),
                function (err) {
                    console.error("Error getting questions!");
                    return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(err);
                };
        });
        /*this.selectedSequence = this.courseSequenceQuestionService.getSequenceByID(sequenceID);
        this.questionsToShow = this.courseSequenceQuestionService.getQuestionsByID(this.selectedSequence.questions);*/
        this.myUserService = this.userService;
    };
    SequenceComponent.prototype.createNewQuestion = function () {
        this.newQuestion = new __WEBPACK_IMPORTED_MODULE_1__model_question__["a" /* Question */]();
    };
    SequenceComponent.prototype.deleteQuestion = function (question) {
        var _this = this;
        this.courseSequenceQuestionService.deleteQuestion(question).subscribe(function (data) { return _this.response = data; }, function (err) {
            console.error("Error deleting question!");
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(err);
        }, function () {
            _this.courseSequenceQuestionService.getMultipleQuestions(_this.selectedSequence.questions).subscribe(function (data) { return _this.questionsToShow = data; });
        });
    };
    SequenceComponent.prototype.submitNewQuestion = function () {
        var _this = this;
        this.courseSequenceQuestionService.addQuestion(this.newQuestion).subscribe(function (data) {
            _this.response = data;
            console.log(data);
            _this.newQuestionID = data.questionID;
        }, function (err) {
            console.error("Error adding question!");
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(err);
        }, function () {
            //TODO Case when sequence could not be created must be handled
            _this.selectedSequence.questions.push(_this.newQuestionID);
            _this.courseSequenceQuestionService.updateSequence(_this.selectedSequence).subscribe(function (data) {
                console.log(data);
                _this.response = data;
            }, function (err) {
                console.error("Error adding question to seqeunce");
                return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(err);
            }, function () {
                _this.courseSequenceQuestionService.getMultipleQuestions(_this.selectedSequence.questions).subscribe(function (data) { return _this.questionsToShow = data; });
                _this.newQuestion = null;
            });
        });
    };
    return SequenceComponent;
}());
SequenceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'sequence',
        template: __webpack_require__(318),
    }),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* FormBuilder */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__course_sequence_question_service__["a" /* CourseSequenceQuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__course_sequence_question_service__["a" /* CourseSequenceQuestionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* FormBuilder */]) === "function" && _d || Object])
], SequenceComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sequence.component.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_question__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_sequence_question_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SequenceEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var SequenceEditComponent = (function () {
    function SequenceEditComponent(route, courseSequenceQuestionService, userService, fb) {
        this.route = route;
        this.courseSequenceQuestionService = courseSequenceQuestionService;
        this.userService = userService;
        this.title = 'LTC';
        this.questionForm = fb.group({
            title: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required]],
            questionText: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required]],
            questionAnswer: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required]],
        });
    }
    SequenceEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sequenceID = this.route.snapshot.params['sequenceID'];
        console.log("THe sequence ID is:" + sequenceID);
        this.courseSequenceQuestionService.getSequenceByID(sequenceID).subscribe(function (data) {
            console.log("Attempting to load seqeunce in ngInit");
            console.log(data);
            _this.selectedSequence = data;
            _this.courseSequenceQuestionService.currentSequence = data;
        }, function (err) {
            console.error("Error getting sequence!");
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(err);
        }, function () {
            console.log("Attempting to load questions");
            _this.courseSequenceQuestionService.getMultipleQuestions(_this.selectedSequence.questions).subscribe(function (data) {
                console.log("Got data back");
                console.log(data);
                _this.questionsToShow = data;
            }),
                function (err) {
                    console.error("Error getting questions!");
                    return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(err);
                };
        });
        /*this.selectedSequence = this.courseSequenceQuestionService.getSequenceByID(sequenceID);
        this.questionsToShow = this.courseSequenceQuestionService.getQuestionsByID(this.selectedSequence.questions);*/
        this.myUserService = this.userService;
    };
    SequenceEditComponent.prototype.createNewQuestion = function () {
        this.newQuestion = new __WEBPACK_IMPORTED_MODULE_1__model_question__["a" /* Question */]();
        this.newQuestion.questionAnswer = { text: '', javascript: '', csharp: '' };
    };
    SequenceEditComponent.prototype.deleteQuestion = function (question) {
        var _this = this;
        this.courseSequenceQuestionService.deleteQuestion(question).subscribe(function (data) { return _this.response = data; }, function (err) {
            console.error("Error deleting question!");
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(err);
        }, function () {
            _this.courseSequenceQuestionService.getMultipleQuestions(_this.selectedSequence.questions).subscribe(function (data) { return _this.questionsToShow = data; });
        });
    };
    SequenceEditComponent.prototype.submitNewQuestion = function () {
        var _this = this;
        this.courseSequenceQuestionService.addQuestion(this.newQuestion).subscribe(function (data) {
            _this.response = data;
            console.log(data);
            _this.newQuestionID = data.questionID;
        }, function (err) {
            console.error("Error adding question!");
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(err);
        }, function () {
            //TODO Case when sequence could not be created must be handled
            _this.selectedSequence.questions.push(_this.newQuestionID);
            _this.courseSequenceQuestionService.updateSequence(_this.selectedSequence).subscribe(function (data) {
                console.log(data);
                _this.response = data;
            }, function (err) {
                console.error("Error adding question to seqeunce");
                return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(err);
            }, function () {
                _this.courseSequenceQuestionService.getMultipleQuestions(_this.selectedSequence.questions).subscribe(function (data) { return _this.questionsToShow = data; });
                _this.newQuestion = null;
            });
        });
    };
    SequenceEditComponent.prototype.reloadDisplay = function () {
        var _this = this;
        this.courseSequenceQuestionService.getMultipleQuestions(this.selectedSequence.questions).subscribe(function (data) {
            console.log(data);
            _this.questionsToShow = data;
        }),
            function (err) {
                console.error("Error getting questions!");
                return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(err);
            };
    };
    SequenceEditComponent.prototype.saveChanges = function () {
        var _this = this;
        this.courseSequenceQuestionService.updateSequence(this.selectedSequence).subscribe(function (data) {
            console.log(data);
            _this.response = data;
        }, function (err) {
            console.error("Error updating sequence");
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(err);
        }, function () {
            // this.reloadDisplay();
        });
    };
    return SequenceEditComponent;
}());
SequenceEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'sequence',
        template: __webpack_require__(319),
    }),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* FormBuilder */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__course_sequence_question_service__["a" /* CourseSequenceQuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__course_sequence_question_service__["a" /* CourseSequenceQuestionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* FormBuilder */]) === "function" && _d || Object])
], SequenceEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sequence.edit.component.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__course_sequence_question_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentComponent = (function () {
    function StudentComponent(courseSequenceQuestionService, userService) {
        this.courseSequenceQuestionService = courseSequenceQuestionService;
        this.userService = userService;
        this.title = 'LTC';
    }
    StudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.userService.getCurrentUser();
        this.courseSequenceQuestionService.getAllCourses().subscribe(function (data) { return _this.courses = data; });
    };
    StudentComponent.prototype.onSelectQuestion = function (question) {
        this.selectedQuestion = question;
    };
    StudentComponent.prototype.onSelectSequence = function (sequence) {
        this.selectedSequence = sequence;
    };
    StudentComponent.prototype.onSelectCourse = function (course) {
        this.selectedCourse = course;
    };
    return StudentComponent;
}());
StudentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'student',
        template: __webpack_require__(320),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__course_sequence_question_service__["a" /* CourseSequenceQuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__course_sequence_question_service__["a" /* CourseSequenceQuestionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object])
], StudentComponent);

var _a, _b;
//# sourceMappingURL=student.component.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__course_sequence_question_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var TeacherComponent = (function () {
    function TeacherComponent(route, userService, courseSequenceQuestionService, fb) {
        this.route = route;
        this.courseSequenceQuestionService = courseSequenceQuestionService;
        this.courseForm = fb.group({
            title: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            description: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
        });
        this.userService = userService;
    }
    TeacherComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userService.isUserLoggedIn) {
            this.userService.logOut();
        }
        this.user = this.userService.getCurrentUser();
        this.courseSequenceQuestionService.getAllCourses().subscribe(function (data) { return _this.courses = data; });
    };
    TeacherComponent.prototype.onSelect = function (course) {
        var _this = this;
        this.courseSequenceQuestionService.addCourse(this.newCourse).subscribe(function (data) { return _this.response = data; });
    };
    TeacherComponent.prototype.onDelete = function (course) {
        var _this = this;
        this.courseSequenceQuestionService.deleteCourse(course).subscribe(function (data) { return _this.response = data; }, function (err) {
            console.error("Error deleting course!");
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(err);
        }, function () { return _this.courseSequenceQuestionService.getAllCourses().subscribe(function (data) { return _this.courses = data; }); });
    };
    TeacherComponent.prototype.createNewCourse = function () {
        this.newCourse = { _id: null, courseTitle: '', courseDescription: '', sequences: [], created_at: null };
    };
    TeacherComponent.prototype.submitNewCourse = function () {
        var _this = this;
        this.courseSequenceQuestionService.addCourse(this.newCourse).subscribe(function (data) {
            _this.response = data;
            _this.newCourse = null;
        }, function (err) {
            console.error("Error adding course!");
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(err);
        }, function () { return _this.courseSequenceQuestionService.getAllCourses().subscribe(function (data) { return _this.courses = data; }); });
    };
    TeacherComponent.prototype.addQuestion = function (question) {
        /* console.log("Trying to add question");
         console.log(question);
         QUESTIONS.push(question);
         this.selectedQuestion = null;*/
    };
    TeacherComponent.prototype.deleteQuestion = function (question) {
        /*  let index: number = QUESTIONS.indexOf(question);
          if (index !== -1) {
            QUESTIONS.splice(index, 1);
          }*/
    };
    return TeacherComponent;
}());
TeacherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'teacher',
        template: __webpack_require__(321),
    }),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* FormBuilder */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__course_sequence_question_service__["a" /* CourseSequenceQuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__course_sequence_question_service__["a" /* CourseSequenceQuestionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* FormBuilder */]) === "function" && _d || Object])
], TeacherComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=teacher.component.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 310:
/***/ (function(module, exports) {

module.exports = "<h1> Learn To Code.</h1>\n<p>Some form of LMS/testing app based on Angular/NodeJS.</p>\n\n"

/***/ }),

/***/ 311:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded navbar-fixed-top\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" routerLink=\"/home\" routerLinkActive=\"active\">LTC</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\"><a class=\"nav-link\"routerLink=\"/login\" routerLinkActive=\"active\">Log In</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\" >About</a></li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <div *ngIf=\"userService.isUserLoggedIn; else elseBlock\">\n       <!-- <a class=\"nav-link\" >{{userService.user.local.name}}</a> -->\n\n        <a class=\"nav-link\" href=\"#\" (click)=\"logOut(); return;\"><md-icon>exit_to_app</md-icon>Log out</a>\n      </div>\n\n      <ng-template #elseBlock>\n        Not logged in\n      </ng-template>\n      <!--<input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>-->\n    </form>\n  </div>\n</nav>\n  <div id=\"topContainer\" class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n\n"

/***/ }),

/***/ 312:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-6\">\n    <h2 *ngIf=\"selectedCourse\">Course: {{selectedCourse.courseTitle}}</h2>\n    <p *ngIf=\"selectedCourse\">{{selectedCourse.courseDescription}}</p>\n\n  </div>\n\n  <div class=\"col-6\">\n    <h2>Sequences</h2>\n    <div *ngFor=\"let sequence of sequencesToShow\">\n      <div class=\"card\">\n        <div class=\"card-header\">{{sequence.sequenceTitle}}</div>\n        <div class=\"card-block\">\n            <p>{{sequence.sequenceDescription}}</p>\n          <button  [routerLink]=\"['/student/sequence', sequence._id]\" class=\"btn btn-primary\"  [class.selected]=\"sequence === selectedCourse\">View</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n"

/***/ }),

/***/ 313:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <a *ngIf=\"selectedCourse\" [routerLink]=\"['/teacher/course/edit/'+this.courseSequenceQuestionService.currentCourse._id]\">Course:{{this.courseSequenceQuestionService.currentCourse.courseTitle}}</a>\n</div>\n<div class=\"row\">\n  <div class=\"col-3\">\n   <h3>Course</h3>\n    <form>\n      <div class=\"form-group\">\n        <label for=\"title\">Title:</label>\n      <input  *ngIf=\"selectedCourse\" type=\"text\" class=\"form-control\" id=\"course-title\" required name=\"title\" [(ngModel)]=\"selectedCourse.courseTitle\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"description\">Description:</label>\n      <textarea  *ngIf=\"selectedCourse\"type=\"text\" class=\"form-control\" id=\"course-description\" required name=\"description\" [(ngModel)]=\"selectedCourse.courseDescription\"></textarea>\n      </div>\n      <button  class=\"btn btn-primary\" (click)=\"saveChanges();return;\">Save Changes</button>\n    </form>\n  </div>\n\n  <div class=\"col-9\">\n    <h3>Sequences</h3>\n    <table class=\"table\">\n      <thead class=\"thead-inverse\">\n      <tr>\n        <th>Title</th>\n        <th>Description</th>\n        <th>Creation Date</th>\n        <th></th>\n        <th></th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let sequence of sequencesToShow\">\n        <td>{{sequence.sequenceTitle}}</td>\n        <td>{{sequence.sequenceDescription}}</td>\n        <td>{{sequence.created}}</td>\n        <td> <md-icon [routerLink]=\"['/teacher/sequence/edit', sequence._id]\">edit</md-icon></td>\n        <td> <md-icon (click)=\"onDelete(sequence);return;\">delete</md-icon></td>\n      </tr>\n      </tbody>\n    </table>\n    <button class=\"btn btn-success\"  (click)=\"createNewSequence();return;\">+Add new sequence</button>\n\n    <div *ngIf=\"newSequence\">\n    <h2>Add new sequence</h2>\n    <form [formGroup]=\"sequenceForm\">\n      <div class=\"form-group\">\n        <label for=\"title\">Title:</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\" required name=\"title\" formControlName=\"title\" [(ngModel)]=\"newSequence.sequenceTitle\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"description\">Description:</label>\n        <textarea formControlName=\"description\" name=\"description\" class=\"form-control\" id=\"description\" rows=\"3\" [(ngModel)]=\"newSequence.sequenceDescription\"></textarea>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\"  (click)=\"submitNewSequence();return;\">Create</button>\n    </form>\n\n\n  </div>\n  </div>\n\n\n\n\n"

/***/ }),

/***/ 314:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1>Learn To Code!</h1>\n  <p>This is a prototype of the Learn To Code app which is under development.</p>\n  <p>There is now interaction (albeit shakey) between client and server.</p>\n  <p>Additionally, the question/answer framework which is currently in use does not require code submission, but is instead based on simple\n  one word answers.</p>\n  <p>You will need to login as a teacher to create courses, sequences and questions.</p>\n  <p>You will need to login as a student to answer questions.</p>\n  <p>Example login details are given on the login page.</p>\n</div>\n"

/***/ }),

/***/ 315:
/***/ (function(module, exports) {

module.exports = "<!--Pulling Awesome Font -->\n<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-5\"></div>\n    <div class=\"col-md-3\">\n      <div class=\"form-login\">\n        <h4>Welcome.</h4>\n        <input  *ngIf=\"tempUser\" type=\"text\" id=\"userName\" class=\"form-control input-sm chat-input\" placeholder=\"username\" [(ngModel)]=\"tempUser.local.username\"/>\n        <p></p>\n        <input type=\"text\"  *ngIf=\"tempUser\" id=\"userPassword\" class=\"form-control input-sm chat-input\" placeholder=\"password\" [(ngModel)]=\"tempUser.local.password\"/>\n        <p></p>\n        <div class=\"wrapper\">\n            <span class=\"group-btn\">\n                <button class=\"btn btn-primary btn-md\" (click)=\"doLogIn();return;\">login <i class=\"fa fa-sign-in\"></i></button>\n            </span>\n          <p></p>\n          <h4>Example teacher:</h4>\n          <p>Username: teacher, Password: teacher</p>\n          <h4>Example student:</h4>\n          <p>Username: student, Password: student</p>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-9\">\n    <div *ngIf=\"selectedQuestion\">\n      <h2>{{selectedQuestion.questionTitle}}</h2>\n\n      <div *ngIf=\"alreadyCorrect; then alreadyCorrectContent else notAlreadyCorrectContent\"></div>\n    </div>\n      <ng-template #alreadyCorrectContent><p>Answer: {{selectedQuestion.questionAnswer.text}}</p></ng-template>\n\n\n    <ng-template #notAlreadyCorrectContent>\n      <form [formGroup]=\"questionForm\" (ngSubmit)=\"submitAnswer($event)\">\n      <div class=\"form-group\">\n        {{selectedQuestion.questionText}}\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleTextarea\">Your answer:</label>\n        <textarea formControlName=\"answer\" class=\"form-control\" id=\"answer\" rows=\"3\"></textarea>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      </form>\n    </ng-template>\n\n    <div *ngIf=\"feedback\">\n      <p>{{feedback}}</p>\n      <button (click)=\"backToSequence(); return;\" class=\"btn btn-primary\">Back to sequence</button>\n   <!--   <button (click)=\"nextQuestion(); return;\" class=\"btn btn-primary\">Next question</button>-->\n    </div>\n  </div>\n\n\n\n"

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <a *ngIf=\"this.courseSequenceQuestionService.currentCourse\" [routerLink]=\"['/teacher/course/edit/'+this.courseSequenceQuestionService.currentCourse._id]\">Course:{{this.courseSequenceQuestionService.currentCourse.courseTitle}}</a> >\n  <a *ngIf=\"this.courseSequenceQuestionService.currentSequence\" [routerLink]=\"['/teacher/sequence/edit/'+this.courseSequenceQuestionService.currentSequence._id]\">Sequence:{{this.courseSequenceQuestionService.currentSequence.sequenceTitle}}</a> >\n  <a *ngIf=\"this.courseSequenceQuestionService.currentQuestion\" [routerLink]=\"['/teacher/question/edit/'+this.courseSequenceQuestionService.currentQuestion._id]\">Question:{{this.courseSequenceQuestionService.currentQuestion.questionTitle}}</a>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-9\">\n    <h2>Question</h2>\n    <form>\n      <div class=\"form-group\">\n        <label for=\"question-title\">Title:</label>\n        <input  *ngIf=\"selectedQuestion\"type=\"text\" class=\"form-control\" id=\"question-title\" required name=\"title\" [(ngModel)]=\"selectedQuestion.questionTitle\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"question-text\">Text:</label>\n        <textarea  *ngIf=\"selectedQuestion\"type=\"text\" class=\"form-control\" id=\"question-text\" required name=\"text\" [(ngModel)]=\"selectedQuestion.questionText\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"question-text\">Answer:</label>\n        <textarea  *ngIf=\"selectedQuestion\"type=\"text\" class=\"form-control\" id=\"question-answer\" required name=\"answer\" [(ngModel)]=\"selectedQuestion.questionAnswer.text\"></textarea>\n      </div>\n      <button  class=\"btn btn-primary\" (click)=\"saveChanges();return;\">Save Changes</button>\n    </form>\n    <div *ngIf=\"selectedQuestion\">\n  </div>\n\n\n\n"

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-6\">\n    <h2 *ngIf=\"selectedSequence\">Sequence: {{selectedSequence.sequenceTitle}}</h2>\n    <p *ngIf=\"selectedSequence\">Description: {{selectedSequence.sequenceDescription}}</p>\n\n  </div>\n\n  <div class=\"col-6\">\n    <h3>Questions</h3>\n    <div *ngFor=\"let question of questionsToShow\">\n      <div class=\"card\">\n        <div class=\"card-header\">{{question.questionTitle}}</div>\n        <div class=\"card-block\">\n          <div *ngIf=\"myUserService.hasUserAlreadyAnsweredQuestion(question._id); then answeredContent else notAnsweredContent\"></div>\n             <ng-template #answeredContent><p>This question has been answered correctly<md-icon layout-align=\"center end\">done</md-icon></p></ng-template>\n             <ng-template #notAnsweredContent><p>This answer has not been answered correctly</p>\n               <button  [routerLink]=\"['/student/question', question._id]\" class=\"btn btn-primary\"  [class.selected]=\"sequence === selectedCourse\">Answer</button>\n             </ng-template>\n             </div>\n         </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n"

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <a *ngIf=\"this.courseSequenceQuestionService.currentCourse\" [routerLink]=\"['/teacher/course/edit/'+this.courseSequenceQuestionService.currentCourse._id]\">Course:{{this.courseSequenceQuestionService.currentCourse.courseTitle}}</a> >\n  <a *ngIf=\"selectedSequence\" [routerLink]=\"['/teacher/sequence/edit/'+this.courseSequenceQuestionService.currentSequence._id]\">Sequence:{{this.courseSequenceQuestionService.currentSequence.sequenceTitle}}</a>\n\n</div>\n<div class=\"row\">\n  <div class=\"col-3\">\n    <h3>Sequence</h3>\n    <form>\n    <div class=\"form-group\">\n      <label for=\"title\">Title:</label>\n      <input  *ngIf=\"selectedSequence\"type=\"text\" class=\"form-control\" id=\"sequence-title\" required name=\"title\" [(ngModel)]=\"selectedSequence.sequenceTitle\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"description\">Description:</label>\n      <textarea  *ngIf=\"selectedSequence\"type=\"text\" class=\"form-control\" id=\"sequence-description\" required name=\"description\" [(ngModel)]=\"selectedSequence.sequenceDescription\"></textarea>\n    </div>\n    <button  class=\"btn btn-primary\" (click)=\"saveChanges();return;\">Save Changes</button>\n  </form>\n\n\n  </div>\n\n  <div class=\"col-9\">\n  <h3>Questions</h3>\n    <table class=\"table\">\n      <thead class=\"thead-inverse\">\n      <tr>\n        <th>Title</th>\n        <th>Question Text</th>\n        <th>Creation Date</th>\n        <th></th>\n        <th></th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let question of questionsToShow\">\n        <td>{{question.questionTitle}}</td>\n        <td>{{question.questionText}}</td>\n        <td>{{question.created_at}}</td>\n        <td> <md-icon [routerLink]=\"['/teacher/question/edit', question._id]\">edit</md-icon></td>\n        <td> <md-icon (click)=\"deleteQuestion(question);return;\">delete</md-icon></td>\n      </tr>\n      </tbody>\n    </table>\n\n\n    <button class=\"btn btn-success\"  (click)=\"createNewQuestion();return;\"  >+Add new question</button>\n    <div *ngIf=\"newQuestion\">\n      <h2>Add new question</h2>\n      <form [formGroup]=\"questionForm\">\n        <div class=\"form-group\">\n          <label for=\"title\">Title:</label>\n          <input type=\"text\" class=\"form-control\" id=\"title\" required name=\"title\" formControlName=\"title\" [(ngModel)]=\"newQuestion.questionTitle\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"questionText\">Question Text:</label>\n          <textarea formControlName=\"questionText\" name=\"questionText\" class=\"form-control\" id=\"questionText\" rows=\"3\" [(ngModel)]=\"newQuestion.questionText\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"questionAnswer\">Answer:</label>\n          <textarea formControlName=\"questionAnswer\" name=\"questionAnswer\" class=\"form-control\" id=\"questionAnswer\" rows=\"3\" [(ngModel)]=\"newQuestion.questionAnswer.text\"></textarea>\n        </div>\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"submitNewQuestion();return;\">Create</button>\n      </form>\n\n\n    </div>\n\n\n\n\n\n"

/***/ }),

/***/ 320:
/***/ (function(module, exports) {

module.exports = "<h1>Student</h1>\n\n\n<div class=\"row\">\n  <div class=\"col-lg-9\">\n    <h3>Welcome {{user.local.firstName}}.</h3>\n    <p> To the right you can see the courses in which you are currently enrolled. To choose one, please click on \"view\".</p>\n    <div *ngIf=\"user.results.length<1; then noResultsContent else resultsContent\"></div>\n    <ng-template #noResultsContent><p>You currently have no results to show.</p></ng-template>\n    <ng-template #resultsContent>\n      <h2>Your results:</h2>\n          <table class=\"table\">\n            <thead>\n            <tr>\n              <th>Course Title</th>\n              <th>Sequence Title</th>\n              <th>Question Title</th>\n              <th>Date</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let result of user.results\" >\n              <td>{{result.courseTitle}}</td>\n              <td>{{result.sequenceTitle}}</td>\n              <td>{{result.questionTitle}}</td>\n              <td>{{result.dateTime.toString()}}</td>\n            </tr>\n            </tbody>\n          </table>\n    </ng-template>\n    </div>\n  <div class=\"col-lg-3\">\n    <h2>Courses</h2>\n    <div *ngFor=\"let course of courses\"  class=\"card\" >\n      <div class=\"card-header\">{{course.courseTitle}}</div>\n      <div class=\"card-block\">\n        <!--<h4 class=\"card-title\">{{course.courseTitle}}</h4>-->\n        <p>{{course.courseDescription}}</p>\n        <button  [routerLink]=\"['/student/course', course._id]\" class=\"btn btn-primary\"  [class.selected]=\"course === selectedCourse\">View</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-3\">\n    <h3 *ngIf=\"userService.isUserLoggedIn\">Welcome {{userService.user.local.firstName}}</h3>\n    <p>To the right you can see the courses you have created so far.</p>\n    <button class=\"btn btn-success\"  (click)=\"createNewCourse();return;\" >+Add new course</button>\n\n\n    <div *ngIf=\"selectedcourse\">\n      <h2>Edit course</h2>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"courseTitle\">Title:</label>\n          <input id=\"courseTitle\"  name=\"courseTitle\" [(ngModel)]=\"selectedcourse.courseTitle\"/>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"courseText\">course:</label>\n          <textarea class=\"form-control\" id=\"courseText\" rows=\"3\" name=\"courseText\" [(ngModel)]=\"selectedcourse.courseText\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"answer\">Answer:</label>\n          <textarea class=\"form-control\" id=\"answer\" rows=\"3\" name=\"answer\" [(ngModel)]=\"selectedcourse.courseAnswer\"></textarea>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n      </form>\n    </div>\n\n</div>\n  <div class=\"col-9\">\n  <h3>Courses</h3>\n    <table class=\"table\">\n      <thead class=\"thead-inverse\">\n      <tr>\n        <th>Title</th>\n        <th>Description</th>\n        <th>Creation Date</th>\n        <th></th>\n        <th></th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let course of courses\">\n        <td>{{course.courseTitle}}</td>\n        <td>{{course.courseDescription}}</td>\n        <td>{{course.created_at}}</td>\n        <td> <md-icon [routerLink]=\"['/teacher/course/edit', course._id]\">edit</md-icon></td>\n        <td> <md-icon (click)=\"onDelete(sequence);return;\">delete</md-icon></td>\n      </tr>\n      </tbody>\n    </table>\n\n    <div *ngIf=\"newCourse\">\n      <h2>Add new course</h2>\n      <form [formGroup]=\"courseForm\">\n        <div class=\"form-group\">\n          <label for=\"title\">Title:</label>\n          <input type=\"text\" class=\"form-control\" id=\"title\" required name=\"title\" formControlName=\"title\" [(ngModel)]=\"newCourse.courseTitle\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"description\">Description:</label>\n          <textarea formControlName=\"description\" name=\"description\" class=\"form-control\" id=\"description\" rows=\"3\" [(ngModel)]=\"newCourse.courseDescription\"></textarea>\n        </div>\n        <button type=\"submit\" class=\"btn btn-success\"  (click)=\"submitNewCourse();return;\">Create</button>\n      </form>\n\n\n    </div>\n<!--\n    <div *ngFor=\"let course of courses\"  class=\"card\" >\n      <div class=\"card-header\">course</div>\n      <div class=\"card-block\">\n        <h4 class=\"card-title\">{{course.courseTitle}}</h4>\n        <p class=\"card-text\">{{course.courseDescription}}</p>\n        <button  [routerLink]=\"['/teacher/course/edit', course._id]\" class=\"btn btn-primary\" >Edit</button>\n        <button  class=\"btn btn-danger\" (click)=\"onDelete(course);return;\">Delete</button>\n      </div>\n    </div>\n    -->\n  </div>\n"

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(228);


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Result; });
var User = (function () {
    function User() {
    }
    return User;
}());

var Result = (function () {
    function Result() {
    }
    return Result;
}());

//# sourceMappingURL=user.js.map

/***/ })

},[571]);
//# sourceMappingURL=main.bundle.js.map