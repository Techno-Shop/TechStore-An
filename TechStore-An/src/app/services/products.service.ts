import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private http: HttpClient,
  ) {}

  getProducts() {
    return this.http.get<any[]>('http://localhost:3001/product/all');
  }
  addProduct(obj: any) {
    return this.http
      .post<any>('http://localhost:3001/product/add', obj)
      .subscribe((data: any) => {
        console.log(data);
      });
  }

  DeleteProduct(str: string) {
    return this.http.delete<any>(`http://localhost:3001/product/${str}`);
  }
}
