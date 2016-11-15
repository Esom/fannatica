import { Component } from '@angular/core';
import { NavController, ActionSheetController, ModalController, Platform, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
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
    private instagram: InstagramService,
    private modalCtrl:  ModalController
  ) {}

  openModal() {
    let modal = this.modalCtrl.create(ModalsContentPage);
    modal.present();
  }

  onPageDidEnter() {
    this.instagram.getMedia()
    .map(res => res.json())
    .subscribe((res) => {
      this.items = res.data;
      console.log(this.items)
    })
  }
}


@Component({
    templateUrl: 'build/pages/instagram/commentModal.html',
})

class ModalsContentPage {
  character;

  constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
  ) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
