import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private httpClient: HttpClient
  ) {}
getAllProduct() {
return this.httpClient.get<any>("http://localhost:3001/product/all");
}
}

