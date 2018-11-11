import { Component } from '@angular/core';
import { ColorService } from './color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'express-nhjs';
  color = 'red';

  constructor(private colorService: ColorService) { 
    colorService
      .getColor()
      .toPromise()
      .then(
        newColor => this.color = newColor as string,
        console.error
      )
  }
}
