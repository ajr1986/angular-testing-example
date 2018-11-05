import { DoctorService } from './doctors.service';
import { DoctorsComponent } from './doctors.component';
import { from, empty, throwError } from 'rxjs';

describe('DoctorsComponent', () => {

    let component: DoctorsComponent;
    const service: DoctorService = new DoctorService(null);

    beforeEach( () => {
        component = new DoctorsComponent(service);
    });


    it('Init: must load the doctors', () => {

        let doctors = ['doctor1', 'doctor2', 'doctor3'];

        spyOn( service, 'getDoctors').and.callFake( () => {

            return from(doctors);
        });

        component.ngOnInit();

        expect(component.doctors.length).toBeGreaterThan(0);
    });

    it('Component call addDoctor method', () => {

        const spy = spyOn(service, 'addDoctor').and.callFake(() => {

            return empty();
        });

        component.addDoctor();

        expect(spy).toHaveBeenCalled();
    });

    it('Add doctor', () => {

        const doctor = {id: 1, name: 'Doctor 1'};

        spyOn(service, 'addDoctor').and.returnValue(from([doctor]));

        component.addDoctor();

        expect(component.doctors.indexOf(doctor)).toBeGreaterThanOrEqual(0);

    });

    it('MessageError in case of fail', () => {

        const err = 'Fail to add doctor';

        spyOn(service, 'addDoctor').and.returnValue(throwError(err));

        component.addDoctor();

        expect(component.messageError).toBe(err);

    });

    it('Component call deleteDoctor', () => {

        const spy = spyOn(service, 'deleteDoctor').and.returnValue(empty());

        component.deleteDoctor('1');

        expect(spy).toHaveBeenCalledWith('1');
    });

});
