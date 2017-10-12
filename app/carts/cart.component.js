System.register(['angular2/core', './cart.service'], function(exports_1, context_1) {
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
    var core_1, cart_service_1;
    var CartsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            }],
        execute: function() {
            CartsComponent = (function () {
                function CartsComponent(cartService) {
                    this.title = "The title of cart page";
                    this.total = 0;
                    this.model = {};
                    this.carts = cartService.getCarts();
                }
                CartsComponent.prototype.clicked = function (event, id) {
                    event.preventDefault();
                    id = this.model.id || Math.floor(Math.random() * (921728736 - 632910392 + 1)) + 632910392;
                    this.carts.push({
                        id: id,
                        title: this.model.title,
                        price: this.model.price,
                        quantity: this.model.quantity,
                        body_html: this.model.body_html,
                        image: this.model.image
                    });
                };
                CartsComponent.prototype.edited = function (event, id) {
                    event.preventDefault();
                    this.model.id = id.id,
                        this.model.title = id.title,
                        this.model.price = id.price,
                        this.model.quantity = id.quantity,
                        this.model.body_html = id.body_html,
                        this.model.image = id.image;
                };
                CartsComponent.prototype.deleted = function (e, id) {
                    var index = -1;
                    var val = id;
                    var filteredObj = this.carts.find(function (item, i) {
                        if (item.id === val) {
                            index = i;
                            return i;
                        }
                    });
                    this.carts.splice(filteredObj, 1);
                };
                CartsComponent = __decorate([
                    core_1.Component({
                        selector: 'carts',
                        templateUrl: "app/carts/cart.component.html",
                        styleUrls: ["app/carts/cart.component.css"],
                        providers: [cart_service_1.CartService]
                    }), 
                    __metadata('design:paramtypes', [cart_service_1.CartService])
                ], CartsComponent);
                return CartsComponent;
            }());
            exports_1("CartsComponent", CartsComponent);
        }
    }
});
//# sourceMappingURL=cart.component.js.map