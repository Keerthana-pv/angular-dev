import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing.module';
import { SignupComponent } from './signup/signup.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule , RoutingModule],
  declarations: [ AppComponent, LoginComponent, SignupComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
