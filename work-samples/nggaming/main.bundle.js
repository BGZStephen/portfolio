webpackJsonp([1,4],{

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 146;


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(167);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameSearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameSearchService = (function () {
    function GameSearchService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'X-Mashape-Key': "6PrBxXUbnfmshSDJzrpQIE3RYkMup1rjz4njsn6bDZ0I57Mn0R",
            'Accept': 'application/json'
        });
    }
    GameSearchService.prototype.getPopular = function () {
        var searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name,popularity&order=popularity:desc";
        return this.http.get(searchUrl, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    GameSearchService.prototype.getGame = function (id) {
        var searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/games/" + id + "?fields=*";
        return this.http.get(searchUrl, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    GameSearchService.prototype.getRecentGames = function () {
        var searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com//games/?order=release_dates.date:desc";
        return this.http.get(searchUrl, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    GameSearchService.prototype.getGenre = function (genre) {
        var searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/genres/" + genre + "?fields=*";
        return this.http.get(searchUrl, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    GameSearchService.prototype.textSearch = function (string) {
        var searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com//games/?limit=50&fields=*&search=" + string;
        return this.http.get(searchUrl, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    return GameSearchService;
}());
GameSearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], GameSearchService);

var _a;
//# sourceMappingURL=game-search.service.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(236),
        styles: [__webpack_require__(221)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_game_search_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_review_search_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_genre_search_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_blog_search_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__news_ticker_news_ticker_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reviews_carousel_reviews_carousel_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__latest_reviews_latest_reviews_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__game_genres_rpg_rpg_latest_rpg_latest_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__game_genres_adventure_adventure_latest_adventure_latest_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__game_genres_sport_sport_latest_sport_latest_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__game_genres_strategy_strategy_latest_strategy_latest_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__featured_game_featured_game_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__latest_games_latest_games_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__latest_blog_latest_blog_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_game_game_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_search_search_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_blog_blog_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_blog_blog_item_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_reviews_reviews_component__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__news_ticker_news_ticker_component__["a" /* NewsTickerComponent */],
            __WEBPACK_IMPORTED_MODULE_13__reviews_carousel_reviews_carousel_component__["a" /* ReviewsCarouselComponent */],
            __WEBPACK_IMPORTED_MODULE_14__latest_reviews_latest_reviews_component__["a" /* LatestReviewsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__game_genres_rpg_rpg_latest_rpg_latest_component__["a" /* RpgLatestComponent */],
            __WEBPACK_IMPORTED_MODULE_16__game_genres_adventure_adventure_latest_adventure_latest_component__["a" /* AdventureLatestComponent */],
            __WEBPACK_IMPORTED_MODULE_17__game_genres_sport_sport_latest_sport_latest_component__["a" /* SportLatestComponent */],
            __WEBPACK_IMPORTED_MODULE_18__game_genres_strategy_strategy_latest_strategy_latest_component__["a" /* StrategyLatestComponent */],
            __WEBPACK_IMPORTED_MODULE_19__featured_game_featured_game_component__["a" /* FeaturedGameComponent */],
            __WEBPACK_IMPORTED_MODULE_20__latest_games_latest_games_component__["a" /* LatestGamesComponent */],
            __WEBPACK_IMPORTED_MODULE_21__latest_blog_latest_blog_component__["a" /* LatestBlogComponent */],
            __WEBPACK_IMPORTED_MODULE_22__pages_game_game_component__["a" /* GameComponent */],
            __WEBPACK_IMPORTED_MODULE_23__pages_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_24__pages_blog_blog_component__["a" /* BlogComponent */],
            __WEBPACK_IMPORTED_MODULE_25__pages_blog_blog_item_component__["a" /* BlogItemComponent */],
            __WEBPACK_IMPORTED_MODULE_26__pages_reviews_reviews_component__["a" /* ReviewsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* router */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_game_search_service__["a" /* GameSearchService */], __WEBPACK_IMPORTED_MODULE_7__services_review_search_service__["a" /* ReviewSearchService */], __WEBPACK_IMPORTED_MODULE_8__services_genre_search_service__["a" /* GenreSearchService */], __WEBPACK_IMPORTED_MODULE_9__services_blog_search_service__["a" /* BlogSearchService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_game_game_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_search_search_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_blog_blog_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_blog_blog_item_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_reviews_reviews_component__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return router; });







var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'game/:id', component: __WEBPACK_IMPORTED_MODULE_2__pages_game_game_component__["a" /* GameComponent */] },
    { path: 'search/:string', component: __WEBPACK_IMPORTED_MODULE_3__pages_search_search_component__["a" /* SearchComponent */] },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_4__pages_blog_blog_component__["a" /* BlogComponent */] },
    { path: 'blog/:id', component: __WEBPACK_IMPORTED_MODULE_5__pages_blog_blog_item_component__["a" /* BlogItemComponent */] },
    { path: 'reviews', component: __WEBPACK_IMPORTED_MODULE_6__pages_reviews_reviews_component__["a" /* ReviewsComponent */] },
];
var router = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_search_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedGameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeaturedGameComponent = (function () {
    function FeaturedGameComponent(gameSearch) {
        var _this = this;
        this.gameSearch = gameSearch;
        this.game = [];
        this.gameSearch.getPopular()
            .subscribe(function (res) {
            _this.gameSearch.getGame(res[3].id)
                .subscribe(function (res) {
                _this.game.push(res[0]);
            });
        });
    }
    FeaturedGameComponent.prototype.ngOnInit = function () {
    };
    return FeaturedGameComponent;
}());
FeaturedGameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-featured-game',
        template: __webpack_require__(237),
        styles: [__webpack_require__(222)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_game_search_service__["a" /* GameSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_game_search_service__["a" /* GameSearchService */]) === "function" && _a || Object])
], FeaturedGameComponent);

var _a;
//# sourceMappingURL=featured-game.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_genre_search_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_game_search_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdventureLatestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdventureLatestComponent = (function () {
    function AdventureLatestComponent(genreSearch, gameSearch) {
        var _this = this;
        this.genreSearch = genreSearch;
        this.gameSearch = gameSearch;
        this.category = "Adventure";
        this.genreId = "31";
        this.games = {
            primary: {},
            secondary: [],
        };
        this.genreSearch.getPopularByGenre(this.genreId)
            .subscribe(function (res) {
            _this.games.primary = res[0];
            for (var i = 1; i < 4; i++) {
                _this.games.secondary.push(res[i]);
            }
        });
    }
    AdventureLatestComponent.prototype.ngOnInit = function () {
    };
    return AdventureLatestComponent;
}());
AdventureLatestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-adventure-latest',
        template: __webpack_require__(52),
        styles: [__webpack_require__(51)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_genre_search_service__["a" /* GenreSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_genre_search_service__["a" /* GenreSearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_game_search_service__["a" /* GameSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_game_search_service__["a" /* GameSearchService */]) === "function" && _b || Object])
], AdventureLatestComponent);

