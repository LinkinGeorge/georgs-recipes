webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var appRoutes = [
    {
        path: '',
        redirectTo: 'recipes',
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(170),
        styles: [__webpack_require__(163)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recipes_recipes_module__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__svgicons_svg_icon_svg_icon_component__ = __webpack_require__(109);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__svgicons_svg_icon_svg_icon_component__["a" /* SvgIconComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__recipes_recipes_module__["a" /* RecipesModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalcServingsPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CalcServingsPipe = (function () {
    function CalcServingsPipe() {
    }
    CalcServingsPipe.prototype.transform = function (value, origServings, newServings) {
        var quantityCheck = value.match(/\d+(\.|\,|\/)?\d*/i);
        var quantity = getQuantity(value);
        var multUnit_n = /\d\s?((prise|zehe|stange|dose|flasche|tasse|messerspitze)\w*)/i;
        var multUnit_en = /\d\s?((packung)\w*)/i;
        var glas = /\d\s?(glas|gläser)/i;
        var name_e = /\w*e$/i;
        var name_en = /\w*en$/i;
        if (origServings == newServings) {
            if (quantityCheck != null) {
                var quantityString = quantityCheck[0];
                return value.replace(quantityString, beautifulNumber(quantity));
            }
            return value;
        }
        else {
            if (quantityCheck != null) {
                // just apply a new value when there is one
                var quantityString = quantityCheck[0];
                var newQuantity = quantity * (newServings / origServings);
                value = value.replace(quantityString, beautifulNumber(newQuantity));
            }
            else {
                return value;
            }
        }
        function getQuantity(value) {
            var fractRegex = /\d+[\/]\d+/i;
            var fraction = value.match(fractRegex);
            var commaRegex = /\d+[,]\d+/i;
            var comma = value.match(commaRegex);
            var numRegex = /\d+\.?\d*/i;
            if (fraction != null) {
                var numerator = +fraction[0].match(/^\d/i)[0];
                var denominator = +fraction[0].match(/\d+$/i)[0];
                return numerator / denominator;
            }
            if (comma != null) {
                var commaNum = +comma[0].replace(',', '.');
                return commaNum;
            }
            return +value.match(numRegex);
        }
        function beautifulNumber(num) {
            if (num % 1 === 0) {
                return num.toLocaleString();
            }
            var remainder = num % 1;
            var quotient = num - remainder;
            if (remainder === 0.25) {
                if (quotient !== 0) {
                    return quotient.toLocaleString() + " \xBC";
                }
                return "\xBC";
            }
            if (remainder === 0.5) {
                if (quotient !== 0) {
                    return quotient.toLocaleString() + " \xBD";
                }
                return "\xBD";
            }
            if (remainder === 0.75) {
                if (quotient !== 0) {
                    return quotient.toLocaleString() + " \xBE";
                }
                return "\xBE";
            }
            return num.toString();
        }
        if (value.match(multUnit_n) != null) {
            var unit = value.match(multUnit_n)[1];
            if (isNowSingle()) {
                return value.replace(unit, unit.slice(0, -1));
            }
            else if (isNowMultiple()) {
                return value.replace(unit, unit + 'n');
            }
            return value;
        }
        else if (value.match(multUnit_en) != null) {
            var unit = value.match(multUnit_en)[1];
            if (isNowSingle()) {
                return value.replace(unit, unit.slice(0, -2));
            }
            else if (isNowMultiple()) {
                return value.replace(unit, unit + 'en');
            }
            return value;
        }
        else if (value.match(glas) != null) {
            var unit = value.match(glas)[1];
            if (isNowSingle()) {
                return value.replace(unit, 'Glas');
            }
            else if (isNowMultiple()) {
                return value.replace(unit, 'Gläser');
            }
            return value;
        }
        else if (value.match(name_e) != null) {
            var name = value.match(name_e)[0];
            if (isNowMultiple()) {
                return value.replace(name, name + 'n');
            }
            else {
                return value;
            }
        }
        else if (value.match(name_en)) {
            var name = value.match(name_en)[0];
            if (isNowSingle()) {
                return value.replace(name, name.slice(0, -1));
            }
            else {
                return value;
            }
        }
        else {
            return value;
        }
        function isNowSingle() {
            if (+quantity > 1 && newQuantity <= 1) {
                return true;
            }
            else {
                return false;
            }
        }
        function isNowMultiple() {
            if (+quantity <= 1 && newQuantity > 1) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    return CalcServingsPipe;
}());
CalcServingsPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'calcServings'
    })
], CalcServingsPipe);

//# sourceMappingURL=calc-servings.pipe.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DifficultyStringPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DifficultyStringPipe = (function () {
    function DifficultyStringPipe() {
    }
    DifficultyStringPipe.prototype.transform = function (difficulty) {
        switch (difficulty) {
            case 1:
                return 'Einfach';
            case 2:
                return 'Mittel';
            case 3:
                return 'Schwer';
            default:
                return 'Keine Info';
        }
    };
    return DifficultyStringPipe;
}());
DifficultyStringPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'difficultyString'
    })
], DifficultyStringPipe);

//# sourceMappingURL=difficulty-string.pipe.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterRecipesPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterRecipesPipe = (function () {
    function FilterRecipesPipe() {
    }
    FilterRecipesPipe.prototype.transform = function (recipes, ingrQuery, ctgQuery) {
        if (ingrQuery == '' && ctgQuery == '') {
            return recipes;
        }
        var filteredRecipes = new Array();
        var ingrArray = ingrQuery.trim().split(',');
        var ctgArray = ctgQuery.trim().split(',');
        if (ctgQuery == '') {
            recipes.forEach(function (recipe) {
                var ingrArrayTmp = ingrArray.slice(0);
                recipe.ingredients.forEach(function (ingredient) {
                    ingrArrayTmp.forEach(function (ingr) {
                        if (ingredient.name.toLowerCase().indexOf(ingr.toLowerCase()) !== -1) {
                            ingrArrayTmp.splice(ingrArrayTmp.indexOf(ingr), 1);
                        }
                    });
                });
                if (ingrArrayTmp.length === 0) {
                    filteredRecipes.push(recipe);
                }
            });
            return filteredRecipes;
        }
        if (ingrQuery == '') {
            recipes.forEach(function (recipe) {
                var ctgArrayTmp = ctgArray.slice(0);
                if (recipe.categories) {
                    recipe.categories.forEach(function (category) {
                        ctgArrayTmp.forEach(function (ctg) {
                            if (category.toLowerCase().indexOf(ctg.toLowerCase()) !== -1) {
                                ctgArrayTmp.splice(ctgArrayTmp.indexOf(ctg), 1);
                            }
                        });
                    });
                }
                if (ctgArrayTmp.length === 0) {
                    filteredRecipes.push(recipe);
                }
            });
            return filteredRecipes;
        }
        recipes.forEach(function (recipe) {
            var ingrMatch = false;
            var ingrArrayTmp = ingrArray.slice(0);
            recipe.ingredients.forEach(function (ingredient) {
                ingrArrayTmp.forEach(function (ingr) {
                    if (ingredient.name.toLowerCase().indexOf(ingr.toLowerCase()) !== -1) {
                        ingrArrayTmp.splice(ingrArrayTmp.indexOf(ingr), 1);
                    }
                });
                if (ingrArrayTmp.length === 0) {
                    ingrMatch = true;
                }
            });
            if (recipe.categories && ingrMatch) {
                var ctgArrayTmp_1 = ctgArray.slice(0);
                recipe.categories.forEach(function (category) {
                    ctgArrayTmp_1.forEach(function (ctg) {
                        if (category.toLowerCase().indexOf(ctg.toLowerCase()) !== -1) {
                            ctgArrayTmp_1.splice(ctgArrayTmp_1.indexOf(ctg), 1);
                        }
                    });
                });
                if (ctgArrayTmp_1.length === 0) {
                    filteredRecipes.push(recipe);
                }
            }
        });
        return filteredRecipes;
    };
    return FilterRecipesPipe;
}());
FilterRecipesPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filterRecipes'
    })
], FilterRecipesPipe);

