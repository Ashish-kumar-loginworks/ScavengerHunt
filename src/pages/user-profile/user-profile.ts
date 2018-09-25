import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EditProfilePage} from '../edit-profile/edit-profile'

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
browseState:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.browseState=0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }


  browseOtherProfiles(){

    this.browseState=0;
    document.getElementById("browseOtherProfiles").style.background="#FFF"
    document.getElementById("text-browseOtherProfiles").style.color="#F7941E"
    document.getElementById("browseCategories").style.background="#F7941E"
    document.getElementById("text-browseCategories").style.color="#FFF"
      }

  browseCategories(){
    this.browseState=1;
    document.getElementById("browseOtherProfiles").style.background="#F7941E"
    document.getElementById("text-browseOtherProfiles").style.color="#FFF"
    document.getElementById("browseCategories").style.background="#FFF"
    document.getElementById("text-browseCategories").style.color="#F7941E"
  }


  editProfile(){
    this.navCtrl.push(EditProfilePage);
  }
}
