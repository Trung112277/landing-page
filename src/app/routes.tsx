import React from 'react';

const Home = React.lazy(() => import('../pages/Home').then(module => ({ default: module.Home })));
export const routes = [
  {
    path: "/",
    element: <Home />,
  },
];

export const lazyComponents = {
  Home,
}; 