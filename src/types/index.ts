export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    vendor: string;
    description: string;
    inStock: boolean;
  }
  
  export interface Vendor {
    id: string;
    name: string;
    description: string;
    products: string[]; 
    location: string;
  }