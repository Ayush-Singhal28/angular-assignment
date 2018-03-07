import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {YoutubeVideoComponent} from './youtube-video/youtube-video.component';



const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home' ,
    component: HomeComponent
  },
  {
    path: 'app-youtube-video',
    component: YoutubeVideoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
