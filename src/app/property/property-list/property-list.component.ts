import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../iproperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit{

  SellRent = 1;

  properties: Array<IProperty> = [];
  

  constructor(private route : ActivatedRoute, private housingService: HousingService){}

  ngOnInit(): void {
    this.housingService.getAllProperties(this.SellRent).subscribe(data => {
       this.properties = data;
       console.log(data);
       console.log(this.route.snapshot.url.toString())
    },
    error=> {
      console.log('httperror');
      console.log(error);
    }
    
    
  )}

    //this.http.get("data/properties.json").subscribe(data => {
     // this.properties = data;
     // console.log(data)
  

  }
