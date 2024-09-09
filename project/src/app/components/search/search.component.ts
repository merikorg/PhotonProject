import { Component, EventEmitter, Output } from '@angular/core';
import { PhotonService } from 'src/app/services/photon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = '';
  suggestions: any[] = []; 
  showSuggestions = false;
  selectedIndex: number = -1; 
  debounceTimer: any;

  @Output() suggestionSelected = new EventEmitter<any>(); 

  constructor(private photonService: PhotonService) {}

  onInputChange() {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    this.debounceTimer = setTimeout(() => {
      if (this.searchQuery.trim()) {
        this.photonService.searchPlaces(this.searchQuery).subscribe((response: any) => {
          this.suggestions = response.features;  
          this.showSuggestions = true;           
        });
      } else {
        this.suggestions = [];
        this.showSuggestions = false;
      }
    }, 500);
  }

  hideSuggestions() {
    setTimeout(() => {
      this.showSuggestions = false;
    }, 200);
  }

  onFocus() {
    if (this.suggestions.length > 0) {
      this.showSuggestions = true;
    }
  }

  selectSuggestion(suggestion: any) {
    this.searchQuery = suggestion.properties.name;
    this.showSuggestions = false;
    this.suggestionSelected.emit(suggestion); 
  }
}