//# sourceMappingURL=filter-recipes.pipe.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Recipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ingredient; });
var Recipe = (function () {
    function Recipe(title, servings, duration, difficulty, cookCount, ingredients, heroImage, description, descrImage, categories, _id) {
        this.title = title;
        this.servings = servings;
        this.duration = duration;
        this.difficulty = difficulty;
        this.cookCount = cookCount;
        this.ingredients = ingredients;
        this.heroImage = heroImage;
        this.description = description;
        this.descrImage = descrImage;
        this.categories = categories;
        this._id = _id;
    }
    return Recipe;
}());

var Ingredient = (function () {
    function Ingredient(name, hint) {
        this.name = name;
        this.hint = hint;
    }
    return Ingredient;
}());

//# sourceMappingURL=recipe.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_recipe_details_recipe_details_component__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_recipe_form_recipe_form_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_recipe_list_recipe_list_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_recipe_edit_recipe_edit_component__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_recipe_print_recipe_print_component__ = __webpack_require__(225);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var recipeRoutes = [
    { path: 'recipes', component: __WEBPACK_IMPORTED_MODULE_4__components_recipe_list_recipe_list_component__["a" /* RecipeListComponent */] },
    { path: 'recipes/new', component: __WEBPACK_IMPORTED_MODULE_3__components_recipe_form_recipe_form_component__["a" /* RecipeFormComponent */] },
    { path: 'recipe/:id', component: __WEBPACK_IMPORTED_MODULE_2__components_recipe_details_recipe_details_component__["a" /* RecipeDetailsComponent */] },
    { path: 'recipe/:id/edit', component: __WEBPACK_IMPORTED_MODULE_5__components_recipe_edit_recipe_edit_component__["a" /* RecipeEditComponent */] },
    { path: 'recipe/:id/print', component: __WEBPACK_IMPORTED_MODULE_6__components_recipe_print_recipe_print_component__["a" /* RecipePrintComponent */] }
];
var RecipeRoutingModule = (function () {
    function RecipeRoutingModule() {
    }
    return RecipeRoutingModule;
}());
RecipeRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(recipeRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], RecipeRoutingModule);

//# sourceMappingURL=recipes-routing.module.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_inline_href__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_inline_href___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_inline_href__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_recipe_list_recipe_list_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_recipe_details_recipe_details_component__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_recipe_form_recipe_form_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_recipe_edit_recipe_edit_component__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_recipe_print_recipe_print_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_recipe_service__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_current_query_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__recipes_routing_module__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_calc_servings_pipe__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_filter_recipes_pipe__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_difficulty_string_pipe__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var RecipesModule = (function () {
    function RecipesModule() {
    }
    return RecipesModule;
}());
RecipesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__recipes_routing_module__["a" /* RecipeRoutingModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3_ng_inline_href__["InlineHrefDirective"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__components_recipe_details_recipe_details_component__["a" /* RecipeDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_recipe_form_recipe_form_component__["a" /* RecipeFormComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_recipe_list_recipe_list_component__["a" /* RecipeListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_recipe_edit_recipe_edit_component__["a" /* RecipeEditComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pipes_calc_servings_pipe__["a" /* CalcServingsPipe */],
            __WEBPACK_IMPORTED_MODULE_13__pipes_filter_recipes_pipe__["a" /* FilterRecipesPipe */],
            __WEBPACK_IMPORTED_MODULE_14__pipes_difficulty_string_pipe__["a" /* DifficultyStringPipe */],
            __WEBPACK_IMPORTED_MODULE_3_ng_inline_href__["InlineHrefDirective"],
            __WEBPACK_IMPORTED_MODULE_8__components_recipe_print_recipe_print_component__["a" /* RecipePrintComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_recipe_service__["a" /* RecipeService */],
            __WEBPACK_IMPORTED_MODULE_10__services_current_query_service__["a" /* CurrentQueryService */]
        ]
    })
], RecipesModule);

//# sourceMappingURL=recipes.module.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgIconComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SvgIconComponent = (function () {
    function SvgIconComponent() {
    }
    SvgIconComponent.prototype.ngOnInit = function () {
    };
    return SvgIconComponent;
}());
SvgIconComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'svg-icons',
        template: __webpack_require__(175),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [])
], SvgIconComponent);

