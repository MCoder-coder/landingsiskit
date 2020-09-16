import { Component, OnInit } from '@angular/core';

import Swiper, { Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  swiper: Swiper;

  constructor() { }

  ngOnInit(): void {

  }

  // tslint:disable-next-line: member-ordering
  images: string [] = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg'
  ];

   // tslint:disable-next-line: member-ordering
   Swiper = new Swiper('.swiper-wrapper', {



  });


}
