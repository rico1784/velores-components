import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormReservationComponent} from "./velos-reserve/components/form-reservation/form-reservation.component";

const routes: Routes = [
  {path: 'velos-reserve', loadChildren:() => import('./velos-reserve/velos-reserve.module').then(m => m.VelosReserveModule)},
  {path: 'reservation',component: FormReservationComponent},
  {path: '**', redirectTo: '/velos-reserve'},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
