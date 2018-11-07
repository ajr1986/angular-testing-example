import { Routes } from '@angular/router';
import { HospitalComponent } from "../../integration/hospital/hospital.component";
import { DoctorComponent } from '../../integration/doctor/doctor.component';
import { IncrementerComponent } from '../../integration/incrementer/incrementer.component';

export const ROUTES: Routes = [
    { path: 'hospital', component: HospitalComponent },
    { path: 'doctor/:id', component: DoctorComponent },
    { path: '**', component: IncrementerComponent }
];