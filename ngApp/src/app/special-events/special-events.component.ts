import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  specialEvents = []
  constructor(private _eventServive:EventService,private _authService: AuthService) { }

  ngOnInit() {
    this._eventServive.getSpecialEvents()
    .subscribe(
      res=>this.specialEvents=res,
      err => console.log(err)
    )
  }
}
