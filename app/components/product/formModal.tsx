"use client";

import { useEffect, useState } from "react";
import { Product } from "@/app/types/product";
import {
    createProduct,
    updateProduct,
} from "@/app/services/product.service";

interface Props {
    open: boolean;
    onClose: () => void;
    onSuccess: () => void;
    product?: Product | null;
}

export default function ProductFormModal({
    open,
    onClose,
    onSuccess,
    product,
}: Props) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);

    useEffect(() => {
        if (product) {
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price);
            setStock(product.stock);
        } else {
            setName("");
            setDescription("");
            setPrice(0);
            setStock(0);
        }
    }, [product]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            name,
            description,
            price,
            stock,
        };

        if (product) {
            await updateProduct(product.id, payload);
        } else {
            await createProduct(payload);
        }

        onSuccess();
        onClose();
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-xl rounded-lg bg-white shadow-xl">

                <div className="border-b px-6 py-4">
                    <h2 className="text-xl font-semibold">
                        {product ? "Edit Product" : "Add Product"}
                    </h2>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="space-y-4 p-6">

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Product Name
                            </label>

                            <input
                                className="w-full rounded border px-3 py-2"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Description
                            </label>

                            <textarea
                                rows={4}
                                className="w-full rounded border px-3 py-2"
                                value={description}
                                onChange={(e) =>
                                    setDescription(e.target.value)
                                }
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">

                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    Price
                                </label>

                                <input
                                    type="number"
                                    className="w-full rounded border px-3 py-2"
                                    value={price}
                                    onChange={(e) =>
                                        setPrice(Number(e.target.value))
                                    }
                                    min={1}
                                    required
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    Stock
                                </label>

                                <input
                                    type="number"
                                    className="w-full rounded border px-3 py-2"
                                    value={stock}
                                    onChange={(e) =>
                                        setStock(Number(e.target.value))
                                    }
                                    min={1}
                                    required
                                />
                            </div>

                        </div>

                    </div>

                    <div className="flex justify-end gap-2 border-t px-6 py-4">

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded border px-4 py-2 hover:bg-gray-100"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                        >
                            Save
                        </button>

                    </div>

                </form>

            </div>
        </div>
    );
}