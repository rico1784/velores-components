import {Component,  OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {Observable, map} from "rxjs";
import {Station} from "../../models/velo-station.models";
import {StationsService} from "../../services/stations.service";


@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss']
})
export class StationListComponent implements OnInit {

  public stations$!: Observable<Station[]>;

    constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.stations$ = this.route.data.pipe(
      map(data => data['stations'] )

    )
    console.log(this.stations$);
  }

}
