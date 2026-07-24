"use client";

import { useEffect, useState } from "react";
import { getProductAll, getProductById } from "@/app/services/product.service";

import Card from "@/app/components/dashboard/card";

// Datatables
import { columns } from "@/app/components/ui/columns";
import { Product } from "@/app/types/product";
import { DataTable } from "@/app/components/ui/data-table";

import ProductFormModal from "@/app/components/product/formModal";
import ProductDeleteModal from "@/app/components/product/formModalDelete";

export default function Dashboard() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [openForm, setOpenForm] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const result = await getProductAll();
            setProducts(result);
        } catch (error: any) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Card />
            
            <div className="container mx-auto">
                <button className="mb-3 inline-flex items-center justify-center rounded-md border border-green-600 bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700 focus-visible:ring-4 focus-visible:ring-indigo-200 focus-visible:outline-none" type="button"
                    onClick={() => {
                        setSelectedProduct(null);
                        setOpenForm(true);
                    }}>
                    Add Product
                </button>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <DataTable 
                    columns={columns({
                        onEdit: (product) => {
                            setSelectedProduct(product);
                            setOpenForm(true);
                        },
                        onDelete: (product) => {
                            setSelectedProduct(product);
                            setOpenDelete(true);
                        },
                    })}
                    data={products} />
                )}
            </div>
            <ProductFormModal
                open={openForm}
                product={selectedProduct}
                onClose={() => setOpenForm(false)}
                onSuccess={loadProducts}
            />

            <ProductDeleteModal
                open={openDelete}
                product={selectedProduct}
                onClose={() => setOpenDelete(false)}
                onSuccess={loadProducts}      
            />
        </>
    );
}