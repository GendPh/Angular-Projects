import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = "Custom Card Title";
  @Input() color: string = "#000000";
  @Input() description: string = "Custom Card Description";
  @Input() img: string = "../../assets/icon-supervisor.svg";

  getStyle() {
    return {
      'border-top-color': this.color
    };
  }
}
