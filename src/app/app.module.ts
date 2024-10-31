import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, DashboardModule, RouterModule.forRoot( routes )],
  bootstrap: [ AppComponent ]
})
export class AppModule {}