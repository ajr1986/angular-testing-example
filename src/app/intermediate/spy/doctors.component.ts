import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctors.service';

@Component({
  selector: 'app-doctors',
  template: `
    <p>
      doctors works!
    </p>
  `,
  styles: []
})
export class DoctorsComponent implements OnInit {

  public doctors: any[] = [];
  public messageError: string;

  constructor( public doctorService: DoctorService ) { }

  ngOnInit() {
    this.doctorService.getDoctors()
          .subscribe( doctors => this.doctors = doctors );
  }

  addDoctor() {
    const doctor = { name: 'Doctor Mario' };

    this.doctorService.addDoctor(doctor)
          .subscribe(
            doctor => this.doctors.push(doctor),
            err => this.messageError = err
          );
  }

  deleteDoctor(id: string) {

    if ( confirm ) {
      this.doctorService.deleteDoctor( id );
    }

  }

}
