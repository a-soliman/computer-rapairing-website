import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
 // import "rxjs/Rx";
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ HomeService ]
})
export class HomeComponent implements OnInit {

	constructor( private _homeService: HomeService) { }

	ngOnInit() {
		this._homeService.getContact()
			.subscribe((res) => {
				console.log(res);
			})
	}

}