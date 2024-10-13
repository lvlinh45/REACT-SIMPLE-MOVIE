import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Main from "./component/layout/Main";
import HomePage from "./pages/HomePage";
import Banner from "./component/banner/Banner";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
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
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
