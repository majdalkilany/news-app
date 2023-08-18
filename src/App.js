import {
  Route, RouterProvider, createBrowserRouter, createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
import Rootlayout from './layout/Rootlayout';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  const router = createBrowserRouter((createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path="details/:title" element={<Details />} />
    </Route>,

  )));
  return (
    <RouterProvider router={router} />
  );
}

export default App;
