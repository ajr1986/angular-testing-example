import { ROUTES } from "./routes";
import { DoctorComponent } from "../../integration/doctor/doctor.component";

describe('Main routes', () => {

    it('Must exist /doctor/:id route', () => {

        expect( ROUTES ).toContain({
            path: 'doctor/:id',
            component: DoctorComponent
        })
    });
});