import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'pick-letter',
    templateUrl: './pick-letter.component.html'
})

export class PickLetterComponent{
    pickLetter: FormGroup;
    selectLetter: string = '';
    @Output() selectLetterEvent = new EventEmitter<string>();

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.pickLetter = this.fb.group({
            letter: ['', Validators.compose([
                Validators.required,
                Validators.maxLength(1),
                Validators.pattern("^[a-zA-Z]+$")
            ])]
        })
    }

    message: string = 'pick letter component';
}