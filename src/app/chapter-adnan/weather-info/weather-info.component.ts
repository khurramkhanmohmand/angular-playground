import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }
  weatherInfo: any = {};

  ngOnInit(): void {
    this.weatherService.getWeatherInfo('Lahore').subscribe(response => {
      this.weatherInfo = response;
    });
  }
}
