import SplashScreen from "@/layouts/SplashScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";

const queryClient = new QueryClient();

function App() {
  const Router = lazy(() => import("./app/routes/Router"));

  return (
    <Suspense fallback={<SplashScreen />}>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen h-auto dark:bg-black">
          <Router />
        </div>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
