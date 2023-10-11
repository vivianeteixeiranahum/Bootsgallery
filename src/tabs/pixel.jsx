import { Outlet } from 'react-router-dom';
import PageTitle from '../components/pageTitle';
import Image from '../components/image';

export default function Pixel() {
  document.title = 'Pixel Arts - BootsGallery'
  return (
  <div>
    <PageTitle title="Pixel Arts" subtitle="Menos pixels nãos significa menos beleza" background="https://upload.wikimedia.org/wikipedia/commons/a/a4/Isometric_Pixel_Art_by_Peterson_Freitas_%28enlarged%29.gif" />
    <section className='d-flex flex-row flex-wrap col-lg-12 col-xl-6 mx-auto justify-content-around'>
      <Image src="https://images6.alphacoders.com/900/900628.png" alt="Terra em pixel art" />
      <Image src="https://th.bing.com/th/id/R.5b102edcb0a45d00ff885d3239681b68?rik=hneqeqbVGNctkg&pid=ImgRaw&r=0" alt="Pixel Art Dark" />
      <Image src="https://i.pinimg.com/564x/f5/bc/6d/f5bc6dc7a56726fb2eb384ab16868319.jpg" alt="Campo verde, Imagem retirada Pinterest." />
      <Image src="https://i.pinimg.com/564x/b3/d8/d6/b3d8d64fd1f94bc83d3a443999904a7f.jpg" alt="Imagem de Patos, Imagem retirada Pinterest" />
      <Image src="https://th.bing.com/th/id/OIP.VK6qLi_opOt6_k4U6tWZTwHaHv?pid=ImgDet&rs=1" alt="Raposa em pixel art" />
      <Image src="https://th.bing.com/th/id/OIG.0Djv0x01Z61gaxYTdQW4?w=270&h=270&c=6&r=0&o=5&pid=ImgGn" alt="Arvores em pixel art" />
      <Image src="https://th.bing.com/th/id/R.1fca8263ffd7a02d4e7c4c903c79ab93?rik=Ae%2fAdVORqfV3GA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-X_Sb5GEH28M%2fU1VpT50H13I%2fAAAAAAAAVxk%2fQLeF2iiRmmg%2fs280%2fsuperman-2.jpg&ehk=uwQrEQFZobrqNDS9%2baheAiFRb9hbsfSXArZF9tC7BOs%3d&risl=&pid=ImgRaw&r=0" alt="SuperMan de pixel art" />
      <Image src="https://media.giphy.com/media/100wHe3VLsYnwA/giphy.gif" alt="Cidade em pixel art" />
      <Image src="https://th.bing.com/th/id/OIP.KJhU2uZ-3nB4kJdNWyCRAAHaEK?pid=ImgDet&rs=1" alt="Floresta em pixel art" />
      <Image src="https://i.pinimg.com/736x/1f/34/b2/1f34b27a923e7d80d070cb37522bde77.jpg" alt="Mulher de pixel art" />
      <Image src="https://img.freepik.com/vetores-gratis/ilustracao-de-comida-de-pixel-art-de-design-plano_23-2150212575.jpg?w=826&t=st=1696282094~exp=1696282694~hmac=186e523e1de05751d3086f1d711ad2e1c4e4e2196397d40a21de6fadaa065ca5" alt="Comidas deliciosas, Imagem de Freepik" />
      <Image src="https://img.freepik.com/vetores-gratis/elementos-de-pixel-art-de-dia-de-muertos_23-2149751225.jpg?w=1380&t=st=1696282692~exp=1696283292~hmac=4b6eab9ba5d4ba1bc3684ac40a5f5770b7a745a8e58a73babe95ea8d7e8a67fa" alt="Plantas verdinhas, imagem de Freepik." />
      <Image src="https://img.freepik.com/vetores-gratis/mundo-de-jogo-de-arcade-e-cena-de-pixel_24640-45908.jpg?w=1380&t=st=1696281827~exp=1696282427~hmac=02cfaad344524ce3fb8c54285ac36163ee61539abe699e92b29758dbb8c19604" alt="montanhas nevadas em um campo verdejante, Imagem de stockgiu no Freepik" />
      <Image src="https://th.bing.com/th/id/OIP.SUnUCxXtRbGRWwzk1iCUnwHaEo?pid=ImgDet&rs=1" alt="Ceu e mar em pixel Art" />
    </section>
  <Outlet />
</div>
  )
}