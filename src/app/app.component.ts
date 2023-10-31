import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/service/product.service';
import { Product } from 'src/model/product';
import { Subscription } from 'rxjs';
import { Category } from 'src/model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  products: Product[] = [];
  productsSubscription!: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productsSubscription = this.productService.retrieveAll().subscribe(
      (products: Product[]) => {
        this.setup(products);
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }

  filteredProduct: Product[] = [];

  filter: string = "";

  categoryList: Category[] = [];
  insale: Category = { name: "In sale", checked: false };
  soldout: Category = { name: "Sold out", checked: false };;

  setup(productList: Product[]) {
    //console.log("Setup");

    this.products = productList;
    this.filteredProduct = productList;

    //console.log(productList);

    this.products.forEach(prod => {
      const foundCategory = this.categoryList.find(category => category.name === prod.category);
      if (foundCategory == undefined) {
        this.categoryList.push({ name: prod.category!, checked: false });
      }
    });

    //console.log(this.categoryList);

  }

  filterProduct() {
    //console.log("Filtering element: "+this.filter);
    this.filteredProduct = this.products.filter(prod => {
      return (prod.name?.toLowerCase().includes(this.filter.toLowerCase()));
    });
  }

  onChkBoxChange(item: string): void {
    //console.log("checkbox change: " + item);

    //start  switch checkbox

    if (item == this.insale.name)
      this.insale.checked = !this.insale.checked;
    else if (item == this.soldout.name)
      this.soldout.checked = !this.soldout.checked;
    else {
      var foundIndex = this.categoryList.findIndex(category => category.name === item);      
      if (foundIndex != undefined) {
        this.categoryList[foundIndex].checked = !this.categoryList[foundIndex].checked;
      }
    }
    //end  switch checkbox
    //start filtering
    this.filterProduct();

    //console.log(this.categoryList);

    var tempFilteredProduct: Product[] = [];
    var haveFilter: boolean = false;
    var haveTypeFilter: boolean = false;

    this.categoryList.forEach(category => {
      if (category.checked) {
        haveFilter = true;
        if (this.filteredProduct.length > 0)
          this.filteredProduct.forEach(product => {
             
            if (product.category == category.name)
              tempFilteredProduct.push(product);
          });
      }
    });

    if (haveFilter)
      this.filteredProduct = tempFilteredProduct;
 
    var tempTypeFilteredProduct: Product[] = [];

    if (this.soldout.checked) {
      haveTypeFilter = true;
      if (this.filteredProduct.length > 0)
        this.filteredProduct.forEach(product => {
          if (product.qtyAvaiable == '0')
            tempTypeFilteredProduct.push(product);
        });
    }

    if (this.insale.checked) {
      haveTypeFilter = true;
      if (this.filteredProduct.length > 0)
        this.filteredProduct.forEach(product => {
          if (product.cost != product.discountCost)
            if (product.qtyAvaiable != '0')
              tempTypeFilteredProduct.push(product);
        });
    }

    if (haveTypeFilter)
      this.filteredProduct = tempTypeFilteredProduct;

  }


}
