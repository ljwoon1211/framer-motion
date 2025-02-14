import App from "./App";
import { createBrowserRouter } from 'react-router-dom';

import { lazy,Suspense } from "react";
import React from "react";
// const ToDoList = lazy(() => import('./components/ToDoList'));

// const Categories = lazy(() => import('./pages/Categories'));
// const Coins = lazy(() => import('./pages/Coins'));
// const Coin = lazy(() => import('./pages/Coin'));
// const Chart = lazy(() => import('./pages/Chart'));
// const Price = lazy(() => import('./pages/Price'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   {
    //     path: "",
    //     element: (
    //       <Suspense fallback={<div>Loading...</div>}>
    //         {/* <ToDoList /> */}
    //       </Suspense>
    //     )
    //   },
    // ]
  },
    //   {
    //     path: "btc/:coinId",
    //     element: (
    //       <Suspense fallback={<div>Loading...</div>}>
    //         <Coin />
    //       </Suspense>
    //     ),
    //     children: [
    //       {
    //         path: "chart",
    //         element: (
    //           <Suspense fallback={<div>Loading...</div>}>
    //             <Chart />
    //           </Suspense>
    //         ),
    //       },
    //       {
    //         path: "price",
    //         element: (
    //           <Suspense fallback={<div>Loading...</div>}>
    //             <Price />
    //           </Suspense>
    //         ),
    //       },
    //     ],
    //   },
    ]
);

export default router;