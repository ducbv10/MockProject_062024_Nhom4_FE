import { TableColumnsType } from "antd";
import { Auction } from "@/types/Auction";
import AppModal from "@/components/Modal";
import CreateEditAuction from "./CreateEditAuction";
import DeleteAuction from "./DeleteAuction";
import { IoTrash } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";

const columns = (handleEditClick: (appraiser: Auction) => void): TableColumnsType<Auction> => [
  {
    title: "ID",
    dataIndex: "auctionId",
    align: "center",
    render: (value) => <p>{value}</p>
  },
  {
    title: "Auction Name",
    dataIndex: "name",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Method",
    dataIndex: "method",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Secret",
    dataIndex: "isSecret",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Start Time",
    dataIndex: "startDate",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "End Time",
    dataIndex: "endDate",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Status",
    dataIndex: "status",
    align: "center",
    render: (value) => (
      <div className={`
      ${value === 'In - Progress' ? ("bg-[#A8C485] p-2 rounded-[10px]") :
          value === "End" ? ("bg-[#F37E8C] p-2 rounded-[10px]") :
            value === "Upcoming" ? ("bg-[#E2AE7D] p-2 rounded-[10px]") : ""
        }
     `}> {value}</div>
    ),
  },
  {
    title: "Action",
    dataIndex: "",
    align: "center",
    render: (_, record) => (
      <div className="flex flex-row justify-center space-x-5">
        <AppModal
          width={1000}
          onOk={() => { alert('function update auction') }}
          trigger={
            <button
              onClick={() => handleEditClick(record)}
              className="bg-[#3DBF00] p-2 rounded-[5px] text-white text-[18px] font-bold"><FaEdit /></button>
          }
        >
          <CreateEditAuction auction={record} />
        </AppModal>
        <AppModal
          onOk={() => { alert('function delete auction') }}
          width={1000}
          trigger={
            <button className="bg-[#FF0000] p-2 rounded-[5px] text-white text-[18px] font-bold"><IoTrash /></button>
          }
        >
          <DeleteAuction data ={record}/>
        </AppModal>
      </div>
    )
  }
];

export default columns;