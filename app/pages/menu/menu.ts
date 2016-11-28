import { Component } from '@angular/core';
import { NavController,MenuController, } from 'ionic-angular';
import { AccountPage } from '../account/account';
@Component({
  templateUrl: 'build/pages/menu/menu.html',
})
export class MenuPage {
	// rootPage: any = HomePage;
	constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

	}

}
