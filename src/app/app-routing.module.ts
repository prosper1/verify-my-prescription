import { TrackComponent } from './main/track/track.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './main/landing/landing.component';
import { PrescriptionComponent } from './main/prescription/prescription.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path : '',
    component : LandingComponent,
  },
  {
    path : 'prescription',
    component : PrescriptionComponent,
  },
  {
    path : 'track',
    component : TrackComponent,
  },
  {
    path : 'login',
    component : LoginComponent,
  },
  {
    path : 'register',
    component : RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
