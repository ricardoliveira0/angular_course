import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard';
import { CalculatorModule } from './calculator';
import { ConverterModule } from './converter';
import { TasksModule } from './tasks';
import { TicTacToeModule } from './tic-tac-toe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CalculatorModule,
    ConverterModule,
    TasksModule,
    TicTacToeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
