import { Component, OnInit, Input  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UpdateComponentsProvider } from '../../../providers/update-components/update-components';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'learn-science',
  templateUrl: './science.component.html'
  // styleUrls: ['./science.component.scss']
})

export class scienceComponent implements OnInit {
  loading: boolean = true;
  SheuldeBuilderMode: boolean;
  backgroundZoom: number;
  googleSanatized: any;

  homeMiddle: boolean = true;
  subjectsMiddle: boolean;
  searchMiddle: boolean;
  showKeyboard: boolean;
  ScienceTypeMode: boolean;
  selectedSearchInput: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer, private vibration: Vibration, private UpdateComponentsProvider: UpdateComponentsProvider) {
    this.googleSanatized = sanitizer.bypassSecurityTrustResourceUrl('');

    this.UpdateComponentsProvider.change.subscribe(isOpen => {
      this.showKeyboard = isOpen;
    });

    this.UpdateComponentsProvider.SheuldeBuilder.subscribe(isOpen => {
      this.SheuldeBuilderMode = isOpen;
    });

    this.UpdateComponentsProvider.scienceTypeingMode.subscribe(isOpen => {
      this.ScienceTypeMode = isOpen;
    });

    this.UpdateComponentsProvider.mainTypeTitleTrigger.subscribe(isopen => {
      if(isopen){this.selectedSearchInput = "Title"}
    });

    this.UpdateComponentsProvider.mainTypeBodyTrigger.subscribe(isopen => {
      if(isopen){this.selectedSearchInput = "Body"}
    });

  }

  ngOnInit() {
  }

  homeMiddleTrigger(){
    this.homeMiddle = true;
    this.searchMiddle = false;
    this.subjectsMiddle = false;
  }

  subjectsMiddleTrigger(){
    this.homeMiddle = false;
    this.searchMiddle = false;
    this.subjectsMiddle = true;

    if(this.subjectsMiddle){
        this.UpdateComponentsProvider.resetScienceSubject();
    }
  }

  searchMiddleTrigger(){
    this.homeMiddle = false;
    this.searchMiddle = true;
    this.subjectsMiddle = false;
  }

  getOutOfTypeMode(){
    this.UpdateComponentsProvider.scienceTypeUnToggle();
  }


}
