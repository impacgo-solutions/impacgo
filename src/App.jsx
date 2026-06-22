import Pos from "./pages/Pos";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Core Services
import D365 from "./pages/D365";
import AppDevelopment from "./pages/appDevelopment";

// Components / Service Sections
import ImplementationServices from "./components/ImplementationServices";
import DevelopmentServices from "./components/DevelopmentServices";
import AMS from "./components/AMS";
import ContactUs from "./components/ContactUs";

// Additional Services
import ERPNext from "./pages/erpnext";
import MES from "./pages/mes";
import Integrations from "./pages/integrations";
import Consulting from "./pages/Consulting";
import AIAutomation from "./pages/Aiautomation";

// Product Pages
import DairyFarm from "./pages/Dairyfarm";
import WorkTask from "./pages/Worktask";
import ConstructionPlanner from "./pages/Constructionplanner";
import AXMigration from "./pages/Axmigration";

// Blog Pages
import BlogIndex from "./pages/blog/BlogIndex";
import AX2012EndOfSupport2028Blog from "./pages/blog/AX2012EndOfSupport2028Blog";
import D365FOImplementationTimelineBlog from "./pages/blog/D365foimplementationtimelineblog";

// Power Platform Pages
import PowerApps from "./pages/Powerapps";
import PowerAutomate from "./pages/PowerAutomate";
import PowerBI from "./pages/PowerBI";
import AIBuilder from "./pages/AIBuilder";

// Industry Pages
import D365Manufacturing from "./pages/D365Manufacturing";
import D365Distribution from "./pages/D365Distribution";
import D365Retail from "./pages/D365Retail";

// D365 Service Pages
import D365Development from "./pages/D365Development";
import D365CRM from "./pages/D365CRM";

import ExcelToPowerBIBlog from "./pages/blog/ExceltopowerBI";
import D365FOVsSAPVsOracleBlog from"./pages/blog/D365FOVsSAPVsOracleBlog";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ---------------- HOME ---------------- */}
        <Route path="/" element={<HomePage />} />

        {/* ---------------- EXISTING SERVICES ---------------- */}
        <Route path="/services/pos" element={<Pos />} />
        <Route path="/services/d365" element={<D365 />} />

        <Route
          path="/services/app-development"
          element={<AppDevelopment />}
        />

        <Route
          path="/services/implementation"
          element={<ImplementationServices />}
        />

        <Route
          path="/services/development"
          element={<DevelopmentServices />}
        />

        <Route
          path="/services/ams"
          element={<AMS />}
        />

        {/* ---------------- NEW SERVICES ---------------- */}
        <Route
          path="/services/erpnext"
          element={<ERPNext />}
        />

        <Route
          path="/services/mes"
          element={<MES />}
        />

        <Route
          path="/services/integrations"
          element={<Integrations />}
        />

        <Route
          path="/services/consulting"
          element={<Consulting />}
        />

        <Route
          path="/services/ai-automation"
          element={<AIAutomation />}
        />

        {/* ---------------- AX MIGRATION ---------------- */}
        <Route
          path="/services/ax-migration"
          element={<AXMigration />}
        />

        {/* ---------------- POWER PLATFORM ---------------- */}
        <Route
          path="/services/power-apps"
          element={<PowerApps />}
        />

        <Route
          path="/services/power-automate"
          element={<PowerAutomate />}
        />

        <Route
          path="/services/power-bi"
          element={<PowerBI />}
        />

        <Route
          path="/services/ai-builder"
          element={<AIBuilder />}
        />

        {/* ---------------- D365 SPECIALIZED SERVICES ---------------- */}
        <Route
          path="/services/d365-development"
          element={<D365Development />}
        />

        <Route
          path="/services/d365-crm"
          element={<D365CRM />}
        />

        {/* ---------------- PRODUCTS ---------------- */}
        <Route
          path="/products/dairy-farm"
          element={<DairyFarm />}
        />

        <Route
          path="/products/work-task"
          element={<WorkTask />}
        />

        <Route
          path="/products/construction-planner"
          element={<ConstructionPlanner />}
        />

        {/* ---------------- INDUSTRIES ---------------- */}
        <Route
          path="/industries/manufacturing"
          element={<D365Manufacturing />}
        />

        <Route
          path="/industries/distribution"
          element={<D365Distribution />}
        />

        <Route
          path="/industries/retail"
          element={<D365Retail />}
        />

        {/* ---------------- BLOG ---------------- */}
        <Route
          path="/blog"
          element={<BlogIndex />}
        />

        <Route
          path="/blog/ax-2012-end-of-support-2028-india"
          element={<AX2012EndOfSupport2028Blog />}
        />

        <Route 
  path="/blog/d365fo-vs-sap-s4hana-vs-oracle-netsuite" 
  element={<D365FOVsSAPVsOracleBlog />} 
/>

        <Route
        path="/blog/how-long-does-d365fo-implementation-take"
        element={<D365FOImplementationTimelineBlog />}
        />
          <Route 
  path="/blog/replace-excel-reporting-with-power-bi-d365fo" 
  element={<ExcelToPowerBIBlog />} 
/>
        {/* ---------------- CONTACT ---------------- */}
        <Route
          path="/contact"
          element={<ContactUs />}
        />

        {/* ---------------- FALLBACK ---------------- */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;  