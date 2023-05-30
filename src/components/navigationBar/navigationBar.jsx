import { Container, Nav, Navbar, Form } from 'react-bootstrap'

import "./navigationBar.css"

const NavigationBar = () => {
  return (
    <Navbar bg="primary" expand="lg" className='navigation-bar-container'>
      <Container>
        <Navbar.Brand href="#home" className='navigation-bar-title'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-film" viewBox="0 0 16 16">
          <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
        </svg> <div className='navigation-bar-title-text'>Film Library</div> </Navbar.Brand>
        <Nav className="navigation-bar-form">
          <Form>
            <Form.Control type="search" placeholder="search" className="navigation-bar-search" />
          </Form>
        </Nav>
        <Nav>
          <Nav.Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" color="white">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar