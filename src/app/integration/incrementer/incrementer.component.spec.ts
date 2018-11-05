import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementerComponent } from './incrementer.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('IncrementerComponent', () => {

    let component: IncrementerComponent;
    let fixture: ComponentFixture<IncrementerComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementerComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementerComponent);
        component = fixture.componentInstance;

    });

    it('Must show the text', () => {

        component.text = 'Progress';

        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain('Progress');
    });

    it('Must show in input the progress value', () => {

        component.updateValue(5);

        fixture.detectChanges();

        fixture.whenStable().then(() => {

            const input = fixture.debugElement.query(By.css('input'));
            const elem = input.nativeElement;

            expect(elem.value).toBe('55');
        });

    });

    it('Must increment or decrement in 5 with one click in the button', () => {

        const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'))

        buttons[0].triggerEventHandler('click', null);

        expect(component.progress).toBe(45);

        buttons[1].triggerEventHandler('click', null);

        expect(component.progress).toBe(50);
    });

    it('Must show the progress', () => {

        const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'))

        buttons[0].triggerEventHandler('click', null);

        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain('45');
    });

});
