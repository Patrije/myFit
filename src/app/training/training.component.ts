import { Component, EventEmitter, OnInit, Output } from '@angular/core';

 export interface TrainingActivity{
  activityName: string,
  caloriesPerHour: number
}

interface TrainingRecord{
  activityName:string;
  caloriesBurntDuringActivity: number;
}

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  trainingDurationInHours!: number;
  activityList:TrainingActivity[]=[
    {activityName: 'Running', caloriesPerHour:400},
    {activityName: 'Swimming', caloriesPerHour:500}
  ];

  burntCalories:TrainingRecord[]=[];
  selectedActivity:TrainingActivity = {activityName:'', caloriesPerHour:0};

  @Output()
  burntCaloriesSummation=new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {

  }

  recordActivity(): void{
    let activityName= this.selectedActivity.activityName;
    let burntCalories=this.selectedActivity.caloriesPerHour * this.trainingDurationInHours;
    this.burntCalories.push({activityName:activityName, caloriesBurntDuringActivity: burntCalories})
    this.burntCaloriesSummation.emit(this.burntCalories.map(act => act.caloriesBurntDuringActivity).reduce((acc, cur)=> acc+cur, 0))

  }

}
