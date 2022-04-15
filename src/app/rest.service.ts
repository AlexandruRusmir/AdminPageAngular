import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Product } from "./models/Product";
//import {User}

@Injectable ({providedIn: 'root'})

export class RestService {
    urlProduct: string = "https://proiectcolectiv.azurewebsites.net/Products";


    constructor(private http: HttpClient) {
    }

    getProducts() {
        return this.http.get<Product[]>(this.urlProduct);
    }

    postProduct(prod: Product) {
        return this.http.post(this.urlProduct, prod);
    }
}