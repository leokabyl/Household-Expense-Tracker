import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DeleteComponent } from './delete/delete.component';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { EqualToValidatorDirective } from './equal-to.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserloginComponent,
    AdminloginComponent,
    AboutComponent,
    RegisterComponent,
    MainComponent,
    DeleteComponent,
    ViewdataComponent,
    EqualToValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
