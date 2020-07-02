import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  specialEvents = []
  constructor(private _eventServive:EventService) { }

  ngOnInit() {
    this._eventServive.getSpecialEvents()
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
