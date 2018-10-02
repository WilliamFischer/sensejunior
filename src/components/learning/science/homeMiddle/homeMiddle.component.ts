import { Component, OnInit, Input  } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UpdateComponentsProvider } from '../../../../providers/update-components/update-components';

@Component({
  selector: 'learn-science-homeMiddle',
  templateUrl: './homeMiddle.component.html'
})
export class HomeMiddleComponent implements OnInit {
  loading:boolean = true;
  ScienceTypeMode : boolean;

  titleValue: string = '';
  bodyValue: string = '';
  scienceTypeingMode : boolean;
  searchQuery: string = "";

  constructor(private UpdateComponentsProvider: UpdateComponentsProvider) {
    this.UpdateComponentsProvider.scienceTypeingMode.subscribe(isOpen => {
      this.ScienceTypeMode = isOpen;
    });

    this.UpdateComponentsProvider.mainTypeBodyValue.subscribe(string => {
      this.bodyValue = string;
    });

    this.UpdateComponentsProvider.mainTypeTitleValue.subscribe(string => {
      this.titleValue = string;
    });

  }

  ngOnInit() {

  }

  NewEntry(){
    this.ScienceTypeMode = true;
    this.UpdateComponentsProvider.scienceTypeToggle();
  }

  selectTitleInput(){
    this.UpdateComponentsProvider.triggerMainTitleValue();
  }

  selectParagraphInput(){
    this.UpdateComponentsProvider.triggerMainBodyValue();
  }

}
