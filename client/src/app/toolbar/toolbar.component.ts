import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
	@Output() route = new EventEmitter();

	constructor() { }

	ngOnInit() {
		this.route.emit('home');
	}

	changeRoute( route: string ): void {
		if( route === 'home' || route === 'about' || route === 'contact') {
			this.route.emit(route);
		}
		
		return;
	}

	

}
