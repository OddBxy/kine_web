import { question_model } from "./question_model.js";

export class Application {

    liste_question_model;

    constructor(questions) {

        // récupère l'élément HTML d'id listeTaches
        this.liste_question_model = document.getElementById('listeQuestions');

        // Boucle sur toutes les taches
        questions.forEach(todo => {
            //Pour chaque tache on crée une balise HTML div contenant le titre de la tache
            let question = new question_model(todo);
            // On attache ce nouvel élément HTML à la div
            this.liste_question_model.appendChild(question.elementParentHTML);
        });
    }
}
