import { Component, OnInit, Input  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LearnPage } from '../../../pages/learn/learn';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'learn-english',
  templateUrl: './english.component.html'
  //styleUrls: ['./art.component.scss']
})

export class englishComponent implements OnInit {
  loading: boolean = true;
  selectedMenuItem: number = 0;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
  }

  backToLearn(){
    this.navCtrl.push(LearnPage);
  }
}
