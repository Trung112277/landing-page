import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
    <>
      <Header />
      <main className="mt-[60px] md:mt-[80px] min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
