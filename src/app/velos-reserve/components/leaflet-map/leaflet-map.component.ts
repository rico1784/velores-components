import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../../../services/marker.service';
import {StationsService} from "../../services/stations.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})


export class LeafletMapComponent implements AfterViewInit{

  constructor(private markerService: MarkerService, private stationsService: StationsService, private router: Router) {

  }

  ngAfterViewInit(): void {

    let x: number = 45.743317;
    let y: number = 4.815747;
    let z: number = 11;

    const map = L.map('map').setView([x, y], z);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    this.stationsService.getStationList().subscribe(data => {
      // data is the array of ApiUser objects
      for (const element of data) {
        const marker = L.marker([element.position.lat, element.position.lng]).addTo(map);
        marker.bindPopup(`Station: ${element.name}<br>Adresse : ${element.address}<br>Nombre de vélo : ${element.bike_stands}<br><button (click)="onAddReservation()">Réserver</button>`).openPopup();

      };
    });

  }
  onAddReservation():void{
    this.router.navigateByUrl('/reservation')
  }
}
