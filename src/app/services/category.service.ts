import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Category[]>
  {
    let headers = new HttpHeaders({"Authorization" : `Bearer ` + localStorage.getItem('token')});
    return this.http.get<Category[]>('https://localhost:7094/api/Category/Index',{headers});
  }

  details(id : number)
  {
    let headers = new HttpHeaders({"Authorization" : `Bearer ` + localStorage.getItem('token')});
    return this.http.get('https://localhost:7094/api/Category/Details?id=' + id, {headers});
  }

}
