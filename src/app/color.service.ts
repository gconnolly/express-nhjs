import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private http: HttpClient) { }

  private configUrl: string = environment.API;

  getColor() {
    return this.http.get(this.configUrl, {responseType: 'text'});
  }
}
