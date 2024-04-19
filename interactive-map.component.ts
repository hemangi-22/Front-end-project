import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.css']
})
export class InteractiveMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }
}
