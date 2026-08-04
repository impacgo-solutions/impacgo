import { lazy, Suspense } from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// HomePage is the most-visited route, so it's bundled into the main chunk
// (imported above, not lazy) to avoid an extra network round-trip on first
// load. Every other route is code-split via lazy() so a visitor only
// downloads the JS for the page they're actually on.
const Pos = lazy(() => import("./pages/Pos"));

// Core Services
const D365 = lazy(() => import("./pages/D365"));
const AppDevelopment = lazy(() => import("./pages/appDevelopment"));

// Components / Service Sections
const ImplementationServices = lazy(() => import("./components/ImplementationServices"));
const DevelopmentServices = lazy(() => import("./components/DevelopmentServices"));
const AMS = lazy(() => import("./components/AMS"));
const ContactUs = lazy(() => import("./components/ContactUs"));

// Additional Services
const ERPNext = lazy(() => import("./pages/erpnext"));
const MES = lazy(() => import("./pages/mes"));
const Integrations = lazy(() => import("./pages/integrations"));
const Consulting = lazy(() => import("./pages/Consulting"));
const AIAutomation = lazy(() => import("./pages/Aiautomation"));

// Product Pages
const DairyFarm = lazy(() => import("./pages/Dairyfarm"));
const InventoryManagement = lazy(() => import("./pages/Inventorymanagement"));
const FarmYieldIQ = lazy(() => import("./pages/FarmYieldIQ"));
const ERPModuleDetail = lazy(() => import("./pages/erp/ERPModuleDetail"));
const WorkTask = lazy(() => import("./pages/Worktask"));
const ConstructionPlanner = lazy(() => import("./pages/Constructionplanner"));
const AXMigration = lazy(() => import("./pages/Axmigration"));

// Blog Pages
const BlogIndex = lazy(() => import("./pages/blog/BlogIndex"));
const AX2012EndOfSupport2028Blog = lazy(() => import("./pages/blog/AX2012EndOfSupport2028Blog"));
const D365FOImplementationTimelineBlog = lazy(() => import("./pages/blog/D365foimplementationtimelineblog"));
const PowerAppsD365FOBlog = lazy(() => import("./pages/blog/PowerAppsD365FOBlog"));
const PowerAutomateD365FOBlog = lazy(() => import("./pages/blog/PowerAutomateD365FOBlog"));
const D365FOModulesForIndianManufacturersBlog = lazy(() => import("./pages/blog/D365FOModulesForIndianManufacturersBlog"));

// Power Platform Pages
const PowerApps = lazy(() => import("./pages/Powerapps"));
const PowerAutomate = lazy(() => import("./pages/PowerAutomate"));
const PowerBI = lazy(() => import("./pages/PowerBI"));
const AIBuilder = lazy(() => import("./pages/AIBuilder"));

// Industry Pages
const D365Manufacturing = lazy(() => import("./pages/D365Manufacturing"));
const D365Distribution = lazy(() => import("./pages/D365Distribution"));
const D365Retail = lazy(() => import("./pages/D365Retail"));

// D365 Service Pages
const D365Development = lazy(() => import("./pages/D365Development"));
const D365CRM = lazy(() => import("./pages/D365CRM"));

const ExcelToPowerBIBlog = lazy(() => import("./pages/blog/ExceltopowerBI"));
const D365FOVsSAPVsOracleBlog = lazy(() => import("./pages/blog/D365FOVsSAPVsOracleBlog"));

// Calviq Landing Page (dedicated sub-app) — large, so definitely code-split
const CalviqApp = lazy(() => import("./calviq/CalviqApp"));

// StockLyte Landing Page (dedicated sub-app) — same treatment
const StockLyteApp = lazy(() => import("./stocklyte/StockLyteApp"));

// FarmYieldIQ Landing Page (dedicated sub-app) — same treatment
const FarmYieldIQApp = lazy(() => import("./farmyieldiq/FarmYieldIQApp"));

function PageLoadingFallback() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="h-10 w-10 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin" />
    </div>
  );
}

// Fades the outgoing page out and the incoming page in on every route
// change. `location` is passed to `Routes` explicitly (rather than letting
// it read the router's current location itself) so the outgoing route
// keeps rendering its old element during its exit animation instead of
// immediately switching to the new one.
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <Routes location={location}>

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
          path="/products/inventory-management"
          element={<InventoryManagement />}
        />

        <Route
          path="/products/farm-yield-iq"
          element={<FarmYieldIQ />}
        />

        {/* ---------------- IMPACGO ERP SUITE ---------------- */}
        <Route
          path="/erp/:slug"
          element={<ERPModuleDetail />}
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
        <Route
          path="/blog/power-apps-for-d365fo"
          element={<PowerAppsD365FOBlog />}
        />
        <Route 
  path="/blog/power-automate-for-d365fo" 
  element={<PowerAutomateD365FOBlog />} 
/>
<Route>
  <Route
    path="/blog/d365fo-modules-for-indian-manufacturers"
    element={<D365FOModulesForIndianManufacturersBlog />}
  />
</Route>
        {/* ---------------- CALVIQ LANDING PAGE ---------------- */}
        <Route
          path="/calviq/*"
          element={<CalviqApp />}
        />

        {/* ---------------- STOCKLYTE LANDING PAGE ---------------- */}
        <Route
          path="/stocklyte/*"
          element={<StockLyteApp />}
        />

        {/* ---------------- FARMYIELDIQ LANDING PAGE ---------------- */}
        <Route
          path="/farmyieldiq/*"
          element={<FarmYieldIQApp />}
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
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Suspense fallback={<PageLoadingFallback />}>
        <AnimatedRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;