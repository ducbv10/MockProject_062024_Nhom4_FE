import HeaderAdmin from "@/layouts/Admin/HeaderAdmin";
import SidebarAdmin from "@/layouts/Admin/SideBarAdmin";
import FooterAdmin from "@/layouts/Admin/FooterAdmin";
import ManageProduct from "./ManageProduct";
import ManageAppraiser from "./ManageAppraiser";
const AdminPage = () => {
  return (
    <div>
      <HeaderAdmin />
    
        <div className="flex">
          <SidebarAdmin />
        </div> 

      <FooterAdmin />
 
    </div>
  );
}

export default AdminPage;