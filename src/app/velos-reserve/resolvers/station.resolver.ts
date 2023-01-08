import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Station} from "../models/velo-station.models";
import {StationsService} from "../services/stations.service";
import {Observable} from "rxjs";



@Injectable()
export class StationResolver implements Resolve<Station[]> {

  constructor(private stationService: StationsService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Station[]> {
    return this.stationService.getStationList()

  }
}
