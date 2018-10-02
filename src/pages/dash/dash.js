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
import { BatteryStatus } from '@ionic-native/battery-status';
import { SearchPage } from '../search/search';
import { SocialPage } from '../social/social';
/**
 * Generated class for the DashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**

   EDITION GUIDE

   Free Mode == 0;
   Entertainment Mode (only out-of-age content is ristricted)
 
 */
var DashPage = /** @class */ (function () {
    function DashPage(navCtrl, navParams, batteryStatus) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.batteryStatus = batteryStatus;
        this.batteryStatus.onChange().subscribe(function (status) {
            console.log("BATTERY STATUS IS: " + status.level);
            _this.batteryLevel = status.level;
        });
    }
    DashPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashPage');
    };
    DashPage.prototype.teacherTrigger = function () {
        console.log("GO TEACH MODE");
    };
    DashPage.prototype.SearchTrigger = function () {
        this.navCtrl.push(SearchPage);
    };
    DashPage.prototype.SocialTrigger = function () {
        this.navCtrl.push(SocialPage);
    };
    DashPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-dash',
            templateUrl: 'dash.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, BatteryStatus])
    ], DashPage);
    return DashPage;
}());
export { DashPage };
//# sourceMappingURL=dash.js.map