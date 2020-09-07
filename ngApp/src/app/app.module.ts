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
import { ItemInfoTwoComponent } from './item-info-two/item-info-two.component';
import { StorePageComponent } from './store-page/store-page.component';
import { StoreItemDetailComponent } from './store-item-detail/store-item-detail.component';
import { CartComponent } from './cart/cart.component';
import { AddCartToDatabaseComponent } from './add-cart-to-database/add-cart-to-database.component'
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NgPaymentCardModule } from 'ng-payment-card';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { VerificationPageComponent } from './verification-page/verification-page.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AdminComponent } from './admin/admin.component';
import { AdminOrderManagementComponent } from './admin-order-management/admin-order-management.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AdminItemManagmentPageComponent } from './admin-item-managment-page/admin-item-managment-page.component';
import { CommonModule } from '@angular/common';
import { AdminEditItemComponent } from './admin-edit-item/admin-edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    ItemInfoOneComponent,
    ItemInfoTwoComponent,
    StorePageComponent,
    StoreItemDetailComponent,
    CartComponent,
    AddCartToDatabaseComponent,
    PaymentPageComponent,
    VerificationPageComponent,
    ConfirmationPageComponent,
    OrderHistoryComponent,
    AdminComponent,
    AdminOrderManagementComponent,
    ChangePasswordComponent,
    ForgetPasswordComponent,
    AdminItemManagmentPageComponent,
    AdminEditItemComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,// once import on the above, you also need to add it here
    HttpClientModule,// once import on the above, you also need to add it here
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),AppRoutingModule, BrowserAnimationsModule, MatSliderModule,NgPaymentCardModule
  ],
  providers: [AuthService,EventService, AuthGuard,ItemInfoService,
    {provide: HTTP_INTERCEPTORS,// provider array can also be an object
      useClass: TokenInterceptorService,// this object use the class TokenInterceptorService
      multi:true


  }],// add the AuthSerice to the  provider array because I coded this class to provide/return the detail of a user information that were submitted from register page and login page
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
//ng g s auth, g for generate, s for service, auth is the name, but you can name is anything