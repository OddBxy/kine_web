import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { question } from '../model/question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private url = 'https://brave-jumpsuit-elk.cyclic.app/questions'
  constructor(private http: HttpClient) { }

  ajoutQuestion(question:question):Observable<question>{
    return this.http.post<question>(this.url,question, {withCredentials:false});
  }

  recupQuestion():Observable<Array<question>>{
    return this.http.get<Array<question>>(this.url, {withCredentials:false});
  }
}
