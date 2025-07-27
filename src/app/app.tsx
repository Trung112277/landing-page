import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/components/layout/Main-layout';
import { LoadingScreen } from '@/components/common/loading-screen/loading-screen';
import { usePageLoading } from '@/hooks/usePageLoading';
import { routes } from './routes';

export function App() {
  const { isLoading, loadingKey } = usePageLoading();

  return (
    <>
      <Suspense fallback={<LoadingScreen isLoading={true} loadingKey={loadingKey} />}>
        <Routes>
          <Route element={<MainLayout />}>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
      <LoadingScreen isLoading={isLoading} loadingKey={loadingKey} />
    </>
  );
}

export default App;
