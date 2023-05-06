import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private url = 'https://brave-jumpsuit-elk.cyclic.app/calendar'
  
  constructor(private http: HttpClient) { }

  ajoutEvent(new_event:object):Observable<object>{
    return this.http.post<object>(this.url, new_event, {withCredentials:false});
  }
}
