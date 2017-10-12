import {Component} from 'angular2/core';
import {CartService} from './cart.service';

@Component({
    selector: 'carts',
    templateUrl: "app/carts/cart.component.html",
    styleUrls: ["app/carts/cart.component.css"],
    providers: [CartService]
})
export class CartsComponent {
	title = "The title of cart page",
	total = 0;

	model:any={};
	clicked(event, id) {
		event.preventDefault();
		
		
		id = this.model.id || Math.floor(Math.random() * (921728736 - 632910392 + 1)) + 632910392;
		this.carts.push({
			id: id,
			title: this.model.title,
			price: this.model.price,
			quantity: this.model.quantity,
			body_html: this.model.body_html,
			image: this.model.image;
		});
	}
	edited(event, id) {
		event.preventDefault();
		

		this.model.id= id.id,
		this.model.title= id.title,
		this.model.price= id.price,
		this.model.quantity= id.quantity,
		this.model.body_html= id.body_html,
		this.model.image= id.image
	}
	deleted(e, id) {
		
		var index = -1;
		var val = id;
		var filteredObj = this.carts.find(function(item, i){
			if(item.id === val){
		    	index = i;
		    	return i;
			}
		});
		this.carts.splice(filteredObj,1);
	}
	constructor(cartService : CartService) {
	 	this.carts = cartService.getCarts();
	 	
	}
}