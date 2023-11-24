import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ContentsModel } from 'src/app/components/models/contentsModel';
import { ContentsService } from 'src/app/components/services/contents.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-homeeight-main-banner',
  templateUrl: './homeeight-main-banner.component.html',
  styleUrls: ['./homeeight-main-banner.component.scss']
})
export class HomeeightMainBannerComponent implements OnInit {

  path = environment.serverUrl;
  slidersModel!: ContentsModel;
  constructor(private contentsService: ContentsService) { }

  ngOnInit(): void {
    this.getnewsList();

  }
  getnewsList() {
    this.contentsService.getsldiderList().subscribe(newsdata => {
      this.slidersModel = newsdata;
    })
  }
  

  recommendedCarOptions: OwlOptions = {
    margin: 24,
    nav: false,
    loop: true,
    dots: false,
    smartSpeed: 2000,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      },
    },
  };

}
