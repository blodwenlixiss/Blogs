import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/default-layout/defaultLayout";
import { Articles } from "./pages/home/components/card";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";

function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Articles />} />
          <Route path="/about" element="" />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
