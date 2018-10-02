var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { SearchPage } from '../search/search';
/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplashPage = /** @class */ (function () {
    function SplashPage(navCtrl, navParams, vibration) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vibration = vibration;
        this.fillcounter = 0;
        this.pressedKeys = [];
        this.today = Date.now();
    }
    SplashPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SplashPage');
    };
    SplashPage.prototype.keyClick = function (key) {
        var _this = this;
        this.vibration.vibrate(50);
        console.log(key);
        this.tkeyClick = key;
        console.log("FILCOUNT " + this.fillcounter);
        if (this.fillcounter == 3) {
            this.fillcounter++;
            this.pressedKeys.push(key);
            setTimeout(function () {
                _this.fillcounter = 0;
                console.log(JSON.stringify(_this.pressedKeys));
                if (_this.pressedKeys[0] == 4 && _this.pressedKeys[1] == 2 && _this.pressedKeys[2] == 2 && _this.pressedKeys[3] == 6) {
                    _this.navCtrl.push(SearchPage);
                }
                _this.pressedKeys = [];
            }, 300);
        }
        else {
            this.fillcounter++;
            this.pressedKeys.push(key);
        }
        setTimeout(function () {
            _this.tkeyClick = null;
        }, 100);
    };
    SplashPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-splash',
            templateUrl: 'splash.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, Vibration])
    ], SplashPage);
    return SplashPage;
}());
export { SplashPage };
//# sourceMappingURL=splash.js.map