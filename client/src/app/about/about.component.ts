import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [ AboutService]
})
export class AboutComponent implements OnInit {

	content;
	errorMessage: string;
	
	constructor( private _aboutService: AboutService) { }

	ngOnInit() {
		this._aboutService.getAbout()
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
