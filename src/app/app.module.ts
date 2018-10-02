import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Vibration } from '@ionic-native/vibration';
import { Deeplinks } from '@ionic-native/deeplinks';

import { MyApp } from './app.component';
import { SearchPage } from '../pages/search/search';
import { SplashPage } from '../pages/splash/splash';
import { WelcomePage } from '../pages/welcome/welcome';
import { DashPage } from '../pages/dash/dash';
import { SocialPage } from '../pages/social/social';
import { LearnPage } from '../pages/learn/learn';
import { SchoolPage } from '../pages/school/school';
import { LessonPage } from '../pages/lesson/lesson';
import { SearchProvider } from '../providers/search/search';

import { AbsoluteDrag } from '../directives/absolute-drag/absolute-drag';

import { ScreenOrientation } from '@ionic-native/screen-orientation';

// Misc Components
import { KeyboardComponent } from '../components/keyboard/keyboard.component'

// Learning Page Components


// School Components
import { schoolFilesComponent } from '../components/school/files/files.component'
import { schoolHomeComponent } from '../components/school/home/home.component'

// Science Components
import { scienceComponent } from '../components/learning/science/science.component'
import { HomeMiddleComponent } from '../components/learning/science/homeMiddle/homeMiddle.component'
import { subjectsMiddleComponent } from '../components/learning/science/subjectsMiddle/subjectsMiddle.component'
import { searchMiddleComponent } from '../components/learning/science/searchMiddle/searchMiddle.component'
import { sheduleBuilderComponent } from '../components/learning/science/sheduleBuilder/sheduleBuilder.component'
import { speciesCollectionComponent } from '../components/learning/science/speciesCollection/speciesCollection.component'

// Art Components
import { artComponent } from '../components/learning/art/art.component'

// Math Components
import { mathsComponent } from '../components/learning/maths/maths.component'

// Math Components
import { historyComponent } from '../components/learning/history/history.component'

// English Components
import { englishComponent } from '../components/learning/english/english.component'

// MASTER PROVIDER
import { UpdateComponentsProvider } from '../providers/update-components/update-components';

// const appRoutes: Routes = [
//     { path: '', component: WelcomePage },
//     { path: 'dash', component: DashPage },
//     { path: 'social', component: SocialPage },
// ];

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    SplashPage,
    WelcomePage,
    DashPage,
    SocialPage,
    LearnPage,
    LessonPage,
    SchoolPage,
    AbsoluteDrag,
    KeyboardComponent,
    scienceComponent,
    HomeMiddleComponent,
    subjectsMiddleComponent,
    searchMiddleComponent,
    sheduleBuilderComponent,
    speciesCollectionComponent,
    artComponent,
    mathsComponent,
    historyComponent,
    englishComponent,
    schoolFilesComponent,
    schoolHomeComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoutes),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    SplashPage,
    WelcomePage,
    DashPage,
    SocialPage,
    LearnPage,
    LessonPage,
    SchoolPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    BatteryStatus,
    ScreenOrientation,
    Deeplinks,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SearchProvider,
    UpdateComponentsProvider
  ]
})
export class AppModule {}
