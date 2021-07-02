
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  productList = [
          
    {SrNo:'34',ProductName:'Car',Price:20000,ProductImage: "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",fav:false},
    {brand:'Toyota',model:'MPV',miles:10000,fav:false},
    {brand:'Honda',model:'Car',miles:26000,fav:false},
    {brand:'Audi',model:'SUV',miles:45000,fav:true}]

  
  getProduct(){
    return this.productList;
  }
}


