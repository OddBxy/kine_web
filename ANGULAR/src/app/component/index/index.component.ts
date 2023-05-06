import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pathologie } from 'src/app/model/pathologie';
import { question } from 'src/app/model/question';
import { PathologieService } from 'src/app/service/pathologie.service';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor(private router: Router, private questionService: QuestionService) {}

  pathologies : Array<Pathologie> = [];
  questions : Array<question> = [];

  i=0;

  ngOnInit(){
    this.pathologies = PathologieService.getPathologies();
    this.recupQuestion();
  }

  goToPathologies() {
    this.router.navigate(['/', 'pathologie']);
  }
  goToCabinet() {
    this.router.navigate(['/', 'cabinet']);
  }

  recupQuestion(){
    this.questionService.recupQuestion().subscribe({
      next: (data) => {
        this.questions = data;
        this.questions = this.questions.filter(question => question.status == 'stored')

        if (this.questions.length != 0) {
          setInterval( () => {this.getNext(this.questions)}, 5000)
        }
      }
    })
  }


  getSlide() {
    return this.questions[this.i];
  }

  getNext(questionsArray: Array<question>) {
    let len = questionsArray.length;
    if (this.i == len -1) {
      this.i = 0
    }
    else this.i += 1;
  }


}
