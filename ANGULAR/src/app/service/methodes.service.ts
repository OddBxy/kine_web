import { Injectable } from '@angular/core';
import { Methode } from '../model/methode';

@Injectable({
  providedIn: 'root'
})
export class MethodesService {

  constructor() { }

  static methodes : Array<Methode> = [
    {
      nom : "MacKEnzie",
      descriptif : "La méthode McKenzie consiste en un système d’Évaluation et de Traitement des douleurs mécaniques du rachis, avec ou sans irradiation dans les membres (sciatalgies, cruralgies), basée sur la reconnaissance de syndromes et donnant priorité aux techniques d’auto­traitement.",
    },
    {
      nom : "Rééducation périnéale",
      descriptif : "La rééducation périnéale permet d'apprendre aux mamans, à travers une série d'exercices, à contracter les muscles du périnée, notamment le muscle releveur de l'anus, afin de les renforcer et les tonifier avant un effort.",
    },
    {
      nom : "Drainage lymphatique",
      descriptif : "Le drainage lymphatique est une technique de massage qui permet de stimuler la circulation de la lymphe. Cette méthode repose sur des mouvements lents et doux, effectués dans le sens de la circulation lymphatique avec des variations de pression.",
    },
    {
      nom : "Ostéopathie",
      descriptif : "L'ostéopathie est une méthode de soins utilisée pour le traitement et la prévention de nombreux troubles fonctionnels. Reconnue comme une médecine complémentaire, elle a recours aux manipulations manuelles pour traiter certaines pathologies. Pour les ostéopathes la structure du corps et ses fonctions sont interdépendantes.",
    },
    {
      nom : "Kinésithérapie respiratoire du nourrisson",
      descriptif : "La kinésithérapie respiratoire constitue une méthode qui peut aider les asthmatiques, et plus particulièrement les bébés et les enfants en bas âge. Elle permet lors des crises d'éliminer les sécrétions bloquées dans les bronches, luttant ainsi contre l'encombrement bronchique.",
    },
    {
      nom : "Thérapies manuelles chez les enfants",
      descriptif : "C'est une discipline paramédicale qui soigne les pathologies neurologiques, cardio-respiratoires, orthopédiques et traumatologiques rencontrées chez le nourrisson, l’enfant et l’adolescent.",
    }
  ]

  static getMethode(){
    return this.methodes;
  }
}
