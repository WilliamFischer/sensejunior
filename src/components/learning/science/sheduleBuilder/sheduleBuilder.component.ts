import { Component, OnInit, Input  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UpdateComponentsProvider } from '../../../../providers/update-components/update-components';

@Component({
  selector: 'learn-science-sheduleBuilder',
  templateUrl: './sheduleBuilder.component.html'
})
export class sheduleBuilderComponent implements OnInit {
  loading:boolean = true;
  SheuldeBuilderMode: boolean;
  cardSelected: any[];
  cardKey: number;

  constructor(private UpdateComponentsProvider: UpdateComponentsProvider) {

  }

  ngOnInit() {
    this.cardSelected = [];

    for (let i = 0; i < 14; i++) {
      this.cardSelected.push(0)
    }
  }

  ShedBuild(){
    this.SheuldeBuilderMode = true;
    this.UpdateComponentsProvider.SheduleBuilderToggle();
  }

  selectCard(val){
    if(this.cardSelected[val] == 0){
      this.cardSelected[val] = 1;
    }else{
      this.cardSelected[val] = 0;
    }

    console.log("Trigger card " + val)
  }

  backBuilderMode(){
    this.SheuldeBuilderMode = false;
    this.UpdateComponentsProvider.SheduleBuilderUnToggle();
  }

}
