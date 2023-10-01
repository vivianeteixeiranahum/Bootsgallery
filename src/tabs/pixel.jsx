import { Outlet } from 'react-router-dom';
import PageTitle from '../components/pageTitle';

export default function Pixel() {
  return (
  <div>
    <PageTitle title="Pixel Arts" subtitle="Menos pixels nãos significa menos beleza" background="https://upload.wikimedia.org/wikipedia/commons/a/a4/Isometric_Pixel_Art_by_Peterson_Freitas_%28enlarged%29.gif" />
  <Outlet />
</div>
  )
}