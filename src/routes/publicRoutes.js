import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";
import Pricing from "../pages/Pricing";
import Services from "../pages/Services";
import Team from "../pages/Team";

export const publicRoutes = [
  {path:"/", Comment:Home},
  {path:"/services", Comment:Services},
  {path:"/pricing", Comment:Pricing},
  {path:"/team", Comment:Team},
  {path:"/about", Comment:About},
  {path:"/contact", Comment:Contact},
  {path:"*",Comment:NotFound},
]