import  ReactDOM  from 'react-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import ContactsUs from './ContactsUs';
import About from './About';
import From1 from './form';
import{
  BrowserRouter,
  Routes,
  Route,
  Link,
  Router
} from "react-router-dom";
function App(){
  return(
<BrowserRouter>
    
    <div className="App">
      <>
      <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="#home">Burhantours</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
           
            <Nav.Link as={Link} to="/ContactUs">ContactsUs</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    
      </>
      <div>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="About" element={<About/>}/>
          
          <Route path="ContactUs" element={<ContactsUs/>}/>
          <Route path='/From1' element={<From1/>}/>
        </Routes>
      </div>
  
        
    </div>
    </BrowserRouter>
  );
}

export default App;