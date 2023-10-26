 import React from 'react';
// import Header from '../header/header';
// import SideBar from '../sidebar/sidebar';
// import './layout.css';

// interface LayoutProps {
//   children: React.ReactNode;
// }

// const WebLayout: React.FC<LayoutProps> = ({ children }) => {
//   return (
//     <div className="layout">
//       <Header />
//       <div className="content">
//         <SideBar />
//         <main className="main-content">{children}</main>
//       </div>
//     </div>
//   );
// };

// export default WebLayout;


// import React, { useEffect, useState } from 'react';
// import { Button, Dropdown, Layout, Menu, Modal } from 'antd';
// import user from '../header/img/user.png'
// // import Headers from '../header/header';
// // import SideBar from '../sidebar/sidebar';
// import './layout.css';
// import '../header/header.css'
// import '../sidebar/sidebar.css'
// import '../pages/style/style.css'
// import { ApartmentOutlined, AppstoreOutlined, BarsOutlined, CheckOutlined, ControlOutlined, DashboardOutlined, FieldTimeOutlined, FileOutlined, HomeOutlined, PieChartOutlined, PoweroffOutlined, ScheduleOutlined, SearchOutlined, SettingOutlined, ShoppingCartOutlined, StarOutlined, TagsOutlined, TeamOutlined, ToolOutlined, UserOutlined, WalletOutlined } from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom';

// const headerStyle: React.CSSProperties = {
//   color: '#fff',
//   height: '65px',
//   backgroundColor: '#78937A',
//   borderBottom: 'solid 1px rgba(0, 0, 0, 0.25)'
// };

// const contentStyle: React.CSSProperties = {
//   height: '100%',
//   color: '#fff',
//   backgroundColor: '#F9EBC7BF'
// };

// const siderStyle: React.CSSProperties = {
//   height: '100%',
//   textAlign: 'center',
//   color: '#fff',
//   backgroundColor: '#3ba0e9',
// };

// const footerStyle: React.CSSProperties = {
//   textAlign: 'center',
//   color: '#fff',
//   backgroundColor: '#7dbcea',
// };

// const { Header, Sider, Content, Footer } = Layout

// interface LayoutProps {
//   children: React.ReactNode;
// }

// interface ProfileData {
//   name?: string;
//   avatar?: string;
// }

// const WebLayout: React.FC<LayoutProps> = ({ children }) => {
//   const navigate = useNavigate();
//   const [name, setName] = useState<string>('')
//   const [avatar, setAvatar] = useState<string>(user);
//   const [logoutModalVisible, setLogoutModalVisible] = useState(false);

//   useEffect(() => {
//     // Gunakan useEffect untuk memantau perubahan data di localStorage
//     const profileData: ProfileData = JSON.parse(localStorage.getItem('profile') ?? '{}');
//     const avatarData: string = profileData.avatar || user; // Jika avatar tidak ada, gunakan default

//     setName(profileData.name || ''); // Mengambil nama dari data localStorage
//     setAvatar(avatarData); // Mengambil avatar dari data localStorage atau default
//   }, []);

//   const showLogoutModal = () => {
//     setLogoutModalVisible(true);
//   }
//   const hideLogoutModal = () => {
//     setLogoutModalVisible(false)
//   }
//   const Logout = () => {
//     showLogoutModal()
//   }

//   const handleLogoutConfirm = () => {
//     navigate("/Login")
//     localStorage.removeItem('profile')
//     localStorage.removeItem('token')
//   }

