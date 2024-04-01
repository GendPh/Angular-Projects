import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BmiContainerComponent } from './bmi-container/bmi-container.component';
import { BmiContainerMeaningComponent } from './bmi-container-meaning/bmi-container-meaning.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BmiContainerComponent, BmiContainerMeaningComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
