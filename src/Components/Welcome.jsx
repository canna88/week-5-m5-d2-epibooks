import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';



function Welcome() {
  return (

      <Container>
        <h1>Welcome to EpiBooks</h1>
        <p>
          Discover a world of books at EpiBooks. Explore our vast collection of literature, fiction, and non-fiction.
        </p>
        <p>
          <Button variant="primary">Get Started</Button>
        </p>
      </Container>
  );
}


export default Welcome;
