import { Component, ViewChild } from '@angular/core';
import { Platform, ionicBootstrap , MenuController, NavController, Nav} from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HomePage } from './pages/home/home';
import { YoutubePage } from './pages/youtube/youtube';
import { LoginPage } from './pages/login/login';
import { AccountPage } from './pages/account/account';
import { ChatPage } from './pages/chat/chat';

@Component({
  templateUrl: 'build/app.html',
  // templateUrl: 'build/pages/menu/menu.html',
  providers: [NavController]
})
export class MyApp {
  @ViewChild(Nav) nav : Nav;
  private rootPage: any;
  private pages:any[] = [];

  constructor(private platform: Platform, private menu: MenuController) {
    this.menu =  menu;
    this.pages = [
        { title: 'Account', component: AccountPage },
        { title: 'Login', component: LoginPage }
    ];
    this.rootPage = ChatPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    this.menu.close()
    // Using this.nav.setRoot() causes
    // Tabs to not show!
    this.nav.push(page.component);
  };
}

ionicBootstrap(MyApp);
