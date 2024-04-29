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

  inputValue: string = "";
  inputInvalid: boolean = false;

  OnBlurVerifyInput() {
    this.inputValue = this.inputValue.trim();
    if (this.inputValue.length > 0) {
      this.inputInvalid = !this.regex.test(this.inputValue);
    }
  }
}
