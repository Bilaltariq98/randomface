import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { setInterval } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  faceUrl: string = 'https://api.adorable.io/avatars/285/';
  Url: string = "https://api.adorable.io/avatars/285/1"; 

  setFaceUrl() {
    let faceId: number = Math.floor(Math.random() * 100 + 1);
    this.Url = this.faceUrl + faceId + '.png';
  }
  
  ngOnInit() {
    setInterval(() => this.setFaceUrl(), 2000);
  }

}
