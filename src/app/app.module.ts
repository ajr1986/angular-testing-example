import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DoctorsComponent } from './intermediate/spy/doctors.component';
import { DoctorService } from './intermediate/spy/doctors.service';
import { DoctorComponent } from './integration/doctor/doctor.component';
import { HospitalComponent } from './integration/hospital/hospital.component';
import { IncrementerComponent } from './integration/incrementer/incrementer.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './advance/routes/routes';
import { NavbarComponent } from './advance/navbar/navbar.component';
import { RouterDoctorComponent } from './advance/router-doctor/router-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    DoctorComponent,
    HospitalComponent,
    IncrementerComponent,
    NavbarComponent,
    RouterDoctorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    DoctorService,
    DoctorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
