import { TrackComponent } from './main/track/track.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './main/landing/landing.component';
import { PrescriptionComponent } from './main/prescription/prescription.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './_service/auth.guard';
import { MomoComponent } from './momo/momo.component';

const routes: Routes = [
  {
    path : '',
    component : PrescriptionComponent,
    canActivate: [AuthGuard],
  },
  {
    path : 'prescription',
    component : PrescriptionComponent,
    canActivate: [AuthGuard],
  },
  {
    path : 'landing',
    component : LandingComponent,
    canActivate: [AuthGuard],
  },
  {
    path : 'track',
    component : TrackComponent,
    canActivate: [AuthGuard],
  },
  {
    path : 'login',
    component : LoginComponent,
  },
  {
    path : 'register',
    component : RegisterComponent,
  },
  {
    path : 'momo',
    component : MomoComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
