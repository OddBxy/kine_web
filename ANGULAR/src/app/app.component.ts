import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cabinet } from './model/cabinet';
import { NgModel } from '@angular/forms';
//import { calendar } from 'googleapis/build/src/apis/calendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'site';

  verif = 0;

  infos : Cabinet = {
    Adresse : '450 Rue Aubanel, 13580 La Fare-les-Oliviers',
    Jour : 'Du lundi au vendredi' ,
    Horaire : '9h à 19h'
  }

  constructor(private router: Router) {
  }

  goToIndex() {
    this.verif = 0;
    this.router.navigate(['']);
  }
  goToPathologies() {
    this.verif = 0;
    this.router.navigate(['/', 'pathologie']);
  }
  goToCabinet() {
    this.verif = 0;
    this.router.navigate(['/', 'cabinet']);
  }
  goToContact() {
    this.verif = 0;
    this.router.navigate(['/', 'contact']);
  }

  dropDown(){
    if (this.verif == 0) {
      this.verif = 1
    }
    else if(this.verif == 1){
      this.verif = 0
    }
    
  }
}
