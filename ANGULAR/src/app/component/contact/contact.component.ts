import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { question } from 'src/app/model/question';
import { Membre } from 'src/app/model/membre';
import { EquipeService } from 'src/app/service/equipe.service';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private router: Router, private questionService: QuestionService) {}

  membres : Array<Membre> = [];

  newQuestion : question = {
    nom: '',
    prenom: '',
    contact: '',
    question: '',
    reponse: '',
    status: 'not stored'
  }

  ngOnInit(){
    this.membres = EquipeService.getEquipe();
  }

  submit_question(){
    console.log(this.newQuestion)
    this.questionService.ajoutQuestion(this.newQuestion).subscribe({
      next: (data) => {
        
      },
    })
    
  }
  goToCalendar(){
    this.router.navigate(['/', 'calendar'])
  }
}
