import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-recommendation',
  standalone: true,
  imports: [],
  templateUrl: './bmi-recommendation.component.html',
  styleUrl: './bmi-recommendation.component.css'
})

export class BmiRecommendationComponent {
  bmiRecommendation: BmiRecommendation[] = [
    {
      title: "Healthy eating",
      description: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity and mood.",
      img: "../../assets/icon-eating.svg"
    },
    {
      title: "Regular exercise",
      description: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
      img: "../../assets/icon-exercise.svg"
    },
    {
      title: "Adequate sleep",
      description: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
      img: "../../assets/icon-sleep.svg"
    }
  ];
}

interface BmiRecommendation {
  title: string;
  description: string;
  img: string;
}