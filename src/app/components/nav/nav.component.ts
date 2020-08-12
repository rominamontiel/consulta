import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public menu = false;

  constructor() { }

  ngOnInit() {
  }

  public menuMobile() {
    this.menu = !this.menu;
  }

}
