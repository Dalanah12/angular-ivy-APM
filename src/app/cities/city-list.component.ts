import { Component, OnInit } from "@angular/core";
@Component({
  selector: 'app-cities-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  pageTitle: string = 'Cities';
  cities: any[];

  ngOnInit(): void {
    console.log('In OnInit');
  }
}