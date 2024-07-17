import HeaderAdmin from "@/layouts/Admin/HeaderAdmin";
import SidebarAdmin from "@/layouts/Admin/SideBarAdmin";
import FooterAdmin from "@/layouts/Admin/FooterAdmin";

import ManageAuction from "./ManageAuction";
import ManageNews from "./ManageNews";
const AdminPage = () => {
  return (
    <div>
      <HeaderAdmin />
      <div className="flex flex-row">
        <div className="w-1/6">
          <SidebarAdmin />
        </div>
        <div className="w-5/6 mr-[50px]">
          {/* <ManageAuction /> */}
          <ManageNews/>
        </div>
      </div>
      <FooterAdmin />
    </div>
  );
}

export default AdminPage;