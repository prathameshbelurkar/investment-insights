import { Injectable, signal, output } from '@angular/core';

import type {
  InvestmentInput,
  InvestmentOutput,
} from './investment-input.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  // resultsData = signal<InvestmentOutput[] | undefined>(undefined);
  // calculate = output<InvestmentInput>();
  resultsData?: InvestmentOutput[];

  calculateInvestmentResults(data: InvestmentInput) {
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

    // this.resultsData.set(annualData);
    this.resultsData = annualData;
  }
}
