import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Equipement } from 'src/app/model/equipement';
import { Membre } from 'src/app/model/membre';
import { EquipeService } from 'src/app/service/equipe.service';
import { EquipementsService } from 'src/app/service/equipements.service';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent {
  constructor(private router: Router) {}

  membres : Array<Membre> = [];
  equipements : Array<Equipement> = [];
  ngOnInit(){
    this.membres = EquipeService.getEquipe();
    this.equipements = EquipementsService.getEquipement();
  }
}
