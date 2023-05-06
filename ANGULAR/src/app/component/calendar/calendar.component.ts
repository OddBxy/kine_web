import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarService } from 'src/app/service/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  constructor(private router: Router, private calendarService : CalendarService) {}

  rdv_info = {
    nom : '',
    prenom: '',
    date: '',
    heure : '',
    descriptif: ''
  }


  new_event = {
    summary: '',
    location: '450 Rue Aubanel, 13580 La Fare-les-Oliviers',
    description: '',
    colorId: 1,
    start: {
        dateTime:  '',
        timeZone: 'Europe/Paris',
    },
    end: {
        dateTime: '',
        timeZone: 'Europe/Paris',
    },
  }


  ngOnInit(){
  }
  
  submit_rdv(){
    this.new_event.summary = 'rendez-vous avec ' + this.rdv_info.prenom + ' ' + this.rdv_info.nom
    this.new_event.description = this.rdv_info.descriptif

    let date = this.rdv_info.date + ' ' + this.rdv_info.heure

    let event_startTime = new Date(date)
    let event_endTime = new Date(event_startTime)
    event_endTime.setMinutes(event_startTime.getMinutes() + 60)

    this.new_event.start.dateTime = event_startTime.toISOString()
    this.new_event.end.dateTime = event_endTime.toISOString()


    this.calendarService.ajoutEvent(this.new_event).subscribe(
      (data: any) => {
        if(data.message == "evennement ajouté !"){
          alert(data.message)
        }
        else alert('disponibilité à partir du : ' + new Date(data))

      }
    );


  }
}
