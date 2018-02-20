import { Component } from '@angular/core';

//different properties that help define the stucture
//of our component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//this is where all of the logic resides in our angular
//application
export class AppComponent {
  title = 'app';
}
