import './sidebar.css';
import { Menu } from 'antd'
import React from 'react'
import {
  ApartmentOutlined,
  AppstoreOutlined,
  BarsOutlined,
  CheckOutlined,
  ControlOutlined,
  DashboardOutlined,
  FieldTimeOutlined,
  FileOutlined,
  HomeOutlined,
  PieChartOutlined,
  ReadOutlined,
  ScheduleOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  StarOutlined,
  TagsOutlined,
  TeamOutlined,
  ToolOutlined,
  UserOutlined,
  WalletOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function SideBar() {

  const navigate = useNavigate()

  return (
    <div className='sidebar'>
      <Menu
        onClick={(item) => {
          navigate(item.key)
        }}
        className='list-menu'
        mode='inline'
        items={[
          {
            label: "Dashboard",
            icon: <DashboardOutlined />,
            key: "/Dashboard"
          },
          {
            label: "User Management",
            icon: <TeamOutlined />,
            key: "/UserManagement",
            children: [
              { label: "List User", key: "/ListUser", icon: <SearchOutlined /> },
              { label: "Management Village", key: "/ManagementVillage", icon: <HomeOutlined /> },
              { label: "Assignment Roles", key: "/AssignmentRole", icon: <ReadOutlined /> },
              { label: "Roles", key: "/Roles", icon: <ApartmentOutlined /> },
              { label: "Assignment Tapper", key: "/AssignmentTapper", icon: <TagsOutlined /> }
            ]
          },
          {
            label: "Factory Management",
            icon: <ToolOutlined />,
            key: "/FactoryManagement"
          },
          {
            label: "Warehouse Management",
            icon: <AppstoreOutlined />,
            key: "/WarehouseManagement"
          },
          {
            label: "Payment Management",
            icon: <WalletOutlined />,
            key: "/PaymentManagement",
            children: [
              { label: "Price List", key: "/PriceList", icon: <BarsOutlined /> },
              { label: "Status Payment", key: "/StatusPayment", icon: <FieldTimeOutlined /> }
            ]
          },
          {
            label: "Checklist",
            icon: <CheckOutlined />,
            key: "/Checklist"
          },
          {
            label: "Control Checklist",
            icon: <ControlOutlined />,
            key: "/ControlChecklist"
          },
          {
            label: "Village",
            icon: <HomeOutlined />,
            key: "/Village"
          },
          {
            label: "Nira",
            icon: <PieChartOutlined />,
            key: "/Nira"
          },
          {
            label: "Tappers",
            icon: <TeamOutlined />,
            key: "/Tappers"
          },
          {
            label: "Collectors",
            icon: <UserOutlined />,
            key: "/Collectors"
          },
          {
            label: "Production",
            icon: <ScheduleOutlined />,
            key: "/Production"
          },
          {
            label: "Purchase And ICS",
            icon: <FileOutlined />,
            key: "/PurchaseICS",
            children: [
              { label: "Purchase", key: "/Purchase", icon: <ShoppingCartOutlined /> },
              { label: "ICS", key: "/ICS", icon: <SearchOutlined /> }
            ]
          },
          {
            label: "KPI",
            icon: <StarOutlined />,
            key: "/KPI"
          },
          {
            label: "Catatan Petani",
            icon: <FileOutlined />,
            key: "/Catatan",
            children: [
              { label: "Catatan Pekerjaan Petani", key: "/CatatanPetani", icon: <FileOutlined /> },
              { label: "Catatan Pembuatan Pupuk", key: "/CatatanPupuk", icon: <FileOutlined /> }
            ]
          }
        ]}></Menu>
    </div>
  )
}

export default SideBar