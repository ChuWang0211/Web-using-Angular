import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//insert this import statement
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'; // need to work with http then need this module on MongoDB
//also add HttpInterceptor
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import{ AuthGuard} from './auth.guard';
import{TokenInterceptorService} from './token-interceptor.service'
import{ItemInfoService} from './item-info.service';
import { ItemInfoOneComponent } from './item-info-one/item-info-one.component';
import { ItemInfoTwoComponent } from './item-info-two/item-info-two.component'


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    ItemInfoOneComponent,
    ItemInfoTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,// once import on the above, you also need to add it here
    HttpClientModule,// once import on the above, you also need to add it here
    AppRoutingModule
  ],
  providers: [AuthService,EventService, AuthGuard,ItemInfoService,
    {provide: HTTP_INTERCEPTORS,// provider array can also be an object
      useClass: TokenInterceptorService,// this object use the class TokenInterceptorService
      multi:true


  }],// add the AuthSerice to the  provider array because I coded this class to provide/return the detail of a user information that were submitted from register page and login page
  bootstrap: [AppComponent]
})
export class AppModule { }

//ng g s auth, g for generate, s for service, auth is the name, but you can name is anything