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
import { SplashPage } from '../splash/splash';
import { DashPage } from '../dash/dash';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, vibration) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vibration = vibration;
        this.theValue = '';
        this.hitshift = true;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.useKeyboard = function (key) {
        this.vibration.vibrate(20);
        if (this.hitshift) {
            this.theValue = this.theValue + key.toUpperCase();
        }
        else {
            this.theValue = this.theValue + key;
        }
        if (this.hitshift && !this.hitcaps) {
            this.hitshift = false;
        }
    };
    /** Use backspace */
    SearchPage.prototype.useBackspace = function () {
        this.theValue = this.theValue.substring(0, this.theValue.length - 1);
    };
    /** Use Shift */
    SearchPage.prototype.activateshift = function () {
        this.vibration.vibrate(20);
        if (this.hitshift) {
            this.hitshift = false;
        }
        else {
            this.hitshift = true;
        }
        if (this.hitcaps) {
            this.hitcaps = false;
        }
    };
    /** Use Caps */
    SearchPage.prototype.activatecaps = function () {
        this.hitshift = true;
        this.hitcaps = true;
    };
    /** Activate other icons */
    SearchPage.prototype.moreicons = function () {
        this.vibration.vibrate(20);
        if (this.specialkeys) {
            this.specialkeys = false;
        }
        else {
            this.specialkeys = true;
        }
    };
    /** Call Search Function */
    SearchPage.prototype.searchSense = function () {
    };
    /** GoTo Splash */
    SearchPage.prototype.splashTrigger = function () {
        this.navCtrl.push(SplashPage);
    };
    /** GoTo Dashboard */
    SearchPage.prototype.dashTrigger = function () {
        this.navCtrl.push(DashPage);
    };
    SearchPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-search',
            templateUrl: 'search.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, Vibration])
    ], SearchPage);
    return SearchPage;
}());
export { SearchPage };
//# sourceMappingURL=search.js.map