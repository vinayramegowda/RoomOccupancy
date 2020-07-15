import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';
import InputJson from '../../assets/Input.json';
import {RoomOccupancyModel} from '../models/RoomOccupancyModel'

@Component({
  selector: 'app-add-rooms',
  templateUrl: './main-content.component.html'
})

export class MainContentComponent {
    title = 'Please enter number of rooms available for Business and Economy rooms';
    input=InputJson;
    angForm: FormGroup;
    public brooms:string;
    public erooms:string;
    public businessSum:number;
    public economySum:number;
    public economyValues:Array<number>;
    public businessValues:Array<number>;
    public roomsRemaining:number;
    public isUpgrade:boolean;
    constructor(private fb: FormBuilder) {
      this.createForm();
      this.isUpgrade=false;
    }
    submitted = false;
    models=[];
     createForm() {
      this.angForm = this.fb.group({
         brooms: ['', [Validators.required , Validators.pattern('^[0-9]*$')]],
         erooms:  ['', [Validators.required , Validators.pattern('^[0-9]*$')]]
      }
      );
      
    }
    calculatePrice(isUpgrade:boolean)
    {
      var i=0;
      var j=0;
      if(isUpgrade)
      {
      this.roomsRemaining=parseInt(this.brooms)-this.businessValues.length;
        for(var index=this.businessValues.length-1;index>=(this.businessValues.length-parseInt(this.brooms));index--)
      {
        if(index>=0){
        i++;
        this.businessSum=this.businessSum+this.businessValues[index];
        }        
      }
      if(this.roomsRemaining>0)
        {
          var index=this.economyValues.length-1;
          var roomsRemaining=this.roomsRemaining;
          do{
            
          this.businessSum=this.businessSum+this.economyValues[index];i++;
            index--;
            roomsRemaining--;
          }while(roomsRemaining>0);
        }
      for(var index=((this.economyValues.length-1)-this.roomsRemaining);index>=((this.economyValues.length-parseInt(this.erooms))-this.roomsRemaining);index--)
      {
        if(index>=0){
        j++;
        this.economySum=this.economySum+this.economyValues[index];
        }
      }

      var model=new RoomOccupancyModel(this.businessValues.length,this.businessSum,j,this.economySum,parseInt(this.erooms),parseInt(this.brooms));
      this.models.push(model);
    }
    else{
      var i=0;
      var j=0;
      for(var index=this.businessValues.length-1;index>=(this.businessValues.length-parseInt(this.brooms));index--)
      {
        if(index>=0){
        i++;
        this.businessSum=this.businessSum+this.businessValues[index];}
      }
      for(var index=this.economyValues.length-1;index>=(this.economyValues.length-parseInt(this.erooms));index--)
      {
        if(index>=0){
        j++;
        this.economySum=this.economySum+this.economyValues[index];
      }
      }
      var model=new RoomOccupancyModel(i,this.businessSum,j,this.economySum,parseInt(this.erooms),parseInt(this.brooms));
      this.models.push(model);
    }
    }
    onSubmitCalculateRoomOccupancy()
    {
      this.submitted = true;
      this.businessValues=[0];
      this.economyValues=[0];
      var economyIndex=0,businessIndex=0;
      for (var i = 0; i < InputJson.length; i++) {
        if(InputJson[i]<100){
        this.economyValues[economyIndex]=parseInt(InputJson[i].toString());
        economyIndex++;
      }
        else{
          
        this.businessValues[businessIndex]=parseInt(InputJson[i].toString());
        businessIndex++;
      }
    }
      this.businessValues.sort((a,b)=>a-b);
      this.economyValues.sort((a,b)=>a-b);
      this.businessSum=0;
      this.economySum=0;
      this.roomsRemaining=0;
      if (parseInt(this.brooms)>this.businessValues.length  && parseInt(this.erooms)<this.economyValues.length)
      {
        this.isUpgrade=true;
        this.calculatePrice(this.isUpgrade);

      }
      else
        this.calculatePrice(this.isUpgrade);
    
    }
  }
  