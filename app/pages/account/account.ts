import { Component } from '@angular/core';
import { NavController, ToastController, Platform, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import { SocialSharing } from 'ionic-native';
import 'rxjs/add/operator/map';


@Component({
  templateUrl: 'build/pages/account/account.html',
})
export class AccountPage {
  public account;
  public dataObject;
  constructor(private navCtrl: NavController, private http: Http, public toastCtrl: ToastController,private modalCtrl:  ModalController) {

  }
	onPageWillEnter() {
		this.http.get('../../data/account_toggles.json')
		.map(res => res.json())
		.subscribe(
		  data => this.dataObject = data,
	      err => console.error(err)
		);
	}

	Share(){
	    SocialSharing.share('Check out this product', 'title', null, 'fannatica.com').then(() => {
	    }).catch(() => {});
	}

	editProfile() {
	    let modal = this.modalCtrl.create(EditProfilePage);
	    modal.present();
	}
}

@Component({
    templateUrl: 'build/pages/account/edit_profile.html',
})

class EditProfilePage {
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
