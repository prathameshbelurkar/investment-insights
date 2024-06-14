import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import type { InvestmentOutput } from '../investment-input.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  @Input() results?: InvestmentOutput[];
}
