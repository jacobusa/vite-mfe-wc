import { lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Dashboard } from "./components/Dashboard";

const Dashboard = lazy(() =>
  import("./components/Dashboard.tsx").then(({ Dashboard }) => ({
    default: Dashboard,
  }))
);
function App() {
  // const Dashboard = React.lazy(() => import("./components/Dashboard.tsx"));
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/hey"
            // Component={() => import("../views/Product.vue")}
            // element={<react-app></react-app>}
            // element={<div>hey</div>}
            element={<Dashboard />}
            // loader={}
          />
          <Route path="/" element={<>adsf</>} />
          {/* <Route path="vue" element={<VueApp />} />
          <Route path="angular" element={<AngularApp />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
