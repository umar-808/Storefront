import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StoreService } from 'src/app/core/store/store.service';

import { CartService } from 'src/app/shared/services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'molla-cart-menu',
	templateUrl: './cart-menu.component.html',
	styleUrls: ['./cart-menu.component.scss']
})

export class CartMenuComponent implements OnInit {

	currency: string

	constructor(private toastrService: ToastrService, private storeService: StoreService, public cartService: CartService) {
	}

	ngOnInit(): void {
		this.currency = this.storeService.getCurrency()
	}

	removeFromCart(event: Event, product: any, index: number) {
		this.cartService.deleteCartItem(product, index);
	}
}