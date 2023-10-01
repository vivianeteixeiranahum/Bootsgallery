import { Outlet } from 'react-router-dom';
import PageTitle from '../components/pageTitle';

export default function Pics() {
  return (
  <div>
    <PageTitle title="Fotografias" subtitle="O mundo é a mais bela arte a nossa volta" background="https://upload.wikimedia.org/wikipedia/commons/8/81/Parque_Eagle_River%2C_Anchorage%2C_Alaska%2C_Estados_Unidos%2C_2017-09-01%2C_DD_02.jpg" />
  <Outlet />
</div>
  )
}