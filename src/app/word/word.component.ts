import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'the-word',
    templateUrl: './word.component.html'
})

export class WordComponent {
    theWord: FormGroup;
    guessWord: string = '';
    @Output() guessWordEvent = new EventEmitter<string>();
    constructor(private fb: FormBuilder){
        this.createForm()
    }
    
    createForm() {
        this.theWord = this.fb.group({
            word: ['', Validators.compose([
                            Validators.required, 
                            Validators.minLength(7), Validators.maxLength(15), 
                            Validators.pattern("^[a-zA-Z]+$")
                        ])]
        })
    }

    onSubmit() {
        this.guessWord = this.theWord.controls.word.value;
        this.guessWordEvent.emit(this.guessWord);
        this.theWord.reset();
    }
}