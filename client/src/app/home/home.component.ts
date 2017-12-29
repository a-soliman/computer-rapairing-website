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
	content;
	errorMessage: string;

	constructor( private _homeService: HomeService) { }

	ngOnInit() {
		this._homeService.getContact()
			.subscribe((res) => {
				if(res.status === "success") {
					this.content = JSON.parse(res.data);
				}
				else if(res.status === "failed"){
					this.errorMessage = res.message;
				}
			})
	}

}
