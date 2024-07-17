import HeaderAdmin from "@/layouts/Admin/HeaderAdmin";
import SidebarAdmin from "@/layouts/Admin/SideBarAdmin";
import FooterAdmin from "@/layouts/Admin/FooterAdmin";
import {BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'
import ManageAuction from "./ManageAuction";


import ManageListUser from "./ManageUser";
const AdminPage = () => {
  return (
    <div>
   
      <HeaderAdmin />
      <div className="flex flex-row">
        <div className="w-1/6">
          <SidebarAdmin />  
        </div>
        <div className="w-5/6 mr-[50px]">
          <ManageListUser/>
        </div>
      </div>

      <FooterAdmin />
    </div>
  );
}

export default AdminPage;