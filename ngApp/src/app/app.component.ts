import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngApp';

  constructor(public _authService: AuthService,private _event: EventService, public translate: TranslateService){
    translate.addLangs(['en','fr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang :'en');
}
}