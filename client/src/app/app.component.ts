import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  route = 'home';

  changeRoute( route: string ): void {
  	if( route === 'home' || route === 'about' || route === 'contact') {
  		this.route = route;
  		console.log(this.route)
  	}
  	return;
  }


}
