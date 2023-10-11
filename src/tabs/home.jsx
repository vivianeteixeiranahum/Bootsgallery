import { Outlet } from "react-router-dom";
import RedirectButton from "../components/redirectButton";
import bsImage from "../assets/bs.png";
import PageTitle from "../components/pageTitle";

export default function Home() {
  document.title = "BootsGallery";
  return (
    <div style={{
      backgroundImage: `url(${bsImage})`,
    }}>
      <PageTitle title="BootsGallery" subtitle="A BootsGallery é um site responsivo feito em React e Bootstrap com o intuito de mostrar imagens para o usuário que está a procura de inspiração" />
      <h3 className="text-center mt-3">Escolha um dos nossos temas!</h3>
      <div className="d-flex flex-column flex-sm-row">
        <RedirectButton
          to="../aquarela"
          name="Aquarela"
          image="https://www.publicdomainpictures.net/pictures/470000/nahled/aquarell-textur-hintergrund-kunst-1664627177yqb.jpg"
        />
        <RedirectButton
          to="../pixel"
          name="Pixel Arts"
          image="https://upload.wikimedia.org/wikipedia/commons/a/a4/Isometric_Pixel_Art_by_Peterson_Freitas_%28enlarged%29.gif"
        />
        <RedirectButton
          to="../pics"
          name="Fotografias"
          image="https://upload.wikimedia.org/wikipedia/commons/8/81/Parque_Eagle_River%2C_Anchorage%2C_Alaska%2C_Estados_Unidos%2C_2017-09-01%2C_DD_02.jpg"
        />
        <RedirectButton
          to="../releitura"
          name="Releituras"
          image="https://i.pinimg.com/736x/d4/b5/c4/d4b5c4b0aabc56facac1880575ad1356.jpg" 
        />
      </div>
      <Outlet />
    </div>
  );
}
