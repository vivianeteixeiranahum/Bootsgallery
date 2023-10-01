import { Outlet } from "react-router-dom";
import RedirectButton from "../components/redirectButton";
import bsImage from "../assets/bs.png";

export default function Home() {
  return (
    <div style={{
      backgroundImage: `url(${bsImage})`,
    }}>
      <div
        style={{
          height: "50vh",
          backgroundImage:
            `linear-gradient(rgba(33,37,41,1), rgba(33,37,41,0.8), rgba(33,37,41,0.0))`,
            backgroundPosition: "center",
        }}
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <h1 className="text-light">BootsGallery</h1>
        <i className="text-light">Olhe, Aprecie, Inspire-se!</i>
      </div>
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
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3CDbIDGJKLZpwMwIjzzr7TJ2mbHULVdw1w&usqp=CAU"
        />
      </div>
      <Outlet />
    </div>
  );
}
