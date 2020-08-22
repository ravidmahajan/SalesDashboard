import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  days: string[] = ['Today','Last week', 'Last month', 'This quarter', 'This year'];
  filters: string[] = ['Top', 'Bottom'];
  constructor() { }

  ngOnInit(): void {
  }

}
