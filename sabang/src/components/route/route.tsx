import { Route, Routes } from "react-router-dom";
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
import ICS from "../pages/PurchaseICS/ICS/ICS";
import Purchase from "../pages/PurchaseICS/Purchase/Purchase";
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
import CreateFactory from "../pages/FactoryManagement/CreateFactory";
import CreateWarehouse from "../pages/WarehouseMan/CreateWarehouse";
import CreatePrice from "../pages/PaymentManagement/PriceList/CreatePrice";
import CreateChecklist from "../pages/Checklist/CreateChecklist";
import Layout from "../layout/layout";
import PurchaseFilter from "../pages/Tappers/PurchaseFilter";
import CreateProduction from "../pages/Production/CreateProduction";
import ICSTeam from "../pages/PurchaseICS/ICS/ICSTeam";
import Detail from "../pages/PaymentManagement/Detail";
import CreatePetani from "../pages/CatatanPetani/CreatePetani";
import CreatePupuk from "../pages/CatatanPetani/CreatePupuk";
import './style.css';


function AppRoute() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            
            <Route path="/Dashboard" element={<Layout>{<Dashboard />}</Layout>} />
            <Route path="/ListUser" element={<Layout>{<ListUser />}</Layout>} />
            <Route path="/ManagementVillage" element={<Layout>{<ManagementVillage />}</Layout>} />
            <Route path="/AssignmentRole" element={<Layout>{<AssignmentRole />}</Layout>} />
            <Route path="/Roles" element={<Layout>{<Roles />}</Layout>} />
            <Route path="/AssignmentTapper" element={<Layout>{<AssignmentTapper />}</Layout>} />
            <Route path="/FactoryManagement" element={<Layout>{<FactoryManagement />}</Layout>} />
            <Route path="/WarehouseManagement" element={<Layout>{<WarehouseManagement />}</Layout>} />
            <Route path="/PriceList" element={<Layout>{<PriceList />}</Layout>} />
            <Route path="/StatusPayment" element={<Layout>{<StatusPayment />}</Layout>} />
            <Route path="/Checklist" element={<Layout>{<Checklist />}</Layout>} />
            <Route path="/ControlChecklist" element={<Layout>{<ControlChecklist />}</Layout>} />
            <Route path="/Village" element={<Layout>{<Village />}</Layout>} />
            <Route path="/Nira" element={<Layout>{<Nira />}</Layout>} />
            <Route path="/Tappers" element={<Layout>{<Tappers />}</Layout>} />
            <Route path="/Collectors" element={<Layout>{<Collectors />}</Layout>} />
            <Route path="/Production" element={<Layout>{<Production />}</Layout>} />
            <Route path="/Purchase" element={<Layout>{<Purchase />}</Layout>} />
            <Route path="/ICS" element={<Layout>{<ICS />}</Layout>} />
            <Route path="/KPI" element={<Layout>{<KPI />}</Layout>} />
            <Route path="/CatatanPetani" element={<Layout>{<CatatanPetani />}</Layout>} />
            <Route path="/CatatanPupuk" element={<Layout>{<CatatanPupuk />}</Layout>} />
            <Route path="*" element={<NotFound />} />

            <Route path="/ListUser/CreateUser" element={<Layout>{<CreateUser />}</Layout>} />
            <Route path="/ListUser/CreateUserBulk" element={<Layout>{<CreateUserBulk />}</Layout>} />
            <Route path="/ManagementVillage/CreateVillage" element={<Layout>{<CreateVillage />}</Layout>} />
            <Route path="/FactoryManagement/CreateFactory" element={<Layout>{<CreateFactory />}</Layout>} />
            <Route path="/WarehouseManagement/CreateWarehouse" element={<Layout>{<CreateWarehouse />}</Layout>} />
            <Route path="/PriceList/CreatePrice" element={<Layout>{<CreatePrice />}</Layout>} />
            <Route path="/Checklist/CreateChecklist" element= {<Layout>{<CreateChecklist />}</Layout>} />
            <Route path="/Tappers/PurchaseFilter" element= {<Layout>{<PurchaseFilter />}</Layout>} />
            <Route path="/Production/CreateProduction" element= {<Layout>{<CreateProduction />}</Layout>} />
            <Route path="/ICS/ICSTeam" element= {<Layout>{<ICSTeam />}</Layout>} />
            <Route path="/CatatanPetani/CreatePetani" element= {<Layout>{<CreatePetani />}</Layout>} />
            <Route path="/CatatanPupuk/CreatePupuk" element= {<Layout>{<CreatePupuk />}</Layout>} />

            <Route path="/StatusPayment/Detail" element={<Layout>{<Detail />}</Layout>} />
        </Routes>
    )
}
export default AppRoute;