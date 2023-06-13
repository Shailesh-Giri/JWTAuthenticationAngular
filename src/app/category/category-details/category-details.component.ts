import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  @Input() id = 0;
  category : any;

  constructor(private categoryService : CategoryService, private activateRoute : ActivatedRoute){

  }
  
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params["id"]
    console.log(this.id);
    this.category = this.categoryService.details(this.id).subscribe((response)=>{
      this.category = response;
    })
    console.log(this.category);
  }

}
