import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {

  wzrost!: number;
  waga!: number;
  bmi!: number;
  kategoria!: string;

  constructor() { }

  ngOnInit(): void {
  }

  obliczBMI(){
    this.bmi = this.waga / (this.wzrost * this.wzrost);
    this.interpretujBmi(this.bmi);
  }

  interpretujBmi(bmi: number){
    if(bmi>30){
      this.kategoria="Otylosc";
    } else if(bmi>25 && bmi<29.99) {
      this.kategoria="Nadwaga";
    }else if(bmi>18.5 && bmi<24.99) {
      this.kategoria="Waga prawidlowa";
    }else if(bmi<18.5) {
      this.kategoria="Niedowaga";
    };
  }

}
