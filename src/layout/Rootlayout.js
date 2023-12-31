import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Rootlayout() {
  return (
    <div className="root-layout">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
