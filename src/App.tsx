import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/default-layout/defaultLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element="" />
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
