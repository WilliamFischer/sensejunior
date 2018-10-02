import { Component, OnInit, Input  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UpdateComponentsProvider } from '../../../../providers/update-components/update-components';

@Component({
  selector: 'learn-science-searchMiddle',
  templateUrl: './searchMiddle.component.html'
})
export class searchMiddleComponent implements OnInit {
  loading:boolean = true;
  sideKeyboard:boolean;
  searchQuery: string = "";

  constructor(private UpdateComponentsProvider: UpdateComponentsProvider) {
    this.UpdateComponentsProvider.searchChange.subscribe(string => {
      this.searchQuery = string;
    });
  }

  ngOnInit() {

  }

  triggerSideKeyboard(){
    this.UpdateComponentsProvider.toggleKeyboard();
  }

  unKeyboard(){
    this.UpdateComponentsProvider.change.subscribe(isOpen => {
      if(isOpen){
        this.UpdateComponentsProvider.toggleKeyboard();
      }
    });
  }

}
