import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingComponent } from './main/landing/landing.component';
import { PrescriptionComponent } from './main/prescription/prescription.component';
import { TrackComponent } from './main/track/track.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { MomoComponent } from './momo/momo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LandingComponent,
    PrescriptionComponent,
    TrackComponent,
    RegisterComponent,
    LoginComponent,
    WelcomeComponent,
    MomoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDLibt2PJuBByaaEEP4ZgcKcDWsx1MEbEE',
    }),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
