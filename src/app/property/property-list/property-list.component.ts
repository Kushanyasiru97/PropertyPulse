import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../iproperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit{

  properties: Array<IProperty> = [];

  constructor(private housingService: HousingService){}

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(data => {
       this.properties = data;
       console.log(data)
    },
    error=> {
      console.log(error);
    }
    
    
  )}

    //this.http.get("data/properties.json").subscribe(data => {
     // this.properties = data;
     // console.log(data)
  

  }