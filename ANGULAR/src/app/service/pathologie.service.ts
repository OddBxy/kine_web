import { Injectable } from '@angular/core';
import { Pathologie } from '../model/pathologie';

@Injectable({
  providedIn: 'root'
})
export class PathologieService {

  static pathologies : Array<Pathologie> = [
    {
      nom : "Pathologies Neurologiques",
      descriptif : "Touche le système nerveux, central ou périphérique. Elle peut donc affecter des cellules nerveuses se trouvant dans le cerveau, la moelle épinière, les nerfs périphériques, les jonctions neuromusculaires, le système nerveux autonome... Le kiné prend en charge l'hémiplégique post AVC, la paraplégie, la sclérose en plaque, les IMC, ...",
      resum_descriptif: "Troubles du système nerveux central ou périphérique dû à un accident ou une pathologie",
      maladie: "Post AVC, hémiplégies, paraplègies, syndrome cerebelleux, imc, sclérose en plaque",
      image_source : "/assets/Neurologique.jpg"
    },
    {
      nom : "Pathologies Rhumatologiques",
      descriptif : "Ce sont des troubles du système osseux et cartilegien du corps du l'âge et aux différentes contraintes physiques. Le kiné va donc essayer d'améliorer l'état des patients atteint d'arthrose, d'arthrite, de spondylarthrite ankylosante, du rhumatisme articulaire aigü, de lombalgie chronique",
      resum_descriptif: "Les pathologies rhumatologiques sont des problèmes articulaires, osseus et musculaires. Ces pathologies sont donc très variées, selon l’âge et le type d’activité pratiquée.",
      maladie: "Arthrose, arthrite, spondylarthrite ankylosante, lombalgie chronique",
      image_source : "/assets/Rhumatologique.jpg"
    },
    {
      nom : "Pathologies Orthopédiques",
      descriptif : "Troubles de la statique osseuse et musculaire causés par des traumatismes exterieures tel que des blessures exterieurs, des malformations congénitales, des problèmes de croissance .... Dans ces cas le kiné va aider à récuperer des amplitudes de mouvement après des fractures, des tendinites et autres.",
      resum_descriptif: "Troubles qui affectent le système musculo-squelettique, pouvant affecter différentes parties du corps, notamment la colonne vertébrale, les membres supérieurs et inférieurs",
      maladie: "Scoliose, fracture, tendinopathie, prothèse",
      image_source : "/assets/Orthopedique.jpg"
    }
  ]

  constructor() { }

  static getPathologies() {
    return this.pathologies
  }
}
