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
import { DashPage } from '../dash/dash';
/**
 * Generated class for the SocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SocialPage = /** @class */ (function () {
    function SocialPage(navCtrl, navParams, vibration) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vibration = vibration;
        this.theValue = '';
        this.inChat = true;
    }
    SocialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SocialPage');
    };
    SocialPage.prototype.useKeyboard = function (key) {
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
    SocialPage.prototype.useBackspace = function () {
        this.theValue = this.theValue.substring(0, this.theValue.length - 1);
    };
    /** Use Shift */
    SocialPage.prototype.activateshift = function () {
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
    SocialPage.prototype.activatecaps = function () {
        this.hitshift = true;
        this.hitcaps = true;
    };
    /** Activate other icons */
    SocialPage.prototype.moreicons = function () {
        this.vibration.vibrate(20);
        if (this.specialkeys) {
            this.specialkeys = false;
        }
        else {
            this.specialkeys = true;
        }
    };
    SocialPage.prototype.dashTrigger = function () {
        this.navCtrl.push(DashPage);
    };
    SocialPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-social',
            templateUrl: 'social.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, Vibration])
    ], SocialPage);
    return SocialPage;
}());
export { SocialPage };
//# sourceMappingURL=social.js.map