import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";
import Pricing from "../pages/Pricing/Pricing";
import Services from "../pages/Services/Services";
import SignIn from "../pages/SignIn";
import SingUP from "../pages/SingUP";
import Team from "../pages/Team";

export const publicRoutes = [
  {path:"/", Comment:Home},
  {path:"/services", Comment:Services},
  {path:"/pricing", Comment:Pricing},
  {path:"/team", Comment:Team},
  {path:"/about", Comment:About},
  {path:"/contact", Comment:Contact},
  {path:"/sign-in", Comment:SignIn},
  {path:"/sing-up", Comment:SingUP},
  {path:"*",Comment:NotFound},
]