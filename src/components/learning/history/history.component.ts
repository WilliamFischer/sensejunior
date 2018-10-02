import { Component, OnInit, Input  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UpdateComponentsProvider } from '../../../providers/update-components/update-components';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'learn-history',
  templateUrl: './history.component.html'
  // styleUrls: ['./science.component.scss']
})

export class historyComponent implements OnInit {
  loading: boolean = true;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
  }

}
