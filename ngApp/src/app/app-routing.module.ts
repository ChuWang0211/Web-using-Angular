// this is a routing module that config different browes for application

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component'; // each time we add a component, it automatically imported, but if not, you need to add it
import { RegisterComponent } from './register/register.component';
import{ AuthGuard} from './auth.guard'  
import { ItemInfoOneComponent } from './item-info-one/item-info-one.component';
import { ItemInfoTwoComponent } from './item-info-two/item-info-two.component';
import{StorePageComponent} from './store-page/store-page.component'
import{StoreItemDetailComponent} from './store-item-detail/store-item-detail.component'
import { from } from 'rxjs';
import { CartComponent } from './cart/cart.component';
import { AddCartToDatabaseComponent } from './add-cart-to-database/add-cart-to-database.component';
import { VerificationPageComponent } from './verification-page/verification-page.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import{OrderHistoryComponent} from './order-history/order-history.component';
import{AdminOrderManagementComponent} from './admin-order-management/admin-order-management.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
const routes: Routes = [// routes are array of objects
  { // add one default route
    path:'', // path is empty because we want user to be redirected to the events route anytime they enter the mainpage (localhost:3000)
    redirectTo: '/events',// redirect this path to the event's path
    pathMatch: 'full' //we need to specify the pathMatch property to 'full' for proper nevagation if this is a default route
  },
{
  path:'events',
  component: EventsComponent 
},{
  path:'iteminfo_1',
  component:ItemInfoOneComponent
},{
  path:'iteminfo_2',
  component:ItemInfoTwoComponent
},
{
  path:'special',
  component: SpecialEventsComponent,
  canActivate: [AuthGuard]// insert AuthGuard and canActivate to the special event 
},
{path:'login',
component: LoginComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'storePage',
  component:StorePageComponent
},
{
  path:'storeItemDetail',
  component:StoreItemDetailComponent
},
{
  path:'cart',
  component:CartComponent
},{
  path:'addCartToDatabase',
  component:AddCartToDatabaseComponent
},
{
  path:'VerificationPage',
  component:VerificationPageComponent
},
{
  path:'confirmation',
  component:ConfirmationPageComponent
},{
  path:'orderHistory',
  component:OrderHistoryComponent
},
{
  path:'adminViewUserOrderHistory',
  component:AdminOrderManagementComponent
}
  },
{
  path: 'changePassword',
   component: ChangePasswordComponent
  },
  {
   path: 'forgetPassword',
   component:ForgetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
