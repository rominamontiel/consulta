import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.scss']
})
export class CssComponent implements OnInit {
  public code = `
   ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
  `

  constructor() { }

  ngOnInit() {
  }

}
