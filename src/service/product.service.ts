import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/model/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private apiDeployLink: string = '';
    private apiUrl: string;
    constructor(private http: HttpClient) {
        this.apiUrl = this.apiDeployLink.concat('/api/products/retrieveAll');
    }

    retrieveAll(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiUrl);
    }
}