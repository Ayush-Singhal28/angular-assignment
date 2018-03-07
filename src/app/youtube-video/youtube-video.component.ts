import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css']
})
export class YoutubeVideoComponent implements OnInit {

  videoId;
  url= 'https://www.youtube.com/embed/'
  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.route.params.forEach(( params: Params ) => {
      this.videoId = params['vId'];
      this.url = this.url + this.videoId;
    } );
  }

  getVideos(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  ngOnInit() {
  }

}