var _a, _b;
//# sourceMappingURL=adventure-latest.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_genre_search_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_game_search_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RpgLatestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RpgLatestComponent = (function () {
    function RpgLatestComponent(genreSearch, gameSearch) {
        var _this = this;
        this.genreSearch = genreSearch;
        this.gameSearch = gameSearch;
        this.category = "RPG";
        this.genreId = "12";
        this.games = {
            primary: {},
            secondary: [],
        };
        this.genreSearch.getPopularByGenre(this.genreId)
            .subscribe(function (res) {
            _this.games.primary = res[0];
            for (var i = 1; i < 4; i++) {
                _this.games.secondary.push(res[i]);
            }
        });
    }
    RpgLatestComponent.prototype.ngOnInit = function () {
    };
    return RpgLatestComponent;
}());
RpgLatestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-rpg-latest',
        template: __webpack_require__(52),
        styles: [__webpack_require__(51)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_genre_search_service__["a" /* GenreSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_genre_search_service__["a" /* GenreSearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_game_search_service__["a" /* GameSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_game_search_service__["a" /* GameSearchService */]) === "function" && _b || Object])
], RpgLatestComponent);

var _a, _b;
//# sourceMappingURL=rpg-latest.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_genre_search_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_game_search_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SportLatestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SportLatestComponent = (function () {
    function SportLatestComponent(genreSearch, gameSearch) {
        var _this = this;
        this.genreSearch = genreSearch;
        this.gameSearch = gameSearch;
        this.category = "Sport";
        this.genreId = "14";
        this.games = {
            primary: {},
            secondary: [],
        };
        this.genreSearch.getPopularByGenre(this.genreId)
            .subscribe(function (res) {
            _this.games.primary = res[0];
            for (var i = 1; i < 4; i++) {
                _this.games.secondary.push(res[i]);
            }
        });
    }
    SportLatestComponent.prototype.ngOnInit = function () {
    };
    return SportLatestComponent;
}());
SportLatestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-sport-latest',
        template: __webpack_require__(52),
        styles: [__webpack_require__(51)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_genre_search_service__["a" /* GenreSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_genre_search_service__["a" /* GenreSearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_game_search_service__["a" /* GameSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_game_search_service__["a" /* GameSearchService */]) === "function" && _b || Object])
], SportLatestComponent);

var _a, _b;
//# sourceMappingURL=sport-latest.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_genre_search_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_game_search_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrategyLatestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StrategyLatestComponent = (function () {
    function StrategyLatestComponent(genreSearch, gameSearch) {
        var _this = this;
        this.genreSearch = genreSearch;
        this.gameSearch = gameSearch;
        this.category = "Strategy";
        this.genreId = "15";
        this.games = {
            primary: {},
            secondary: [],
        };
        this.genreSearch.getPopularByGenre(this.genreId)
            .subscribe(function (res) {
            _this.games.primary = res[0];
            for (var i = 1; i < 4; i++) {
                _this.games.secondary.push(res[i]);
            }
        });
    }
    StrategyLatestComponent.prototype.ngOnInit = function () {
    };
    return StrategyLatestComponent;
}());
StrategyLatestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-strategy-latest',
        template: __webpack_require__(52),
        styles: [__webpack_require__(51)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_genre_search_service__["a" /* GenreSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_genre_search_service__["a" /* GenreSearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_game_search_service__["a" /* GameSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_game_search_service__["a" /* GameSearchService */]) === "function" && _b || Object])
], StrategyLatestComponent);

var _a, _b;
//# sourceMappingURL=strategy-latest.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_search_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestBlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LatestBlogComponent = (function () {
    function LatestBlogComponent(blogSearch) {
        var _this = this;
        this.blogSearch = blogSearch;
        this.blogEntries = [];
        this.blogSearch.getLatest()
            .subscribe(function (res) {
            _this.blogEntries = res;
            console.log(_this.blogEntries);
        });
    }
    LatestBlogComponent.prototype.ngOnInit = function () {
    };
    return LatestBlogComponent;
}());
LatestBlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-latest-blog',
        template: __webpack_require__(238),
        styles: [__webpack_require__(223)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_blog_search_service__["a" /* BlogSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_blog_search_service__["a" /* BlogSearchService */]) === "function" && _a || Object])
], LatestBlogComponent);

var _a;
//# sourceMappingURL=latest-blog.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_search_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestGamesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LatestGamesComponent = (function () {
    function LatestGamesComponent(gameSearch) {
        var _this = this;
        this.gameSearch = gameSearch;
        this.games = [];
        var idString = "";
        this.gameSearch.getRecentGames()
            .subscribe(function (res) {
            for (var i = 0; i < res.length; i++) {
                idString += res[i].id + ",";
            }
            idString = idString.substring(0, idString.length - 1);
            _this.gameSearch.getGame(idString)
                .subscribe(function (res) {
                _this.games = res;
            });
        });
    }
    LatestGamesComponent.prototype.ngOnInit = function () {
    };
    return LatestGamesComponent;
}());
LatestGamesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-latest-games',
        template: __webpack_require__(239),
        styles: [__webpack_require__(224)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_game_search_service__["a" /* GameSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_game_search_service__["a" /* GameSearchService */]) === "function" && _a || Object])
], LatestGamesComponent);

var _a;
//# sourceMappingURL=latest-games.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_review_search_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_game_search_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestReviewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LatestReviewsComponent = (function () {
    function LatestReviewsComponent(reviewSearch, gameSearch) {
        var _this = this;
        this.reviewSearch = reviewSearch;
        this.gameSearch = gameSearch;
        this.latestReviews = [];
        this.reviewSearch.getPopular()
            .subscribe(function (res) {
            for (var i = 0; i < 6; i++) {
                _this.reviewSearch.getReview(res[i].id)
                    .subscribe(function (res) {
                    var reviewObj = { review: "", reviewUrl: "", imgUrl: "", name: "" };
                    reviewObj.review = res[0].content;
                    reviewObj.reviewUrl = res[0].url;
                    _this.gameSearch.getGame(res[0].game)
                        .subscribe(function (res) {
                        reviewObj.imgUrl = res[0].cover.cloudinary_id;
                        reviewObj.name = res[0].name;
                        _this.latestReviews.push(reviewObj);
                    });
                });
            }
        });
    }
    LatestReviewsComponent.prototype.ngOnInit = function () {
    };
    return LatestReviewsComponent;
}());
LatestReviewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-latest-reviews',
        template: __webpack_require__(240),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_review_search_service__["a" /* ReviewSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_review_search_service__["a" /* ReviewSearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_game_search_service__["a" /* GameSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_game_search_service__["a" /* GameSearchService */]) === "function" && _b || Object])
], LatestReviewsComponent);

