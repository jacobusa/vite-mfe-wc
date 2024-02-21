import { lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Dashboard = lazy(() =>
  import("./components/Dashboard.tsx").then(({ Dashboard }) => ({
    default: Dashboard,
  }))
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/" element={<>adsf</>} />
          {/* <Route path="vue" element={<VueApp />} />
          <Route path="angular" element={<AngularApp />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
