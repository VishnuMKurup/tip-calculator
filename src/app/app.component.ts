import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TipCalculatorComponent } from './tip-calculator/tip-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TipCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tip-calculator';
}