var _a, _b;
//# sourceMappingURL=latest-reviews.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        this.toggle = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toggleMenuResize = function () {
        if (screen.width < 768) {
            this.toggleMenu("resize");
        }
    };
    NavbarComponent.prototype.toggleMenu = function (resize) {
        if (resize && screen.width < 768) {
            return { 'visibility': 'hidden', 'opacity': '0' };
        }
        else if (this.toggle == false && screen.width > 768) {
            return { 'visibility': 'visible', 'opacity': '1' };
        }
        else if (this.toggle) {
            return { 'visibility': 'visible', 'opacity': '1' };
        }
        else {
            return { 'visibility': 'hidden', 'opacity': '0' };
        }
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(241),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsTickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsTickerComponent = (function () {
    function NewsTickerComponent() {
    }
    NewsTickerComponent.prototype.ngOnInit = function () {
    };
    return NewsTickerComponent;
}());
NewsTickerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-news-ticker',
        template: __webpack_require__(242),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [])
], NewsTickerComponent);

//# sourceMappingURL=news-ticker.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_search_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsCarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewsCarouselComponent = (function () {
    function ReviewsCarouselComponent(gameSearch) {
        var _this = this;
        this.gameSearch = gameSearch;
        this.carouselItems = [];
        this.limit = 3; //Carousel slide number, used to limit items pushed to the CarouselItems array
        this.gameSearch.getPopular()
            .subscribe(function (res) {
            for (var i = 0; i < _this.limit; i++) {
                _this.gameSearch.getGame(res[i].id)
                    .subscribe(function (res) {
                    // console.log(res[0])
                    _this.carouselItems.push(res[0]);
                });
            }
        });
    }
    ReviewsCarouselComponent.prototype.ngOnInit = function () {
    };
    return ReviewsCarouselComponent;
}());
ReviewsCarouselComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-reviews-carousel',
        template: __webpack_require__(249),
        styles: [__webpack_require__(234)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_game_search_service__["a" /* GameSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_game_search_service__["a" /* GameSearchService */]) === "function" && _a || Object])
], ReviewsCarouselComponent);

var _a;
//# sourceMappingURL=reviews-carousel.component.js.map

/***/ }),

