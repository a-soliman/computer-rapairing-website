import { Component, OnInit } from '@angular/core';
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
	
	constructor( private _contactService: ContactService ) { }

	ngOnInit() {
		this._contactService.getContct()
			.subscribe((res) => {
				console.log(res);
				if(res.status === "success") {
					this.content = JSON.parse(res.data);
				}
				else if(res.status === "failed"){
					this.errorMessage = res.message;
				}
			})
	}

}
