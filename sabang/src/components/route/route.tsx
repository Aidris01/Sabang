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
import PriceList from "../pages/PaymentManagement/PriceList";
import StatusPayment from "../pages/PaymentManagement/StatusPay";
import Production from "../pages/Production/Production";
import ICS from "../pages/PurchaseICS/ICS";
import Purchase from "../pages/PurchaseICS/Purchase";
import Tappers from "../pages/Tappers/Tappers";
import AssignmentRole from "../pages/UserManagement/AssignmentRole";
import AssignmentTapper from "../pages/UserManagement/AssignmentTappper";
import ListUser from "../pages/UserManagement/ListUser";
import ManagementVillage from "../pages/UserManagement/ManagementVillage";
import Roles from "../pages/UserManagement/Roles";
import Village from "../pages/Village/Village";
import WarehouseManagement from "../pages/WarehouseMan/WarehouseManagement";
import SideBar from "../sidebar/sidebar";
import './style.css';


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

            <Route path="/Role" element={
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
        </Routes>
    )
}

export default AppRoute;