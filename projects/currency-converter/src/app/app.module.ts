import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConverterModule } from './converter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConverterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
