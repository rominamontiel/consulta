import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  // public profiles = ['escorpio', 'sagitario', 'acuario', 'aries', 'capricornio', 'tauro', 'picis', 'cancer'];
  public profiles = [{ name: 'escorpio', clase: 'prueba1' }, { name: 'sagitario', clase: '' }, { name: 'acuario', clase: '' }, { name: 'aries', clase: '' }, { name: 'capricornio', clase: '' }, { name: 'tauro', clase: '' }, { name: 'picis', clase: '' }, { name: 'cancer', clase: ''}];
  public hideLeft = 7;
  public noFeaturedLeft = 0;
  public featured = 1;  
  public noFeaturedRight = 2;
  public hideRight = 3;

  constructor() { }

  ngOnInit() {
    this.asignarClase();
  }

  public buttonRight(){
    if(this.featured < 7){
      this.featured ++;
    } else {
      this.featured = 0;
    }

    if(this.noFeaturedRight < 7){
      this.noFeaturedRight = this.featured + 1;
    } else{
      this.noFeaturedRight = 0;
    }

    if(this.featured > 0){
      this.noFeaturedLeft = this.featured - 1;
    } else{
      this.noFeaturedLeft = 7;
    }

    if(this.hideLeft >= 7){
      this.hideLeft = 0;
    } else{
      this.hideLeft ++;
    }

    if(this.hideRight >= 7){
      this.hideRight = 0;
    } else{
      this.hideRight ++;
    }

    this.asignarClase();

    console.log(this.hideLeft + ' - ' + this.noFeaturedLeft + ' - ' + this.featured + ' - ' + this.noFeaturedRight + ' - ' + this.hideRight);
  }

  public buttonLeft(){
    if (this.featured > 0) {
      this.featured--;
    } else {
      this.featured = 7;
    }

    if(this.noFeaturedLeft > 0){
      this.noFeaturedLeft = this.featured - 1;
    } else{
      this.noFeaturedLeft = 7;
    }

    if(this.featured < 7){
      this.noFeaturedRight = this.featured + 1;
    } else{
      this.noFeaturedRight = 0;
    }

    if(this.hideLeft > 0){
      this.hideLeft --;
    } else{
      this.hideLeft = 7;
    }

    if(this.hideRight > 0){
      this.hideRight --;
    } else{
      this.hideRight = 7;
    }

    this.asignarClase();

    console.log(this.hideLeft + ' - ' + this.noFeaturedLeft + ' - ' + this.featured + ' - ' + this.noFeaturedRight + ' - ' + this.hideRight);
  }
  

  public asignarClase(){
    this.profiles[this.featured].clase = 'featured';
    this.profiles[this.noFeaturedRight].clase = 'no-featured-right';
    this.profiles[this.noFeaturedLeft].clase = 'no-featured-left';   
    this.profiles[this.hideLeft].clase = 'hide-left';
    this.profiles[this.hideRight].clase = 'hide-right';
  }

}
