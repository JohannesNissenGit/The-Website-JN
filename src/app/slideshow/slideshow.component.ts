import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  
  images = ['code1.jpg', 'code2.jpg', 'keyboard.jpg'];
headlines = ['Bring Engineering To The Next Level', 'Born To Code', 'Graduated at TUK'];

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
