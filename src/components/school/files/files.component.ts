import { Component, OnInit, Input  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UpdateComponentsProvider } from '../../../providers/update-components/update-components';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'school-files',
  templateUrl: './files.component.html'
  // styleUrls: ['./science.component.scss']
})

export class schoolFilesComponent implements OnInit {
  loading: boolean = true;
  textPos: any;
  searchLarge: boolean;
  duelDocMode:boolean = false;
  selection: any;

  constructor(public navCtrl: NavController) {
    this.textPos = '';
  }

  ngOnInit() {
  }

  /** GoTo Dashboard */

  triggerSearchLarge(){
    this.searchLarge = true;
  }

  unTriggerHighlight(){
    this.searchLarge = false;
  }

  doubleDoc(){
    console.log("Duel Document Mode")
    this.duelDocMode = true;
  }

  unDoubleDoc(){
    this.duelDocMode = false;
  }

  triggerHightlightSelect(){
    //console.log(window.getSelection());
    if(this.textPos){
      if(!this.searchLarge){
        this.textPos = ''
      }
    }else{
      if(window.getSelection().toString().length > 0){
        console.log(window.getSelection().toString() + ":");
        this.selection = window.getSelection();
        var range = this.selection.getRangeAt(0);

        this.textPos = range.getBoundingClientRect();
        console.log(this.textPos);
      }
    }
  }
}
