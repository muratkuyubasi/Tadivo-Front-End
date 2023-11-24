import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ContentsModel } from '../../models/contentsModel';
import { ContentsService } from '../../services/contents.service';

@Component({
  selector: 'app-blog-grid-page',
  templateUrl: './blog-grid-page.component.html',
  styleUrls: ['./blog-grid-page.component.scss']
})
export class BlogGridPageComponent implements OnInit {

  newsModel:ContentsModel
  constructor(private contentsService:ContentsService) { }

  ngOnInit(): void {
    this.newsList();
  }
  newsList(){
    this.contentsService.getnewsList().subscribe(newsdata=> {
      this.newsModel = newsdata;
      // console.log("Haberler",this.newsModel)
    })
  }
}
