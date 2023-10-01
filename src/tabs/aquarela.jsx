import { Outlet } from 'react-router-dom';
import PageTitle from '../components/pageTitle';

export default function Aquarela() {
  return (
  <div>
    <PageTitle title="Aquarelas" subtitle="Encontre fluidez na arte" background="https://www.publicdomainpictures.net/pictures/470000/nahled/aquarell-textur-hintergrund-kunst-1664627177yqb.jpg" />
  <Outlet />
</div>
  )
}