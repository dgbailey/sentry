import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Simulation = 'Sentry Demo';
  error = 'Simulate Error'
  onClick(e){
    throw(new Error("Sentry Demo Error"))
  }
}
