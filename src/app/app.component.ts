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

      var index = 0;
      $('section').each(function (i) {
        if(scroll >= $('section').eq(i).position().top - 64)
          index = i;
      });

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

      var index = 0;
      $('section').each(function (i) {
        if(scroll >= $('section').eq(i).position().top - 64)
          index = i;
      });

      $('.nav-item#active').removeAttr('id');
      $('.nav-item').eq(index).attr('id', 'active');
    });
  }
}
