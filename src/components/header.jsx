import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" variant='dark' className="bg-dark px-3">
        <Navbar.Brand href="/">BootsGallery</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-grow-1">
            <Nav.Link as={NavLink} to="/aquarela" href="aquarela" activeclassname="active">Aquarela</Nav.Link>
            <Nav.Link as={NavLink} to="/pixel" href="pixel" activeclassname="active">Pixel Arts</Nav.Link>
            <Nav.Link as={NavLink} to="/pics"  href="pics" activeclassname="active">Fotografias</Nav.Link>
            <Nav.Link as={NavLink} to="/releitura"  href="releitura" activeclassname="active">Releituras</Nav.Link>
          </Nav>
          <Nav className='justify-content-end'>
            <Nav.Link disabled>Olhe, Aprecie, Inspire-se!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}
