import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DoctorService {

  constructor( public http: Http ) { }

  getDoctors() {
    return this.http.get('...').pipe(
                map( resp => resp['doctors'] ));
  }

  addDoctor( doctor: any ) {
    return this.http.post('...', doctor ).pipe(
                map( resp => resp['doctor'] ));
  }

  deleteDoctor( id: string ) {
    return this.http.delete('...' ).pipe(
                map( resp => resp['doctor'] ));
  }


}
