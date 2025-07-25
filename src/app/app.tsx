import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { MainLayout } from '@/components/layout/Main-layout';

export function App() {
  return (
    <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
    </Route>
  </Routes>
  );
}

export default App;
