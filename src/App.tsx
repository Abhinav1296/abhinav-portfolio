import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import { LoadingProvider } from "./context/LoadingProvider";

// Import the ScrollToTop component
import ScrollToTop from "./components/ScrollToTop"; 

// Lazy load components
const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const MyWorks = lazy(() => import("./pages/MyWorks"));
const AllCertificates = lazy(() => import("./pages/AllCertificates"));

const App = () => {
  return (
    <BrowserRouter>
      {/* ✅ ADD THIS LINE RIGHT HERE */}
      <ScrollToTop />
      
      <LoadingProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MainContainer>
                  <Suspense fallback={null}>
                    <CharacterModel />
                  </Suspense>
                </MainContainer>
              </Suspense>
            }
          />
          
          <Route
            path="/myworks"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MyWorks />
              </Suspense>
            }
          />

          <Route
            path="/certificates"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AllCertificates />
              </Suspense>
            }
          />
        </Routes>
      </LoadingProvider>
      <Analytics />
    </BrowserRouter>
  );
};

export default App;