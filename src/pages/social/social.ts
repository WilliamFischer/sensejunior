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

@IonicPage()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html',
})
export class SocialPage {

  hitshift: boolean;
  hitcaps: boolean;
  specialkeys: boolean;
  theValue: string = '';
  inChat: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private vibration: Vibration) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialPage');
  }

  useKeyboard(key) {
      this.vibration.vibrate(20);

      if (this.hitshift) {
          this.theValue = this.theValue + key.toUpperCase();
      } else {
          this.theValue = this.theValue + key
      }

      if (this.hitshift && !this.hitcaps) {
          this.hitshift = false
      }
  }

  /** Use backspace */
  useBackspace() {
      this.theValue = this.theValue.substring(0, this.theValue.length - 1);

  }

  /** Use Shift */
  activateshift() {
      this.vibration.vibrate(20);

      if (this.hitshift) {
          this.hitshift = false
      } else {
          this.hitshift = true
      }

      if(this.hitcaps){
        this.hitcaps = false;
      }
  }

  /** Use Caps */
  activatecaps() {
      this.hitshift = true
      this.hitcaps = true
  }

  /** Activate other icons */
  moreicons() {
      this.vibration.vibrate(20);

      if (this.specialkeys) {
          this.specialkeys = false
      } else {
          this.specialkeys = true
      }
  }

  dashTrigger(){
    this.navCtrl.push(DashPage);
  }

}
