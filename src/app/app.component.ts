import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'punk app';
  imageURL =
    'https://pixnio.com/free-images/2018/06/06/2018-06-06-15-55-17-1200x900.jpg';
  inputModel = 42;

  imageClick(): void {
    alert('kliknięto obrazek');
  }
}
