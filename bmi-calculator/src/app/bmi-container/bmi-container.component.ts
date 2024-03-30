import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-container',
  standalone: true,
  imports: [],
  templateUrl: './bmi-container.component.html',
  styleUrl: './bmi-container.component.css'
})
export class BmiContainerComponent {
  metric: boolean = true;
  ChangeMetric(): void {
    this.metric = !this.metric;
  }
}
