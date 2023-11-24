import { Component, OnInit } from '@angular/core';
import { OurTeamService } from '../../services/ourteam.service';
import { OurTeamModel } from '../../models/ourteamModel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-instructors-page-one',
  templateUrl: './instructors-page-one.component.html',
  styleUrls: ['./instructors-page-one.component.scss']
})
export class InstructorsPageOneComponent implements OnInit {
  path = environment.serverUrl;

  ourteamModel:OurTeamModel
  constructor(private ourteamService:OurTeamService) { }

  ngOnInit(): void {
    this.getourteamslist();
  }

  getourteamslist() {
    this.ourteamService.getList().subscribe(data => {
      this.ourteamModel = data;
      console.log("Ekibimiz",this.ourteamModel)
    })
  }
}
