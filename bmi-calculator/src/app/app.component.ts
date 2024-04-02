import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BmiRecommendationComponent } from './bmi-recommendation/bmi-recommendation.component';
import { BmiLimitationComponent } from './bmi-limitation/bmi-limitation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BmiRecommendationComponent, BmiLimitationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  metric: boolean = true;
  bmiValue: number = 0;
  bmiDescription: string = "Normal weight";
  bmiFullDescription: string = "A BMI range of 18.5 to 24.9 is considered a healthy weight. Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.";
  bmiRange: string = "0 - 0";
  height: number = 0;
  weight: number = 0;
  heightFt: number = 0;
  heightIn: number = 0;
  weightSt: number = 0;
  weightLbs: number = 0;

  CalculateBMI(weight: number, height: number, weightSt: number, weightLbs: number, heightFt: number, heightIn: number): void {
    if (this.metric) {
      this.bmiValue = this.metricCalculateBMI(weight, height);
      this.BMIMetricDescriptionRange(this.bmiValue);
    } else {
      this.bmiValue = this.imperialCalculateBMI(weightSt, weightLbs, heightFt, heightIn);
      this.BMIImperialDescriptionRange(this.bmiValue);
    }
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
      this.bmiFullDescription = "Having a BMI below 18.5 is considered underweight. Being underweight may increase the risk of nutritional deficiencies, weakened immune system, and osteoporosis. It's important to focus on nutrient-dense foods and possibly increase caloric intake to reach a healthier weight. Consulting with a healthcare professional or dietitian for personalized guidance is recommended.";
      this.bmiRange = "below 18.4";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      this.bmiDescription = "Your BMI suggests you're a Normal weight. Your ideal weight is between ";
      this.bmiFullDescription = "A BMI range of 18.5 to 24.9 is considered a healthy weight. Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.";
      this.bmiRange = "18.5 - 24.9";
    } else if (bmi >= 25 && bmi <= 29.9) {
      this.bmiDescription = "Your BMI suggests you're a Overweight. Your ideal weight is between ";
      this.bmiFullDescription = "If your BMI falls between 25.0 to 29.9, you are considered overweight. Being overweight increases the risk of developing various health conditions, including heart disease, high blood pressure, and certain cancers. To manage weight, focus on portion control, reducing calorie intake, and increasing physical activity. Incorporating regular exercise and making dietary changes can help achieve and maintain a healthier weight.";
      this.bmiRange = "25.9 - 29.9";
    } else if (bmi >= 30 && bmi <= 34.9) {
      this.bmiDescription = "Your BMI suggests you're a Obesity (Class I). Your ideal weight is between ";
      this.bmiFullDescription = "A BMI of 30.0 and above indicates obesity. Obesity significantly raises the risk of serious health problems, such as type 2 diabetes, stroke, and cardiovascular disease. It's crucial to adopt lifestyle changes that promote weight loss, including a balanced diet with fewer calories, regular exercise, and possibly behavioral therapy or medical interventions under the guidance of healthcare professionals. Weight loss can improve overall health and reduce the risk of obesity-related complications.";
      this.bmiRange = "30 - 34.9";
    } else if (bmi >= 35 && bmi <= 39.9) {
      this.bmiDescription = "Your BMI suggests you're a Obesity (Class II). Your ideal weight is between ";
      this.bmiFullDescription = "Obesity Class II is defined by a BMI range of 35.0 to 39.9. At this level of obesity, the risk of developing severe health complications like stroke, certain cancers, and osteoarthritis significantly increases. Effective weight management strategies, including supervised exercise programs, dietary counseling, and in some cases, bariatric surgery, may be necessary to improve health outcomes.";
      this.bmiRange = "35 - 39.9";
    } else if (bmi >= 40) {
      this.bmiDescription = "Your BMI suggests you're Obesity (Class III). Your ideal weight is between ";
      this.bmiFullDescription = "Obesity Class III, also known as severe or morbid obesity, is characterized by a BMI of 40.0 and above. This level of obesity poses a grave risk to health, increasing susceptibility to life-threatening conditions such as heart disease, stroke, and respiratory problems. Comprehensive medical management, including intensive lifestyle interventions, pharmacotherapy, and consideration of bariatric surgery, is often required to address obesity and mitigate associated health risks. Seeking support from healthcare professionals is crucial for developing a tailored treatment plan and achieving sustainable weight loss.";
      this.bmiRange = "above 40";
    } else {
      this.bmiDescription = "No BMI value found. ";
      this.bmiFullDescription = "A BMI range of 18.5 to 24.9 is considered a healthy weight. Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.";
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
