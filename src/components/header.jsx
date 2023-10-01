import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" variant='dark' className="bg-dark px-3">
        <Navbar.Brand href="home">BootsGallery</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-grow-1">
            <Nav.Link href="aquarela">Aquarela</Nav.Link>
            <Nav.Link href="pixel">Pixel Arts</Nav.Link>
            <Nav.Link href="pics">Fotografias</Nav.Link>
          </Nav>
          <Nav className='justify-content-end'>
            <Nav.Link disabled>Olhe, Aprecie, Inspire-se!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}
