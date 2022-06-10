import { Component } from "@angular/core";
@Component({
  selector: 'app-cities-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent {
  pageTitle: string = 'Cities';
  cities: any[];
}