/***/ 167:
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

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".main-container {\n  background-image: url(\"/assets/img/background.jpg\");\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  padding: 15px 15px;\n  width: 100%;\n}\n\n@media (min-width: 1024px) {\n  .main-container {\n    padding: 15px 45px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".featured-game-container {\n  margin: 20px 0;\n  width: 100%;\n}\n\n.featured-game-header {\n  background: black;\n  cursor: pointer;\n  width: 100%;\n}\n\n.featured-game-item {\n  width: 100%;\n  position: relative;\n}\n\n.featured-game-item-image {\n  cursor: pointer;\n  width: 100%;\n}\n\n.featured-game-item-header {\n  background: rgba(0,0,0,.8);\n  bottom: 5px;\n  color: #D16428;\n  display: block;\n  font-size: 1.2em;\n  left: 10px;\n  padding: 8px;\n  position: absolute;\n  right: 10px;\n  text-align: center;\n  text-overflow: clip;\n}\n\n@media (min-width: 768px) {\n  .featured-game-container {\n    margin: 0 0 20px 0;\n    width: 100%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".latest-blog-container {\n  background: white;\n  width: 100%;\n}\n\n.latest-blog-heading {\n  background: black;\n  width: 100%;\n}\n\n.latest-blog-item {\n  width: 100%;\n  margin: 10px 0;\n  padding: 10px;\n}\n\n.latest-blog-item-image {\n  cursor: pointer;\n  width: 100%;\n}\n\n.latest-blog-item-heading {\n  color: #D16428;\n  cursor: pointer;\n}\n\n.latest-blog-item-description {\n  font-size: 0.8em;\n  margin-top: 5px;\n}\n\n.blog-seperator {\n  border-top: 2px solid #D16428;\n  display: block;\n  margin: 10px auto;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".latest-games-container {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.latest-games-heading {\n  background: black;\n  cursor: pointer;\n  width: 100%;\n}\n\n.latest-games-item {\n  margin: 5px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px;\n  background: #fff;\n}\n\n.latest-games-item-image {\n  cursor: pointer;\n  margin-right: 5px;\n  width: 50px;\n}\n\n.latest-games-item-heading {\n  width: calc(100% - 55px)\n}\n\n@media (min-width: 768px) {\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".latest-reviews-container {\n  margin-top: 20px;\n}\n\n.latest-reviews-heading {\n  background: black;\n  width: 100%;\n}\n\n.latest-reviews-item-container {\n  padding: 17px;\n  background: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.latest-reviews-item {\n  margin-bottom: 20px;\n  width: 100%;\n}\n\n.latest-reviews-item-image {\n  cursor: pointer;\n  width: 100%;\n}\n\n.latest-reviews-item-heading {\n  color: #D16428;\n  cursor: pointer;\n  margin: 5px 0;\n  width: 100%;\n}\n\n.latest-reviews-item-description {\n  color: #555;\n  font-size: 0.8em;\n  margin-right: 5px;\n}\n\na {\n  text-decoration: none;\n}\n\n@media (min-width: 768px) {\n  .latest-reviews-item {\n    padding: 5px;\n    width: calc(100% / 3);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "/* HEADER */\n\n.header-container {\n  background: #242424;\n  padding: 5px;\n  width: 100%;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.header {\n\n}\n\n.header-logo {\n\n}\n\n.logo {\n  display: block;\n  width: 80%;\n  margin: 0 auto 5px;\n}\n\n/* HEADER END */\n\n/* NAVBAR */\n\n.navbar-container {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-image: -webkit-linear-gradient(bottom, #C43E2F, #D16428);\n  background-image: linear-gradient(to top, #C43E2F, #D16428);\n  border-top: 2px solid #F3AB46;\n  border-laeft: 1px solid #F3AB46;\n  border-right: 1px solid #F3AB46;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 50px;\n  position: relative;\n  width: 100%;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.navbar-list {\n  background: #1F1F1F;\n  left: 10px;\n  list-style: none;\n  opacity: 0;\n  padding: 10px 0;\n  position: absolute;\n  right: 10px;\n  top: calc(100% + 10px);\n  -webkit-transition: visibility 0.5s ease, opacity 0.5s ease;\n  transition: visibility 0.5s ease, opacity 0.5s ease;\n  visibility: hidden;\n  width: calc(100% - 20px);\n  z-index: 100;\n}\n\n.navbar-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.navbar-link {\n  color: #777;\n  cursor: pointer;\n  display: block;\n  font-size: 0.9em;\n  padding: 15px 20px;\n  text-decoration: none;\n  text-transform: uppercase;\n  width: 100%;\n}\n\n.navbar-link-active {\n  color: #999;\n  font-weight: 500;\n}\n\n.navbar-menu-toggle {\n  margin-left: auto;\n  margin-right: 20px;\n}\n\n.navbar-search {\n  background: none;\n  border: 2px solid black;\n  border-radius: 10px;\n  color: #eee;\n  font-size: 0.9em;\n  padding: 5px 15px;\n}\n\n.navbar-search::-webkit-input-placeholder {\n  color: #eee;\n}\n\n.navbar-search:-ms-input-placeholder {\n  color: #eee;\n}\n\n.navbar-search::placeholder {\n  color: #eee;\n}\n\n.navbar-search-icon {\n  color: #eee;\n  margin-left: 5px;\n  text-decoration: none;\n}\n\n@media (min-width: 768px) {\n\n  .navbar-menu-toggle {\n    display: none;\n  }\n\n  .navbar-list {\n    background: none;\n    bottom: auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    left: auto;\n    list-style: none;\n    opacity: 1;\n    padding: 10px 0;\n    position: absolute;\n    right: auto;\n    top: auto;\n    visibility: visible;\n    width: auto;\n  }\n\n  .navbar-link {\n    color: #ddd;\n    font-weight: 600;\n  }\n\n  .navbar-link-active {\n    color: #fff;\n    font-weight: 700;\n  }\n\n  .logo {\n    display: block;\n    height: 70px;\n    margin: 5px 5px;\n    width: auto;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".ticker-news-container {\n  display: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".content-container {\n  margin-top: 20px;\n  padding: 15px 15px;\n  background: #F1F1F1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n  max-width: 1400px;\n  margin: 20px auto 0;\n}\n\n.blog-item-container {\n  background: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 10px;\n}\n\n.blog-image-container {\n  width: 100%;\n}\n\n.blog-image {\n  cursor: pointer;\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.blog-details-container {\n  width: 100%;\n  padding-left: 10px;\n}\n\n.blog-title {\n  cursor: pointer;\n  display: block;\n  margin-bottom: 10px;\n}\n\n.blog-entry {\n  display: block;\n  line-height: 1.5;\n}\n\n.blog-author,\n.blog-date {\n  margin: 10px 0;\n}\n\n@media (min-width: 768px) {\n  .blog-image-container {\n    width: 35%;\n  }\n\n  .blog-details-container {\n    width: 65%;\n    padding-left: 10px;\n  }\n\n  .blog-image {\n    margin-bottom: 0px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".content-container {\n  margin-top: 20px;\n  padding: 15px 5px;\n  background: #F1F1F1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n  max-width: 1400px;\n  margin: 20px auto 0;\n}\n\n.search-results-container {\n  width: 100%;\n}\n\n.search-result-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 10px 0;\n  background: white;\n}\n\n.search-result-image-container {\n  text-align: center;\n  width: 100%;\n}\n\n.search-result-image {\n  cursor: pointer;\n  padding: 10px;\n  width: 100%;\n}\n\n.search-result-description-container {\n  width: 100%;\n  padding: 10px;\n}\n\n.search-result-title {\n  cursor: pointer;\n  width: 100%;\n}\n\n.search-result-description {\n  width: 100%;\n  margin: 10px 0;\n}\n\n@media (min-width: 768px) {\n\n  .search-results-container {\n    width: 80%;\n    margin: 0 auto;\n  }\n\n  .search-result-item {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    padding: 20px 20px 20px 0;\n  }\n\n  .search-result-image-container {\n    width: 35%;\n  }\n\n  .search-result-description-container {\n    width: 65%;\n    padding-left: 10px;\n  }\n\n  .search-result-image {\n    margin: 0;\n  }\n\n  .search-result-title {\n    margin-bottom: 10px;\n  }\n\n  .search-result-description {\n    margin: 10px 0;\n    line-height: 1.8;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".content-container {\n  margin-top: 20px;\n  padding: 15px 5px;\n  background: #F1F1F1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n  max-width: 1400px;\n  margin: 20px auto 0;\n}\n\n.left-content-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  padding: 0 10px;\n  width: 100%;\n}\n\n.right-content-container {\n  padding: 0 10px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.game-release,\n.game-title,\n.game-summary {\n  width: 100%;\n  margin: 5px 0;\n}\n\n.videos-container {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.video-container {\n  position: relative;\n  width: calc(100%);\n  height: 260px;\n  margin: 10px 0;\n}\n\n.videos-intro,\n.images-intro {\n  display: block;\n  margin: 10px 0;\n  width: 100%;\n}\n\n.video-container iframe,\n.video-container object,\n.video-container embed {\nposition: absolute;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight: 100%;\n}\n\n.game-primary-image {\n  max-width: 100%;\n}\n\n.images-container {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.image-container {\n  width: 100%;\n  margin: 5px 0;\n}\n\n.screenshot {\n  width: 100%;\n}\n\n@media (min-width: 768px) {\n  .left-content-container {\n    width: calc((100% / 10) * 2.5);\n  }\n\n  .right-content-container {\n    width: calc((100% / 10) * 7.5);\n  }\n\n  .video-container {\n  width: calc(49%);\n  height: 260px;\n  }\n\n  .image-container {\n      width: 49%;\n  }\n\n  .game-primary-image {\n    max-height: 600px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".content-container {\r\n  margin-top: 20px;\r\n  padding: 15px 5px;\r\n  background: #F1F1F1;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  width: 100%;\r\n  max-width: 1400px;\r\n  margin: 20px auto 0;\r\n}\r\n\r\n.left-content-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -ms-flex-line-pack: start;\r\n      align-content: flex-start;\r\n  padding: 0 10px;\r\n  width: 100%;\r\n}\r\n\r\n.right-content-container {\r\n  padding: 0 10px;\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .left-content-container {\r\n    width: calc((100% / 3) * 2);\r\n  }\r\n\r\n  .right-content-container {\r\n    width: calc(100% / 3);\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".content-container {\n  margin-top: 20px;\n  padding: 15px 5px;\n  background: #F1F1F1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n  max-width: 1400px;\n  margin: 20px auto 0;\n}\n\n.search-results-container {\n  width: 100%;\n}\n\n.search-result-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 10px 0;\n  background: white;\n}\n\n.search-result-image-container {\n  text-align: center;\n  width: 100%;\n}\n\n.search-result-image {\n  cursor: pointer;\n  padding: 10px;\n  width: 100%;\n}\n\n.search-result-description-container {\n  width: 100%;\n  padding: 10px;\n}\n\n.search-result-title {\n  cursor: pointer;\n  width: 100%;\n}\n\n.search-result-description {\n  width: 100%;\n  margin: 10px 0;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\n@media (min-width: 768px) {\n\n  .search-results-container {\n    width: 80%;\n    margin: 0 auto;\n  }\n\n  .search-result-item {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    padding: 20px 20px 20px 0;\n  }\n\n  .search-result-image-container {\n    width: 35%;\n  }\n\n  .search-result-description-container {\n    width: 65%;\n    padding-left: 10px;\n  }\n\n  .search-result-image {\n    margin: 0;\n  }\n\n  .search-result-title {\n    margin-bottom: 10px;\n    font-size: 1.5em;\n  }\n\n  .search-result-description {\n    margin: 10px 0;\n    line-height: 1.8;\n    font-size: 1.2em;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".content-container {\n  margin-top: 20px;\n  padding: 15px 5px;\n  background: #F1F1F1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n  max-width: 1400px;\n  margin: 20px auto 0;\n}\n\n.search-results-container {\n  width: 100%;\n}\n\n.search-result-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 10px 0;\n  background: white;\n}\n\n.search-result-image-container {\n  text-align: center;\n  width: 100%;\n}\n\n.search-result-image {\n  cursor: pointer;\n  margin: 10px;\n}\n\n.search-result-description-container {\n  width: 100%;\n  padding-left: 20px;\n}\n\n.search-result-title {\n  cursor: pointer;\n  width: 100%;\n}\n\n.search-result-description {\n  width: 100%;\n}\n\n@media (min-width: 768px) {\n\n  .search-results-container {\n    width: 80%;\n    margin: 0 auto;\n  }\n\n  .search-result-item {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    padding: 20px 20px 20px 0;\n  }\n\n  .search-result-image-container {\n    width: 120px;\n  }\n\n  .search-result-description-container {\n    width: calc(100% - 120px);\n    padding-left: 0;\n  }\n\n  .search-result-image {\n    margin: 0;\n  }\n\n\n  .search-result-title {\n    margin-bottom: 10px;\n  }\n\n  .search-result-description {\n    margin: 10px 0;\n    line-height: 1.6;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".carousel-container {\n  width: 100%;\n  overflow: hidden;\n}\n\n.carousel-list {\n  list-style: none;\n  width: 300%;\n  overflow: hidden;\n  position: relative;\n}\n\n.carousel-item {\n  -webkit-animation: carousel-container 25s infinite;\n          animation: carousel-container 25s infinite;\n  float: left;\n  position: relative;\n  width: 33.333%;\n}\n\n.carousel-item-image {\n  cursor: pointer;\n  width: 100%;\n}\n\n.carousel-item-heading {\n  -webkit-animation: carousel-item-heading 25s infinite;\n          animation: carousel-item-heading 25s infinite;\n  background: black;\n  color: #D16428;\n  cursor: pointer;\n  display: block;\n  font-size: 0.8em;\n  left: 12px;\n  padding: 8px 8px 6px;\n  position: absolute;\n  text-align: center;\n  text-transform: uppercase;\n  top: 12px;\n}\n\n.carousel-item-description {\n  -webkit-animation: carousel-item-description 25s infinite;\n          animation: carousel-item-description 25s infinite;\n  background: black;\n  bottom: 15px;\n  color: #ddd;\n  display: block;\n  font-size: 0.8em;\n  padding: 8px 8px 6px;\n  position: absolute;\n  right: 10px;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n@-webkit-keyframes carousel-container{\n    0%      { left: 0%; }\n    30%     { left: 0%; }\n    33.33%  { left: -33.333%; }\n    63.33%  { left: -33.333%; }\n    66.66%  { left: -66.666%; }\n    96.66%  { left: -66.666%; }\n    100%    { left: 0%; }\n}\n\n@keyframes carousel-container{\n    0%      { left: 0%; }\n    30%     { left: 0%; }\n    33.33%  { left: -33.333%; }\n    63.33%  { left: -33.333%; }\n    66.66%  { left: -66.666%; }\n    96.66%  { left: -66.666%; }\n    100%    { left: 0%; }\n}\n\n@-webkit-keyframes carousel-item-heading{\n    0%      { opacity: 0; }\n    5%      { opacity: 1; }\n    25%     { opacity: 1; }\n    30%     { opacity: 0; }\n    33.33%  { opacity: 0; }\n    38.33%  { opacity: 1; }\n    58.33%  { opacity: 1; }\n    63.33%  { opacity: 0; }\n    66.66%  { opacity: 0; }\n    69.66%  { opacity: 1; }\n    91.66%     { opacity: 1; }\n    100%    { opacity: 0; }\n}\n\n@keyframes carousel-item-heading{\n    0%      { opacity: 0; }\n    5%      { opacity: 1; }\n    25%     { opacity: 1; }\n    30%     { opacity: 0; }\n    33.33%  { opacity: 0; }\n    38.33%  { opacity: 1; }\n    58.33%  { opacity: 1; }\n    63.33%  { opacity: 0; }\n    66.66%  { opacity: 0; }\n    69.66%  { opacity: 1; }\n    91.66%     { opacity: 1; }\n    100%    { opacity: 0; }\n}\n\n@-webkit-keyframes carousel-item-description{\n    0%      { opacity: 0; }\n    5%      { opacity: 1; }\n    25%     { opacity: 1; }\n    30%     { opacity: 0; }\n    33.33%  { opacity: 0; }\n    38.33%  { opacity: 1; }\n    58.33%  { opacity: 1; }\n    63.33%  { opacity: 0; }\n    66.66%  { opacity: 0; }\n    69.66%  { opacity: 1; }\n    91.66%     { opacity: 1; }\n    100%    { opacity: 0; }\n}\n\n@keyframes carousel-item-description{\n    0%      { opacity: 0; }\n    5%      { opacity: 1; }\n    25%     { opacity: 1; }\n    30%     { opacity: 0; }\n    33.33%  { opacity: 0; }\n    38.33%  { opacity: 1; }\n    58.33%  { opacity: 1; }\n    63.33%  { opacity: 0; }\n    66.66%  { opacity: 0; }\n    69.66%  { opacity: 1; }\n    91.66%     { opacity: 1; }\n    100%    { opacity: 0; }\n}\n\n@media (min-width: 768px) {\n  .carousel-item-heading {\n    font-size: 1.4em;\n  }\n\n  .carousel-item-description {\n    font-size: 1.2em;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <app-navbar></app-navbar>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = "<div class=\"featured-game-container\">\n  <div class=\"featured-game-header\">\n    <p class=\"sub-heading sub-heading--rounded\">Featured Game</p>\n  </div>\n  <div class=\"featured-game-item\" *ngFor=\"let item of game\">\n    <img class=\"featured-game-item-image\" src=\"https://images.igdb.com/igdb/image/upload/t_cover_big/{{item.cover.cloudinary_id}}\" [routerLink]=\"['game/', item.id]\">\n    <h4 class=\"featured-game-item-header\" [routerLink]=\"['game/', item.id]\">{{item.name}}</h4>\n  </div>\n</div>\n"

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "<div class=\"latest-blog-container\">\n  <div class=\"latest-blog-heading\">\n    <p class=\"sub-heading sub-heading--rounded\">Latest Blog Posts</p>\n  </div>\n  <div class=\"latest-blog-item\" *ngFor=\"let blogEntry of blogEntries\">\n    <img class=\"latest-blog-item-image\" *ngIf=\"blogEntry.image\" src=\"{{blogEntry.image}}\" [routerLink]=\"['/blog', blogEntry.id]\">\n    <h4 class=\"latest-blog-item-heading\" [routerLink]=\"['/blog', blogEntry.id]\">{{blogEntry.title}}</h4>\n    <p class=\"latest-blog-item-description\">Author: {{blogEntry.author}}</p>\n    <hr class=\"blog-seperator\">\n  </div>\n</div>\n"

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "<div class=\"latest-games-container\" *ngIf=\"games\">\n  <div class=\"latest-games-heading\">\n    <p class=\"sub-heading sub-heading--rounded\">Latest Games</p>\n  </div>\n  <div class=\"latest-games-item\" *ngFor=\"let game of games\">\n    <img class=\"latest-games-item-image\" *ngIf=\"game.cover\" src=\"https://images.igdb.com/igdb/image/upload/t_cover_small/{{game.cover.cloudinary_id}}\" [routerLink]=\"['game/', game.id]\">\n    <img class=\"latest-games-item-image\" *ngIf=\"!game.cover\" src=\"http://placehold.it/128x45?text=No+Image+Available\" [routerLink]=\"['game/', game.id]\">\n    <h4 class=\"latest-games-item-heading\" [routerLink]=\"['game/', game.id]\">{{game.name}}</h4>\n  </div>\n</div>\n"

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "<div class=\"latest-reviews-container\">\n  <div class=\"latest-reviews-heading\">\n    <p class=\"sub-heading sub-heading--rounded\">Latest Reviews</p>\n  </div>\n  <div class=\"latest-reviews-item-container\">\n    <div class=\"latest-reviews-item\" *ngFor=\"let review of latestReviews\">\n      <a href=\"{{review.reviewUrl}}\" target=\"_blank\"><img class=\"latest-reviews-item-image\" src=\"https://images.igdb.com/igdb/image/upload/t_screenshot_big/{{review.imgUrl}}\"></a>\n      <a href=\"{{review.reviewUrl}}\" target=\"_blank\"><h4 class=\"latest-reviews-item-heading\">{{review.name}}</h4></a>\n      <p class=\"fa fa-comment latest-reviews-item-description latest-reviews-item-description-comment\">  {{review.review | slice:0:80}}...</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\n  <div class=\"header\">\n    <div class=\"header-logo\">\n      <img class=\"logo\" src=\"/assets/img/logo.png\" [routerLink]=\"['/']\">\n    </div>\n    <div class=\"header-social\">\n    </div>\n  </div>\n</div> <!-- HEADER END -->\n<div class=\"navbar-container\">\n  <ul class=\"navbar-list\" (window:resize)=\"toggleMenuResize()\" [ngStyle]=\"toggleMenu()\">\n    <li class=\"navbar-item\"><a class=\"navbar-link navbar-link-active\" [routerLink]=\"['/']\">Home</a></li>\n    <li class=\"navbar-item\"><a class=\"navbar-link\" [routerLink]=\"['/reviews']\">Reviews</a></li>\n    <li class=\"navbar-item\"><a class=\"navbar-link\" [routerLink]=\"['/blog']\">Blog</a></li>\n    <li class=\"navbar-item\">\n      <form>\n        <input class=\"navbar-search\" type=\"text\" placeholder=\"Search...\" #search (keyup)=\"0\">\n        <a class=\"fa fa-search navbar-search-icon\" *ngIf=\"search.value\" [routerLink]=\"['/search', search.value]\"></a>\n      </form>\n      </li>\n  </ul>\n  <p class=\"fa fa-bars fa-2x navbar-menu-toggle\"(click)=\"toggle = !toggle;\"></p>\n</div> <!-- NAVBAR END -->\n"

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports = "<div class=\"ticker-news-container\">\n  <p class=\"sub-heading sub-heading--rounded\">Ticker News</p>\n  <div class=\"ticker-news-output\">\n    Some ticker news text goes here\n  </div>\n</div> <!-- TECH-NEWS-CONTAINER END -->\n"

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\n  <div class=\"blog-item-container\" *ngFor=\"let blog of searchResult\">\n    <div class=\"blog-image-container\">\n      <img class=\"blog-image\" src=\"{{blog.image}}\">\n    </div>\n    <div class=\"blog-details-container\">\n      <h2 class=\"blog-title\">{{blog.title}}</h2>\n      <p class=\"blog-entry\">{{blog.summary}}</p>\n      <p class=\"blog-author\"><strong>Author:</strong> {{blog.author}}</p>\n      <p class=\"blog-date\"><strong>Published:</strong> {{blog.published_at | date}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 244:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\n  <div class=\"search-results-container\">\n    <div class=\"search-result-item\" *ngFor=\"let result of searchResults\">\n      <div class=\"search-result-image-container\">\n        <img class=\"search-result-image\" *ngIf=\"result.image\" src=\"{{result.image}}\" [routerLink]=\"['/blog', result.id]\">\n        <img class=\"search-result-image\" *ngIf=\"!result.image\" src=\"http://placehold.it/90x120?text=No+Image+Available\" [routerLink]=\"['/blog', result.id]\">\n      </div>\n      <div class=\"search-result-description-container\">\n        <h2 class=\"search-result-title\" [routerLink]=\"['/blog', result.id]\">{{result.title}}</h2>\n        <p class=\"search-result-description\">{{result.summary | slice:0:280}}...</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\" *ngFor=\"let item of game\">\n  <div class=\"left-content-container\">\n    <img class=\"game-primary-image\" src=\"https://images.igdb.com/igdb/image/upload/t_cover_big/{{item.cover.cloudinary_id}}\">\n    <p class=\"game-release\"> Release Date: {{item.first_release_date | date}}</p>\n  </div>\n  <div class=\"right-content-container\">\n    <h2 class=\"game-title\">{{item.name}}</h2>\n    <p class=\"game-summary\">Summary: {{item.summary}}</p>\n    <div *ngIf=\"item.videos\">\n      <h3 class=\"videos-intro\">Videos</h3>\n    </div>\n    <div class=\"videos-container\">\n      <div class=\"video-container\" *ngFor=\"let video of item.videos; let i = index\">\n        <iframe width=\"853\" height=\"480\" [src]=\"videoUrl(i)\" frameborder=\"0\" allowfullscreen></iframe>\n      </div>\n    </div>\n    <div *ngIf=\"item.screenshots\">\n      <h3 class=\"images-intro\">Screenshots</h3>\n    </div>\n    <div class=\"images-container\">\n      <div class=\"image-container\" *ngFor=\"let screenshot of item.screenshots; let i = index\">\n        <img class=\"screenshot\" src=\"https://images.igdb.com/igdb/image/upload/t_cover_big/{{screenshot.cloudinary_id}}\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\n  <app-news-ticker></app-news-ticker>\n  <div class=\"left-content-container\">\n    <app-reviews-carousel></app-reviews-carousel>\n    <app-latest-reviews></app-latest-reviews>\n    <app-rpg-latest></app-rpg-latest>\n    <app-adventure-latest></app-adventure-latest>\n    <app-strategy-latest></app-strategy-latest>\n    <app-sport-latest></app-sport-latest>\n  </div>\n  <div class=\"right-content-container\">\n    <app-featured-game></app-featured-game>\n    <app-latest-games></app-latest-games>\n    <app-latest-blog></app-latest-blog>\n  </div>\n</div>\n"

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\n  <div class=\"search-results-container\">\n    <div class=\"search-result-item\" *ngFor=\"let result of searchResults\">\n      <div class=\"search-result-image-container\">\n        <a href=\"{{result.reviewUrl}}\" target=\"_blank\"><img class=\"search-result-image\" *ngIf=\"result.imgUrl\" src=\"https://images.igdb.com/igdb/image/upload/t_cover_big/{{result.imgUrl}}\"></a>\n        <img class=\"search-result-image\" *ngIf=\"!result.imgUrl\" src=\"http://placehold.it/90x120?text=No+Image+Available\">\n      </div>\n      <div class=\"search-result-description-container\">\n        <a href=\"{{result.reviewUrl}}\" target=\"_blank\"><h2 class=\"search-result-title\">{{result.name}}</h2></a>\n        <p class=\"search-result-description\">{{result.review | slice:0:400}}...</p>\n        <p class=\"search-result-description\">Author: {{result.author}}</p>\n        <p class=\"search-result-description\">Last Updated: {{result.updated | date}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\n  <div class=\"search-results-container\">\n    <div class=\"search-result-item\" *ngFor=\"let result of searchResults\">\n      <div class=\"search-result-image-container\">\n        <img class=\"search-result-image\" *ngIf=\"result.cover\" src=\"https://images.igdb.com/igdb/image/upload/t_cover_small/{{result.cover.cloudinary_id}}\" [routerLink]=\"['/game', result.id]\">\n        <img class=\"search-result-image\" *ngIf=\"!result.cover\" src=\"http://placehold.it/90x120?text=No+Image+Available\" [routerLink]=\"['/game', result.id]\">\n      </div>\n      <div class=\"search-result-description-container\">\n        <h2 class=\"search-result-title\" [routerLink]=\"['/game', result.id]\">{{result.name}}</h2>\n        <p class=\"search-result-description\">{{result.summary}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-container\">\n  <ul class=\"carousel-list\" *ngIf=\"carouselItems\">\n    <li class=\"carousel-item\" *ngFor=\"let item of carouselItems\">\n      <img class=\"carousel-item-image\" src=\"https://images.igdb.com/igdb/image/upload/t_screenshot_big/{{item.cover.cloudinary_id}}\" [routerLink]=\"['/game', item.id]\">\n      <h3 class=\"carousel-item-heading\" [routerLink]=\"['/game', item.id]\">{{item.name}}</h3>\n      <p class=\"carousel-item-description\" [routerLink]=\"['/game', item.id]\">{{item.summary | slice:0:60}}...</p>\n    </li>\n  </ul>\n</div> <!-- CAROUSEL CONTAINER END -->\n"

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenreSearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GenreSearchService = (function () {
    function GenreSearchService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'X-Mashape-Key': "6PrBxXUbnfmshSDJzrpQIE3RYkMup1rjz4njsn6bDZ0I57Mn0R",
            'Accept': 'application/json'
        });
    }
    GenreSearchService.prototype.getPopularByGenre = function (id) {
        var searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=*&filter[genres][eq]=" + id + "&limit=5&order=popularity:desc";
        return this.http.get(searchUrl, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    return GenreSearchService;
}());
GenreSearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], GenreSearchService);

