import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import{ Router} from '@angular/router';
@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  specialEvents = []
  constructor(private _eventServive:EventService,private _authService: AuthService, private _router:Router) { }

  ngOnInit() {
    this._eventServive.getSpecialEvents()
    .subscribe(
      res=>this.specialEvents=res,
      err => console.log(err)
    )
  }
  toItemInfo(_id:String){

    this._router.navigate(['/iteminfo_2']) 
        console.log("_id")
  }

}
