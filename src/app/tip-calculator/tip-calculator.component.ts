import { CommonModule } from '@angular/common';
import { Component, signal, computed } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.scss'],
  imports: [CommonModule]
})
export class TipCalculatorComponent {
  // Signals for state management
  billAmount = signal(0);
  tipPercentage = signal(0);
  customTipPercentage = signal<number | null>(null);
  numberOfPeople = signal(1);

  // Validation flags as signals
  billAmountInvalid = signal(false);
  customTipInvalid = signal(false);
  numberOfPeopleInvalid = signal(false);

  // Computed signals for derived state
  tipAmount = computed(() => {
    const percentage = this.customTipPercentage() ?? this.tipPercentage();
    return this.billAmount() * (percentage / 100);
  });

  totalAmount = computed(() => this.billAmount() + this.tipAmount());

  tipAmountPerPerson = computed(() => this.tipAmount() / this.numberOfPeople());
  totalAmountPerPerson = computed(() => this.totalAmount() / this.numberOfPeople());

  // Action methods to update signals
  selectTip(percentage: number) {
    this.tipPercentage.set(percentage);
    this.customTipPercentage.set(null); // Clear custom percentage when selecting a predefined tip
  }

  reset() {
    this.billAmount.set(0);
    this.tipPercentage.set(0);
    this.customTipPercentage.set(null);
    this.numberOfPeople.set(1);
    this.clearValidations();
  }

  // Validation methods
  validateBillAmount() {
    this.billAmountInvalid.set(this.billAmount() <= 0);
  }

  validateCustomTip() {
    const customTip = this.customTipPercentage();
    this.customTipInvalid.set(customTip !== null && (customTip < 0 || customTip > 100));
  }

  validateNumberOfPeople() {
    this.numberOfPeopleInvalid.set(this.numberOfPeople() < 1);
  }

  clearValidations() {
    this.billAmountInvalid.set(false);
    this.customTipInvalid.set(false);
    this.numberOfPeopleInvalid.set(false);
  }
}
