import { Component } from '@angular/core';
import { Platform, ionicBootstrap , MenuController} from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HomePage } from './pages/home/home';


@Component({
  templateUrl: 'build/pages/menu/menu.html'
})
export class MyApp {

  public rootPage: any;

  constructor(private platform: Platform, private menu: MenuController) {
    this.menu =  menu;
    this.rootPage = HomePage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
