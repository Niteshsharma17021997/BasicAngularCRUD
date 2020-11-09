import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponentComponent } from './login-component/login-component.component';
import { HttpCallsService } from './Service/http-calls.service';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    AdminHomeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [HttpCallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
