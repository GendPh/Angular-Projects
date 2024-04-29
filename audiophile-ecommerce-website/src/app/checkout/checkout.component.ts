import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputFieldComponent } from '../input-field/input-field.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../Service/cart.service';
import { ProductCart } from '../../Model/product.model';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterLink, InputFieldComponent, CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  paymentMethod: string;
  eMoneyContainer: boolean = true;
  cart: ProductCart[] = [];

  constructor(private cartService: CartService) {
    this.cart = cartService.cartList;
    this.paymentMethod = 'e-money';
    console.log(this.cart);
  }

  SetPaymentMethod(method: string) {
    this.paymentMethod = method;
    this.eMoneyContainer = (method === 'e-money') ? true : false;
  }
}
