"use client";

import { deleteProduct } from "@/app/services/product.service";
import { Product } from "@/app/types/product";

interface Props {
    open: boolean;
    product: Product | null;
    onClose: () => void;
    onSuccess: () => void;
}

export default function ProductDeleteModal({
    open,
    product,
    onClose,
    onSuccess,
}: Props) {

    if (!open || !product) return null;

    const handleDelete = async () => {
        try {

            await deleteProduct(product.id);

            onSuccess();

            onClose();

        } catch (err) {
            console.error(err);
            alert("Delete product failed");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

            <div className="w-full max-w-md rounded-lg bg-white shadow-lg">

                <div className="border-b px-6 py-4">
                    <h2 className="text-lg font-semibold">
                        Delete Product
                    </h2>
                </div>

                <div className="p-6">

                    <p>
                        Are you sure want to delete
                        <span className="font-semibold">
                            {" "}
                            {product.name}
                        </span>
                        ?
                    </p>

                </div>

                <div className="flex justify-end gap-2 border-t px-6 py-4">

                    <button
                        onClick={onClose}
                        className="rounded border px-4 py-2"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleDelete}
                        className="rounded bg-red-600 px-4 py-2 text-white"
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
}