import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'd2a206a09b3d087074b7cb3ae8800f3f';



  constructor(private http: HttpClient) { }

  getWeatherDatas(cityName: string): Observable<any> {
    return this.http.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
      {}
    );
  }
}
