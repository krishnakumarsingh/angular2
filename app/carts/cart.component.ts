import {Component} from 'angular2/core';
import {CartService} from './cart.service';

@Component({
    selector: 'carts',
    templateUrl: "app/carts/cart.component.html",
    styleUrls: ["app/carts/cart.component.css"],
    providers: [CartService]
})
export class CartsComponent {
	title = "The title of cart page";
	carts;
	 constructor(cartService : CartService) {
	 	this.carts = cartService.getCarts();
	 	console.log(this.carts)
	 }

}