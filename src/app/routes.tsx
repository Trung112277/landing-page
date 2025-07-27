import React from 'react';

const Home = React.lazy(() => import('../pages/Home').then(module => ({ default: module.Home })));
const ErrorPage = React.lazy(() => import('../pages/ErrorPage').then(module => ({ default: module.ErrorPage })));

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/404",
    element: <ErrorPage errorCode="404" errorTitle="Page Not Found" />,
  },
  {
    path: "/500",
    element: <ErrorPage errorCode="500" errorTitle="Server Error" />,
  },
  {
    path: "/403",
    element: <ErrorPage errorCode="403" errorTitle="Access Forbidden" />,
  },
  {
    path: "/401",
    element: <ErrorPage errorCode="401" errorTitle="Unauthorized" />,
  },
  {
    path: "*",
    element: <ErrorPage errorCode="404" errorTitle="Page Not Found" />,
  },
];

export const lazyComponents = {
  Home,
  ErrorPage,
}; 