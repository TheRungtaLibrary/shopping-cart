import React, { useEffect } from 'react';
import './Header.css';
import ShoppingContext from '../../contexts/ShoppingContext';
import {Badge, Navbar, Nav, Container, Button} from 'react-bootstrap';

const Header = (props) => {
  const shoppingContext = React.useContext(ShoppingContext);

    useEffect( () => {
      shoppingContext.getProducts();
    }, [shoppingContext]);

    return (
      <Container>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="">Top-5 Products</Nav.Link>
            <Nav.Link href="cart">
              <span>Your Cart &nbsp;</span>
            </Nav.Link>
            <Button>
              <Badge variant="light">{props.cart.length}</Badge>
            </Button>
          </Nav>
        </Navbar>
      </Container>
    );
}

export default Header;