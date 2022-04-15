import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    stock: new FormControl(''),
    url: new FormControl('')
  })

  constructor(private rs: RestService) { 

  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    if(this.productForm.valid){
      //apelat constructor pe obiect de tip Product
      //prod: Product();
      //this.rs.postProduct(prod);
    }

}
}