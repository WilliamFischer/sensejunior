import { Component, OnInit, Input  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UpdateComponentsProvider } from '../../../providers/update-components/update-components';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'learn-maths',
  templateUrl: './maths.component.html'
  // styleUrls: ['./science.component.scss']
})

export class mathsComponent implements OnInit {
  loading: boolean = true;
  checkbox: boolean = false;
  checkbox2: boolean = false;
  mathGoalInput:string;
  mathGoalInput2:string;
  checkboxChecked = false;
  checkboxChecked2 = false;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
  }

  mathGoalInputTyped($event){

    if($event.length > 1){
      this.checkbox = true;
    }else{
      this.checkbox = false;
      this.checkbox2 = false;
    }
  }

  mathGoalInputTyped2($event){

    if($event.length > 1){
      this.checkbox2 = true;
    }else{
      this.checkbox2 = false;
    }
  }

  goalCheck(){
    if(this.checkboxChecked){
      this.checkboxChecked = false;
    }else{
      this.checkboxChecked = true;
    }
  }

  goalCheck2(){
    if(this.checkboxChecked2){
      this.checkboxChecked2 = false;
    }else{
      this.checkboxChecked2 = true;
    }
  }
}
