import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Table from './components/table/Table';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Table /> }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;