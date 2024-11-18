import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/default-layout/defaultLayout";
import { Articles } from "./pages/home/components/card";

function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Articles />} />
          <Route path="/about" element="" />
          <Route path="/login" element="" />
          <Route path="/register" element="" />
        </Route>
        <Route path="*" element={<span>not found</span>} />
      </Routes>
    </>
  );
}

export default App;
