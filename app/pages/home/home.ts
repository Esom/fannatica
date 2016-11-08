import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { FacebookPage } from '../facebook/facebook';
import { TwitterPage } from '../twitter/twitter';
import { InstagramPage } from '../instagram/instagram';
import { YoutubePage } from '../youtube/youtube';
import { SoundcloudPage } from '../soundcloud/soundcloud';
import { StorePage } from '../store/store';


@Component({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  	// set the root pages for each tab
	tab1Root = SoundcloudPage;
	tab2Root = FacebookPage;
	tab3Root = InstagramPage;
	tab4Root = TwitterPage;
	tab5Root = YoutubePage;
	tab6Root = StorePage;


	constructor(private navCtrl: NavController) {

	}
}
