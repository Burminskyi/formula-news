import { Route, Routes, useSearchParams } from "react-router-dom";
import { SharedLayout } from "./components/Sharedlayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPagge/ErrorPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getNewsByHeadersThunk,
  getTopNewsThunk,
} from "./redux/News/operations";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import { selectPage, selectRowsPerPage } from "./redux/News/selectors";

export const App = () => {
  const page = useSelector(selectPage);
  const rowsPerPage = useSelector(selectRowsPerPage);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const queryParam = searchParams.get("query");
    const countryParam = searchParams.get("country");
    const categoryyParam = searchParams.get("category");
  
    if (!rowsPerPage || queryParam) return;
  
    if (countryParam || categoryyParam) {
      dispatch(getTopNewsThunk({
        selectedCountryCode: countryParam || undefined,
        selectedCategory: categoryyParam || undefined,
        rowsPerPage,
        page
      }));
    } else {
      dispatch(getTopNewsThunk({ rowsPerPage, page }));
    }
  }, [dispatch, page, rowsPerPage, searchParams]);
  

  useEffect(() => {
    const queryParam = searchParams.get("query");

    if (queryParam) {
      dispatch(
        getNewsByHeadersThunk({
          query: queryParam,
          rowsPerPage,
          page,
        })
      );
    }
  }, [dispatch, page, rowsPerPage, searchParams]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="article/:id" element={<ArticlePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
