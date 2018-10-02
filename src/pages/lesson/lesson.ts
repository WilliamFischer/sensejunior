import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

import { SplashPage } from '../splash/splash';
import { DashPage } from '../dash/dash';



@IonicPage()
@Component({
  selector: 'page-lesson',
  templateUrl: 'lesson.html',
})
export class LessonPage {
  step:number = 1;
  twelveAAns:boolean = false;
  twelveBAns:boolean = false;

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  nextStep() {
    if(this.step == 21){
      this.step = 1;
    }else{
      this.step++
    }
  }

  twelveATyped(twelveA){
    if(twelveA == 'Biochemistry' || twelveA == 'Botany' || twelveA == 'Cellular biology'|| twelveA == 'Ecology'|| twelveA == 'Evolutionary biology'|| twelveA == 'Genetics'|| twelveA == 'Molecular biology'|| twelveA == 'Physiology'|| twelveA == 'Zoology'){
      this.twelveAAns = true;
    }else{
      this.twelveAAns = false;
    }
  }

  twelveBTyped(twelveB){
    if(twelveB == 'Biochemistry' || twelveB == 'Botany' || twelveB == 'Cellular biology'|| twelveB == 'Ecology'|| twelveB == 'Evolutionary biology'|| twelveB == 'Genetics'|| twelveB == 'Molecular biology'|| twelveB == 'Physiology'|| twelveB == 'Zoology'){
      this.twelveBAns = true;
    }else{
      this.twelveBAns = false;
    }

    if(this.twelveAAns && this.twelveBAns){
      setTimeout(() => {
        this.step = 13;
      }, 1000);
    }
  }
}
