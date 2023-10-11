import { Outlet } from 'react-router-dom';
import PageTitle from '../components/pageTitle';
import Image from '../components/image';

export default function Aquarela() {
  document.title = "Aquarelas - BootsGallery"
  return (
  <div>
    <PageTitle title="Aquarelas" subtitle="Encontre fluidez na arte" background="https://www.publicdomainpictures.net/pictures/470000/nahled/aquarell-textur-hintergrund-kunst-1664627177yqb.jpg" />
    <section className='d-flex flex-row flex-wrap col-lg-12 col-xl-6 mx-auto justify-content-around'>
      <Image src="https://1.bp.blogspot.com/-SeHbZtoE2iY/UUk6-Pwv36I/AAAAAAAAARE/s6r8d0SC41I/s1600/Borboleta.jpg" alt="Borboleta de aquarela com uma flor" />
      <Image src="https://th.bing.com/th/id/OIP.B8LNvE4IHsAAtLXNUIsnRwAAAA?pid=ImgDet&rs=1" alt="Desenho de Papagaio em aquarela" />
      <Image src="https://i.pinimg.com/originals/0d/1f/48/0d1f48560f8a52dbadfe03908bc1e40f.jpg" alt="Passaro de aquarela" />
      <Image src="https://1.bp.blogspot.com/-Q0jQbTFUrU0/TnOZWh9msnI/AAAAAAAAAPk/_D-Pr2fJFsY/s1600/watercolor+painting+sketch+%25283%2529.jpg" alt="Paisagem em aquarela" />
      <Image src="https://i.pinimg.com/originals/0e/ec/a4/0eeca48e708e77b39968cbd71a86c23e.jpg" alt="Flores De aquarela" />
      <Image src="https://i.pinimg.com/originals/65/6a/be/656abe59aaf733f97d24fa22a819caf8.jpg" alt="Pequeno Principe em Aquarela" />
      <Image src="https://th.bing.com/th/id/R.470383022a9545d742d7dbcecd2f276a?rik=KfAkePAqMN1%2f2A&pid=ImgRaw&r=0" alt="Elefante de Aquarela" />
      <Image src="https://i.pinimg.com/originals/41/45/42/414542feb24d7bb863e88234d7f0fc42.jpg" alt="Mulher em aquarela" />
      <Image src="https://i.pinimg.com/originals/0c/59/8c/0c598ca884f2a436d40b2e59f9b8bc5f.jpg" alt="Paisagem em aquarela" />
      <Image src="https://th.bing.com/th/id/R.626c07b5de82315263e71ac28db7dfef?rik=hCH%2fnBSa15Q6Kg&riu=http%3a%2f%2fimg.elo7.com.br%2fproduct%2foriginal%2f976C9C%2faquarelas-de-girassol-pinturas.jpg&ehk=zhBQeHSL7viNlzn3s4GAOXxh0BQQuIABgZpuCypyFOE%3d&risl=&pid=ImgRaw&r=0" alt="Girsassol em Aquarela" />
      <Image src="https://1.bp.blogspot.com/-cskBTA78940/TVptLtaBAnI/AAAAAAAAAKs/JCurDmHm80k/s1600/barcos.jpg" alt="Lago de Aquarela" />
      <Image src="https://i.pinimg.com/originals/89/f3/bd/89f3bddce6c11b3cf4a1be82f881f68d.jpg" alt="Gato em Aquarela" />
      <Image src="https://th.bing.com/th/id/OIP.6Km0FhYSz-rk9Y8xzND-CQHaFP?pid=ImgDet&rs=1" alt="Florestas em Aquarelas" />
    </section>

  <Outlet />
</div>
  )
}