import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  selectedLatitude: number = 0;
  selectedLongitude: number = 0;

  constructor() {}

  onSuggestionSelected(suggestion: any) {
    const coordinates = suggestion.geometry.coordinates;
    this.selectedLatitude = coordinates[1]; 
    this.selectedLongitude = coordinates[0]; 
  }
}