var _a;
//# sourceMappingURL=genre-search.service.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogSearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogSearchService = (function () {
    function BlogSearchService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'X-Mashape-Key': "6PrBxXUbnfmshSDJzrpQIE3RYkMup1rjz4njsn6bDZ0I57Mn0R",
            'Accept': 'application/json'
        });
    }
    BlogSearchService.prototype.getLatest = function () {
        var searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/pulses/?fields=*&filter[image][exists]&filter[category][eq]=7&limit=5&order=published_at:desc";
        return this.http.get(searchUrl, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    BlogSearchService.prototype.getBlogArticle = function (id) {
        console.log("ID:", id);
        var searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/pulses/" + id + "?fields=*";
        return this.http.get(searchUrl, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    BlogSearchService.prototype.getLatest20 = function () {
        var searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/pulses/?fields=*&filter[image][exists]&filter[category][eq]=7&limit=20&order=published_at:desc";
        return this.http.get(searchUrl, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    return BlogSearchService;
}());
BlogSearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], BlogSearchService);

var _a;
//# sourceMappingURL=blog-search.service.js.map

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "/* GENRE COMPONENT - LAT£ST */\n\n.genre-container {\n  width: 100%;\n}\n\n.genre-heading-container {\n  background: black;\n  width: 100%;\n}\n\n.genre-content-container {\n  background: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 17px;\n  width: 100%;\n}\n\n.genre-main-item {\n  margin-bottom: 20px;\n}\n\n.genre-main-item-image {\n  cursor: pointer;\n  width: 100%;\n}\n\n.genre-main-item-heading {\n  color: #D16428;\n  cursor: pointer;\n  width: 100%;\n  margin: 5px 0;\n}\n\n.genre-main-item-description {\n  color: #555;\n  font-size: 0.8em;\n  margin: 5px 10px 5px 0;\n}\n\n.genre-item-description {\n  width: 100%;\n  color: #555;\n  font-size: 0.8em;\n  margin: 5px 10px 5px 0;\n}\n\n.genre-sub-item-container {\n  width: 100%\n}\n\n.genre-sub-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.genre-sub-item-image {\n  width: 90px;\n  height: 90px;\n  margin-right: 10px;\n  margin-bottom: 5px;\n}\n\n.genre-sub-item-heading {\n  color: #D16428;\n  width: calc(100% - 100px);\n  margin: 5px 0;\n}\n\n@media (min-width: 768px) {\n\n  .genre-container {\n    width: 100%;\n  }\n\n  :host {\n    width: 49%;\n    margin: 20px 0 0 0;\n  }\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(147);


/***/ }),

