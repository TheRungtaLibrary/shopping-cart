import React from 'react';
import {Card, Button, Container, Row, Col} from 'react-bootstrap'
import './ProductList.css';
import CartContext from '../../contexts/ShoppingContext';

const ProductList = (props) => {
  const cartContext = React.useContext(CartContext);

  /**
   * Adds item to cart
   * @param product 
   */
  const addItem = (product) => {
    cartContext.updateCart(product);
  }

  return (
    <Container>
      <Row>
      {
        props.products.map((product, index) => (
          <Col xs="12" sm="4" key={index}>
            <Card w-100>
              <Card.Img variant="top" src={product.image? product.image:"holder.js/100px180"} loading="lazy" />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.description}
                  Unit Price: {product.unitPrice}
                  <br />
                  Units in stock: {product.unitsInStock}
                </Card.Text>
                <Button variant="primary" onClick={()=>addItem(product)} id={product.productID}>+</Button>
              </Card.Body>
            </Card>
          </Col>
        )
        )}
      </Row>
    </Container>
  )
}

export default ProductList;
