import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense, lazy } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import NavBar from "./layout/NavBar";
import Spinner from "react-bootstrap/Spinner";
const AboutMeView = lazy(() => import("./views/AboutMeView"));
const MangaMangaAppView = lazy(() => import("./views/MangaMangaAppView"))
const NotClassFinderView = lazy(() => import("./views/NotClassFinderView"))
const OnlineBookStoreView = lazy(() => import("./views/OnlineBookStoreView"))
const HauntingOfWilsonGameView = lazy(() => import("./views/HauntingOfWilsonGameView"))
const UshMicroshellProjectView = lazy(() => import("./views/UshMicroshellProjectView"))
const DeadwoodGameView = lazy(() => import("./views/DeadwoodGameView"))

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigation />}>
          <Route
            exact path ="/"
            element={
              <Suspense fallback={<Loading />}>
                <AboutMeView />
              </Suspense>
            }
          />
          <Route
            exact path="/MangaMangaApp"
            element={
              <Suspense fallback={<Loading />}>
                <MangaMangaAppView />
              </Suspense>
            }
            component={MangaMangaAppView}
          />
          <Route
            exact path="/NotClassFinder"
            element={
              <Suspense fallback={<Loading />}>
                <NotClassFinderView />
              </Suspense>
            }
          />
          <Route
            exact path="/OnlineBookStore"
            element={
              <Suspense fallback={<Loading />}>
                <OnlineBookStoreView />
              </Suspense>
            }
          />
          <Route
            exact path="/HauntingOfWilsonGame"
            element={
              <Suspense fallback={<Loading />}>
                <HauntingOfWilsonGameView />
              </Suspense>
            }
          />
          <Route
            exact path="/UshMicroshellProject"
            element={
              <Suspense fallback={<Loading />}>
                <UshMicroshellProjectView />
              </Suspense>
            }
          />
          <Route
            exact path="/DeadwoodGame"
            element={
              <Suspense fallback={<Loading />}>
                <DeadwoodGameView />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

const Navigation = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

const Loading = () => {
  return (
    <div className="App">
      <Spinner animation="border" />
    </div>
  );
};

export default App;
