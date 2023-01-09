import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VelosReserveRoutingModule } from './velos-reserve-routing.module';
import {StationsService} from "./services/stations.service";
import { StationListComponent } from './components/station-list/station-list.component';
import {StationResolver} from "./resolvers/station.resolver";
import { LeafletMapComponent } from './components/leaflet-map/leaflet-map.component';
import { FormReservationComponent } from './components/form-reservation/form-reservation.component';


@NgModule({
  declarations: [
    StationListComponent,
    LeafletMapComponent,
    FormReservationComponent
  ],
  imports: [
    CommonModule,
    VelosReserveRoutingModule
  ],
  providers: [
    StationsService,
    StationResolver
  ]
})
export class VelosReserveModule { }
