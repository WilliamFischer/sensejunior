import { Component, } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';
import { Vibration } from '@ionic-native/vibration';
import { DashPage } from '../dash/dash';

import { UpdateComponentsProvider } from '../../providers/update-components/update-components';

@IonicPage()
@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html',
})
export class LearnPage {
  scienceMode: boolean;
  artMode:boolean = false;
  mathsMode: boolean = false;
  historyMode: boolean = false;
  englishMode: boolean = false;
  learnPickerMode: boolean = true;

  constructor(public navCtrl: NavController) {}

  returnToPicker(){
    this.scienceMode = false;
    this.mathsMode = false;
    this.artMode = false;
    this.historyMode = false;
    this.englishMode = false;
    this.learnPickerMode = true;
  }

  triggerScience(){
    this.scienceMode = true;
    this.artMode = false;
    this.mathsMode = false;
    this.historyMode = false;
    this.englishMode = false;
    this.learnPickerMode = false;
  }

  triggerArt(){
    this.artMode = true;
    this.scienceMode = false;
    this.mathsMode = false;
    this.historyMode = false;
    this.englishMode = false;
    this.learnPickerMode = false;
  }

  triggerMath(){
    this.artMode = false;
    this.scienceMode = false;
    this.mathsMode = true;
    this.historyMode = false;
    this.englishMode = false;
    this.learnPickerMode = false;
  }

  triggerHistory(){
    this.artMode = false;
    this.scienceMode = false;
    this.mathsMode = false;
    this.historyMode = true;
    this.englishMode = false;
    this.learnPickerMode = false;
  }

  triggerEnglish(){
    this.artMode = false;
    this.scienceMode = false;
    this.mathsMode = false;
    this.historyMode = false;
    this.englishMode = true;
    this.learnPickerMode = false;
  }


  backToDash(){
    this.navCtrl.push(DashPage);
  }


}
