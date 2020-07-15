import { TestBed, async ,ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { compileBaseDefFromMetadata } from '@angular/compiler';
import {MainContentComponent} from './main-content/main-content.component'
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RoomOccupancyModel} from './models/RoomOccupancyModel'
import { by } from 'protractor';


describe('MainContentComponent', () => {
  let comp: MainContentComponent;
  let fixture: ComponentFixture<MainContentComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let a=new RoomOccupancyModel(3,738,3 ,1673,3,3);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule 
      ],
      declarations: [
        MainContentComponent
      ],
    }).compileComponents().then(()=>{
      fixture = TestBed.createComponent(MainContentComponent);
    
      comp = fixture.componentInstance; // ContactComponent test instance
      // query for the title <h1> by CSS element selector
      
      de = fixture.debugElement.query(By.css('formGroup'));
      
    });;
  }));

  it(`should set submitted to true`, async(() => {
    comp.brooms="5";
    comp.erooms="5";
    comp.onSubmitCalculateRoomOccupancy();
    expect(comp.submitted).toBeTruthy();
  }));
  
  it(`form should be invalid`, async(() => {
    comp.angForm.controls['brooms'].setValue('');
    comp.angForm.controls['erooms'].setValue('');
    
    expect(comp.angForm.valid).toBeFalsy();
  }));
  it(`form should be valid`, async(() => {
    comp.angForm.controls['brooms'].setValue('1');
    comp.angForm.controls['erooms'].setValue('2');
    expect(comp.angForm.valid).toBeTruthy();
  }));
  it(`form should be invalid`, async(() => {
    comp.angForm.controls['brooms'].setValue('1');
    comp.angForm.controls['erooms'].setValue('ad');
    expect(comp.angForm.valid).toBeFalsy();
  }));
  it(`Free Buisness rooms: 3 Free Economy rooms: 3 -- Usage Buisness: 3 (AUD 738) Usage Economy: 3 (AUD 167)	  `, async(() => {
    comp.angForm.controls['brooms'].setValue('3');
    comp.angForm.controls['erooms'].setValue('3');
    comp.erooms="3";comp.brooms="3";
    comp.onSubmitCalculateRoomOccupancy();
    expect(parseInt(comp.erooms)).toEqual(3);
    expect(parseInt(comp.brooms)).toEqual(3);
    expect(comp.businessSum).toEqual(738);
    expect(comp.economySum).toEqual(167);
  }));
  it(`Free Buisness rooms: 7 Free Economy rooms: 5 -- Usage Buisness: 6 (AUD 1054) Usage Economy: 4 (AUD 189)`, async(() => {
    comp.angForm.controls['brooms'].setValue('7');
    comp.angForm.controls['erooms'].setValue('5');
    comp.erooms="5";comp.brooms="7";
    comp.onSubmitCalculateRoomOccupancy();
    expect(comp.businessValues.length).toEqual(6);
    expect(comp.economyValues.length).toEqual(4);
    expect(comp.businessSum).toEqual(1054);
    expect(comp.economySum).toEqual(189);
  }));
  it(`Free Buisness rooms: 2 Free Economy rooms: 7 --  Usage Buisness: 2 (AUD 583) Usage Economy: 4 (AUD 189)   `, async(() => {
    comp.angForm.controls['brooms'].setValue('2');
    comp.angForm.controls['erooms'].setValue('7');
    comp.erooms="7";comp.brooms="2";
    comp.onSubmitCalculateRoomOccupancy();
    expect(comp.economyValues.length).toEqual(4);
    expect(parseInt(comp.brooms)).toEqual(2);
    expect(comp.businessSum).toEqual(583);
    expect(comp.economySum).toEqual(189);
  }));
  it(`Free Buisness rooms: 7 Free Economy rooms: 1 --  Usage Buisness: 7 (AUD 1153) Usage Economy: 1 (AUD 45)   `, async(() => {
    comp.angForm.controls['brooms'].setValue('7');
    comp.angForm.controls['erooms'].setValue('1');
    comp.erooms="1";comp.brooms="7";
    comp.onSubmitCalculateRoomOccupancy();
    expect(parseInt(comp.erooms)).toEqual(1);
    expect(parseInt(comp.brooms)).toEqual(7);
    expect(comp.businessSum).toEqual(1153);
    expect(comp.economySum).toEqual(45);
  }));
});
