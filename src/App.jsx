import { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Main from "./component/layout/Main";
import Banner from "./component/banner/Banner";
import MoviePageLoadMore from "./pages/MoviePageLoadMore";
import NotFound from "./component/notFound/NotFound";
// import HomePage from "./pages/HomePage";
// import MoviePage from "./pages/MoviePage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";

// dynamic imports
const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));

function App() {
  return (
    <Suspense fallback={<></>}>
      <Fragment>
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <>
                  <Banner></Banner>
                  <HomePage></HomePage>
                </>
              }
            ></Route>
            <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
            <Route
              path="/movies/:movieId"
              element={<MovieDetailsPage></MovieDetailsPage>}
            ></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Route>
        </Routes>
      </Fragment>
    </Suspense>
  );
}

export default App;
