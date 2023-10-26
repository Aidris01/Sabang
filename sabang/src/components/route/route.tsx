import { Route, Routes } from "react-router-dom";

import PrivateRoutes from "./PrivateRoute";
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
import WebLayout from "../layout/layout";
import PurchaseFilter from "../pages/Tappers/PurchaseFilter";
import CreateProduction from "../pages/Production/CreateProduction";
import ICSTeam from "../pages/PurchaseICS/ICS/ICSTeam";
import CreatePetani from "../pages/CatatanPetani/CreatePetani";
import CreatePupuk from "../pages/CatatanPetani/CreatePupuk";
import Profile from "../pages/Profile/Profile";
import EditUser from "../pages/UserManagement/ListUser/EditUser";
import EditVillage from "../pages/UserManagement/ManagementVillage/EditVillage";
import CreateRole from "../pages/UserManagement/AssignmentRole/CreateRole";
import DetailUser from "../pages/UserManagement/ListUser/DetailUser";
import EditRole from "../pages/UserManagement/AssignmentRole/EditRole";
import EditPurchase from "../pages/PurchaseICS/Purchase/EditPurchase";
import DetailPurchase from "../pages/PurchaseICS/Purchase/DetailPurchase";
import DetailPayment from "../pages/PaymentManagement/DetailPayment";
import DetailFactory from "../pages/FactoryManagement/DetailFactory";
import EditFactory from "../pages/FactoryManagement/EditFactory";
import DetailChecklist from "../pages/Checklist/DetailChecklist";
import EditChecklist from "../pages/Checklist/EditChecklist";
import DetailWarehouse from "../pages/WarehouseMan/DetailWarehouse";
import EditWarehouse from "../pages/WarehouseMan/EditWarehouse";

function AppRoute() {
    return (
        <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="*" element={<NotFound />} />

            <Route element={<PrivateRoutes />}>
                <Route path="/" element={<WebLayout>{<Dashboard />}</WebLayout>} />
                <Route path="/ListUser" element={<WebLayout>{<ListUser />}</WebLayout>} />
                <Route path="/ManagementVillage" element={<WebLayout>{<ManagementVillage />}</WebLayout>} />
                <Route path="/Roles" element={<WebLayout>{<Roles />}</WebLayout>} />
                <Route path="/AssignmentTapper" element={<WebLayout>{<AssignmentTapper />}</WebLayout>} />
                <Route path="/FactoryManagement" element={<WebLayout>{<FactoryManagement />}</WebLayout>} />
                <Route path="/WarehouseManagement" element={<WebLayout>{<WarehouseManagement />}</WebLayout>} />
                <Route path="/PriceList" element={<WebLayout>{<PriceList />}</WebLayout>} />
                <Route path="/StatusPayment" element={<WebLayout>{<StatusPayment />}</WebLayout>} />
                <Route path="/Checklist" element={<WebLayout>{<Checklist />}</WebLayout>} />
                <Route path="/ControlChecklist" element={<WebLayout>{<ControlChecklist />}</WebLayout>} />
                <Route path="/Village" element={<WebLayout>{<Village />}</WebLayout>} />
                <Route path="/Nira" element={<WebLayout>{<Nira />}</WebLayout>} />
                <Route path="/Tappers" element={<WebLayout>{<Tappers />}</WebLayout>} />
                <Route path="/Collectors" element={<WebLayout>{<Collectors />}</WebLayout>} />
                <Route path="/Production" element={<WebLayout>{<Production />}</WebLayout>} />
                <Route path="/Purchase" element={<WebLayout>{<Purchase />}</WebLayout>} />
                <Route path="/ICS" element={<WebLayout>{<ICS />}</WebLayout>} />
                <Route path="/KPI" element={<WebLayout>{<KPI />}</WebLayout>} />
                <Route path="/CatatanPetani" element={<WebLayout>{<CatatanPetani />}</WebLayout>} />
                <Route path="/CatatanPupuk" element={<WebLayout>{<CatatanPupuk />}</WebLayout>} />

                <Route path="/ListUser/CreateUser" element={<WebLayout>{<CreateUser />}</WebLayout>} />
                <Route path="/ListUser/CreateUserBulk" element={<WebLayout>{<CreateUserBulk />}</WebLayout>} />
                <Route path="/Roles/CreateRole" element={<WebLayout>{<CreateRole />}</WebLayout>} />
                <Route path="/ManagementVillage/CreateVillage" element={<WebLayout>{<CreateVillage />}</WebLayout>} />
                <Route path="/FactoryManagement/CreateFactory" element={<WebLayout>{<CreateFactory />}</WebLayout>} />
                <Route path="/WarehouseManagement/CreateWarehouse" element={<WebLayout>{<CreateWarehouse />}</WebLayout>} />
                <Route path="/PriceList/CreatePrice" element={<WebLayout>{<CreatePrice />}</WebLayout>} />
                <Route path="/Checklist/CreateChecklist" element={<WebLayout>{<CreateChecklist />}</WebLayout>} />
                <Route path="/Tappers/PurchaseFilter" element={<WebLayout>{<PurchaseFilter />}</WebLayout>} />
                <Route path="/Production/CreateProduction" element={<WebLayout>{<CreateProduction />}</WebLayout>} />
                <Route path="/ICS/ICSTeam" element={<WebLayout>{<ICSTeam />}</WebLayout>} />
                <Route path="/CatatanPetani/CreatePetani" element={<WebLayout>{<CreatePetani />}</WebLayout>} />
                <Route path="/CatatanPupuk/CreatePupuk" element={<WebLayout>{<CreatePupuk />}</WebLayout>} />

                <Route path="/Profile" element={<WebLayout>{<Profile />}</WebLayout>} />
                <Route path="/ListUser/EditUser/:userId" element={<WebLayout>{<EditUser />}</WebLayout>} />
                <Route path="/ListUser/DetailUser/:userId" element={<WebLayout>{<DetailUser />}</WebLayout>} />
                <Route path="/ManagementVillage/EditVillage/:villageId" element={<WebLayout>{<EditVillage />}</WebLayout>} />
                <Route path="/Roles/EditRole/:roleId" element={<WebLayout>{<EditRole />}</WebLayout>} />
                <Route path="/Purchase/EditPurchase/:purchaseId" element={<WebLayout>{<EditPurchase />}</WebLayout>} />
                <Route path="/Purchase/DetailPurchase/:purchaseId" element={<WebLayout>{<DetailPurchase />}</WebLayout>} />
                <Route path="/StatusPayment/DetailPayment" element={<WebLayout>{<DetailPayment />}</WebLayout>} />
                <Route path="/FactoryManagement/DetailFactory/:factoryId" element={<WebLayout>{<DetailFactory />}</WebLayout>} />
                <Route path="/FactoryManagement/EditFactory/:factoryId" element={<WebLayout>{<EditFactory />}</WebLayout>} />
                <Route path="/Checklist/DetailChecklist/:checklistId" element={<WebLayout>{<DetailChecklist />}</WebLayout>} />
                <Route path="/Checklist/EditChecklist/:checklistId" element={<WebLayout>{<EditChecklist />}</WebLayout>} />
                <Route path="/WarehouseManagement/DetailWarehouse/:warehouseId" element={<WebLayout>{<DetailWarehouse />}</WebLayout>} />
                <Route path="/WarehouseManagement/EditWarehouse/:warehouseId" element={<WebLayout>{<EditWarehouse />}</WebLayout>} />
            </Route>
        </Routes>
    )
}

export default AppRoute;