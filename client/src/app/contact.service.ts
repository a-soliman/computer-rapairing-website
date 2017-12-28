import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

	constructor( private _http: Http ) { }

	getContct() {
		return this._http.get('http://localhost:3000/contact')
			.map(res => res.json())
	}
}
