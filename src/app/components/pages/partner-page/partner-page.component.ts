import { Component, OnInit } from '@angular/core';
import { ReferanceService } from '../../services/referance.service';
import { ReferanceModel } from '../../models/referanceModel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-partner-page',
  templateUrl: './partner-page.component.html',
  styleUrls: ['./partner-page.component.scss']
})
export class PartnerPageComponent implements OnInit {

  path = environment.serverUrl;

	referanceModel:ReferanceModel
    constructor(private referanceService:ReferanceService) { }

    ngOnInit(): void {
		this.referancelist();
    }

	referancelist() {
		this.referanceService.getList().subscribe(data => {
			this.referanceModel = data;
		})
	}
}
