import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  images = ['code1.jpg', 'code2.jpg', 'keyboard.jpg'];
  currentimage = 0;
  showImage = true;

  ngOnInit() {
    this.updateimage();
  }

  updateimage() {

    setInterval(() => {
      this.currentimage++;
      this.currentimage = this.currentimage % this.images.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 6000)
  }

}
