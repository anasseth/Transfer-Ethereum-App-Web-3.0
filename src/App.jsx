import { useState } from "react";
import {
  Navbar,
  Home,
  Navbar,
  Footer,
  Services,
  Transactions,
} from "./Components/index";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Home />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
