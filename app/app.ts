import { Component } from '@angular/core';
import { Platform, ionicBootstrap , MenuController} from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HomePage } from './pages/home/home';
import {YoutubePage} from './pages/youtube/youtube';
import {YoutubeService} from './providers/youtube-service/youtube-service';


@Component({
  templateUrl: 'build/pages/menu/menu.html'
})
export class MyApp {

  public rootPage: any;

  constructor(private platform: Platform, private menu: MenuController, public ytPlayer: YoutubeService) {
    this.menu =  menu;
    this.rootPage = HomePage;

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
}

ionicBootstrap(MyApp, [YoutubeService]);
