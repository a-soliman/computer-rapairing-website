import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

	constructor( private _http: Http ) { }

	getContact() {
		return this._http.get('http://localhost:3000/')
			.map(res => res.json())
	}
}
