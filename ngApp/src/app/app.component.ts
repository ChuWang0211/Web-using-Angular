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
    translate.addLangs(['English','French','中文']);
    translate.setDefaultLang('English');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/English|French|中文/) ? browserLang :'English');
    console.log(translate.getLangs)
}

changeLanguage(selected){
  // this.translate.setDefaultLang(selected);
  this.translate.use(selected)
}
}