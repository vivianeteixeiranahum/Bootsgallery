import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../components/body";
import Home from "../tabs/home";
import Aquarela from "../tabs/aquarela";
import Pixel from "../tabs/pixel";
import Pics from "../tabs/pics";

export default function RoutesRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />} path="/">
          <Route element={<Home />} path="/" index />
          <Route element={<Aquarela />} path="/aquarela" />
          <Route element={<Pixel />} path="/pixel" />
          <Route element={<Pics />} path="/pics" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}