import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngApp';

  constructor(public _authService: AuthService,private _event: EventService){
    

}
}