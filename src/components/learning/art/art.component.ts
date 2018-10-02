import { Component, OnInit, Input  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LearnPage } from '../../../pages/learn/learn';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'learn-art',
  templateUrl: './art.component.html'
  //styleUrls: ['./art.component.scss']
})

export class artComponent implements OnInit {
  loading: boolean = true;
  lilMenu:boolean = false;
  filmView:boolean = false;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
  }

  backToLearn(){
    this.navCtrl.push(LearnPage);
  }

  littleMenu(){
    this.lilMenu = true;
  }

  littleMenuBak(){
    this.lilMenu = false;
  }

  filmMode(){
    this.filmView = true;
  }

  mainFilmMode(){
    this.filmView = false;
    this.lilMenu = false;
  }
}
