import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable()
export class UpdateComponentsProvider {
  showKeyboard: boolean = false;
  mainTypeTitle: boolean = false;
  mainTypeBody: boolean = false;
  searchQuery: string = "";
  mainTypeTitleNewValue: string = "";
  mainTypeBodyNewValue: string = "";


  @Output() change: EventEmitter<boolean> = new EventEmitter();
  @Output() searchChange: EventEmitter<string> = new EventEmitter();
  @Output() SheuldeBuilder: EventEmitter<boolean> = new EventEmitter();
  @Output() scienceTypeingMode: EventEmitter<boolean> = new EventEmitter();

  @Output() mainTypeTitleTrigger: EventEmitter<boolean> = new EventEmitter();
  @Output() mainTypeTitleValue: EventEmitter<string> = new EventEmitter();
  @Output() mainTypeBodyTrigger: EventEmitter<boolean> = new EventEmitter();
  @Output() mainTypeBodyValue: EventEmitter<string> = new EventEmitter();
  @Output() currentScienceSubject: EventEmitter<string> = new EventEmitter();

  toggleKeyboard() {
    if(!this.showKeyboard){
      this.showKeyboard = true;
    }else{
      this.showKeyboard = false;
    }

    this.change.emit(this.showKeyboard);
  }

  useKey(key) {
    var finalTitleValue = this.mainTypeTitleNewValue+key;
    var finalBodyValue = this.mainTypeBodyNewValue+key;
    var finalSearchValue = this.searchQuery+key;

    if(this.mainTypeTitle){
      this.mainTypeTitleNewValue = finalTitleValue;
      this.mainTypeTitleValue.emit(finalTitleValue);
      console.log("TITLE VALUE IS " + finalTitleValue)

    }else if(this.mainTypeBody){

      this.mainTypeBodyValue.emit(finalBodyValue);
      this.mainTypeBodyNewValue = finalBodyValue;
      console.log("BODY VALUE IS " + finalBodyValue)

    }else{

      this.searchChange.emit(finalSearchValue);
      this.searchQuery = finalSearchValue;
      console.log("All Science Search Value IS " + finalSearchValue)

    }
  }

  useBackspace() {
    if(this.mainTypeTitle){
      this.mainTypeTitleNewValue = this.mainTypeTitleNewValue.substring(0, this.mainTypeTitleNewValue.length - 1);
      this.mainTypeTitleValue.emit(this.mainTypeTitleNewValue);
    }else if(this.mainTypeBody){
      this.mainTypeBodyNewValue = this.mainTypeBodyNewValue.substring(0, this.mainTypeBodyNewValue.length - 1);
      this.mainTypeBodyValue.emit(this.mainTypeBodyNewValue);
    }else{
      this.searchQuery = this.searchQuery.substring(0, this.searchQuery.length - 1);
      this.searchChange.emit(this.searchQuery);
    }

  }

  resetScienceSubject(){
    this.currentScienceSubject.emit('science')
  }

  SheduleBuilderToggle() {
    this.SheuldeBuilder.emit(true);
  }

  SheduleBuilderUnToggle() {
    this.SheuldeBuilder.emit(false);
  }

  scienceTypeToggle() {
    this.scienceTypeingMode.emit(true);
  }

  scienceTypeUnToggle() {
    this.scienceTypeingMode.emit(false);
    this.SheuldeBuilder.emit(false);

    this.mainTypeBodyTrigger.emit(false);
    this.mainTypeTitleTrigger.emit(false);
    this.mainTypeTitle = false;
    this.mainTypeBody = false;
  }

  triggerMainTitleValue(){
    this.mainTypeTitleTrigger.emit(true);
    this.mainTypeBodyTrigger.emit(false);

    this.mainTypeTitle = true;
    this.mainTypeBody = false;
  }

  triggerMainBodyValue(){
    this.mainTypeTitleTrigger.emit(false);
    this.mainTypeBodyTrigger.emit(true);

    this.mainTypeTitle = false;
    this.mainTypeBody = true;
  }
}