/***/ 52:
/***/ (function(module, exports) {

module.exports = "<div class=\"genre-container\">\n  <div class=\"genre-heading-container\">\n    <p class=\"sub-heading sub-heading--rounded\">{{category}}</p>\n  </div>\n  <div class=\"genre-content-container\">\n    <div class=\"genre-main-item\">\n      <img class=\"genre-main-item-image\" *ngIf=\"games.primary.cover\" src=\"https://images.igdb.com/igdb/image/upload/t_screenshot_med/{{games.primary.cover.cloudinary_id}}\" [routerLink]=\"['game/', games.primary.id]\">\n      <h4 class=\"genre-main-item-heading\" [routerLink]=\"['game/', games.primary.id]\">{{games.primary.name}}</h4>\n      <p class=\"fa fa-calendar genre-main-item-description genre-item-description-date\">  {{games.primary.first_release_date | date}}</p>\n      <p class=\"genre-main-item-description\">{{games.primary.summary | slice:0:200}}...</p>\n    </div>\n    <div class=\"genre-sub-item-container\">\n      <div class=\"genre-sub-item\" *ngFor=\"let game of games.secondary\">\n        <img class=\"genre-sub-item-image\" *ngIf=\"game.cover\" src=\"https://images.igdb.com/igdb/image/upload/t_thumb/{{game.cover.cloudinary_id}}\" [routerLink]=\"['game/', game.id]\">\n        <h4 class=\"genre-sub-item-heading\" [routerLink]=\"['game/', game.id]\">{{game.name}}</h4>\n        <p class=\"genre-item-description genre-item-description-date\">Release Date: {{game.first_release_date | date}}</p>\n        <p class=\"genre-item-description genre-item-description-comment\" *ngIf=\"game.summary\">Summary: {{game.summary | slice:0:100}}...</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewSearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewSearchService = (function () {
    function ReviewSearchService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'X-Mashape-Key': "6PrBxXUbnfmshSDJzrpQIE3RYkMup1rjz4njsn6bDZ0I57Mn0R",
            'Accept': 'application/json'
        });
    }
    ReviewSearchService.prototype.getPopular = function () {
        var searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/reviews/";
        return this.http.get(searchUrl, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ReviewSearchService.prototype.getLatest = function () {
        var searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/reviews/?fields=*&order=updated_at:desc&limit=20";
        return this.http.get(searchUrl, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ReviewSearchService.prototype.getReview = function (id) {
        var searchUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/reviews/" + id + "?fields=*";
        return this.http.get(searchUrl, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    return ReviewSearchService;
}());
ReviewSearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ReviewSearchService);

var _a;
//# sourceMappingURL=review-search.service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_blog_search_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogItemComponent = (function () {
    function BlogItemComponent(blogSearch, activatedRoute) {
        var _this = this;
        this.blogSearch = blogSearch;
        this.activatedRoute = activatedRoute;
        this.searchResult = [];
        this.activatedRoute.params
            .map(function (params) { return params["id"]; })
            .subscribe(function (id) {
            _this.blogSearch.getBlogArticle(id)
                .subscribe(function (res) {
                _this.searchResult = res;
                console.log(_this.searchResult);
            });
        });
    }
    BlogItemComponent.prototype.ngOnInit = function () {
    };
    return BlogItemComponent;
}());
BlogItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-blog-item',
        template: __webpack_require__(243),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_blog_search_service__["a" /* BlogSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_blog_search_service__["a" /* BlogSearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], BlogItemComponent);

var _a, _b;
//# sourceMappingURL=blog-item.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_search_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogComponent = (function () {
    function BlogComponent(blogSearch) {
        var _this = this;
        this.blogSearch = blogSearch;
        this.searchResults = [];
        this.blogSearch.getLatest20()
            .subscribe(function (res) {
            _this.searchResults = res;
            console.log(_this.searchResults);
        });
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-blog',
        template: __webpack_require__(244),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_blog_search_service__["a" /* BlogSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_blog_search_service__["a" /* BlogSearchService */]) === "function" && _a || Object])
], BlogComponent);

