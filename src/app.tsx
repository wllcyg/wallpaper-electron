import * as ReactDOM from 'react-dom/client';
import React, { Suspense } from 'react';
import './index.css';
import router from '@/render/router';
import { RouterProvider } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('app')).render(
  <Suspense>
    <RouterProvider router={router}/>
  </Suspense>
);
