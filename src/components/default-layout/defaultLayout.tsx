import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { PageContainer } from "../page-container/pageContainer";

export const DefaultLayout = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
    </div>
  );
};