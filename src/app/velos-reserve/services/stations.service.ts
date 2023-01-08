import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Station} from "../models/velo-station.models";

@Injectable()

export class StationsService {
  public monTableau: any[] = [];
  constructor(private http: HttpClient) {
  }

  getStationList(): Observable<Station[]> {
    return  this.http.get<Station[]>(`http://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=349af4632e93437ca292b20cd7d606c7e30fa433`)
      .pipe(
        map(stations => {
          return stations.slice(0,5);
        }),
      );

  }
}

