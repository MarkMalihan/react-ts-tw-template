import SplashScreen from "@/layouts/SplashScreen";
import { lazy, Suspense } from "react";

function App() {
  const Router = lazy(() => import("./app/routes/Router"));

  return (
    <Suspense fallback={<SplashScreen />}>
      <div className="min-h-screen h-auto dark:bg-black">
        <Router />
      </div>
    </Suspense>
  );
}

export default App;
