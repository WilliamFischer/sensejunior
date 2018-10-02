import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DashPage } from '../dash/dash';
import { UpdateComponentsProvider } from '../../providers/update-components/update-components';


@IonicPage()
@Component({
  selector: 'page-school',
  templateUrl: 'school.html',
})
export class SchoolPage {
  homeMode: boolean = true;
  filesMode: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad SchoolPage');
  }

  dashTrigger(){
    this.navCtrl.push(DashPage)
  }

  filesModeSelect(){
    this.filesMode = true;
    this.homeMode = false;
  }

  homeModeSelect(){
    this.homeMode = true;
    this.filesMode = false;
  }

}
