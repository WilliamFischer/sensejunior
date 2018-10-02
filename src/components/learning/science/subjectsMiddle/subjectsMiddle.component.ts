import { Component, OnInit, Input  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UpdateComponentsProvider } from '../../../../providers/update-components/update-components';

import { LessonPage } from '../../../../pages/lesson/lesson';

@Component({
  selector: 'learn-science-subjectsMiddle',
  templateUrl: './subjectsMiddle.component.html'
})
export class subjectsMiddleComponent implements OnInit {
  loading:boolean = true;
  currentSubject: string = 'science';
  speciesCollection: boolean = false;

  constructor(public navCtrl: NavController, private UpdateComponentsProvider: UpdateComponentsProvider){

    this.UpdateComponentsProvider.currentScienceSubject.subscribe(val => {
      this.currentSubject = val;
    });

  }

  ngOnInit() {

  }

  biologyTrigger(){
    this.currentSubject = 'biology';
  }

  speciesTrigger(){
    this.speciesCollection = true;
    this.currentSubject = '';
  }

  gotoLesson(){
    this.navCtrl.push(LessonPage);
  }
}
