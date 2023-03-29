import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDarkTheme: boolean = false;
  toggleTheme() {
    console.log(this.isDarkTheme)
    this.isDarkTheme = !this.isDarkTheme;
  }
}