//# sourceMappingURL=svg-icon.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".icon {\r\n  display: inline-block;\r\n  width: 1em;\r\n  height: 1em;\r\n  stroke-width: 0;\r\n  stroke: currentColor;\r\n  fill: currentColor;\r\n}\r\n.icon-clock-o {\r\n  width: 0.8571428571428571em;\r\n}\r\n.icon-user {\r\n  width: 0.7142857142857142em;\r\n}\r\n.icon-trash {\r\n  width: 0.7857142857142857em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<svg-icons></svg-icons>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<svg style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<defs>\r\n<symbol id=\"icon-spoon-knife\" viewBox=\"0 0 32 32\">\r\n<path d=\"M7 0c-3.314 0-6 3.134-6 7 0 3.31 1.969 6.083 4.616 6.812l-0.993 16.191c-0.067 1.098 0.778 1.996 1.878 1.996h1c1.1 0 1.945-0.898 1.878-1.996l-0.993-16.191c2.646-0.729 4.616-3.502 4.616-6.812 0-3.866-2.686-7-6-7zM27.167 0l-1.667 10h-1.25l-0.833-10h-0.833l-0.833 10h-1.25l-1.667-10h-0.833v13c0 0.552 0.448 1 1 1h2.604l-0.982 16.004c-0.067 1.098 0.778 1.996 1.878 1.996h1c1.1 0 1.945-0.898 1.878-1.996l-0.982-16.004h2.604c0.552 0 1-0.448 1-1v-13h-0.833z\"></path>\r\n</symbol>\r\n<symbol id=\"icon-chevron-left\" viewBox=\"0 0 21 28\">\r\n<path d=\"M18.297 4.703l-8.297 8.297 8.297 8.297c0.391 0.391 0.391 1.016 0 1.406l-2.594 2.594c-0.391 0.391-1.016 0.391-1.406 0l-11.594-11.594c-0.391-0.391-0.391-1.016 0-1.406l11.594-11.594c0.391-0.391 1.016-0.391 1.406 0l2.594 2.594c0.391 0.391 0.391 1.016 0 1.406z\"></path>\r\n</symbol>\r\n<symbol id=\"icon-user\" viewBox=\"0 0 20 28\">\r\n<title>user</title>\r\n<path d=\"M20 21.859c0 2.281-1.5 4.141-3.328 4.141h-13.344c-1.828 0-3.328-1.859-3.328-4.141 0-4.109 1.016-8.859 5.109-8.859 1.266 1.234 2.984 2 4.891 2s3.625-0.766 4.891-2c4.094 0 5.109 4.75 5.109 8.859zM16 8c0 3.313-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6z\"></path>\r\n</symbol>\r\n<symbol id=\"icon-clock-o\" viewBox=\"0 0 24 28\">\r\n<title>clock-o</title>\r\n<path d=\"M14 8.5v7c0 0.281-0.219 0.5-0.5 0.5h-5c-0.281 0-0.5-0.219-0.5-0.5v-1c0-0.281 0.219-0.5 0.5-0.5h3.5v-5.5c0-0.281 0.219-0.5 0.5-0.5h1c0.281 0 0.5 0.219 0.5 0.5zM20.5 14c0-4.688-3.813-8.5-8.5-8.5s-8.5 3.813-8.5 8.5 3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5zM24 14c0 6.625-5.375 12-12 12s-12-5.375-12-12 5.375-12 12-12 12 5.375 12 12z\"></path>\r\n</symbol>\r\n<symbol id=\"icon-edit\" viewBox=\"0 0 28 28\">\r\n<title>edit</title>\r\n<path d=\"M13.875 18.5l1.813-1.813-2.375-2.375-1.813 1.813v0.875h1.5v1.5h0.875zM20.75 7.25c-0.141-0.141-0.375-0.125-0.516 0.016l-5.469 5.469c-0.141 0.141-0.156 0.375-0.016 0.516s0.375 0.125 0.516-0.016l5.469-5.469c0.141-0.141 0.156-0.375 0.016-0.516zM22 16.531v2.969c0 2.484-2.016 4.5-4.5 4.5h-13c-2.484 0-4.5-2.016-4.5-4.5v-13c0-2.484 2.016-4.5 4.5-4.5h13c0.625 0 1.25 0.125 1.828 0.391 0.141 0.063 0.25 0.203 0.281 0.359 0.031 0.172-0.016 0.328-0.141 0.453l-0.766 0.766c-0.141 0.141-0.328 0.187-0.5 0.125-0.234-0.063-0.469-0.094-0.703-0.094h-13c-1.375 0-2.5 1.125-2.5 2.5v13c0 1.375 1.125 2.5 2.5 2.5h13c1.375 0 2.5-1.125 2.5-2.5v-1.969c0-0.125 0.047-0.25 0.141-0.344l1-1c0.156-0.156 0.359-0.187 0.547-0.109s0.313 0.25 0.313 0.453zM20.5 5l4.5 4.5-10.5 10.5h-4.5v-4.5zM27.438 7.063l-1.437 1.437-4.5-4.5 1.437-1.437c0.578-0.578 1.547-0.578 2.125 0l2.375 2.375c0.578 0.578 0.578 1.547 0 2.125z\"></path>\r\n</symbol>\r\n<symbol id=\"icon-trash\" viewBox=\"0 0 22 28\">\r\n<title>trash</title>\r\n<path d=\"M8 21.5v-11c0-0.281-0.219-0.5-0.5-0.5h-1c-0.281 0-0.5 0.219-0.5 0.5v11c0 0.281 0.219 0.5 0.5 0.5h1c0.281 0 0.5-0.219 0.5-0.5zM12 21.5v-11c0-0.281-0.219-0.5-0.5-0.5h-1c-0.281 0-0.5 0.219-0.5 0.5v11c0 0.281 0.219 0.5 0.5 0.5h1c0.281 0 0.5-0.219 0.5-0.5zM16 21.5v-11c0-0.281-0.219-0.5-0.5-0.5h-1c-0.281 0-0.5 0.219-0.5 0.5v11c0 0.281 0.219 0.5 0.5 0.5h1c0.281 0 0.5-0.219 0.5-0.5zM7.5 6h7l-0.75-1.828c-0.047-0.063-0.187-0.156-0.266-0.172h-4.953c-0.094 0.016-0.219 0.109-0.266 0.172zM22 6.5v1c0 0.281-0.219 0.5-0.5 0.5h-1.5v14.812c0 1.719-1.125 3.187-2.5 3.187h-13c-1.375 0-2.5-1.406-2.5-3.125v-14.875h-1.5c-0.281 0-0.5-0.219-0.5-0.5v-1c0-0.281 0.219-0.5 0.5-0.5h4.828l1.094-2.609c0.313-0.766 1.25-1.391 2.078-1.391h5c0.828 0 1.766 0.625 2.078 1.391l1.094 2.609h4.828c0.281 0 0.5 0.219 0.5 0.5z\"></path>\r\n</symbol>\r\n<symbol id=\"icon-star-o\" viewBox=\"0 0 26 28\">\r\n<title>star-o</title>\r\n<path d=\"M17.766 15.687l4.781-4.641-6.594-0.969-2.953-5.969-2.953 5.969-6.594 0.969 4.781 4.641-1.141 6.578 5.906-3.109 5.891 3.109zM26 10.109c0 0.281-0.203 0.547-0.406 0.75l-5.672 5.531 1.344 7.812c0.016 0.109 0.016 0.203 0.016 0.313 0 0.422-0.187 0.781-0.641 0.781-0.219 0-0.438-0.078-0.625-0.187l-7.016-3.687-7.016 3.687c-0.203 0.109-0.406 0.187-0.625 0.187-0.453 0-0.656-0.375-0.656-0.781 0-0.109 0.016-0.203 0.031-0.313l1.344-7.812-5.688-5.531c-0.187-0.203-0.391-0.469-0.391-0.75 0-0.469 0.484-0.656 0.875-0.719l7.844-1.141 3.516-7.109c0.141-0.297 0.406-0.641 0.766-0.641s0.625 0.344 0.766 0.641l3.516 7.109 7.844 1.141c0.375 0.063 0.875 0.25 0.875 0.719z\"></path>\r\n</symbol>\r\n</defs>\r\n</svg>"

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);


