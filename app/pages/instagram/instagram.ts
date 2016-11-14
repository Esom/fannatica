import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InstagramService } from '../../providers/instagram-service/instagram-service';
/*
  Generated class for the InstagramPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/instagram/instagram.html',
  providers: [InstagramService]
})
export class InstagramPage {
  items: any = undefined;
  constructor(
    private navCtrl: NavController,
    private instagram: InstagramService
  ) {}

  onPageDidEnter() {
    this.instagram.getMedia()
      .map(res => res.json())
      .subscribe((res) => {
        this.items = res.data;
        console.log(this.items)
      })
  }

}
