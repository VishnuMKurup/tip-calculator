import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class TipCalculatorComponent {
  tipPercentages: number[] = [5, 10, 15, 25, 50];
  billAmount: number = 0;
  tipPercentage: number = 0;
  numberOfPeople: number = 1;
  customTipPercentage: number | null = null; // Allow null

  // Validation flags
  billAmountInvalid: boolean = false;
  customTipInvalid: boolean = false;
  numberOfPeopleInvalid: boolean = false;

  get tipAmount(): number {
    if (this.customTipPercentage) {
      this.tipPercentage = 0;
    }
    return this.billAmount * ((this.customTipPercentage !== null ? this.customTipPercentage : this.tipPercentage) / 100);
  }

  get totalAmount(): number {
    return this.billAmount + this.tipAmount;
  }

  get tipAmountPerPerson(): number {
    return this.tipAmount / this.numberOfPeople;
  }

  get totalAmountPerPerson(): number {
    return this.totalAmount / this.numberOfPeople;
  }

  selectTip(percentage: number) {
    this.tipPercentage = percentage;
    this.customTipPercentage = null; // Clear custom percentage when selecting a predefined tip
  }

  reset() {
    this.billAmount = 0;
    this.tipPercentage = 0;
    this.customTipPercentage = null; // Allow null
    this.numberOfPeople = 1;
    this.clearValidations();
  }

  // Validation methods
  validateBillAmount() {
    this.billAmountInvalid = this.billAmount <= 0;
  }

  validateCustomTip() {
    this.customTipInvalid = this.customTipPercentage !== null &&
      (this.customTipPercentage < 0 || this.customTipPercentage > 100);
  }

  validateNumberOfPeople() {
    this.numberOfPeopleInvalid = this.numberOfPeople < 1;
  }

  clearValidations() {
    this.billAmountInvalid = false;
    this.customTipInvalid = false;
    this.numberOfPeopleInvalid = false;
  }
}
