import { Auction } from "@/types/Auction";
import { Table, TableProps } from "antd";
import { useEffect, useState } from "react";
import columns from "./columns";
import AppModal from "@/components/Modal";
import CreateEditAuction from "./CreateEditAuction";

const onChange: TableProps<Auction>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const ManageAuction: React.FC = () => {
  // const [products, setProducts] = useState<Product[]>([]);
  const exampleAuctions: Auction[] = [
    {
      id: "1",
      auctionName: "Auction 1",
      productName: "Product 1",
      productDetail: "Product 1 detail",
      dateTime: new Date().toISOString(),
      status: "In - Progress",
      isLive: true,
    },
    {
      id: "2",
      auctionName: "Auction 2",
      productName: "Product 2",
      productDetail: "Product 2 detail",
      dateTime: new Date().toISOString(),
      status: "End",
      isLive: false,
    },
    {
      id: "3",
      auctionName: "Auction 3",
      productName: "Product 3",
      productDetail: "Product 3 detail",
      dateTime: new Date().toISOString(),
      status: "Upcoming",
      isLive: false,
    }
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-row justify-between">
        <h1 className="text-[20px] font-bold">Auction</h1>
        <AppModal
          width={1000}
          trigger={
            <button className="bg-[#3DBF00] px-5 py-2 rounded-[10px] text-white font-bold">Add Auction</button>
          }
        >
          <CreateEditAuction />
        </AppModal>

      </div>
      <Table
        columns={columns}
        dataSource={exampleAuctions.map((item, index) => ({ ...item, key: index }))}
        onChange={onChange}
      />
    </div>
  );
};

export default ManageAuction;