import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-container-meaning',
  standalone: true,
  imports: [],
  templateUrl: './bmi-container-meaning.component.html',
  styleUrl: './bmi-container-meaning.component.css'
})
export class BmiContainerMeaningComponent {
  bmi: number = 0;

  ngOnInit(): void {
    this.bmi = 0;
  }

  receiveBmiValue($event: number): void {
    this.bmi = $event;
  } 
}
