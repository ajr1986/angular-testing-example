import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class FormExample {

    form: FormGroup;

    constructor( fb: FormBuilder) {

        this.form = fb.group({

            email: ['', [Validators.required, Validators.email]],
            pass: ['', Validators.required]

        });
    }
}