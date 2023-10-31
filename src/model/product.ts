export interface Product {
    id?: string;
    imgPath?: string;
    cost?: string;
    discountCost?: string;
    name?: string;
    desc?: string;
    category?: string;
    qtyAvaiable?: string;
}

export interface Category{
    name : string;
    checked: boolean;
  }