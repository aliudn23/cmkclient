import { useAuthStore } from "../store/auth.store";
import { ProductRequest, Product, CreateUpdateProductRequest } from "../types/product";
import api from "./api";

export const getProductAll = async ()
: Promise<Product[]> => {
    const response = await api.get<Product[]>("/products");

    return response.data;
}

export const getProductById = async (
    payload: ProductRequest
): Promise<Product> => {
    const response = await api.get<Product>("/products/"+payload.id);

    return response.data;
}

export const createProduct = async (
    payload: CreateUpdateProductRequest
): Promise<Product> => {
    const response = await api.post<Product>("/products", payload);

    return response.data;
}

export const updateProduct = async (
    id: any, payload: CreateUpdateProductRequest
): Promise<Product> => {
    const response = await api.put<Product>("/products/"+id, payload);

    return response.data;
}

export const deleteProduct = async (
    id: any
) => {
    const response = await api.delete("/products/"+id);

    return response.data;
}

