import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  images = ['code1.jpg', 'code2.jpg', 'keyboard.jpg'];
  currentimage = 0;

  ngOnInit() {
    this.updateimage();
  }

  updateimage() {

    setInterval(() => {
      this.currentimage ++;
      this.currentimage = this.currentimage % this.images.length;
    }, 8000)
    }
}
