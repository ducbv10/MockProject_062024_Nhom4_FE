import HeaderAdmin from "@/layouts/Admin/HeaderAdmin";
import SidebarAdmin from "@/layouts/Admin/SideBarAdmin";
import { Outlet } from "react-router-dom";

const AdminPage = () => {
  return (
    <div >
      <HeaderAdmin />
      <div className="flex flex-row pt-[150px] pl-[1%]">
          <SidebarAdmin />  
          <Outlet/>
      </div>
    </div>
  );
}

export default AdminPage;