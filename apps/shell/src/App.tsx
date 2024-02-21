import { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouteManager } from "./components/RouteManager.tsx";
import { Home } from "./components/Home.tsx";

const Dashboard = lazy(() =>
  import("./components/Dashboard.tsx").then(({ Dashboard }) => ({
    default: Dashboard,
  }))
);

const VuePage = lazy(() =>
  import("./components/VuePage.tsx").then(({ VuePage }) => ({
    default: VuePage,
  }))
);

function App() {
  return (
    <>
      <BrowserRouter>
        <RouteManager />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <Suspense>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/vue"
            element={
              <Suspense>
                <VuePage />
              </Suspense>
            }
          />
          {/* <Route path="vue" element={<VueApp />} />
          <Route path="angular" element={<AngularApp />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
