import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherForcastComponent } from './weather-forcast/weather-forcast.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : 'login', component : LogInComponent },
  {path : 'register', component : RegisterComponent},
  {path : 'category', loadChildren : ()=> import('./category/category.module').then(m=>m.CategoryModule)},
  {path : 'weather', component : WeatherForcastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
