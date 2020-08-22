import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sales Dashboard';
  cards: any[] = ['card1','card2','card3','card1','card2','card3']
}