var _a;
//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_game_search_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameComponent = (function () {
    function GameComponent(activatedRoute, gameSearch, sanitizer) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.gameSearch = gameSearch;
        this.sanitizer = sanitizer;
        this.game = [];
        this.videos = [];
        this.baseUrl = 'https://www.youtube.com/embed/';
        activatedRoute.params
            .map(function (params) { return params["id"]; })
            .subscribe(function (id) {
            _this.gameSearch.getGame(id)
                .subscribe(function (res) {
                _this.game.push(res[0]);
                console.log(_this.game);
            });
        });
    }
    GameComponent.prototype.videoUrl = function (i) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.game[0].videos[i].video_id);
    };
    return GameComponent;
}());
GameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-game',
        template: __webpack_require__(245),
        styles: [__webpack_require__(230)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_game_search_service__["a" /* GameSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_game_search_service__["a" /* GameSearchService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _c || Object])
], GameComponent);

var _a, _b, _c;
//# sourceMappingURL=game.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(246),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_review_search_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_game_search_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewsComponent = (function () {
    function ReviewsComponent(reviewSearch, gameSearch) {
        var _this = this;
        this.reviewSearch = reviewSearch;
        this.gameSearch = gameSearch;
        this.searchResults = [];
        this.reviewSearch.getLatest()
            .subscribe(function (res) {
            var _loop_1 = function (i) {
                var reviewObj = { author: "", updated: "", review: "", reviewUrl: "", imgUrl: "", name: "" };
                reviewObj.review = res[i].content;
                reviewObj.reviewUrl = res[i].url;
                reviewObj.author = res[i].username;
                reviewObj.updated = res[i].updated_at;
                // console.log(res)
                _this.gameSearch.getGame(res[i].game)
                    .subscribe(function (res) {
                    reviewObj.imgUrl = res[0].cover.cloudinary_id;
                    reviewObj.name = res[0].name;
                    _this.searchResults.push(reviewObj);
                    console.log(res);
                });
            };
            for (var i = 0; i < res.length; i++) {
                _loop_1(i);
            }
        });
    }
    ReviewsComponent.prototype.ngOnInit = function () {
    };
    return ReviewsComponent;
}());
ReviewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-reviews',
        template: __webpack_require__(247),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_review_search_service__["a" /* ReviewSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_review_search_service__["a" /* ReviewSearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_game_search_service__["a" /* GameSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_game_search_service__["a" /* GameSearchService */]) === "function" && _b || Object])
], ReviewsComponent);

var _a, _b;
//# sourceMappingURL=reviews.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_game_search_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(gameSearch, activatedRoute) {
        var _this = this;
        this.gameSearch = gameSearch;
        this.activatedRoute = activatedRoute;
        this.searchResults = [];
        this.activatedRoute.params
            .map(function (params) { return params["string"]; })
            .subscribe(function (string) {
            _this.gameSearch.textSearch(string)
                .subscribe(function (res) {
                _this.searchResults = res;
                console.log(_this.searchResults);
            });
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__(248),
        styles: [__webpack_require__(233)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_game_search_service__["a" /* GameSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_game_search_service__["a" /* GameSearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=search.component.js.map

/***/ })

},[514]);
//# sourceMappingURL=main.bundle.js.map