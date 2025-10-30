import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  base = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(this.base +'categories');
  }

  addCategory(data: any) {
    return this.http.post(this.base + 'categories', data);
  }
  updateCategory(id: string, data: any) {
    return this.http.put(this.base + 'categories/' + id, data);
  }
  deleteCategory(id: string) {
    return this.http.delete(this.base + 'categories/' + id);
  }
}
