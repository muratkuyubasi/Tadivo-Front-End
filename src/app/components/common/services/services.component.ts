import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { CategoryModel } from '../../models/categoryModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  categoryModel:CategoryModel

  constructor(private router: ActivatedRoute,private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.router.params.subscribe(x => {
      this.onlyList(x['id']);
    })
    this.categoryGeneralList();
  }
  onlyList(id: any) {
    this.categoryService.getid(id).subscribe((data: any) => {
      this.categoryModel = data;
      // console.log("İd",this.categoryModel)
    })
  }
  categoryGeneralList(){
    this.categoryService.getList().subscribe(data => {
      this.categoryModel = data;
      // console.log("Kategoriler",this.categoryModel)
  })
}
}
