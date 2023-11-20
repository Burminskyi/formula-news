import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Loader } from "../Loader/Loader";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import { StyledContent, StyledLayout } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <StyledLayout>
      <Header />
      <StyledContent>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </StyledContent>
      <Footer />
    </StyledLayout>
  );
};
