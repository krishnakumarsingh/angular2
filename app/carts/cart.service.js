System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var productes, products, CartService;
    return {
        setters:[],
        execute: function() {
            productes = [
                {
                    "id": 632910392,
                    "title": "IPod Nano - 8GB",
                    "price": 9999,
                    "quantity": 5,
                    "body_html": "<p>It's the small iPod with one very big idea: Video. Now the world's most popular music player, available in 4GB and 8GB models, lets you enjoy TV shows, movies, video podcasts, and more. The larger, brighter display means amazing picture quality. In six eye-catching colors, iPod nano is stunning all around. And with models starting at just <code>$149</code>, little speaks volumes.<\/p>",
                    "image": {
                        "id": 850703190,
                        "product_id": 632910392,
                        "position": 1,
                        "created_at": "2017-09-22T14:08:02-04:00",
                        "updated_at": "2017-09-22T14:08:02-04:00",
                        "width": 123,
                        "height": 456,
                        "src": "samsung-j7-1.png"
                    }
                },
                {
                    "id": 921728736,
                    "title": "IPod Touch 8GB",
                    "price": 12999,
                    "quantity": 1,
                    "body_html": "<p>The iPod Touch has the iPhone's multi-touch interface, with a physical home button off the touch screen. The home screen has a list of buttons for the available applications. In six eye-catching colors, iPod nano is stunning all around. And with models starting at just <code>$149</code>, little speaks volumes.<\/p>",
                    "image": {
                        "id": 850703190,
                        "product_id": 632910392,
                        "position": 1,
                        "created_at": "2017-09-22T14:08:02-04:00",
                        "updated_at": "2017-09-22T14:08:02-04:00",
                        "width": 123,
                        "height": 456,
                        "src": "mi-4i-1.jpg"
                    }
                }
            ];
            products = [
                {
                    "id": 632910392,
                    "title": "IPod Nano - 8GB",
                    "price": 9999,
                    "quantity": 5,
                    "body_html": "<p>It's the small iPod with one very big idea: Video. Now the world's most popular music player, available in 4GB and 8GB models, lets you enjoy TV shows, movies, video podcasts, and more. The larger, brighter display means amazing picture quality. In six eye-catching colors, iPod nano is stunning all around. And with models starting at just <code>$149</code>, little speaks volumes.<\/p>",
                    "image": "samsung-j7-1.png"
                },
                {
                    "id": 921728736,
                    "title": "IPod Touch 8GB",
                    "price": 12999,
                    "quantity": 1,
                    "body_html": "<p>The iPod Touch has the iPhone's multi-touch interface, with a physical home button off the touch screen. The home screen has a list of buttons for the available applications. In six eye-catching colors, iPod nano is stunning all around. And with models starting at just <code>$149</code>, little speaks volumes.<\/p>",
                    "image": "mi-4i-1.jpg"
                }
            ];
            CartService = (function () {
                function CartService() {
                }
                CartService.prototype.getCarts = function () {
                    return products;
                };
                return CartService;
            }());
            exports_1("CartService", CartService);
        }
    }
});
//# sourceMappingURL=cart.service.js.map