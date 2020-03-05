import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  serverErrorParser: any;
  headers: any;
  changeCustomColor = new Subject<boolean>();
  choosedCustomColor = new Subject<string>();

  constructor(private http: Http) { }

  getColors() {
    return this.http.get(`/assets/components/boogdesigner/api/colors`, {
      headers: this.headers
    })
      .pipe(map((res: Response) => {
        return res.json();
      }))
    // .catch((error: any) => Observable.throw(this.serverErrorParser.parseServerResponse(error)));
  }

  getMetaDataModel() {
    return this.http.get(`/assets/components/boogdesigner/api/models`, {
      headers: this.headers
    })
    .pipe(map((res: Response) => {
      return res.json();
    }))
  }

  ChangeCustomColor(checkedColor) {
    this.changeCustomColor.next(checkedColor);
  }

  ChoosedCustomColor(string) {
    this.choosedCustomColor.next(string);
  }

  getConditionsDetails() {
    return this.http.get(`/assets/components/boogdesigner/api/basketoptions`, {
      headers: this.headers
    })
      .pipe(map((res: Response) => {
        return res.json();
      }))
  }
}
