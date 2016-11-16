import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TwitterService } from '../../providers/twitter-service/twitter-service';

@Component({
  templateUrl: 'build/pages/twitter/twitter.html',
  providers:[TwitterService]

})
export class TwitterPage {
  items: any = undefined;
  constructor(private navCtrl: NavController, private twitter: TwitterService) {}

  onPageDidEnter() {
    this.twitter.getTimeline()
    .map(res => res.json())
    .subscribe((res) => {
      this.items = res.data;
      console.log(this.items)
    })
  }

}
