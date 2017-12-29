import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ ContactService ]
})
export class ContactComponent implements OnInit {
	content;
	errorMessage: string;
	
	contactForm: FormGroup;

	constructor( private _contactService: ContactService,
				 private fb: FormBuilder ) { 
		this.contactForm = fb.group({
			'name': [null, Validators.compose([ Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
			'email': [null, Validators.compose([Validators.required, Validators.email])],
			'message': [null, Validators.compose([ Validators.required, Validators.minLength(12), Validators.maxLength(100)])]
		});
	}

	ngOnInit() {
		this._contactService.getContct()
			.subscribe((res) => {
				if(res.status === "success") {
					this.content = JSON.parse(res.data);
				}
				else if(res.status === "failed"){
					this.errorMessage = res.message;
				}
			})
	}

	sendEmail( info ) {
		this._contactService.sendEmail(info)
			.subscribe((res) => {
				console.log(res);
			})
	}

}
