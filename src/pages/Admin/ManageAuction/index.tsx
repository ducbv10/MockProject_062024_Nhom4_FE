import { Auction } from "@/types/Auction";
import { Table, TableProps } from "antd";
import { useEffect, useState } from "react";
import columns from "./columns";
import AppModal from "@/components/Modal";
import CreateEditAuction from "./CreateEditAuction";
import request from "@/utils/request";

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
  const [selectedAppraiser, setSelectedAppraiser] = useState<Auction | null>(null);
  const [auctionData, setAuctionData] = useState([]);
  const handleEditClick = (auction: Auction) => {
    setSelectedAppraiser(auction);
  };

  const getColumns = columns(handleEditClick);

  const fetchAuction = async () => {
    try {
      const response = await request({
        method: 'get',
        serverType: 'java',
        apiEndpoint: '/v1/auctions/pagination?page=3&limit=10',
      });
      console.log(response?.data.data.data);
      setAuctionData(response?.data.data.data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAuction();
  }, []);

  return (
    <div className="flex-1 h-[580px] px-[1%] space-y-10">
      <div className="flex flex-row justify-between">
        <h1 className="text-[20px] font-bold">Auction</h1>
        <AppModal
          width={1000}
          trigger={
            <div className="bg-[#3DBF00] px-5 py-2 rounded-[10px] text-white font-bold">Add Auction</div>
          }
        >
          <CreateEditAuction auction={null} />
        </AppModal>
      </div>
      <Table
        columns={getColumns}
        dataSource={auctionData.map((item :any, index:any) => ({ ...item, key: index }))}
        onChange={onChange}
      />
    </div>
  );
};

export default ManageAuction;