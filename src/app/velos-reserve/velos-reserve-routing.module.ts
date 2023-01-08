import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StationListComponent} from "./components/station-list/station-list.component";
import {StationResolver} from "./resolvers/station.resolver";

const routes: Routes = [
  {path: '', component: StationListComponent, resolve:{station: StationResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VelosReserveRoutingModule { }
