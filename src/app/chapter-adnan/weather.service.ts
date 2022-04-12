import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const urlKey = '94935bb99ca0fa2de99adb7c28db2f3c';
const weatherUnit = 'f';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getWeatherInfo(location: string){
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=' + urlKey + '&units=' + weatherUnit + '&query=' + location
    );
  }
}
