import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';
import { ReferanceService } from '../../services/referance.service';
import { ReferanceModel } from '../../models/referanceModel';

@Component({
    selector: 'app-partner-style-one',
    templateUrl: './partner-style-one.component.html',
    styleUrls: ['./partner-style-one.component.scss']
})
export class PartnerStyleOneComponent implements OnInit {
	path = environment.serverUrl;

	referanceModel:ReferanceModel
    constructor(private referanceService:ReferanceService) { }

    ngOnInit(): void {
		this.referancelist();
    }

	referancelist() {
		this.referanceService.getList().subscribe(data => {
			this.referanceModel = data;
			console.log("Referanslar",this.referanceModel)
		})
	}


    partnerSlides: OwlOptions = {
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
				items: 2
			},
			576: {
				items: 3
			},
			768: {
				items: 4
			},
			1200: {
				items: 6
			}
		}
    }

}