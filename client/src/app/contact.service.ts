import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

	constructor( private _http: Http ) { }

	getContct() {
		return this._http.get('http://localhost:3000/contact')
			.map(res => res.json())
	}

	sendEmail(info) {
		console.log(info);
		let headers = new Headers();
		headers.append('Content-Type', 'application/json')
		return this._http.post('http://localhost:3000/contact/send', JSON.stringify({name: info.name, email: info.email, message: info.message}), {headers})
			.map(res => res.json())
	}
}
