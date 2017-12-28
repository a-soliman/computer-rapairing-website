import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AboutService {

	constructor( private _http: Http ) { }

	getAbout() {
		return this._http.get('http://localhost:3000/about')
			.map(res => res.json())
	}

}
