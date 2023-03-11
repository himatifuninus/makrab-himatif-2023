import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Router from "./router";
import MainLayout from "./layouts/MainLayout";
import ContentLayout from "./layouts/ContentLayout";
import Error from "./components/Error";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <MainLayout>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <ErrorBoundary fallback={<Error />}>
          <Suspense fallback={<Loading />}>
            <ContentLayout>
              <Router />
            </ContentLayout>
          </Suspense>
        </ErrorBoundary>
      </Suspense>
    </MainLayout>
  );
};

export default App;
