import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Home from "./Pages/home";
import Layout from "./Components/Layout";
import PrimaryNav from "./Components/Layout";

function App() {
  return (
    <>
      <Layout />
      <PrimaryNav />
    </>
  );
}

export default App;
