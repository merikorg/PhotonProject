import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnChanges {
  @Input() latitude: number = 0;
  @Input() longitude: number = 0;

  center: google.maps.LatLngLiteral = { lat: 0, lng: 0 };  
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  zoom = 15;

  ngOnChanges(): void {
    if (this.latitude && this.longitude) {
      this.center = { lat: this.latitude, lng: this.longitude };
    }
  }
}
