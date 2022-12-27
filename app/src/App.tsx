import React from 'react';
import {Menu, Image } from 'antd';
import logo from './photo_2022-08-10_00-03-41.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div className="App">
  
     
      <Navbar bg="dark" variant="dark" style={{height: '150px'}}>
        <Container className="justify-content-between">   
          <Navbar.Brand href="#home" >
            <img
              alt=""
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
              style={{borderRadius: '50px'}}
            />{' '}
            
          </Navbar.Brand>
          <Navbar.Brand  >
          KamazEdition
          </Navbar.Brand>
          <Navbar.Brand>
       
            <Button style={{marginRight: '20px'}}>Войти</Button>
            <Button style={{marginRight: '20px'}}>Зарегистрироваться</Button>
          
        </Navbar.Brand>
        </Container>
      </Navbar>

        
        
    </div>
  );
}

export default App;
