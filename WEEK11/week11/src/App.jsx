
import './App.css'
import { Nav, Navbar } from 'react-bootstrap';

function App() {

  return (
    <>
      <header className='App_header custom-fixed-top'>
        <Navbar.Brand href="#home">CMRIT</Navbar.Brand>
        <Nav className="custom-nav">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#register">Register</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#events">Events</Nav.Link>
          <Nav.Link href="#clubs">Clubs</Nav.Link>
          <Nav.Link href="#gallery">Gallery</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </header>
    </>
  )
}

export default App
