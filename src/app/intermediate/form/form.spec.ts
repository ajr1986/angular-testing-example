import { FormExample } from "./form";
import { FormBuilder } from "@angular/forms";

describe('Form test', () => {

    let component: FormExample;

    beforeEach(() => {

        component = new FormExample(new FormBuilder());
    });

    it('Must create a form with email and pass', () => {

        expect( component.form.contains('email')).toBeTruthy();
        expect( component.form.contains('pass')).toBeTruthy();
    });

    it('Email must be required', () => {

        const email = component.form.get('email');
        email.setValue('');

        expect(email.valid).toBeFalsy();
    });

    it('Email must be valid', () => {

        const email = component.form.get('email');
        email.setValue('emailexample@test.com');

        expect(email.valid).toBeTruthy();
    });

});