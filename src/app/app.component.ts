import { Component, ViewChild } from '@angular/core';
import { App, Platform, Nav, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Deeplinks } from '@ionic-native/deeplinks';

import { SearchPage } from '../pages/search/search';
import { SplashPage } from '../pages/splash/splash';
import { WelcomePage } from '../pages/welcome/welcome';
import { DashPage } from '../pages/dash/dash';
import { LearnPage } from '../pages/learn/learn';
import { SchoolPage } from '../pages/school/school';
import { LessonPage } from '../pages/lesson/lesson';
import { artComponent } from '../components/learning/art/art.component'

import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SchoolPage;//LearnPage;//LessonPage;//;//DashPage//

   @ViewChild(Nav) navChild:Nav;

  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private screenOrientation: ScreenOrientation) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      splashScreen.hide();

      if (this.platform.is('android')) {
        // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

        statusBar.overlaysWebView(true);
        statusBar.backgroundColorByHexString('#ffffff');
        console.log("StatusBar is: " + statusBar.isVisible);

        console.log('Your on Android, clearing console...')

        setTimeout(()=>{
           console.clear();
       }, 3000);
     }else{
       console.log('Your on Browser, clearing console...')

       setTimeout(()=>{
          console.clear();
      }, 3000);
     }


    });
  }
}
