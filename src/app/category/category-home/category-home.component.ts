import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category.model';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.css']
})
export class CategoryHomeComponent implements OnInit {

  categoryList : Category[] = [] ;

  constructor(private categoryService : CategoryService){

  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((response : any)=> {
      this.categoryList = response;
    });
    console.log(this.categoryList);
  }



}
