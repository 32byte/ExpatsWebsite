import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    /* Update the progressbar width on scroll */ 
    $(window).scroll(function() {
      var scroll = $(window).scrollTop(),
          dh = $(document).height(),
          h = $(window).height(),
          scrollPercent = (scroll / (dh - h)) * 100;
      $('#progressbar').css('width', scrollPercent + '%');

      var index = -1;
      $('section').each(function (i) {
        if(scroll < $('section').eq(i).position().top && index == -1) 
          index = i;
      });

      if(scroll > dh - h - 5) index = $('section').length - 1;

      $('.active').removeClass();
      $('.nav-item a').eq(index).addClass('active');
    });

    /* Update the progressbar width on resize */ 
    $(window).resize(function () {
      var scroll = $(window).scrollTop(),
          dh = $(document).height(),
          h = $(window).height(),
          scrollPercent = (scroll / (dh - h)) * 100;
      $('#progressbar').css('width', scrollPercent + '%');

      var index = -1;
      $('section').each(function (i) {
        if(scroll < $('section').eq(i).position().top && index == -1) 
          index = i;
      });

      if(scroll > dh - h - 5) index = $('section').length - 1;

      $('.active').removeClass();
      $('.nav-item a').eq(index).addClass('active');
    });
  }
}
