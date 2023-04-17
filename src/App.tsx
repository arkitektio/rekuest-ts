import { useState } from "react";
import "./App.css";
import { FaktsProvider, FaktsGuard, useFakts } from "@jhnnsrs/fakts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Callback } from "./contrib/Callback";
import { NoFakts } from "./NoFakts";
import { NoHerre } from "./NoHerre";
import { HerreGuard, HerreProvider, useHerre } from "@jhnnsrs/herre";
import { RekuestGuard, RekuestProvider, withRekuest } from "./rekuest";
import { MikroAutoConfigure } from "./contrib/MikroAutoConfigure";
import { NoMikro } from "./NoMikro";

export const ProtectedApp = () => {
  return (
    <HerreGuard fallback={<NoHerre />}>
      <RekuestProvider>
        <MikroAutoConfigure />
        <RekuestGuard fallback={<NoMikro />}>Hallo</RekuestGuard>
      </RekuestProvider>
    </HerreGuard>
  );
};

function App() {
  const [count, setCount] = useState(0);

  const doRedirect = (url: string) => {
    console.log("Redirecting to", url);
    window.location.replace(url);
  };

  return (
    <div className="App">
      <FaktsProvider>
        <FaktsGuard fallback={<NoFakts />}>
          <HerreProvider>
            <Router>
              <Routes>
                <Route path="/" element={<ProtectedApp />} />
                <Route path="/callback" element={<Callback />} />
              </Routes>
            </Router>
          </HerreProvider>
        </FaktsGuard>
      </FaktsProvider>
    </div>
  );
}

export default App;
