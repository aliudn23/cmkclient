"use client";

import { Button } from "@/app/components/ui/button";
import { Product } from "@/app/types/product";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Pencil, Trash2 } from "lucide-react";

interface ColumnProps {
    onEdit: (product: Product) => void;
    onDelete: (product: Product) => void;
}

export const columns = ({
    onEdit,
    onDelete,
}: ColumnProps): ColumnDef<Product>[] => [
    {
        accessorKey: "id",
        header: "No",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        accessorKey: "stock",
        header: "Stock",
    },
    {
        id: "action",
        header: "Action",
        cell: ({ row }) => {
            const product = row.original;

            return (
                <div className="flex gap-2">
                    <Button
                        size="sm"
                        variant="outline"
                        onClick={() => onEdit(product)}
                    >
                        <Pencil className="h-4 w-4 mr-1" />
                        Edit
                    </Button>

                    <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => onDelete(product)}
                    >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                    </Button>
                </div>
            );
        },
    },
];