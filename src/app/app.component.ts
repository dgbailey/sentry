import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = 'Sentry Demo';
  btnText = 'Simulate Error'
  onClick(){
    throw(new Error("Sentry Demo Error"))
  }
  
}
