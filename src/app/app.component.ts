import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop(),
          dh = $(document).height(),
          h = $(window).height(),
          scrollPercent = (scroll / (dh - h)) * 100;
      $("#progressbar").css('height', scrollPercent + '%');
      this.console.log(dh);
      this.console.log(scroll);
    });
  }
}
