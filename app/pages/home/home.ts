import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { FacebookPage } from '../facebook/facebook';
import { TwitterPage } from '../twitter/twitter';
import { InstagramPage } from '../instagram/instagram';
import { YoutubePage } from '../youtube/youtube';
import { SoundcloudPage } from '../soundcloud/soundcloud';
import { StorePage } from '../store/store';
import { FeedsPage } from '../feeds/feeds';
import { ChatPage } from '../chat/chat';

import {YoutubeService} from '../../providers/youtube-service/youtube-service';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers:[YoutubeService]
})
export class HomePage {
  	// set the root pages for each tab
  	tab1Root = FeedsPage;
	// tab2Root = SoundcloudPage;
	tab2Root = ChatPage;
	tab3Root = FacebookPage;
	tab4Root = InstagramPage;
	tab5Root = TwitterPage;
	tab6Root = YoutubePage;
	tab7Root = StorePage;

	constructor(private nav: NavController, public ytPlayer: YoutubeService) {

	}
}
