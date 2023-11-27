import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ContentsService } from '../../services/contents.service';
import { ContentsModel } from '../../models/contentsModel';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
	path = environment.serverUrl;

	newsModel: ContentsModel

	constructor(private contentsService: ContentsService) { }

	ngOnInit(): void {
		this.getnewsList();
	}

	getnewsList() {
		this.contentsService.getnewsList().subscribe(newsdata => {
			this.newsModel = newsdata;
		})
	}

	blogSlides: OwlOptions = {
		loop: true,
		nav: true,
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
				items: 1
			},
			768: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	}

}