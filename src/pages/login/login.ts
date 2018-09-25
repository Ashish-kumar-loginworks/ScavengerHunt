import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HomePage} from '../home/home';
import { UserProfilePage } from '../user-profile/user-profile';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
public signinState:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  //  this.signinState=1
    this.signinState=this.navParams.get("signinState")
    console.log(this.signinState)
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  signin(){
this.signinState=1
document.getElementById("signin").style.backgroundColor="#27CAFB" 
document.getElementById("signup").style.backgroundColor="#FFF" 
document.getElementById("text-signin").style.color="#FFF" 
document.getElementById("text-signup").style.color="#27CAFB" 
document.getElementById("img").style.marginTop="21%"

  }



  signup(){
    this.signinState=0
    document.getElementById("signup").style.backgroundColor="#27CAFB" 
    document.getElementById("signin").style.backgroundColor="#FFF" 
    document.getElementById("text-signup").style.color="#FFF" 
    document.getElementById("text-signin").style.color="#27CAFB" 
    document.getElementById("img").style.marginTop="8%"
   
  }

  home(){
    this.navCtrl.push(UserProfilePage);
  }
}
