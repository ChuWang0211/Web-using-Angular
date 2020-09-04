import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import {TranslateService} from '@ngx-translate/core';
import{ Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userProfileInfo = ["Profile", "Order History","Change Password"]
  title = 'ngApp';
  local = {token:''}
  constructor(public _authService: AuthService,private _event: EventService, public translate: TranslateService, private _router: Router){
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
directToPage(item){
  if(item=="Profile"){

  }else if(item=="Order History"){
    this._router.navigate(['/orderHistory']) 

  }else if(item=="Change Password"){
    
  }
}
isAdmin(){
  if(localStorage.getItem('token')==null){
    return false
  }else{  
    var AdminCheck = localStorage.getItem('token').split(".")
    console.log(AdminCheck)
    if(AdminCheck[0]=="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" && AdminCheck[1] == "eyJzdWJqZWN0IjoiNWY0ZjBjYTMwNGJmYzA4MWI4MTc3ZTVmIiwiaWF0IjoxNTk5MTk5MjUxfQ"){

    return true
  
  }
    
    else{return false}

  }


}
}