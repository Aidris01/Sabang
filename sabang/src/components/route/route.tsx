import { Space } from "antd";
import { Route, Routes } from "react-router-dom";
import Header from "../header/header";
import Login from "../login/login";
import CatatanPetani from "../pages/CatatanPetani/CatatanPetani";
import CatatanPupuk from "../pages/CatatanPetani/CatatanPupuk";
import Checklist from "../pages/Checklist/Checklist";
import Collectors from "../pages/Collectors/Collectors";
import ControlChecklist from "../pages/ControlChecklist/ControlChecklist";
import Dashboard from "../pages/Dashboard/Dashboard";
import FactoryManagement from "../pages/FactoryManagement/FactoryManagement";
import KPI from "../pages/KPI/KPI";
import Nira from "../pages/Nira/Nira";
import NotFound from "../pages/NotFound/NotFound";
import PriceList from "../pages/PaymentManagement/PriceList/PriceList";
import StatusPayment from "../pages/PaymentManagement/StatusPay";
import Production from "../pages/Production/Production";
import ICS from "../pages/PurchaseICS/ICS";
import Purchase from "../pages/PurchaseICS/Purchase";
import Tappers from "../pages/Tappers/Tappers";
import AssignmentRole from "../pages/UserManagement/AssignmentRole/AssignmentRole";
import AssignmentTapper from "../pages/UserManagement/AssignmentTappper";
import CreateUser from "../pages/UserManagement/ListUser/CreateUser";
import CreateUserBulk from "../pages/UserManagement/ListUser/CreateUserBulk";
import ListUser from "../pages/UserManagement/ListUser/ListUser";
import CreateVillage from "../pages/UserManagement/ManagementVillage/CreateVillage";
import ManagementVillage from "../pages/UserManagement/ManagementVillage/ManagementVillage";
import Roles from "../pages/UserManagement/AssignmentRole/Roles";
import Village from "../pages/Village/Village";
import WarehouseManagement from "../pages/WarehouseMan/WarehouseManagement";
import SideBar from "../sidebar/sidebar";
import './style.css';
import CreateFactory from "../pages/FactoryManagement/CreateFactory";
import CreateWarehouse from "../pages/WarehouseMan/CreateWarehouse";
import CreatePrice from "../pages/PaymentManagement/PriceList/CreatePrice";
import CreateChecklist from "../pages/Checklist/CreateChecklist";


function AppRoute() {
    return (
        <Routes>
            <Route path="/" element={
                <Login />
            }></Route>

            <Route path="/Dashboard" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <Dashboard />
                    </Space>
                </div>
            }></Route>

            <Route path="/ListUser" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <ListUser />
                    </Space>
                </div>
            }></Route>

            <Route path="/ManagementVillage" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <ManagementVillage />
                    </Space>
                </div>
            }></Route>

            <Route path="/AssignmentRole" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <AssignmentRole />
                    </Space>
                </div>
            }></Route>

            <Route path="/Roles" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <Roles />
                    </Space>
                </div>
            }></Route>

            <Route path="/AssignmentTapper" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <AssignmentTapper />
                    </Space>
                </div>
            }></Route>

            <Route path="/FactoryManagement" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <FactoryManagement />
                    </Space>
                </div>
            }></Route>

            <Route path="/WarehouseManagement" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <WarehouseManagement />
                    </Space>
                </div>
            }></Route>

            <Route path="/PriceList" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <PriceList />
                    </Space>
                </div>
            }></Route>

            <Route path="/StatusPayment" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <StatusPayment />
                    </Space>
                </div>
            }></Route>

            <Route path="/Checklist" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <Checklist />
                    </Space>
                </div>
            }></Route>

            <Route path="/ControlChecklist" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <ControlChecklist />
                    </Space>
                </div>
            }></Route>

            <Route path="/Village" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <Village />
                    </Space>
                </div>
            }></Route>

            <Route path="/Nira" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <Nira />
                    </Space>
                </div>
            }></Route>

            <Route path="/Tappers" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <Tappers />
                    </Space>
                </div>
            }></Route>

            <Route path="/Collectors" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <Collectors />
                    </Space>
                </div>
            }></Route>

            <Route path="/Production" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <Production />
                    </Space>
                </div>
            }></Route>

            <Route path="/Purchase" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <Purchase />
                    </Space>
                </div>
            }></Route>

            <Route path="/ICS" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <ICS />
                    </Space>
                </div>
            }></Route>

            <Route path="/KPI" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <KPI />
                    </Space>
                </div>
            }></Route>

            <Route path="/CatatanPetani" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <CatatanPetani />
                    </Space>
                </div>
            }></Route>

            <Route path="/CatatanPupuk" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <CatatanPupuk />
                    </Space>
                </div>
            }></Route>

            <Route path="*" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <NotFound />
                    </Space>
                </div>
            }></Route>

            <Route path="/ListUser/CreateUser" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <CreateUser />
                    </Space>
                </div>
            }></Route>

            <Route path="/ListUser/CreateUserBulk" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <CreateUserBulk />
                    </Space>
                </div>
            }>

            </Route>
            <Route path="/ManagementVillage/CreateVillage" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <CreateVillage />
                    </Space>
                </div>
            }>
            </Route>
            <Route path="/FactoryManagement/CreateFactory" element={
                <div className='page'>
                    <Header />
                    <Space className='page-content'>
                        <SideBar />
                        <CreateFactory />
                    </Space>
                </div>
            }>
            </Route>
            <Route path="/WarehouseManagement/CreateWarehouse" element={
                <div className="page">
                    <Header />
                    <Space className="page-content">
                        <SideBar />
                        <CreateWarehouse />
                    </Space>
                </div>
            }>
            </Route>
            <Route path="/PriceList/CreatePrice" element={
                <div className="page">
                    <Header />
                    <Space className="page-content">
                        <SideBar />
                        <CreatePrice />
                    </Space>
                </div>
            }>
            </Route>
            <Route path="/Checklist/CreateChecklist" element= {
                <div className="page">
                <Header />
                <Space className="page-content">
                    <SideBar />
                    <CreateChecklist />
                </Space>
            </div>
            }
            >
            </Route>
        </Routes>
    )
}
export default AppRoute;