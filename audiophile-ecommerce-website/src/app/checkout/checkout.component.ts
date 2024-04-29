import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputFieldComponent } from '../input-field/input-field.component';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterLink, InputFieldComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  paymentMethod: string;
  eMoneyContainer: boolean = true;

  constructor() {
    this.paymentMethod = 'e-money';
  }

  SetPaymentMethod(method: string) {
    this.paymentMethod = method;
    this.eMoneyContainer = (method === 'e-money') ? true : false;
  }
}
