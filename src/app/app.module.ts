import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import {AgmCoreModule} from '@agm/core'


@NgModule({
  declarations: [
    AppComponent,
    TodayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAZ9wwNHFyIVasOD8sCGcHjiLllH-NdmSc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
