import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterDoctorComponent } from './router-doctor.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, empty, Subject } from 'rxjs';

class FakeRouter {
  navigate(params) {}
}

class FakeActivatedRoute {
  // params: Observable<any> = empty();

  private subject = new Subject();

  push(value){

    this.subject.next(value);
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('RouterDoctorComponent', () => {
  let component: RouterDoctorComponent;
  let fixture: ComponentFixture<RouterDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterDoctorComponent ],
      providers: [
        { provide: Router, useClass: FakeRouter},
        { provide: ActivatedRoute, useClass: FakeActivatedRoute}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Must redirect to /doctor', () => {

    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.saveDoctor();

    expect(spy).toHaveBeenCalledWith(['doctor', '123']);
  });

  it('ID must be new', () => {

    component = fixture.componentInstance;

    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);

    activatedRoute.push({id: 'new'});

    expect(component.id).toBe('new');
  });
  
});
