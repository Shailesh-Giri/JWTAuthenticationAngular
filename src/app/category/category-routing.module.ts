import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryHomeComponent } from './category-home/category-home.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';

const routes: Routes = [
  {path : '', component : CategoryHomeComponent},
  {path : 'details/:id', component : CategoryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
