import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shashi-goat-farm';
  images = [  
    { img: "../assets/images/pic1.jpg" },  
    { img: "../assets/images/pic2.jpg" },
    { img: "../assets/images/pic3.jpg" },
    { img: "../assets/images/pic4.jpg" },
    { img: "../assets/images/pic5.jpg" },
    { img: "../assets/images/pic6.jpg" },
    { img: "../assets/images/pic7.jpg" },
    { img: "../assets/images/pic8.jpg" },
    { img: "../assets/images/pic9.jpg" }

  ];

  slideConfig = {  
    "slidesToShow": 1,  
    "slidesToScroll": 1,  
    "dots": true,  
    "infinite": true  
    
  }; 
  
}
