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
  bmiValue: number = 0;
  bmiDescription: string = "Your BMI suggests you're a healthy weight. Your ideal weight is between ";
  bmiRange: string = "63.3kgs - 85.2kgs";
  height: number = 0;
  weight: number = 0;
  heightFt: number = 0;
  heightIn: number = 0;
  weightSt: number = 0;
  weightLbs: number = 0;

  ChangeMetric(): void {
    this.metric = !this.metric;
    this.height = 0;
    this.weight = 0;
    this.heightFt = 0;
    this.heightIn = 0;
    this.weightSt = 0;
    this.weightLbs = 0;
    this.bmiValue = 0;
  }

  SetWeight(e: Event): void {
    this.weight = (e.target as HTMLInputElement).valueAsNumber;
    if (this.metric) {
      this.CalculateBMI(this.weight, this.height, 0, 0, 0, 0);
    }
  }
  SetHeight(e: Event): void {
    this.height = (e.target as HTMLInputElement).valueAsNumber;
    if (this.metric) {
      this.CalculateBMI(this.weight, this.height, 0, 0, 0, 0);
    }
  }
  SetWeightSt(e: Event): void {
    this.weightSt = (e.target as HTMLInputElement).valueAsNumber;
    if (!this.metric) {
      this.CalculateBMI(0, 0, this.weightSt, this.weightLbs, this.heightFt, this.heightIn);
    }
  }
  SetWeightLbs(e: Event): void {
    this.weightLbs = (e.target as HTMLInputElement).valueAsNumber;
    if (!this.metric) {
      this.CalculateBMI(0, 0, this.weightSt, this.weightLbs, this.heightFt, this.heightIn);
    }
  }
  SetHeightFt(e: Event): void {
    this.heightFt = (e.target as HTMLInputElement).valueAsNumber;
    if (!this.metric) {
      this.CalculateBMI(0, 0, this.weightSt, this.weightLbs, this.heightFt, this.heightIn);
    }
  }
  SetHeightIn(e: Event): void {
    this.heightIn = (e.target as HTMLInputElement).valueAsNumber;
    if (!this.metric) {
      this.CalculateBMI(0, 0, this.weightSt, this.weightLbs, this.heightFt, this.heightIn);
    }
  }

  CalculateBMI(weight: number, height: number, weightSt: number, weightLbs: number, heightFt: number, heightIn: number): void {
    if (this.metric) {
      this.bmiValue = this.metricCalculateBMI(weight, height);
    } else {
      this.bmiValue = this.imperialCalculateBMI(weightSt, weightLbs, heightFt, heightIn);
    }

    console.log(this.bmiValue);
    // this.bmiDescription = this.GetBMIDescription(this.bmiValue);
    // this.bmiRange = this.GetBMIWeightRange(this.bmiValue);
  }
  private metricCalculateBMI(weight: number, height: number): number {
    // Convert height from centimeters to meters
    var heightMeters = height / 100;

    // Calculate BMI
    var bmi = weight / (heightMeters * heightMeters);

    return bmi;
  }
  private imperialCalculateBMI(weightSt: number, weightLbs: number, heightFt: number, heightIn: number): number {
    // Convert weight to pounds
    var weightLbsTotal = (weightSt * 14) + weightLbs;

    // Convert height to inches
    var heightInTotal = (heightFt * 12) + heightIn;

    // Calculate BMI
    var bmi = (weightLbsTotal / (heightInTotal * heightInTotal)) * 703;

    return bmi;
  }
}
