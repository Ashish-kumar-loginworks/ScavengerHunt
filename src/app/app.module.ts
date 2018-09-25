import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { SettingsPage } from '../pages/settings/settings';
import { DeleteAccountModalPage } from '../pages/delete-account-modal/delete-account-modal';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { SearchPage } from '../pages/search/search';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    LoginPage,
    SignupPage,
    EditProfilePage,
    SettingsPage,
    DeleteAccountModalPage,
    UserProfilePage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    LoginPage,
    SignupPage,
    EditProfilePage,
    SettingsPage,
    DeleteAccountModalPage,
    UserProfilePage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
