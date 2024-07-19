import HeaderAdmin from "@/layouts/Admin/HeaderAdmin";
import SidebarAdmin from "@/layouts/Admin/SideBarAdmin";
import FooterAdmin from "@/layouts/Admin/FooterAdmin";
import ManageProduct from "./ManageProduct";
import ManageListUser from "./ManageUser";
import StatisticalTables from "./Dashboad/StatisticalTables";
import SalesChart from "./Dashboad/SalesChart";
import DealsDetails from "./Dashboad/DealsDetails";
import ManageWarehouse from "./ManageWarehouse";

const AdminPage = () => {
  return (
    <div>
      <HeaderAdmin />
      <div className="flex flex-row">
        <div className="w-1/6">
          <SidebarAdmin />  
        </div>
        <div className="w-5/6 mr-[50px]">
          {/* <StatisticalTables/>
          <SalesChart/>
          <DealsDetails/> */}
          <ManageWarehouse />
        </div>
      </div>
        
      <FooterAdmin />
 
    </div>
  );
}

export default AdminPage;