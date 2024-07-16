import { Product } from "@/types/Product";
import { Table, TableProps } from "antd";
import { useEffect, useState } from "react";
import columns from "./columns";
import AppModal from "@/components/Modal";
import CreateEditProduct from "./CreateEditProduct";

const onChange: TableProps<Product>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const ManageProduct: React.FC = () => {
  // const [products, setProducts] = useState<Product[]>([]);
  const exampleProducts: Product[] = [
    {
      id: "1",
      productName: "Product 1",
      productDetail: "Product 1 Detail",
      category: "Category 1",
      startingPrice: 100,
      status: "Approved",
      quantity: 10,
    },
    {
      id: "2",
      productName: "Product 2",
      productDetail: "Product 2 Detail",
      category: "Category 2",
      startingPrice: 200,
      status: "Not Approved",
      quantity: 20,
    },
    {
      id: "3",
      productName: "Product 3",
      productDetail: "Product 3 Detail",
      category: "Category 3",
      startingPrice: 300,
      status: "Successful",
      quantity: 30,
    },
    {
      id: "4",
      productName: "Product 4",
      productDetail: "Product 4 Detail",
      category: "Category 4",
      startingPrice: 400,
      status: "Unsuccessful",
      quantity: 40,
    },
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-row justify-between">
        <h1>Product</h1>
        <AppModal
          width={1000}
          trigger={
            <button className="bg-[#3DBF00] px-5 py-2 rounded-[10px] text-white font-bold">Add Product</button>
          }
        >
          <CreateEditProduct />
        </AppModal>

      </div>
      <Table
        columns={columns}
        dataSource={exampleProducts.map((item, index) => ({ ...item, key: index }))}
        onChange={onChange}
      />
    </div>
  );
};

export default ManageProduct;