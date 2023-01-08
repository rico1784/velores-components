import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'velos-reserve', loadChildren:() => import('./velos-reserve/velos-reserve.module').then(m => m.VelosReserveModule)},
  {path: '**', redirectTo: '/velos-reserve'},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
