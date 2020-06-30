// this is a routing module that config different browes for application

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component'; // each time we add a component, it automatically imported, but if not, you need to add it
import { RegisterComponent } from './register/register.component';


const routes: Routes = [// routes are array of objects
  { // add one default route
    path:'', // path is empty because we want user to be redirected to the events route anytime they enter the mainpage (localhost:3000)
    redirectTo: '/events',// redirect this path to the event's path
    pathMatch: 'full' //we need to specify the pathMatch property to 'full' for proper nevagation if this is a default route
  },
{
  path:'events',
  component: EventsComponent 
},
{
  path:'special',
  component: SpecialEventsComponent
},
{path:'login',
component: LoginComponent
},
{
  path:'register',
  component:RegisterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
