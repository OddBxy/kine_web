import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pathologie } from 'src/app/model/pathologie';
import { Methode } from 'src/app/model/methode';
import { PathologieService } from 'src/app/service/pathologie.service';
import { MethodesService } from 'src/app/service/methodes.service';

@Component({
  selector: 'app-pathologie',
  templateUrl: './pathologie.component.html',
  styleUrls: ['./pathologie.component.css']
})
export class PathologieComponent {
  constructor(private router: Router) {}

  pathologies : Array<Pathologie> = [];
  methodes : Array<Methode> = [];
  i=0;
  ngOnInit(){
    this.pathologies = PathologieService.getPathologies();
    this.methodes = MethodesService.getMethode();
  }

  getSlide() {
    return this.pathologies[this.i];
  }

  getPrev() {
      if (this.i == 0) {
        this.i = this.pathologies.length-1;
      }
      else this.i -= 1;
  } 
  getNext() {
    if (this.i == this.pathologies.length-1) {
      this.i = 0
    }
    else this.i += 1;
  }
}
