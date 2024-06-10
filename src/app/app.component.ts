import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';

import type {
  InvestmentInput,
  InvestmentOutput,
} from './investment-input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  annualData?: InvestmentOutput[];

  onCalculateInvestmentResults(data: InvestmentInput) {
    const { annualInvestment, duration, expectedReturn, initialInvestment } =
      data;

    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.annualData = annualData;
  }
}