//   const profile = () => {
//     navigate('/Profile')
//   }
//   const items = [
//     {
//       key: '1',
//       label: (
//         <a type='text' onClick={profile}>
//           <UserOutlined style={{ marginRight: 10 }} />Profile</a>
//       )
//     },
//     {
//       key: '2',
//       label: (
//         <a type='text' onClick={Logout}>
//           <PoweroffOutlined style={{ marginRight: 10 }} />Sign Out</a>
//       )
//     }
//   ]
//   return (
//     <div className='layout'>
//       <Layout>
//         <Header style={headerStyle}>
//           <div className='header'>
//             <img className='user-img' src={avatar} />
//             <h5>Welcome, {name}</h5>
//             <Dropdown className='dropdown' menu={{ items }}>
//               <Button type='link' className='settings-btn'><SettingOutlined />Settings</Button>
//             </Dropdown>
//             <Modal
//               title='Konfirmasi Logout'
//               open={logoutModalVisible}
//               onOk={handleLogoutConfirm}
//               onCancel={hideLogoutModal}
//               okText='Ya'
//               cancelText='Batal'
//             >
//               Apakah Anda yakin ingin logout?
//             </Modal>
//           </div></Header>
//         <Layout hasSider style={{backgroundColor: '#F9EBC7BF'}}>
//           <Sider style={siderStyle}>
//             <div className='sidebar'>
//               <Menu
//                 onClick={(item) => {
//                   navigate(item.key)
//                 }}
//                 className='list-menu'
//                 mode='inline'
//                 items={[
//                   {
//                     label: "Dashboard",
//                     icon: <DashboardOutlined />,
//                     key: "/"
//                   },
//                   {
//                     label: "User Management",
//                     icon: <TeamOutlined />,
//                     key: "/UserManagement",
//                     children: [
//                       { label: "List User", key: "/ListUser", icon: <SearchOutlined /> },
//                       { label: "Management Village", key: "/ManagementVillage", icon: <HomeOutlined /> },
//                       { label: "Roles", key: "/Roles", icon: <ApartmentOutlined /> },
//                       { label: "Assignment Tapper", key: "/AssignmentTapper", icon: <TagsOutlined /> }
//                     ]
//                   },
//                   {
//                     label: "Factory Management",
//                     icon: <ToolOutlined />,
//                     key: "/FactoryManagement"
//                   },
//                   {
//                     label: "Warehouse Management",
//                     icon: <AppstoreOutlined />,
//                     key: "/WarehouseManagement"
//                   },
//                   {
//                     label: "Payment Management",
//                     icon: <WalletOutlined />,
//                     key: "/PaymentManagement",
//                     children: [
//                       { label: "Price List", key: "/PriceList", icon: <BarsOutlined /> },
//                       { label: "Status Payment", key: "/StatusPayment", icon: <FieldTimeOutlined /> }
//                     ]
//                   },
//                   {
//                     label: "Checklist",
//                     icon: <CheckOutlined />,
//                     key: "/Checklist"
//                   },
//                   {
//                     label: "Control Checklist",
//                     icon: <ControlOutlined />,
//                     key: "/ControlChecklist"
//                   },
//                   {
//                     label: "Village",
//                     icon: <HomeOutlined />,
//                     key: "/Village"
//                   },
//                   {
//                     label: "Nira",
//                     icon: <PieChartOutlined />,
//                     key: "/Nira"
//                   },
//                   {
//                     label: "Tappers",
//                     icon: <TeamOutlined />,
//                     key: "/Tappers"
//                   },
//                   {
//                     label: "Collectors",
//                     icon: <UserOutlined />,
//                     key: "/Collectors"
//                   },
//                   {
//                     label: "Production",
//                     icon: <ScheduleOutlined />,
//                     key: "/Production"
//                   },
//                   {
//                     label: "Purchase And ICS",
//                     icon: <FileOutlined />,
//                     key: "/PurchaseICS",
//                     children: [
//                       { label: "Purchase", key: "/Purchase", icon: <ShoppingCartOutlined /> },
//                       { label: "ICS", key: "/ICS", icon: <SearchOutlined /> }
//                     ]
//                   },
//                   {
//                     label: "KPI",
//                     icon: <StarOutlined />,
//                     key: "/KPI"
//                   },
//                   {
//                     label: "Catatan Petani",
//                     icon: <FileOutlined />,
//                     key: "/Catatan",
//                     children: [
//                       { label: "Catatan Pekerjaan Petani", key: "/CatatanPetani", icon: <FileOutlined /> },
//                       { label: "Catatan Pembuatan Pupuk", key: "/CatatanPupuk", icon: <FileOutlined /> }
//                     ]
//                   }
//                 ]}>
//               </Menu>
//             </div>
//           </Sider>
//           <Content style={contentStyle}>{children}</Content>
//         </Layout>
//       </Layout>
//     </div>
//   );
// };

// export default WebLayout;
