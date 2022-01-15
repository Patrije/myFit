import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
