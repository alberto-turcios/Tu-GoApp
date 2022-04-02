export class ProductResponse{
    productos: Product[];
    
    constructor(productos: Product[]){
        this.productos = productos;
    }
}

export class Product{
    id: number;
    id_category_products: number;
    name: string;
    description: string;
    code: string;
    stock: number;
    price: string;
    discount: string;
    mini_quantity: number;
    images:string;
    status: number;

    constructor(id: number, category_products: number, name: string, description: string, code: string, stock: number, price: string,discount: string, mini_quantity: number, images:string, status: number){
        this.id = id;
        this.id_category_products = category_products;
        this.name = name;
        this.description = description;
        this.code = code;
        this.stock = stock;
        this.price = price;
        this.discount = discount;
        this.mini_quantity = mini_quantity;
        this.images = images;
        this.status = status;
    }

}

