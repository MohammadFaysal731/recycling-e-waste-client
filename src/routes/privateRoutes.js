import PricingDetail from "../pages/Pricing/PricingDetail";
import ServiceDetail from "../pages/Services/ServiceDetail";


export const privateRoutes = [
  { path: "/services/:id", Comment: ServiceDetail },
  { path: "/pricing/:id", Comment: PricingDetail },
];
