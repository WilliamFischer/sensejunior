var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Vibration } from '@ionic-native/vibration';
import { MyApp } from './app.component';
import { SearchPage } from '../pages/search/search';
import { SplashPage } from '../pages/splash/splash';
import { WelcomePage } from '../pages/welcome/welcome';
import { DashPage } from '../pages/dash/dash';
import { SocialPage } from '../pages/social/social';
import { SearchProvider } from '../providers/search/search';
import { AbsoluteDrag } from '../directives/absolute-drag/absolute-drag';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                SearchPage,
                SplashPage,
                WelcomePage,
                DashPage,
                SocialPage,
                AbsoluteDrag
            ],
            imports: [
                BrowserModule,
                IonicModule.forRoot(MyApp)
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                SearchPage,
                SplashPage,
                WelcomePage,
                DashPage,
                SocialPage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                Vibration,
                BatteryStatus,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                SearchProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map