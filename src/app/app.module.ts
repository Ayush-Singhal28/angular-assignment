import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    YoutubeVideoComponent
  ],
  imports: [ FormsModule, RouterModule,
     BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
