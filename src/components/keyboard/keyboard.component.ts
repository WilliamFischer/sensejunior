import { Component, OnInit, Input  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Vibration } from '@ionic-native/vibration';

import { UpdateComponentsProvider } from '../../providers/update-components/update-components';

@Component({
  selector: 'sense-keyboard',
  templateUrl: './keyboard.component.html'
})
export class KeyboardComponent implements OnInit {
  loading:boolean = true;

  hitshift: boolean;
  specialkeys: boolean;

  constructor(private vibration: Vibration, private UpdateComponentsProvider: UpdateComponentsProvider) {

  }

  ngOnInit() {

  }

  useKeyboard(key){
    this.vibration.vibrate(20);

    if (this.hitshift) {
        this.UpdateComponentsProvider.useKey(key.toUpperCase());
    } else {
        this.UpdateComponentsProvider.useKey(key);
    }
  }

  useBackspace(){
    this.UpdateComponentsProvider.useBackspace();
  }

  activateShift(){
    this.vibration.vibrate(20);

    if (this.hitshift) {
        this.hitshift = false
    } else {
        this.hitshift = true
    }
  }

  moreicons() {
      this.vibration.vibrate(20);

      if (this.specialkeys) {
          this.specialkeys = false
      } else {
          this.specialkeys = true
      }
  }

}
