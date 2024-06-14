import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedResult = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  resetUserInput() {
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedResult.set('5');
    this.enteredDuration.set('10');
  }

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: Number(this.enteredInitialInvestment()),
      duration: Number(this.enteredDuration()),
      expectedReturn: Number(this.enteredExpectedResult()),
      annualInvestment: Number(this.enteredAnnualInvestment()),
    });
    this.resetUserInput();
  }
}
