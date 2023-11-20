import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/Sharedlayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPagge/ErrorPage";


export const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="favorites" element={<Favorites />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

