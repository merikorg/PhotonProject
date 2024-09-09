import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotonService {
  private apiUrl = 'http://localhost:3000/api/search-place';

  constructor(private http: HttpClient) { }

  searchPlaces(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${encodeURIComponent(query)}`);
  }
}
