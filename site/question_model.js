import { removeQuestion, updateQuestion } from "./api.js";

export class question_model {

    elementParentHTML;
    question;

    constructor(question) {
        this.question = question;
        
        this.elementParentHTML = document.createElement('div');
        this.elementParentHTML.classList.add('border');
        this.elementParentHTML.classList.add('row');

        let question_info = document.createElement('div');
        question_info.classList.add("col-6")
        let reponse = document.createElement('div')
        reponse.classList.add("col-6")

        this.elementParentHTML.appendChild(question_info);
        this.elementParentHTML.appendChild(reponse);
        
        //section question_info
        let info =  document.createElement('div');

        let question_content = document.createElement('div')
        let title = document.createElement('h5');
        title.textContent = "Question :"
        let content = document.createElement('p');
        content.textContent = question.question;
        content.classList.add('offset-1')

        question_content.appendChild(title);
        question_content.appendChild(content);

        let question_statut = document.createElement('div');
        let title2 = document.createElement('h6');
        title2.classList.add("col-2")
        title2.textContent = "Status :"
        let statut = document.createElement('p');
        statut.classList.add("col-10")
        statut.textContent = question.status;

        question_statut.classList.add("row")
        question_statut.appendChild(title2);
        question_statut.appendChild(statut);

        let question_reponse =  document.createElement('div');
        let title_reponse = document.createElement('h6');
        title_reponse.classList.add("col-2")
        title_reponse.textContent = "Réponse :"
        let answer = document.createElement('p');
        answer.classList.add("col-10")
        answer.textContent = question.reponse;
        
        question_reponse.classList.add("row");
        question_reponse.appendChild(title_reponse);
        question_reponse.appendChild(answer);
        
        let question_auteur =  document.createElement('div');
        let title_auteur = document.createElement('h6');
        title_auteur.classList.add("col-2")
        title_auteur.textContent = "Auteur :"
        let auteur = document.createElement('p');
        auteur.classList.add("col-10")
        auteur.textContent = question.nom + " " + question.prenom;
        
        question_auteur.classList.add("row");
        question_auteur.appendChild(title_auteur);
        question_auteur.appendChild(auteur);

        info.appendChild(question_content);
        info.appendChild(question_statut);
        info.appendChild(question_reponse);
        info.appendChild(question_auteur);
        question_info.classList.add("d-grid");
        question_info.appendChild(info)


        //section reponse
        let title3 = document.createElement('h5')
        title3.textContent = "Votre réponse :"
        let reponse_content = document.createElement('textarea');
        reponse_content.id = ''+this.question._id

        reponse.classList.add("d-grid")
        reponse.appendChild(title3)
        reponse.appendChild(reponse_content);

        //les boutons

        let delete_button = document.createElement('button');
        delete_button.textContent = 'SUPPRIMER';
        delete_button.addEventListener('click', e => this.remove());
        delete_button.classList.add("col-6")

        let submit_button = document.createElement("button");
        submit_button.textContent = "METTRE EN LIGNE"
        submit_button.addEventListener('click', e=>this.update());
        submit_button.classList.add("col-6")

        let boutons = document.createElement('div');
        boutons.classList.add("col-12")
        boutons.style.marginTop = "2em"

        boutons.appendChild(delete_button);
        boutons.appendChild(submit_button)
        this.elementParentHTML.appendChild(boutons)
        this.elementParentHTML.style.paddingTop= "1em"
        
    }

    async remove() {
        await removeQuestion(this.question);
        this.elementParentHTML.remove();
    }

    async update() {
        this.question.reponse = document.getElementById(''+this.question._id).value
        await updateQuestion(this.question);
    }
}
