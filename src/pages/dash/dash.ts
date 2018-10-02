import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BatteryStatus } from '@ionic-native/battery-status';

import { SearchPage } from '../search/search';
import { SocialPage } from '../social/social';
import { LearnPage } from '../learn/learn';
import { SchoolPage } from '../school/school';
import { WelcomePage } from '../welcome/welcome';



/**
 * Generated class for the DashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 /**

    EDITION GUIDE

    Free Mode == 0  (Default)
    Entertainment Mode (only out-of-age content is ristricted) == 1
    Science Mode == 2

  */

@IonicPage()
@Component({
  selector: 'page-dash',
  templateUrl: 'dash.html',
})
export class DashPage {
  batteryLevel: any;
  Edition: number = 2;

  learnLock: boolean = false;
  searchLock: boolean = false;
  socialLock: boolean = false;
  gameLock: boolean = false;
  mediaLock: boolean = false;
  musicLock: boolean = false;
  marketLock: boolean = false;
  profileLock: boolean = false;

  cantShake: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private batteryStatus: BatteryStatus) {
    this.batteryStatus.onChange().subscribe(status => {
       console.log("BATTERY STATUS IS: " + status.level);
       this.batteryLevel = status.level;
    });

    if(this.Edition == 2){
      //this.socialLock = true;
      this.gameLock = true;
      this.mediaLock = true;
      this.musicLock = true;
      this.marketLock = true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashPage');
  }

  teacherTrigger(){
    console.log("GO TEACH MODE")
  }

  welcomeTrigger(){
    this.navCtrl.push(WelcomePage)
  }

  LearnTrigger(){
    if(!this.learnLock){
      this.navCtrl.push(LearnPage)
    }else{
      this.cantShake = 1
    }
  }

  SearchTrigger(){
    if(!this.searchLock){
      this.navCtrl.push(SearchPage)
    }else{
      this.cantShake = 2
    }
  }

  SchoolTrigger(){
    this.navCtrl.push(SchoolPage)
  }

  SocialTrigger(){
    if(!this.socialLock){
      this.navCtrl.push(SocialPage)
    }else{
      this.cantShake = 3
    }
  }


  GameTrigger(){
    if(!this.gameLock){

    }else{
      this.cantShake = 4
    }
  }

  MediaTrigger(){
    if(!this.mediaLock){

    }else{
      this.cantShake = 5
    }
  }

  MusicTrigger(){
    if(!this.musicLock){

    }else{
      this.cantShake = 6
    }
  }

  MarketTrigger(){
    if(!this.marketLock){

    }else{
      this.cantShake = 7
    }
  }

  ProfileTrigger(){
    if(!this.profileLock){

    }else{
      this.cantShake = 8
    }
  }



}
