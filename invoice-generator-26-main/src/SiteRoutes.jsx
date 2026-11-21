// import { Route, Routes } from "react-router";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CreateInvoice from "./pages/CreateInvoice";
import MyInvoices from "./pages/MyInvoices";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Profile from "./pages/Profile";
import InvoiceDetail from "./pages/InvoiceDetail";

const SiteRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />}></Route> */}
      {/* <Route path="/" element={<Home />}>
        <Route index element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Route> */}
      <Route path="/" element={<Home />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/register" element={<Register />} ></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/create-invoice" element={<CreateInvoice />}></Route>
      <Route path="/my-invoices" element={<MyInvoices />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/contact-us" element={<Contact />}></Route>
      <Route path="/invoices/:id" element={<InvoiceDetail />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
      {/* <Route path="/auth-login" element={<Login />}></Route> */}
      {/* <Route path="/auth-register" element={<Register />}></Route> */}
    </Routes>
  );
};

export default SiteRoutes;
