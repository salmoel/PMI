import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'PMI-BRASIL';

  ngOnInit() {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        document.getElementById('mainNav').classList.add('navbar-shrink');
      } else {
        document.getElementById('mainNav').classList.remove('navbar-shrink');
      }
    });

    
  }
}
