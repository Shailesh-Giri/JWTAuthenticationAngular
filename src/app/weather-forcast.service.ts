import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherForcastService {

  constructor(private http : HttpClient) { }

  weatherForcast()
  {
    
    let headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('token')}`);
    return this.http.get('https://localhost:7094/WeatherForecast',{headers})
    
  }
}
