import { Route, Routes } from "react-router-dom";
import CatatanPetani from "../pages/CatatanPetani/CatatanPetani";
import CatatanPupuk from "../pages/CatatanPetani/CatatanPupuk";
import Checklist from "../pages/Checklist/Checklist";
import Collectors from "../pages/Collectors/Collectors";
import ControlChecklist from "../pages/ControlChecklist/ControlChecklist";
import Dashboard from "../pages/Dashboard/Dashboard";
import FactoryManagement from "../pages/FactoryManagement/FactoryManagement";
import KPI from "../pages/KPI/KPI";
import Nira from "../pages/Nira/Nira";
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


function AppRoute() {
    return (
        <Routes>
            <Route path="/Dashboard" element={<Dashboard />}></Route>

            <Route path="/ListUser" element={<ListUser />}></Route>
            <Route path="/ManagementVillage" element={<ManagementVillage />}></Route>
            <Route path="/AssignmentRole" element={<AssignmentRole />}></Route>
            <Route path="/Role" element={<Roles />}></Route>
            <Route path="/AssignmentTapper" element={<AssignmentTapper />}></Route>

            <Route path="/FactoryManagement" element={<FactoryManagement />}></Route>

            <Route path="/WarehouseManagement" element={<WarehouseManagement />}></Route>

            <Route path="/PriceList" element={<PriceList />}></Route>
            <Route path="/StatusPayment" element={<StatusPayment />}></Route>

            <Route path="/Checklist" element={<Checklist />}></Route>

            <Route path="/ControlChecklist" element={<ControlChecklist />}></Route>

            <Route path="/Village" element={<Village />}></Route>

            <Route path="/Nira" element={<Nira />}></Route>

            <Route path="/Tappers" element={<Tappers />}></Route>

            <Route path="/Collectors" element={<Collectors />}></Route>

            <Route path="/Production" element={<Production />}></Route>

            <Route path="/Purchase" element={<Purchase />}></Route>
            <Route path="/ICS" element={<ICS />}></Route>

            <Route path="/KPI" element={<KPI />}></Route>

            <Route path="/CatatanPetani" element={<CatatanPetani />}></Route>
            <Route path="/CatatanPupuk" element={<CatatanPupuk />}></Route>
        </Routes>
    )
}

export default AppRoute;