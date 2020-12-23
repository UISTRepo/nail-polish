import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    contactForm: FormGroup;
    errorMessage: string = null;

    constructor() {

        this.contactForm = new FormGroup({
            email: new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            comment: new FormControl('', [
                Validators.minLength(6),
                Validators.required
            ])
        });

    }

    ngOnInit(): void {
    }

    submitForm(){

        if(this.contactForm.valid){
            let input ={
                email: this.contactForm.controls.email.value,
                comment: this.contactForm.controls.comment.value,
            }
            // submit the comment to the server
        }
        else{
            this.errorMessage = 'Invalid form';
        }
    }
}
