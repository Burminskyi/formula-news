import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/Sharedlayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPagge/ErrorPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTopNewsThunk } from "./redux/News/operations";


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopNewsThunk());
  }, []);

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

