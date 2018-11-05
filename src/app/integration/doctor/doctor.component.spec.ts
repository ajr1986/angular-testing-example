import { DoctorComponent } from "./doctor.component";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { DoctorService } from "./doctor.service";
import { HttpClientModule } from "@angular/common/http";

describe('DoctorComponent', () => {

    let component: DoctorComponent;
    let fixture: ComponentFixture<DoctorComponent>;

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [
                DoctorComponent
            ],
            providers: [
                DoctorService
            ],
            imports: [
                HttpClientModule
            ]
        });

        fixture = TestBed.createComponent(DoctorComponent);
        component = fixture.componentInstance;
    });

    it('Must create the DoctorComponent', () => {

        expect(component).toBeTruthy();
    });

    it('Must return the doctor name', () => {

        const name = 'Javier';

        const msg = component.greetings(name);

        expect(msg).toContain(name);
    });
});