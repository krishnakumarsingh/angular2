System.register(['angular2/core', '../courses/courses.component', '../authors/authors.component', '../headers/Header.component', '../searches/search.component', '../carts/cart.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, Header_component_1, search_component_1, cart_component_1;
    var path, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (Header_component_1_1) {
                Header_component_1 = Header_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            },
            function (cart_component_1_1) {
                cart_component_1 = cart_component_1_1;
            }],
        execute: function() {
            path = "./app/app/";
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Hello";
                    this.name = "KK";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: path + "app.component.html",
                        styleUrls: [path + "app.component.css"],
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, Header_component_1.HeadersComponent, search_component_1.SearchesComponent, cart_component_1.CartsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map