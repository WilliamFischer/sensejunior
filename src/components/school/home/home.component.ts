import { Component, OnInit, Input  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UpdateComponentsProvider } from '../../../providers/update-components/update-components';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'school-home',
  templateUrl: './home.component.html'
  // styleUrls: ['./science.component.scss']
})

export class schoolHomeComponent implements OnInit {
  loading: boolean = true;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
  }
}