/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeService = (function () {
    function RecipeService(http) {
        this.http = http;
    }
    // Get all recipes from the API
    RecipeService.prototype.getAllRecipes = function () {
        return this.http.get('api/recipes')
            .map(function (res) { return res.json(); });
    };
    RecipeService.prototype.getRecipe = function (recipeId) {
        return this.http.get('api/recipe/' + recipeId)
            .map(function (res) { return res.json(); });
    };
    RecipeService.prototype.addRecipe = function (newRecipe) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/recipe', JSON.stringify(newRecipe), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    RecipeService.prototype.deleteRecipe = function (recipeId) {
        return this.http.delete('api/recipe/' + recipeId)
            .map(function (res) { return res.json(); });
    };
    RecipeService.prototype.updateRecipe = function (updRecipe) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('api/recipe/' + updRecipe._id, JSON.stringify(updRecipe), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return RecipeService;
}());
RecipeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], RecipeService);

var _a;
//# sourceMappingURL=recipe.service.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentQueryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrentQueryService = (function () {
    function CurrentQueryService() {
        this.query = {
            ingrQuery: '',
            ctgQuery: ''
        };
    }
    CurrentQueryService.prototype.setQuery = function (ingr, ctg) {
        this.query = {
            ingrQuery: ingr,
            ctgQuery: ctg
        };
    };
    CurrentQueryService.prototype.getQuery = function () {
        return this.query;
    };
    return CurrentQueryService;
}());
CurrentQueryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], CurrentQueryService);

//# sourceMappingURL=current-query.service.js.map

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n.active {\r\n  background: lightblue;\r\n}\r\n\r\n.top-margin {\r\n  margin-top: 20px;\r\n}\r\n\r\n.icon-user {\r\n  height: 1em;\r\n  width: 1em;\r\n}\r\n.icon-clock-o {\r\n  height: 1em;\r\n  width: 1em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_recipe_service__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_current_query_service__ = __webpack_require__(212);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipeDetailsComponent = (function () {
    function RecipeDetailsComponent(recipeService, queryService, route, router) {
        this.recipeService = recipeService;
        this.queryService = queryService;
        this.route = route;
        this.router = router;
    }
    RecipeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.recipeService.getRecipe(params['id']); })
            .subscribe(function (recipe) {
            _this.recipe = recipe;
            _this.desiredServings = recipe.servings;
        });
    };
    RecipeDetailsComponent.prototype.gotoRecipes = function () {
        this.router.navigate(['/recipes']);
    };
    RecipeDetailsComponent.prototype.searchCtg = function (ctg) {
        this.queryService.setQuery('', ctg);
        this.gotoRecipes();
    };
    RecipeDetailsComponent.prototype.cooked = function () {
        ++this.recipe.cookCount;
        this.recipeService.updateRecipe(this.recipe)
            .subscribe();
    };
    RecipeDetailsComponent.prototype.edit = function () {
        this.router.navigate(['/recipe', this.recipe._id, 'edit']);
    };
    RecipeDetailsComponent.prototype.deleteRecipe = function () {
        this.recipeService.deleteRecipe(this.recipe._id)
            .subscribe();
    };
    RecipeDetailsComponent.prototype.printView = function () {
        this.router.navigate(['/recipe', this.recipe._id, 'print']);
    };
    return RecipeDetailsComponent;
}());
RecipeDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(221),
        styles: [__webpack_require__(218), __webpack_require__(213)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_recipe_service__["a" /* RecipeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_current_query_service__["a" /* CurrentQueryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_current_query_service__["a" /* CurrentQueryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], RecipeDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=recipe-details.component.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recipe__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_recipe_service__ = __webpack_require__(211);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};






var RecipeEditComponent = (function () {
    function RecipeEditComponent(recipeService, route, router) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
        this.filestackKey = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].filestackKey;
        this.newIngredient = new __WEBPACK_IMPORTED_MODULE_4__recipe__["a" /* Ingredient */]('', '');
    }
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.recipeService.getRecipe(params['id']); })
            .subscribe(function (recipe) { return _this.recipe = recipe; });
    };
    RecipeEditComponent.prototype.save = function () {
        this.recipeService.updateRecipe(this.recipe)
            .subscribe();
    };
    RecipeEditComponent.prototype.addIngredient = function () {
        if (this.newIngredient) {
            var ingr = this.newIngredient;
            this.recipe.ingredients.push(ingr);
            this.newIngredient = new __WEBPACK_IMPORTED_MODULE_4__recipe__["a" /* Ingredient */]('', '');
        }
    };
    RecipeEditComponent.prototype.removeIngredient = function (ingredient) {
        this.recipe.ingredients.splice(this.recipe.ingredients.indexOf(ingredient), 1);
    };
    RecipeEditComponent.prototype.addCategory = function (category) {
        if (!this.recipe.categories) {
            this.recipe.categories = [category];
        }
        else if (this.recipe.categories.includes(category)) {
            // leave the categories as is
        }
        else {
            this.recipe.categories.push(category);
        }
    };
    RecipeEditComponent.prototype.removeCategory = function (category) {
        this.recipe.categories.splice(this.recipe.categories.indexOf(category), 1);
    };
    RecipeEditComponent.prototype.showHeroPicker = function () {
        return __awaiter(this, void 0, void 0, function () {
            var client, result, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = filestack.init(this.filestackKey);
                        return [4 /*yield*/, client.pick({
                                accept: ['image/*'],
                                maxFiles: 1
                            })];
                    case 1:
                        result = _a.sent();
                        url = result.filesUploaded[0].url;
                        this.recipe.heroImage = url;
                        return [2 /*return*/];
                }
            });
        });
    };
    RecipeEditComponent.prototype.showDescPicker = function () {
        return __awaiter(this, void 0, void 0, function () {
            var client, result, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = filestack.init(this.filestackKey);
                        return [4 /*yield*/, client.pick({
                                accept: ['image/*'],
                                maxFiles: 1
                            })];
                    case 1:
                        result = _a.sent();
                        url = result.filesUploaded[0].url;
                        this.recipe.descrImage = url;
                        return [2 /*return*/];
                }
            });
        });
    };
    RecipeEditComponent.prototype.gotoRecipe = function () {
        this.router.navigate(['/recipe', this.recipe._id]);
    };
    return RecipeEditComponent;
}());
RecipeEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(222),
        styles: [__webpack_require__(219), __webpack_require__(213)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_recipe_service__["a" /* RecipeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], RecipeEditComponent);

var _a, _b, _c;
//# sourceMappingURL=recipe-edit.component.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipe__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recipe_service__ = __webpack_require__(211);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};





var RecipeFormComponent = (function () {
    function RecipeFormComponent(recipeService, router) {
        this.recipeService = recipeService;
        this.router = router;
        this.filestackKey = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].filestackKey;
        this.ingredients = [new __WEBPACK_IMPORTED_MODULE_3__recipe__["a" /* Ingredient */]('', '')];
        this.newIngredient = new __WEBPACK_IMPORTED_MODULE_3__recipe__["a" /* Ingredient */]('', '');
        this.categories = [];
        this.model = new __WEBPACK_IMPORTED_MODULE_3__recipe__["b" /* Recipe */]('', 2, 0, 1, 0, this.ingredients, '');
        // helper variables
        this.ingredientAdded = false;
    }
    RecipeFormComponent.prototype.addRecipe = function () {
        if (this.categories.length > 0) {
            this.model.categories = this.categories;
        }
        this.recipeService.addRecipe(this.model)
            .subscribe();
    };
    RecipeFormComponent.prototype.addIngredient = function () {
        if (this.newIngredient) {
            var ingr = this.newIngredient;
            this.ingredients.push(ingr);
            this.newIngredient = new __WEBPACK_IMPORTED_MODULE_3__recipe__["a" /* Ingredient */]('', '');
        }
        if (!this.ingredientAdded) {
            // Remove initial empty ingredient on first addition
            this.ingredients.splice(0, 1);
            this.ingredientAdded = true;
        }
    };
    RecipeFormComponent.prototype.removeIngredient = function (ingredient) {
        this.ingredients.splice(this.ingredients.indexOf(ingredient), 1);
    };
    RecipeFormComponent.prototype.addCategory = function (category) {
        if (!this.categories.includes(category)) {
            this.categories.push(category);
        }
    };
    RecipeFormComponent.prototype.removeCategory = function (category) {
        this.categories.splice(this.categories.indexOf(category), 1);
    };
    RecipeFormComponent.prototype.showHeroPicker = function () {
        return __awaiter(this, void 0, void 0, function () {
            var client, result, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = filestack.init(this.filestackKey);
                        return [4 /*yield*/, client.pick({
                                accept: ['image/*'],
                                maxFiles: 1
                            })];
                    case 1:
                        result = _a.sent();
                        url = result.filesUploaded[0].url;
                        this.heroFilename = result.filesUploaded[0].filename;
                        this.model.heroImage = url;
                        return [2 /*return*/];
                }
            });
        });
    };
    RecipeFormComponent.prototype.showDescPicker = function () {
        return __awaiter(this, void 0, void 0, function () {
            var client, result, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = filestack.init(this.filestackKey);
                        return [4 /*yield*/, client.pick({
                                accept: ['image/*'],
                                maxFiles: 1
                            })];
                    case 1:
                        result = _a.sent();
                        url = result.filesUploaded[0].url;
                        this.descrFilename = result.filesUploaded[0].filename;
                        this.model.descrImage = url;
                        return [2 /*return*/];
                }
            });
        });
    };
    RecipeFormComponent.prototype.gotoRecipes = function () {
        this.router.navigate(['/recipes']);
    };
    RecipeFormComponent.prototype.show = function () {
        console.log(this.model);
    };
    return RecipeFormComponent;
}());
RecipeFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(223),
        styles: [__webpack_require__(213)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_recipe_service__["a" /* RecipeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], RecipeFormComponent);

var _a, _b;
//# sourceMappingURL=recipe-form.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_recipe_service__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_current_query_service__ = __webpack_require__(212);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipeListComponent = (function () {
    function RecipeListComponent(router, recipeService, queryService) {
        this.router = router;
        this.recipeService = recipeService;
        this.queryService = queryService;
        this.ingrQuery = '';
        this.ctgQuery = '';
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // retrieve recipes from the API
        this.recipeService.getAllRecipes().subscribe(function (recipes) {
            _this.recipes = recipes;
            _this.getQuery();
        });
    };
    RecipeListComponent.prototype.getQuery = function () {
        this.ingrQuery = this.queryService.getQuery().ingrQuery;
        this.ctgQuery = this.queryService.getQuery().ctgQuery;
    };
    RecipeListComponent.prototype.onSelect = function (recipe) {
        this.queryService.setQuery(this.ingrQuery, this.ctgQuery);
        this.router.navigate(['/recipe', recipe._id]);
    };
    RecipeListComponent.prototype.newRecipe = function () {
        this.router.navigate(['/recipes/new']);
    };
    return RecipeListComponent;
}());
RecipeListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(224),
        styles: [__webpack_require__(220)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_recipe_service__["a" /* RecipeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_current_query_service__["a" /* CurrentQueryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_current_query_service__["a" /* CurrentQueryService */]) === "function" && _c || Object])
], RecipeListComponent);

