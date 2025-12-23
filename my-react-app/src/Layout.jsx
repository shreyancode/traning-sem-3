// Layout.jsx
import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
      
     
<Navbar>

</Navbar>
      
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Outlet />
      </main>

   <Footer>
    
   </Footer>
    </>
  );
}

export default Layout;
