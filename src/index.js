import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Home from './pages/Home';
import SuperHeroes from './pages/SuperHeroes';
import RQSuperHeroes from './pages/RQSuperHeroes';
import RQSuperHero from './pages/RQSuperHero';
import ParallelQueries from './pages/ParallelQueries';
import DynamicParallel from './pages/DynamicParallel';
import DependentQueries from './pages/DependentQueries';
import PaginatedQueries from './pages/PaginatedQueries';
import InfiniteQueries from './pages/InfiniteQueries';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='/super-heroes' element={<SuperHeroes />} />
      <Route path='/rq-super-heroes' element={<RQSuperHeroes />} />
      <Route path='/rq-super-heroes/:heroId' element={<RQSuperHero />} />
      <Route path='/rq-parallel' element={<ParallelQueries />} />
      <Route
        path='/rq-dynamic-parallel'
        element={<DynamicParallel heroIds={[1, 3]} />}
      />
      <Route
        path='/rq-dependent'
        element={<DependentQueries email='doyu@example.com' />}
      />
      <Route path='rq-paginated' element={<PaginatedQueries />} />
      <Route path='rq-infinite' element={<InfiniteQueries />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
