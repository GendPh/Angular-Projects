import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent {
  @Input("GetLabel") label: string;
  @Input("GetPlaceholder") placeholder: string;
  @Input("GetType") type: string = "text";
  @Input("GetRegex") regex: any = /^[a-zA-Z\s]+$/;
  private regexPatterns = {
    numbersOnly: /^\d+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    alphanumeric: /^[a-zA-Z0-9]+$/,
    phoneNumber: /^\+\d{1,3}-\d{3}-\d{3}-\d{4}$/,
  };

  inputValue: string = "";
  inputInvalid: boolean = false;

  OnBlurVerifyInput() {
    this.inputValue = this.inputValue.trim();
    if (this.inputValue.length > 0) {
      this.inputInvalid = !this.regex.test(this.inputValue);
    }
  }
}
