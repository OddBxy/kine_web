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
    Jour : 'Lundi, Mardi, Jeudi et Vendredi' ,
    Horaire : '8h à 19h'
  }

  constructor(private router: Router) {
  }

  goToIndex() {
    this.router.navigate(['']);
  }
  goToPathologies() {
    this.router.navigate(['/', 'pathologie']);
  }
  goToCabinet() {
    this.router.navigate(['/', 'cabinet']);
  }
  goToContact() {
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

