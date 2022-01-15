import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TrainingActivity } from '../training/training.component';

interface Food{
  foodName: string,
  caloriesPerPiece: number
}

interface FoodRecord{
  foodName:string;
  caloriesEatenOnPieceOfFood: number;
}


@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit {

  public numberOfEatenPieces!: number;
  public foodList:Food[]=[
    {foodName: 'Bread', caloriesPerPiece:300},
    {foodName: 'Milk', caloriesPerPiece:200},
    {foodName: 'Cookie', caloriesPerPiece:400}
  ];
  public eatenFoodsWithCalories:FoodRecord[]=[];
  private _selectedFood:Food = {foodName:'', caloriesPerPiece:0};

  @Output()
  sumOfEatenCaloriesUntilNow = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {

  }

  recordEatings(): void{
    const foodName= this.selectedFood.foodName;
    let eatenCalories=this.selectedFood.caloriesPerPiece * this.numberOfEatenPieces;
    this.eatenFoodsWithCalories.push({foodName:foodName, caloriesEatenOnPieceOfFood: eatenCalories})
    this.sumOfEatenCaloriesUntilNow.emit(this.eatenFoodsWithCalories.map(food => food.caloriesEatenOnPieceOfFood).reduce((acc, cur)=> acc+cur, 0))
  }

  get selectedFood():Food {
    return this._selectedFood;
  }

  set selectedFood(food: Food) {
     this._selectedFood = food;
  }
}
