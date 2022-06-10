import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div><h1>{{pageTitle}}</h1>
  <app-cities-list></app-cities-list>
  </div>
  `
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  pageTitle: string = 'My Weather App'
}