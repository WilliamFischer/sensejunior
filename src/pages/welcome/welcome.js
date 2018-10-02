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
import { IonicPage, NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { SplashPage } from '../splash/splash';
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, vibration) {
        this.navCtrl = navCtrl;
        this.vibration = vibration;
        this.theValue = '';
        this.critters = ['tiger', 'sloth', 'penguin', 'bunny', 'fox', 'glider', 'hedgehog', 'koala', 'lion', 'mouse', 'owl', 'panda', 'possum', 'seal', 'snail', 'squirrl'];
        this.fillcounter = 0;
        this.pressedKeys = [];
    }
    WelcomePage.prototype.selectCritter = function (critter) {
        this.selectedCritter = critter;
        this.signinFormContinue = true;
    };
    WelcomePage.prototype.setupKeyboardMode = function () {
        this.setupKeyboard = true;
    };
    WelcomePage.prototype.unSetupKeyboardMode = function () {
        this.setupKeyboard = false;
    };
    WelcomePage.prototype.KeypadMode = function () {
        this.setupKeypad = true;
    };
    WelcomePage.prototype.unKeypadMode = function () {
        this.setupKeypad = false;
    };
    WelcomePage.prototype.useKeyboard = function (key) {
        this.vibration.vibrate(20);
        if (this.hitshift) {
            this.theValue = this.theValue + key.toUpperCase();
        }
        else {
            this.theValue = this.theValue + key;
        }
        // var str = this.theValue;
        // var theValue = str.replace(/ /g, "%20");
    };
    WelcomePage.prototype.keyClick = function (key) {
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
                // GO TO NEXT STEP
                if (_this.selectKeyAgain) {
                    _this.welcomeLoadMode = true;
                    _this.setKey2 = _this.pressedKeys;
                    console.log(_this.setKey1 + ' ' + _this.setKey2 + ' ' + _this.setName);
                    setTimeout(function () {
                        _this.navCtrl.push(SplashPage);
                    }, 3000);
                }
                else {
                    _this.selectKeyAgain = true;
                    _this.setKey1 = _this.pressedKeys;
                    console.log(JSON.stringify(_this.pressedKeys));
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
    WelcomePage.prototype.useBackspace = function () {
        this.theValue = this.theValue.substring(0, this.theValue.length - 1);
        // var str = this.theValue;
        // var theValue = str.replace(/ /g, "%20");
    };
    WelcomePage.prototype.backToHand = function () {
        this.selectedHands = false;
        this.setupKeyboard = false;
        this.setupKeypad = false;
        this.handRight = false;
    };
    WelcomePage.prototype.leftHandClick = function () {
        this.selectedHands = true;
        this.handRight = false;
    };
    WelcomePage.prototype.rightHandClick = function () {
        this.selectedHands = true;
        this.handRight = true;
    };
    WelcomePage.prototype.activateshift = function () {
        this.vibration.vibrate(20);
        if (this.hitshift) {
            this.hitshift = false;
        }
        else {
            this.hitshift = true;
        }
    };
    WelcomePage.prototype.dashTrigger = function () {
        this.navCtrl.push(SplashPage);
    };
    WelcomePage.prototype.moreicons = function () {
        this.vibration.vibrate(20);
        if (this.specialkeys) {
            this.specialkeys = false;
        }
        else {
            this.specialkeys = true;
        }
    };
    WelcomePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-welcome',
            templateUrl: 'welcome.html'
        }),
        __metadata("design:paramtypes", [NavController, Vibration])
    ], WelcomePage);
    return WelcomePage;
}());
export { WelcomePage };
//# sourceMappingURL=welcome.js.map