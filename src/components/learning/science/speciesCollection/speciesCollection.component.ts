import { Component, OnInit, Input  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UpdateComponentsProvider } from '../../../../providers/update-components/update-components';

@Component({
  selector: 'learn-science-speciesCollection',
  templateUrl: './speciesCollection.component.html'
})
export class speciesCollectionComponent implements OnInit {
  loading:boolean = true;
  tankType:number = 1;

  constructor(private UpdateComponentsProvider: UpdateComponentsProvider){

  }

  ngOnInit() {

  }

  TriggerET2(){
    this.tankType = 2;
  }

}
