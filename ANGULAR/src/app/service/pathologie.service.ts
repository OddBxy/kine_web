import { Injectable } from '@angular/core';
import { Pathologie } from '../model/pathologie';

@Injectable({
  providedIn: 'root'
})
export class PathologieService {

  static pathologies : Array<Pathologie> = [
    {
      nom : "Pathologies Neurologiques",
      descriptif : "Touche le système nerveux, central ou périphérique. Elle peut donc affecter des cellules nerveuses se trouvant dans le cerveau, la moelle épinière, les nerfs périphériques, les jonctions neuromusculaires, le système nerveux autonome...
    Le kiné prend en charge l'hémiplégique post AVC, la paraplégie, la sclérose en plaque, les IMC, ...",
      resum_descriptif: "Troubles du système nerveux central ou périphérique dû à un accident ou une pathologie",
      maladie: "Post AVC, hémiplégies, paraplègies, syndrome cerebelleux, imc, sclérose en plaque",
      image_source : "/assets/Neurologique.jpg"
    },
    {
      nom : "Pathologie Rhumatologique",
      descriptif : "Spécialité qui traite des pathologies articulaires, osseuses et musculaires : les rhumatismes. Ces pathologies sont donc très variées, selon l’âge et le type d’activité pratiquée.",
      resum_descriptif: "Affecte les articulations, les os et les muscles",
      maladie: "Arthrose, arthrite, spondylarthrite ankylosante, lombalgie chronique",
      image_source : "/assets/Rhumatologique.jpg"
    },
    {
      nom : "Pathologie Orthopédique",
      descriptif : "Spécialité chirurgicale qui permet de corriger les défauts de l’appareil locomoteur de nature congénitale ou acquise durant la croissance voire à l’âge adulte.",
      resum_descriptif: "Affecte l’ensemble du squelette osseux",
      maladie: "Scoliose, fracture, tendinopathie, prothèse",
      image_source : "/assets/Orthopedique.jpg"
    }
  ]

  constructor() { }

  static getPathologies() {
    return this.pathologies
  }
}
