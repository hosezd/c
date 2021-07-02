import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList : any= []
  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit() {
   this.productList= this.api.getProduct()
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

      /*this.productList = [];

      this.productList.forEach((a:any) => {
        ({quantity:1,total:a.price});
      })
    }
  }
  */
  

}



