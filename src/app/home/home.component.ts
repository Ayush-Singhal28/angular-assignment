import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {DataLinkService} from '../datalinkservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[DataLinkService]
})
export class HomeComponent implements OnInit {

  constructor( private http: HttpClient, private dataLinkService: DataLinkService, private router: Router) {

  }

  ngOnInit() {
    this.router.navigate(['']);
  }

  getVideoLink(){
    return this.http.get(
      'https://www.googleapis.com/' +
      'youtube/v3/search?order=date&part=snippet&channelId=UCP4g5qGeUSY7OokXfim1QCQ&key=AIzaSyCmedFZ2QVVzQ1cElmU6kPM2PV5YEaQwhY'
    );
  }
}
