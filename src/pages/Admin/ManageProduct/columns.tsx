import { TableColumnsType } from "antd";
import { Product } from "@/types/Product";
import AppModal from "@/components/Modal";
import CreateEditProduct from "./CreateEditProduct";
import { IoTrash } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";

const columns: TableColumnsType<Product> = [
  {
    title: "ID",
    dataIndex: "id",
    align: "center",
    render: (value) => <p>{value}</p>
  },
  {
    title: "Product Name",
    dataIndex: "productName",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Product Detail",
    dataIndex: "productDetail",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Category",
    dataIndex: "category",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Starting Price",
    dataIndex: "startingPrice",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Status",
    dataIndex: "startingPrice",
    align: "center",
    render: (value) => (
      <div className={`
      ${value === 'Appoved' ? ("bg-[#A8C485] px-5 py-2 rounded-[10px]") :
          value === "Not Appoved" ? ("bg-[#F37E8C] px-5 py-2 rounded-[10px]") :
            value === "Successful" ? ("bg-[#E2AE7D] px-5 py-2 rounded-[10px]") :
              value === "Unsuccessful" ? ("bg-[#F4DCDB]] px-5 py-2 rounded-[10px]") : ""
        }
     `}> {value}</div>
    ),
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    align: "center",
    render: (value) => <p>{value}</p>
  },
  {
    title: "Action",
    dataIndex: "",
    align: "center",
    render: () => (
      <div className="flex flex-row justify-center space-x-5">
        <AppModal
          width={1000}
          onOk={() => { alert('function add and create Product') }}
          trigger={
            <button className="bg-[#3DBF00] p-2 rounded-[5px] text-white text-[18px] font-bold"><FaEdit /></button>
          }
        >
          <CreateEditProduct />
        </AppModal>
        <AppModal
          trigger={
            <button className="bg-[#FF0000] p-2 rounded-[5px] text-white text-[18px] font-bold"><IoTrash /></button>
          }
        >
          <div>Bạn có chắc muốn xóa đối tượng này không ?</div>
        </AppModal>
      </div>
    )
  }
];

export default columns;