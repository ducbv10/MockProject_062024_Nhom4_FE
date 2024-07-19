import { useNavigate } from 'react-router-dom';
import { PiUserListThin } from "react-icons/pi";
import { TbCategoryPlus } from "react-icons/tb";
import { LiaWarehouseSolid } from "react-icons/lia";
import { RiAuctionLine } from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";
import { TfiStamp } from "react-icons/tfi";
import { CiSquareQuestion, CiLogout } from "react-icons/ci";
import { ContainerOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { ConfigProvider, Menu } from 'antd';
import { useState } from 'react';
import ManageProduct from '@/pages/Admin/ManageProduct';
import PresidingAuction from '@/pages/Admin/PresidingAuction';
import ManageAuction from '@/pages/Admin/ManageAuction';
import ManageWarehouse from '@/pages/Admin/ManageWarehouse';
import ManageNews from '@/pages/Admin/ManageNews';

type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
  {key: '10', label: 'Dashboard'},
  { key: '1', icon: <PiUserListThin />, label: 'Manager List User', },
  { key: '2', icon: <TbCategoryPlus />, label: 'Manager Category', },
  { key: '3', icon: <ContainerOutlined />, label: 'Manager New ', },
  { key: '4', icon: <LiaWarehouseSolid />, label: 'Manager Warehouse', },
  { key: '5', icon: <RiAuctionLine />, label: 'Manager Auction', },
  { key: '6', icon: <AiOutlineProduct />, label: 'Manager Product', },
  { key: '7', icon: <TfiStamp />, label: 'Presiding Auction', },
  { key: '8', icon: <CiSquareQuestion />, label: 'Customer request', },
]
const itemLogOut: MenuItem[] = [
  { key: '9', icon: <CiLogout />, label: 'Logout', },
]
const theme = {
  components: {
    Menu: {
      itemSelectedBg: "#4880ff",
      itemSelectedColor: "#ffffff",
      itemMarginInline: 0,
      groupTitleFontSize: 16,
      itemMarginBlock: 15,
      iconSize: 20,
    },
  },

};
function SidebarAdmin() {
  const navigate = useNavigate()
  const [isShow, setIsShow] = useState(false)
  const [isKey, setIsKey] = useState('')
  const handleSelect: MenuProps['onSelect'] = ({ key }) => {
    if(isShow){
      setIsShow(true)
      setIsKey(key)
    }
    else{
      setIsShow(true)
      setIsKey(key)
    } 
   
    switch (key) {
      case '1':
        navigate('manager-user')
        break;
      case '2':
        navigate('manager-category')
        break;
      case '3':
        navigate('manager-news')
        break;
      case '4':
        navigate('manager-warehouse')
        break;
      case '5':
        navigate('manager-auction')
        break;
      case '6':
        navigate('manager-product')
        break;
      case '7':
        navigate('presiding-auction')
        break;
      case '8':
        navigate('customer-request')
        break;
      case '9':
        navigate('logout')
        break;
      case '10':
        navigate('/admin')
        break;
    }
  }
    return (
      <>
          <ConfigProvider theme={theme}>
          <div style={{ width: 256, display: 'flex', flexDirection: 'column' }}>
          <Menu
            defaultSelectedKeys={['']}
            mode="inline"
            inlineIndent={50}
            theme="light"
            items={items}

            onSelect={handleSelect}
   
           
          />
          <div className='m-auto w-[200px] h-[2px] bg-gray-600 '>
          </div>
          <Menu
            defaultSelectedKeys={['']}
            mode="inline"
            inlineIndent={50}
            theme="light"
            items={itemLogOut}
            onSelect={handleSelect}
          />
        </div>
      </ConfigProvider>
      <div className='flex-1  mr-[50px]'>
              {/* {isShow && (isKey==="1") && <ManageNews/>}
              {isShow && (isKey==="2") && <ManageNews/>} */}
              {isShow && (isKey==="3") && <ManageNews/>}
              {isShow && (isKey==="4") && <ManageWarehouse/>}
              {isShow && (isKey==="5") && <ManageAuction/>}
              {isShow && (isKey==="6") && <ManageProduct/>}
              {isShow && (isKey==="7") && <PresidingAuction/>}
              {/* {isShow && (isKey==="8") && <customer-request/>} */}
              {isShow && (isKey==="9") && <PresidingAuction/>}
      </div>
      </>
    );
  }


export default SidebarAdmin;