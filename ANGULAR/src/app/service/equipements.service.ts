import { Injectable } from '@angular/core';
import { Equipement } from '../model/equipement';

@Injectable({
  providedIn: 'root'
})
export class EquipementsService {

  static equipements : Array<Equipement> = [
    {
      nom : "Ondes de choc",
      descriptif : "Il s’agit de traiter rapidement les tendinopathies, les calcifications tendineuses, les épines calcannéennes et ....",
      utilisation : "A l’origine utilisées en urologie pour traiter les calculs rénaux, les ondes de choc permettent aujourd’hui de favoriser la consolidation osseuse et de prendre en charge diverses lésions musculo-squelettiques.",
      image_source :"/assets/Onde-choc.jpg"
    },
    {
      nom : "Phoenix",
      descriptif : "Appareil d'électrostimulation et de biofeedback necessaire dans la réeducation périnéale, et dans les douleurs aigües.",
      utilisation : "Vous pouvez donc stimuler le quadriceps de votre patient",
      image_source :"/assets/Phoenix.jpg"
    },
    {
      nom : "Cellu M6 de LPG",
      descriptif : "Appareil permettant l'endermologie.",
      utilisation : "Cela permet de combattre la cellulite en agissant sur les couches profondes de la peau et de destocker la réserve adipeuses et les capitons. Cela peut très bien être utilisé pour combatre le veillissement cutané.",
      image_source :"/assets/M6-LPG.jpg"
    },
    {
      nom : "Ondes radar",
      descriptif : "C'est un appareil unique destiné à la thermothérapie par micro-ondes, en mode continu ou pulsé.",
      utilisation : "Elles servent au traitement de la douleur, à aide à la cicatrisation tendineuse, osseuse et ligamentaire, ainsi qu’aux réductions des œdème et des hématomes.",
      image_source :"/assets/Onde-radar.jpg"
    },
    {
      nom : "Hydrojet",
      descriptif : "C'est une table de massage sur baignoire avec des jets puissants qui parcourent le corps.",
      utilisation : "La table de massage Hydrojet est la seule capable de masser la totalité du corps. En fonction des réglages, il est possible de toucher certaines zones bien précises. Des jambes à la nuque, la table hydro active peut concentrer les jets d’eau sur certaines parties du corps.",
      image_source :"/assets/Hydrojet.jpg"
    },
    {
      nom : "Huber de LPG",
      descriptif : "Elle permet de faire travailler toutes les chaînes musculaires plus rapidement qu’avec une méthode de kiné traditionnelle et même plus qu’avec une kiné axées sur les chaînes musculaires",
      utilisation : "Elle va avoir une action profonde, centrale, directement à l’intérieur du corps, qui va se voir ensuite à l’extérieur, grâce au gain de mobilité et de motricité.",
      image_source :"/assets/Huber-LPG.jpg"
    },
    {
      nom : "Ultra-sons",
      descriptif : "Les ondes ultrasonores sont des ondes mécaniques qui engendrent des oscillations dans les milieux qu’elles traversent.",
      utilisation : "Les signaux qui sont créés peuvent être exploités dans un objectif diagnostique (échographie, écho-Doppler, élastographie) ou thérapeutique (lithotripsie, pharmaco-émulsification…).",
      image_source :"/assets/Ultrasons.jpg"
    }
  ]
  
  constructor() { }

  static getEquipement(){
    return this.equipements;
  }
}
