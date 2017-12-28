import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ ContactService ]
})
export class ContactComponent implements OnInit {

	constructor( private _contactService: ContactService ) { }

	ngOnInit() {
		this._contactService.getContct()
			.subscribe((res) => {
				console.log(res);
			});
	}

}
