import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flechas-laterales',
  templateUrl: './flechas-laterales.component.html',
  styleUrls: ['./flechas-laterales.component.scss']
})
export class FlechasLateralesComponent implements OnInit {
  public classes = [1, 1, 1, 1, 1, 1, 1];
  public ilustraciones = ['sagitario','escorpio','acuario', 'capricornio','tauro','cancer', 'aries',  'geminis2', 'leo', 'libra', 'picis','virgo'];
  public displacement: number = 0;
  public translateTotal: String = '';
  public maxTranslate: number;

  constructor() { }

  ngOnInit() {
    this.maxTranslate = (this.ilustraciones.length * 25) - 100;
  }

  public displacementRight() {

    if (this.displacement >= 0 && this.displacement < this.maxTranslate) {
      this.displacement += 25;
    }
    this.translateTotal = 'translateX(-' + this.displacement + '%)';
  }

  public displacementLeft() {

    if (this.displacement > 0) {
      this.displacement -= 25;
    }
    this.translateTotal = 'translateX(-' + this.displacement + '%)';
  }

}
