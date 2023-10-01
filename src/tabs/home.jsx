import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
  <div>
  <h1>Home Screen</h1>
  <Outlet />
</div>
  )
}