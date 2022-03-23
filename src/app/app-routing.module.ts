import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CaloriesSaldoComponent} from "./calories-saldo/calories-saldo.component";
import {BmiComponent} from "./bmi/bmi.component";

const routes: Routes = [
  {path:"calories-saldo", component: CaloriesSaldoComponent},
  {path:"bmi", component: BmiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
