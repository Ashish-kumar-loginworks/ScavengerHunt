import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

import { SearchPage} from '../search/search'

/**
 * Generated class for the DeleteAccountModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delete-account-modal',
  templateUrl: 'delete-account-modal.html',
})
export class DeleteAccountModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController, public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeleteAccountModalPage');
  }
  okBtn(){
this.viewCtrl.dismiss();
this.navCtrl.push(SearchPage);
  }
}
