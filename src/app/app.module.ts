import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ConditionsComponent } from './conditions/conditions.component';
import { ColorService } from './color.service';
import { BoogService } from './boog.service';
import { HttpModule } from '@angular/http';
import { BoogComponent } from './boog/boog.component';

import { ColorPickerModule } from 'ngx-color-picker';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ConditionsComponent,
    BoogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ColorPickerModule
  ],
  providers: [ColorService, BoogService],
  bootstrap: [AppComponent]
})
export class AppModule {

}