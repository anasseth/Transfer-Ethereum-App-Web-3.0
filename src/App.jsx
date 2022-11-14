import { useState } from "react";
import {
  Navbar,
  Header,
  Home,
  Footer,
  Services,
  Transactions,
} from "./Components/index";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        {/* <Navbar /> */}
        <Header />
        <Home />
      </div>
      {/* <Services /> */}
      {/* <Transactions /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
