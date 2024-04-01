import { Component, Output, EventEmitter } from '@angular/core';

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
  bmiDescription: string = "Normal weight";
  bmiRange: string = "0 - 0";
  height: number = 0;
  weight: number = 0;
  heightFt: number = 0;
  heightIn: number = 0;
  weightSt: number = 0;
  weightLbs: number = 0;

  @Output() messageEvent = new EventEmitter<number>();

  SendBmiValue(): void {
    this.messageEvent.emit(this.bmiValue);
  }

  CalculateBMI(weight: number, height: number, weightSt: number, weightLbs: number, heightFt: number, heightIn: number): void {
    if (this.metric) {
      this.bmiValue = this.metricCalculateBMI(weight, height);
      this.BMIMetricDescriptionRange(this.bmiValue);
    } else {
      this.bmiValue = this.imperialCalculateBMI(weightSt, weightLbs, heightFt, heightIn);
      this.BMIImperialDescriptionRange(this.bmiValue);
    }
    this.SendBmiValue();
  }

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

  private BMIMetricDescriptionRange(bmi: number): void {
    if (bmi < 18.5) {
      this.bmiDescription = "Your BMI suggests you're a Underweight. Your ideal weight is between ";
      this.bmiRange = "below 18.4";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      this.bmiDescription = "Your BMI suggests you're a Normal weight. Your ideal weight is between ";
      this.bmiRange = "18.5 - 24.9";
    } else if (bmi >= 25 && bmi <= 29.9) {
      this.bmiDescription = "Your BMI suggests you're a Overweight. Your ideal weight is between ";
      this.bmiRange = "25.9 - 29.9";
    } else if (bmi >= 30 && bmi <= 34.9) {
      this.bmiDescription = "Your BMI suggests you're a Obesity (Class I). Your ideal weight is between ";
      this.bmiRange = "30 - 34.9";
    } else if (bmi >= 35 && bmi <= 39.9) {
      this.bmiDescription = "Your BMI suggests you're a Obesity (Class II). Your ideal weight is between ";
      this.bmiRange = "35 - 39.9";
    } else if (bmi >= 40) {
      this.bmiDescription = "Your BMI suggests you're Obesity (Class III). Your ideal weight is between ";
      this.bmiRange = "above 40";
    } else {
      this.bmiDescription = "No BMI value found. ";
      this.bmiRange = "0 - 0";
    }
  }
  private BMIImperialDescriptionRange(bmi: number): void {
    if (bmi < 18.5) {
      this.bmiDescription = "Your BMI suggests you're a Underweight. Your ideal weight is between ";
      this.bmiRange = "below 123 lbs";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      this.bmiDescription = "Your BMI suggests you're a Normal weight. Your ideal weight is between ";
      this.bmiRange = "124 lbs - 164 lbs";
    } else if (bmi >= 25 && bmi <= 29.9) {
      this.bmiDescription = "Your BMI suggests you're a Overweight. Your ideal weight is between ";
      this.bmiRange = "165 lbs - 208 lbs";
    } else if (bmi >= 30 && bmi <= 34.9) {
      this.bmiDescription = "Your BMI suggests you're a Obesity (Class I). Your ideal weight is between ";
      this.bmiRange = "209 lbs - 243 lbs";
    } else if (bmi >= 35 && bmi <= 39.9) {
      this.bmiDescription = "Your BMI suggests you're a Obesity (Class II). Your ideal weight is between ";
      this.bmiRange = "244 lbs - 276 lbs";
    } else if (bmi >= 40) {
      this.bmiDescription = "Your BMI suggests you're Obesity (Class III). Your ideal weight is between ";
      this.bmiRange = "above 277 lbs";
    } else {
      this.bmiDescription = "No BMI value found. ";
      this.bmiRange = "0 - 0";
    }
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
