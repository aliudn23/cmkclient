export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
}

export interface ProductRequest {
    id: number;
}

export interface CreateUpdateProductRequest {
    name: string;
    description: string;
    price: number;
    stock: number;
}