import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { SettingsPage } from '../pages/settings/settings';
import { DeleteAccountModalPage } from '../pages/delete-account-modal/delete-account-modal';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { SearchPage } from '../pages/search/search';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav)nav:Nav
  rootPage:any = WelcomePage;
  pages: Array<{title: string, component: any,logo:string}>;
  icon1;
  icon2;
  icon3;
  icon4;
  icon5;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl:MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.icon1='assets/icon/home.png'
    this.icon2='assets/icon/user_profile.png'
    this.icon3='assets/icon/edit_profile.png'
    this.icon4='assets/icon/settings.png'
    this.icon5='assets/icon/logout.png'
  
    this.pages = [
      { title: 'Home', component:HomePage, logo:this.icon1},
      { title: 'User Profile', component:UserProfilePage, logo:this.icon2},
      { title: 'Edit Profile', component:EditProfilePage, logo:this.icon3},
      {title:  'Settings',component:SettingsPage,logo:this.icon4},
      { title: 'Logout', component:SettingsPage, logo:this.icon5},
    ];
  }
  
  openPage(page){
    console.log(page)
    this.nav.push(page.component);
    this.menuCtrl.close();
  }

  closeMenu(){
    this.menuCtrl.close();
  }
}

