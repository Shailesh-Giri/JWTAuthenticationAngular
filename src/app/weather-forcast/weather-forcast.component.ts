import { Component, OnInit } from '@angular/core';
import { WeatherForcastService } from '../weather-forcast.service';

@Component({
  selector: 'app-weather-forcast',
  templateUrl: './weather-forcast.component.html',
  styleUrls: ['./weather-forcast.component.css']
})
export class WeatherForcastComponent implements OnInit {

  result : any ;

  constructor(private weatherForcast : WeatherForcastService){}

  ngOnInit(): void {
    this.result = this.weatherForcast.weatherForcast().subscribe((response)=>{
      this.result=response
    });
    console.log(this.result);
  }

}
