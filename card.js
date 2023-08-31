
import Card from 'react-bootstrap/Card';
import './card.css';
import From1 from './form';


import Footer from "./footer";
import { useNavigate } from 'react-router-dom';
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"/>
function BasicExample() {
    const nevigate=useNavigate()
    function goto(){
      nevigate("/From1")
    }
  return (<div >
    <br></br>
    <div className='col d-flex justify-content-center p-4'>
        <div class='row d-flex justify-content-center  mr-2'>
     
    
   
    <Card style={{ width: '18rem', }}>
      <Card.Img variant="top" src="image/swat.JPG" />
      <Card.Body>
        <Card.Title>Kurmat Trip</Card.Title>
        <Card.Text>
        kurmat is a former princely state and one of the ten districts of Gilgit-Baltistan, Pakistan. 
        </Card.Text>
        <button onClick={goto}>Select trip</button>
       
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="image/aaa.jpg" />
      <Card.Body>
        <Card.Title>Swat Trip</Card.Title>
        <Card.Text>
        swat is a former princely state and one of the ten districts of Gilgit-Baltistan, Pakistan. 
        </Card.Text>
        <button onClick={goto}>Select trip</button>
      
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="image/ali.jpg" />
      <Card.Body>
        <Card.Title>Kashmir Trip</Card.Title>
        <Card.Text>
        Kashmir is a former princely state and one of the ten districts of Gilgit-Baltistan, Pakistan. 
        </Card.Text>
        <button onClick={goto}>Select trip</button>
       
      </Card.Body>
    </Card>
    </div>
    </div>
    <Footer/>
    </div>
  );
}

export default BasicExample;