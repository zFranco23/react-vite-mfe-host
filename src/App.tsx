import { lazy, Suspense } from "react";

// @ts-expect-error intented mfe errror
const ShowCasePage = lazy(() => import("MFE_1/Showcase"));

const App = () => {
  return (
    <div>
      <h1 className="text-bold text-3xl">Mfe host app</h1>
      <p className="text-lg">This is the boilerplate of mfe-host</p>

      <Suspense fallback={<div>Loading...</div>}>
        <ShowCasePage />
      </Suspense>
    </div>
  );
};

export default App;
