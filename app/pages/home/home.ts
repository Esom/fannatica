import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { FacebookPage } from '../facebook/facebook';
import { TwitterPage } from '../twitter/twitter';
import { InstagramPage } from '../instagram/instagram';
import { YoutubePage } from '../youtube/youtube';
import { SoundcloudPage } from '../soundcloud/soundcloud';
import { StorePage } from '../store/store';
import { FeedsPage } from '../feeds/feeds';

@Component({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  	// set the root pages for each tab
  	tab1Root = FeedsPage;
	tab2Root = SoundcloudPage;
	tab3Root = FacebookPage;
	tab4Root = InstagramPage;
	tab5Root = TwitterPage;
	tab6Root = YoutubePage;
	tab7Root = StorePage;

	constructor(private navCtrl: NavController) {

	}
}
