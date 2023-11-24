import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';
import { SocialMedia } from '../../models/socialmediaModel';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  socialMediaModel: SocialMedia

  twitterModel: SocialMedia;
  instagramModel: SocialMedia;
  youtubeModel: SocialMedia;
  facebookModel: SocialMedia;
  constructor(private settingService: SettingService) { }

  ngOnInit(): void {
    this.twitterList()
    this.instagramList();
    this.youtubeList();
    this.facebookList();
  }
  twitterList() {
    this.settingService.getsocialMedia("twitter", 1).subscribe(data => {
      this.twitterModel = data;
    })
  }
  instagramList() {
    this.settingService.getsocialMedia("instagram", 1).subscribe(data => {
      this.instagramModel = data;
    })
  }
  youtubeList() {
    this.settingService.getsocialMedia("youtube", 1).subscribe(data => {
      this.youtubeModel = data;
    })
  }
  facebookList() {
    this.settingService.getsocialMedia("facebook", 1).subscribe(data => {
      this.facebookModel = data;
    })
  }

}
