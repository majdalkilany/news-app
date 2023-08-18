import { Outlet } from 'react-router-dom';

export default function Rootlayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
