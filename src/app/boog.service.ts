import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export interface IBoogExportModel {
  description: string,
  price: number,
  model_id: number,
  model_design: any,
  model_snapshot: any,
  custom_color: string,
  velcro: string,
  checker: number,
  basket: number,
  blower: number
}

@Injectable({
  providedIn: 'root'
})

export class BoogService {
  serverErrorParser: any;
  changeChecker = new Subject<boolean>();
  velcroChecker = new Subject<string>();
  sliderChecker = new Subject<any>();
  sendBoogObject = new Subject<any>();
  uploadImageSelected = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  sendBoogModel(boog: IBoogExportModel): Observable<any> {
    console.log("boog ", boog);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post(`/assets/components/boogdesigner/api/designs`, boog, {
      headers: headers
    })
      .pipe(
        catchError((err) => {
          console.log(err)
          return err;
        })
      );
  }

  ChangeChecker(optionChecked) {
    this.changeChecker.next(optionChecked);
  }

  VelcroChecker(string) {
    this.velcroChecker.next(string);
  }

  SendBoogObject(object) {
    this.sendBoogObject.next(object);
  }

  UploadImageSelected(boolean) {
    this.uploadImageSelected.next(boolean);
  }

  SliderChecker(price) {
    this.sliderChecker.next(price);
    //console.log("w, p", width, price);
  }

}