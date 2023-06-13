import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryHomeComponent } from './category-home/category-home.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';


@NgModule({
  declarations: [
    CategoryHomeComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryDetailsComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ],
  exports : [
    CategoryCreateComponent,
    CategoryDetailsComponent,
    CategoryEditComponent,
    CategoryHomeComponent
  ]
})
export class CategoryModule { }
