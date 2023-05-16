import { Injectable } from '@angular/core';
import { Membre } from '../model/membre';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  static equipe : Array<Membre> = [
    {
      nom : 'Maurial-Vallet Stéphanie',
      attribut : [
        'MKDE Diplomée en : 1996',
        "Spécialités : réeducation périnéale, réeducation des pathologies de l'épaule, réeducation du post cancer du sein",
        'Lieu de travail : Cabinet ou à domicile'
      ],
      tel : "04.90.42.46.01",
      mail : "stephanievallet@wanadoo.fr",
      image_source : "/assets/Vallet.PNG",
      lien : 'https://www.doctolib.fr/masseur-kinesitherapeute/la-fare-les-oliviers/stephanie-maurial-vallet'
    },
    {
      nom : 'Campinas Yan',
      attribut : [
        'MKDE Diplomé en : 2000',
        'Spécialité : Ostéopathie',
        'Lieu de travail : Cabinet ou à domicile'
      ],
      tel : "06.22.26.45.05",
      mail : '',
      image_source : "/assets/Campinas.PNG",
      lien : 'https://www.doctolib.fr/masseur-kinesitherapeute/la-fare-les-oliviers/yan-campinas-la-fare-les-oliviers'
    },
    {
      nom : 'Bodoignet Laure',
      attribut : [
        'MKDE Diplomée en : 2021',
        'Spécialités : pédiatrie (notamment chez les enfants de 0 à 6 ans)',
        'Lieu de travail : Cabinet ou à domicile'
      ],
      tel : "06.40.34.50.26",
      mail : 'lauremk74@gmail.com',
      image_source : "/assets/Bodoignet.PNG",
      lien: 'GoogleCalendar'
    }
  ]

  constructor() { }

  static getEquipe(){ //on declare static pour la partager dans tous les fichiers
    return this.equipe;
  }
}
