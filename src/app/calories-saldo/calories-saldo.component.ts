import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calories-saldo',
  templateUrl: './calories-saldo.component.html',
  styleUrls: ['./calories-saldo.component.css']
})
export class CaloriesSaldoComponent {
  title = 'myFit';
  private _caloriesSaldo: number = 0;

  eatenCallories(eatenCalls: number){
    this._caloriesSaldo = this._caloriesSaldo +eatenCalls;
  }

  reducedCals(reducedCals: number){
    this._caloriesSaldo = this._caloriesSaldo - reducedCals;
  }

  get caloriesSaldo():number {
    return this._caloriesSaldo;
  }
}


