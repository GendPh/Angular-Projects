import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCart } from '../../Model/product.model';
import { CartService } from '../../Service/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop-container',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './shop-container.component.html',
  styleUrl: './shop-container.component.css'
})
export class ShopContainerComponent {
  cartList: ProductCart[] = [];
  cartTotal: number = 0;

  constructor(private cartService: CartService) {
    this.cartList = cartService.cartList;
    this.cartTotal = cartService.Total();
  }

  AddProduct(product: ProductCart) {
    const item = this.cartList.indexOf(product);
    if (this.cartList[item].quantity < 10) {
      this.cartService.IncreaseProduct(item);
      this.cartTotal = this.cartService.Total();
    }
  }

  ReduceProduct(product: ProductCart) {
    const item = this.cartList.indexOf(product);
    this.cartService.ReduceProduct(item);
    this.cartTotal = this.cartService.Total();
  }

  RemoveAll() {
    this.cartService.RemoveAll();
    this.cartTotal = 0;
  }
}
