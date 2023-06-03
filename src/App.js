import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/home/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Tweets = lazy(() => import('./pages/tweets/Tweets'));
const SharedLayout = lazy(() => import('./components/sharedLayout/SharedLayout'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </Suspense>
  );
}

export default App;








