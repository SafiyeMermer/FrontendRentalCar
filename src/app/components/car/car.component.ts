import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarReponseModel } from 'src/app/models/carResponseModel';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  
  cars:Car[] = [];
  dataLoaded=false;

  carResponseModel:CarReponseModel = {
    data:this.cars,
    success:true,
    message:""
  }
  
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars()
  {
    this.carService.getCars().subscribe((response) => 
    {
      this.cars = response.data;
      this.dataLoaded=true;

    })
  }

}
