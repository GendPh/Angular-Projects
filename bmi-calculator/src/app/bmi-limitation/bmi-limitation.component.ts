import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-limitation',
  standalone: true,
  imports: [],
  templateUrl: './bmi-limitation.component.html',
  styleUrl: './bmi-limitation.component.css'
})
export class BmiLimitationComponent {
  bmiLimitation: BmiLimitation[] = [
    {
      title: "Gender",
      description: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
      img: "../../assets/icon-gender.svg"
    },
    {
      title: "Age",
      description: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
      img: "../../assets/icon-age.svg"
    },
    {
      title: "Muscle",
      description: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
      img: "../../assets/icon-muscle.svg"
    },
    {
      title: "Pregnancy",
      description: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimize health risks for both mother and child.",
      img: "../../assets/icon-pregnancy.svg"
    },
    {
      title: "Race",
      description: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
      img: "../../assets/icon-race.svg"
    },
  ];
}

interface BmiLimitation {
  title: string;
  description: string;
  img: string;
}