var _a, _b, _c;
//# sourceMappingURL=recipe-list.component.js.map

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 992px) {\r\n    .mb-lg-4 {\r\n        margin-top: 0 !important;\r\n    }   \r\n}\r\n\r\n.img-fullwidth {\r\n    width: 100%;\r\n    height: 300px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n.top-info {\r\n    line-height: 34px; \r\n    font-size: 16px;\r\n}\r\n\r\n.top-info .icon {\r\n    margin-right: 10px;\r\n    line-height: 34px;\r\n}\r\n\r\n.icon.icon-spoon-knife {\r\n    fill: #222;\r\n    position: absolute;\r\n    top: 50px;\r\n    right: 30px;\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n.icon.icon-chevron-left {\r\n    fill: #222;\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 5px;\r\n    width: 2em;\r\n    height: 2em;\r\n}\r\n\r\n.icon.icon-star-o {\r\n    width: 0.9285714285714285em;\r\n    height: 0.9285714285714285em;\r\n}\r\n\r\n.icon {\r\n    width: 1em;\r\n    height: 1em;\r\n}\r\n\r\n.badge.cook-badge {\r\n    background-color: #222;\r\n    position: absolute;\r\n    top: 50px;\r\n    right: 5px;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .icon.icon-spoon-knife {\r\n        top: 20px;\r\n    }\r\n\r\n    .icon.icon-chevron-left {\r\n        top: 20px;\r\n    }\r\n\r\n    .badge.cook-badge {\r\n        top: 20px;\r\n    }\r\n}\r\n\r\n.panel.panel-horizontal {\r\n    display:table;\r\n    width:100%;\r\n}\r\n.panel.panel-horizontal > .panel-heading, .panel.panel-horizontal > .panel-body, .panel.panel-horizontal > .panel-footer {\r\n    display:table-cell;\r\n    padding: 6px;\r\n}\r\n.panel.panel-horizontal > .panel-heading, .panel.panel-horizontal > .panel-footer {\r\n    width: 25%;\r\n    border:0;\r\n    vertical-align: middle;\r\n}\r\n.panel.panel-horizontal > .panel-heading {\r\n    border-right: 1px solid #ddd;\r\n    border-top-right-radius: 0;\r\n    border-bottom-left-radius: 4px;\r\n}\r\n.panel.panel-horizontal > .panel-footer {\r\n    border-left: 1px solid #ddd;\r\n    border-top-left-radius: 0;\r\n    border-bottom-right-radius: 4px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".icon-trash {\r\n  width: 0.7857142857142857em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 992px) {\r\n    .recipe-block {\r\n        height: 125px;\r\n    }\r\n}\r\n\r\n.thumb-img {\r\n    height: 250px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"recipe\">\r\n  <svg class=\"icon icon-chevron-left click\" (click)=\"gotoRecipes()\"><use inlineHref=\"#icon-chevron-left\"></use></svg>\r\n  <svg class=\"icon icon-spoon-knife click\" (click)=\"cooked()\"><use inlineHref=\"#icon-spoon-knife\"></use></svg>\r\n  <span class=\"badge cook-badge\">{{ recipe.cookCount }}</span>\r\n</div>\r\n<div class=\"container\" *ngIf=\"recipe\">\r\n  <h1 class=\"display-3 text-center mt-4 px-1\">{{ recipe.title }}</h1>\r\n  <hr class=\"my-4\">\r\n  <img *ngIf=\"recipe.heroImage\" class=\"img-fullwidth\" src=\"{{recipe.heroImage}}\" alt=\"{{recipe.title}}\">\r\n  <div class=\"row my-4\">\r\n    <div class=\"col-4 col-lg-2\">\r\n      <div class=\"input-group\">\r\n        <div class=\"input-group-addon\"><svg class=\"icon icon-user\"><use inlineHref=\"#icon-user\"></use></svg></div>\r\n        <input type=\"number\" [(ngModel)]=\"desiredServings\" name=\"servings\" id=\"servings\" class=\"form-control\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-8 col-lg-5 top-info text-center\">\r\n      <div *ngIf=\"recipe.categories\"><span *ngFor=\"let ctg of recipe.categories\" class=\"click\" (click)=\"searchCtg(ctg)\"> #<strong>{{ ctg }}</strong> </span></div>\r\n    </div>\r\n    <div class=\"col-6 col-lg-3 mt-3 mt-lg-0 top-info\">\r\n      <svg class=\"icon icon-clock-o\">\r\n        <use inlineHref=\"#icon-clock-o\"></use>\r\n      </svg>\r\n      <span>{{ recipe.duration }} Minuten</span>\r\n    </div>\r\n    <div class=\"col-6 col-lg-2 mt-3 mt-lg-0 top-info\">\r\n      <svg class=\"icon icon-star-o\">\r\n        <use inlineHref=\"#icon-star-o\"></use>\r\n      </svg>\r\n      <span>{{ recipe.difficulty | difficultyString }}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <h2 class=\"mb-4 section-header\">Zutaten</h2>\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item\" *ngFor=\"let ingredient of recipe.ingredients\">\r\n          {{ ingredient.name | calcServings:recipe.servings:desiredServings }}\r\n          <span *ngIf=\"ingredient.hint\" class=\"ml-1\">({{ ingredient.hint }})</span>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <h2 class=\"my-4 mb-lg-4 section-header\">Zubereitung</h2>\r\n      <p *ngIf=\"recipe.description\">{{ recipe.description }}</p>\r\n      <img #descrImage *ngIf=\"recipe.descrImage\" src=\"{{recipe.descrImage}}\"\r\n          alt=\"Recipe description\" class=\"img-fluid\">\r\n    </div>\r\n  </div>\r\n  <div class=\"my-3\">\r\n    <button class=\"btn btn-primary click\" type=\"button\" (click)=\"edit()\">Bearbeiten</button>\r\n    <button class=\"btn btn-danger click\" type=\"button\" data-toggle=\"modal\" data-target=\"#deleteModal\">Löschen</button>\r\n    <button class=\"btn btn-secondary float-right hidden-sm-down click\" type=\"button\" (click)=\"printView()\">Druckansicht</button>\r\n  </div>\r\n\r\n  <div class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" id=\"deleteModal\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n          <h4 class=\"modal-title\">Möchtest du \"{{ recipe.title }}\" wirklich löschen?</h4>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default click\" data-dismiss=\"modal\">Abbrechen</button>\r\n          <button type=\"button\" class=\"btn btn-danger click\" (click)=\"deleteRecipe(); gotoRecipes()\" data-dismiss=\"modal\">Löschen</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n  <!-- /.modal -->\r\n</div> "

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"recipe\" class=\"container\">\r\n  <form #recipeForm=\"ngForm\">\r\n    <h1 class=\"display-3 text-center mt-4\">{{ recipe.title }}</h1>\r\n    <hr class=\"my-4\">\r\n    <img *ngIf=\"recipe.heroImage\" class=\"img-fluid mb-3\" src=\"{{recipe.heroImage}}\" alt=\"{{recipe.title}}\">\r\n    <div class=\"input-group\">\r\n        <input type=\"text\" [(ngModel)]=\"recipe.title\" name=\"title\" class=\"form-control \" id=\"title\" required #title=\"ngModel\" placeholder=\"Titel\">\r\n        <span class=\"input-group-btn\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"showHeroPicker()\">Neues Bild</button>\r\n        </span>\r\n    </div>\r\n    <div [hidden]=\"title.valid || title.pristine\"\r\n          class=\"alert alert-danger\">\r\n      Das Rezept muss einen Titel haben\r\n    </div>\r\n\r\n    <div class=\"row form-group mt-3 w-100 justify-content-center\">\r\n      <div class=\"col-sm-4 col-lg-2\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-addon\"><svg class=\"icon icon-user\"><use inlineHref=\"#icon-user\"></use></svg></div>\r\n          <input type=\"number\" [(ngModel)]=\"recipe.servings\" name=\"servings\" id=\"servings\" class=\"form-control\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-6 offset-sm-2 offset-md-0 col-md-4 col-lg-4 offset-lg-1\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-addon\"><svg class=\"icon icon-clock-o\"><use inlineHref=\"#icon-clock-o\"></use></svg></div>\r\n          <input type=\"number\" [(ngModel)]=\"recipe.duration\" name=\"duration\" id=\"duration\" class=\"form-control\">\r\n          <div class=\"input-group-addon\">Minuten</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-4 col-lg-4 offset-lg-1 mt-3 mt-md-0\">\r\n        <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n          <button type=\"button\" class=\"btn btn-secondary click\" [ngClass]=\"{'active':recipe.difficulty==1}\" (click)=\"recipe.difficulty=1\">Einfach</button>\r\n          <button type=\"button\" class=\"btn btn-secondary click\" [ngClass]=\"{'active':recipe.difficulty==2}\" (click)=\"recipe.difficulty=2\">Mittel</button>\r\n          <button type=\"button\" class=\"btn btn-secondary click\" [ngClass]=\"{'active':recipe.difficulty==3}\" (click)=\"recipe.difficulty=3\">Schwer</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <h2 class=\"mb-3 section-header\">Zutaten</h2>\r\n    <div class=\"mb-2\" *ngFor=\"let ingr of recipe.ingredients; let i = index\">\r\n      <div class=\"d-inline-block\">\r\n        {{ ingr.name }} <span *ngIf=\"ingr.hint!=''\">({{ ingr.hint }})</span>\r\n        <button type=\"button\" class=\"close pl-3 click\" (click)=removeIngredient(ingr)><span aria-hidden=\"true\">&times;</span></button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row form-group mt-3\">\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-primary click hidden-lg-up\" type=\"button\" (click)=\"addIngredient()\">Enter</button>\r\n          </span>\r\n          <input type=\"text\" [(ngModel)]=\"newIngredient.name\" name=\"name\" class=\"form-control\" id=\"name\" \r\n                (keyup.enter)=\"addIngredient()\" placeholder=\"Enter drücken zum Hinzufügen\" #ingredient>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-addon\">Hinweis</div>\r\n          <input type=\"text\" [(ngModel)]=\"newIngredient.hint\" name=\"hint\" class=\"form-control\" id=\"hint\" \r\n                (keyup.enter)=\"addIngredient(); ingredient.focus()\" placeholder=\"Klammern werden automatisch gesetzt\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <h2 class=\"mb-3 section-header\">Info</h2>\r\n    <textarea rows=\"3\" [(ngModel)]=\"recipe.description\" name=\"description\" class=\"form-control\" id=\"description\" #description=\"ngModel\" placeholder=\"Beschreibung...\"></textarea>\r\n    <img *ngIf=\"recipe.descrImage\" class=\"img-fluid my-3\" src=\"{{recipe.descrImage}}\" alt=\"Recipe description\">\r\n    <button type=\"button\" class=\"btn btn-default click mt-3\" (click)=showDescPicker()>Neue Anleitung</button>\r\n\r\n      <h2 class=\"my-3 section-header\">Kategorien</h2>\r\n      <div class=\"mb-2 d-inline-block\" *ngFor=\"let ctg of recipe.categories\">\r\n        {{ ctg }}\r\n        <button type=\"button\" class=\"close px-2 click\" (click)=\"removeCategory(ctg)\">x</button>  \r\n      </div>\r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-btn\">\r\n          <button class=\"btn btn-primary click hidden-lg-up\" type=\"button\" (click)=\"addCategory(category.value); category.value=''\">Enter</button>\r\n        </span>\r\n        <input #category type=\"text\" name=\"category\" class=\"form-control\" id=\"category\" \r\n              (keyup.enter)=\"addCategory(category.value); category.value=''\" placeholder=\"Enter drücken zum Hinzufügen\">\r\n      </div>\r\n      \r\n    <button type=\"button\" (click)=\"save(); gotoRecipe(recipe)\" class=\"btn btn-success my-3 click\" [disabled]=\"!recipeForm.form.valid\">Speichern</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form #recipeForm=\"ngForm\">\r\n    <h1 class=\"display-3 text-center mt-4\">{{ model.title }}</h1>\r\n    <hr class=\"my-4\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" [(ngModel)]=\"model.title\" name=\"title\" class=\"form-control \" id=\"title\" required #title=\"ngModel\" placeholder=\"Titel\">\r\n      <span class=\"input-group-btn\">\r\n        <button class=\"btn btn-secondary click\" type=\"button\" (click)=\"showHeroPicker()\">Titelbild</button>\r\n      </span>\r\n    </div>\r\n    <div class=\"text-right py-2\" *ngIf=\"model.heroImage\"> \"{{ heroFilename }}\" wurde erfolgreich hochgeladen!</div>\r\n    <div [hidden]=\"title.valid || title.pristine\"\r\n          class=\"alert alert-danger\">\r\n      Das Rezept muss einen Titel haben\r\n    </div>\r\n\r\n    <div class=\"row form-group mt-3 w-100 justify-content-center\">\r\n      <div class=\"col-sm-4 col-lg-2\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-addon\"><svg class=\"icon icon-user\"><use inlineHref=\"#icon-user\"></use></svg></div>\r\n          <input type=\"number\" [(ngModel)]=\"model.servings\" name=\"servings\" id=\"servings\" class=\"form-control\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-6 offset-sm-2 offset-md-0 col-md-4 col-lg-4 offset-lg-1\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-addon\"><svg class=\"icon icon-clock-o\"><use inlineHref=\"#icon-clock-o\"></use></svg></div>\r\n          <input type=\"number\" [(ngModel)]=\"model.duration\" name=\"duration\" id=\"duration\" class=\"form-control\">\r\n          <div class=\"input-group-addon\">Minuten</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-4 col-lg-4 offset-lg-1 mt-3 mt-md-0\">\r\n        <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n          <button type=\"button\" class=\"btn btn-secondary click\" [ngClass]=\"{'active':model.difficulty==1}\" (click)=\"model.difficulty=1\">Einfach</button>\r\n          <button type=\"button\" class=\"btn btn-secondary click\" [ngClass]=\"{'active':model.difficulty==2}\" (click)=\"model.difficulty=2\">Mittel</button>\r\n          <button type=\"button\" class=\"btn btn-secondary click\" [ngClass]=\"{'active':model.difficulty==3}\" (click)=\"model.difficulty=3\">Schwer</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <h2 class=\"mb-3 section-header\">Zutaten</h2>\r\n    <div class=\"mb-2\" *ngFor=\"let ingr of ingredients; let i = index\">\r\n      <div *ngIf=\"ingr.name != ''\" class=\"d-inline-block\">\r\n        {{ ingr.name }} <span *ngIf=\"ingr.hint!=''\">({{ ingr.hint }})</span>\r\n        <button *ngIf=\"ingredientAdded\" type=\"button\" class=\"close pl-3 click\" (click)=removeIngredient(ingr)><span aria-hidden=\"true\">&times;</span></button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row form-group mt-3\">\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-primary click hidden-lg-up\" type=\"button\" (click)=\"addIngredient()\">Enter</button>\r\n          </span>\r\n          <input type=\"text\" [(ngModel)]=\"newIngredient.name\" name=\"name\" class=\"form-control\" id=\"name\" \r\n                (keyup.enter)=\"addIngredient()\" placeholder=\"Enter drücken zum Hinzufügen\" #ingredient>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-addon\">Hinweis</div>\r\n          <input type=\"text\" [(ngModel)]=\"newIngredient.hint\" name=\"hint\" class=\"form-control\" id=\"hint\" \r\n                (keyup.enter)=\"addIngredient(); ingredient.focus()\" placeholder=\"Klammern werden automatisch gesetzt\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <h2 class=\"mb-3 section-header\">Info</h2>\r\n    <textarea rows=\"3\" [(ngModel)]=\"model.description\" name=\"description\" class=\"form-control\" id=\"description\" #description=\"ngModel\" placeholder=\"Beschreibung...\"></textarea>\r\n    <button type=\"button\" class=\"btn btn-default click mt-3\" (click)=showDescPicker()>Anleitung Hochladen</button>\r\n    <span *ngIf=\"model.descrImage\" class=\"pl-3\"> \"{{ descrFilename }}\" wurde erfolgreich hochgeladen!</span>\r\n\r\n    <h2 class=\"my-3 section-header\">Kategorien</h2>\r\n    <div class=\"mb-2 d-inline-block\" *ngFor=\"let ctg of categories\">\r\n      {{ ctg }}\r\n      <button type=\"button\" class=\"close px-2 click\" (click)=\"removeCategory(ctg)\"><span aria-hidden=\"true\">&times;</span></button>  \r\n    </div>\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-btn\">\r\n        <button class=\"btn btn-primary click hidden-lg-up\" type=\"button\" (click)=\"addCategory(category.value); category.value=''\">Enter</button>\r\n      </span>\r\n      <input #category type=\"text\" name=\"category\" class=\"form-control\" id=\"category\" \r\n            (keyup.enter)=\"addCategory(category.value); category.value=''\" placeholder=\"Enter drücken zum Hinzufügen\">\r\n    </div>\r\n\r\n    <button type=\"button\" (click)=\"addRecipe(); gotoRecipes()\" class=\"btn btn-success my-3 click\" [disabled]=\"!recipeForm.form.valid\">Speichern</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-3\">Maries und Georgs Rezeptebuch</h1>\r\n    <p class=\"lead\" >Durchsuche unser Kochbuch nach ausgewählten Rezepten, die wir hier mit Liebe zusammengestellt haben :)</p>\r\n    <hr class=\"my-4\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-5 mb-2 mb-md-0\">\r\n        <input [(ngModel)]=\"ingrQuery\" type=\"text\" class=\"form-control\" name=\"ingredient-search\" placeholder=\"Suche nach Zutaten z.B. Tomate, Kartoffel\">\r\n      </div>\r\n      <div class=\"col-md-5 mb-2 mb-md-0\">\r\n        <input [(ngModel)]=\"ctgQuery\" type=\"text\" class=\"form-control\" name=\"category-search\" placeholder=\"Suche nach Kategorien z.B. Pasta, Vegan\">\r\n      </div>\r\n      <div class=\"col-6 offset-3 offset-md-0 col-md-2\">\r\n        <button type=\"button\" class=\"btn btn-primary click\" (click)=\"newRecipe()\">Neues Rezept</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div *ngIf=\"recipes\" class=\"row\">\r\n    <div *ngFor=\"let recipe of recipes | filterRecipes:ingrQuery:ctgQuery\"\r\n      (click)=\"onSelect(recipe)\" class=\"col-lg-6 col-xl-4 click\">\r\n      <div class=\"card mb-4\">\r\n        <img *ngIf=\"recipe.heroImage\" class=\"card-img-top thumb-img\" src=\"{{recipe.heroImage}}\" alt=\"{{recipe.title}}\">\r\n        <img *ngIf=\"!recipe.heroImage\" class=\"card-img-top thumb-img\" src=\"../../../assets/images/comingsoon.jpg\" alt=\"Coming soon\">\r\n        <div class=\"card-block recipe-block\">\r\n          <h3 class=\"card-title\">{{ recipe.title }}</h3>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <svg class=\"icon icon-clock-o\">\r\n            <use inlineHref=\"#icon-clock-o\"></use>\r\n          </svg>\r\n          <span>{{ recipe.duration }} Minuten</span>\r\n          <div *ngIf=\"recipe.categories\"><span *ngFor=\"let ctg of recipe.categories\" class=\"click\"> #<strong>{{ ctg }}</strong> </span></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_recipe_service__ = __webpack_require__(211);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipePrintComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipePrintComponent = (function () {
    function RecipePrintComponent(recipeService, route, router) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
    }
    RecipePrintComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.recipeService.getRecipe(params['id']); })
            .subscribe(function (recipe) { return _this.recipe = recipe; });
    };
    RecipePrintComponent.prototype.back = function () {
        this.router.navigate(['/recipe', this.recipe._id]);
    };
    return RecipePrintComponent;
}());
RecipePrintComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-recipe-print',
        template: __webpack_require__(227),
        styles: [__webpack_require__(226), __webpack_require__(218)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_recipe_service__["a" /* RecipeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], RecipePrintComponent);

var _a, _b, _c;
//# sourceMappingURL=recipe-print.component.js.map

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "@media print {\r\n    .top-icons {\r\n        display: none;\r\n    }\r\n\r\n    h1::first-letter, h4::first-letter {\r\n        margin-top: 0;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"recipe\" class=\"top-icons\">\n  <svg class=\"icon icon-chevron-left click\" (click)=\"back()\"><use inlineHref=\"#icon-chevron-left\"></use></svg>\n  <svg class=\"icon icon-spoon-knife click\"><use inlineHref=\"#icon-spoon-knife\"></use></svg>\n  <span class=\"badge cook-badge\">{{ recipe.cookCount }}</span>\n</div>\n\n<div class=\"container\" *ngIf=\"recipe\">\n  <h1 class=\"text-center mt-4 px-1\">{{ recipe.title }}</h1>\n  <div class=\"row my-4\">\n    <div class=\"col top-info\">\n        <svg class=\"icon icon-user\">\n          <use inlineHref=\"#icon-user\"></use>\n        </svg>\n        <span>{{ recipe.servings }}</span>\n    </div>\n    <div class=\"col top-info\">\n      <svg class=\"icon icon-clock-o\">\n        <use inlineHref=\"#icon-clock-o\"></use>\n      </svg>\n      <span>{{ recipe.duration }} Minuten</span>\n    </div>\n    <div class=\"col top-info\">\n      <svg class=\"icon icon-star-o\">\n        <use inlineHref=\"#icon-star-o\"></use>\n      </svg>\n      <span>{{ recipe.difficulty | difficultyString }}</span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <h4 class=\"mb-2 section-header\">Zutaten</h4>\n      <ul class=\"list-unstyled\">\n        <li class=\"mb-1\"*ngFor=\"let ingredient of recipe.ingredients\">\n          - {{ ingredient.name }}\n          <span *ngIf=\"ingredient.hint\" class=\"ml-1\">({{ ingredient.hint }})</span>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-6\">\n      <h4 class=\"mb-2 section-header\">Zubereitung</h4>\n      <p *ngIf=\"recipe.description\">{{ recipe.description }}</p>\n      <img #descrImage *ngIf=\"recipe.descrImage\" src=\"{{recipe.descrImage}}\"\n          alt=\"Recipe description\" class=\"img-fluid\">\n    </div>\n  </div>\n"

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    filestackKey: 'AwD48ceQaWtGBs9plMog7z'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 94;


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(36);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.bundle.js.map