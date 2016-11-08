import { Component } from '@angular/core';
import { NavController,MenuController, } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/menu/menu.html',
})
export class MenuPage {
  // rootPage: any = HomePage;
  constructor(private navCtrl: NavController,public menuCtrl: MenuController) {

  }

}
