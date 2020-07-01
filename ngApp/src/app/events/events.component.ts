import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = []
  constructor(private _eventServive:EventService) { }

  ngOnInit() {
    this._eventServive.getEvents()
    .subscribe(
      res=>this.events=res,
      err => console.log(err)
    )
  }

}
