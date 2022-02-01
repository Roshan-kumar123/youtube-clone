import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Categoriesbar from '../../categoriesbar/Categoriesbar';
import Video from '../../videos/Video';

const HomeScreen = () => {
  return (
    <Container>
      <Categoriesbar />

      <Row>
        {[...new Array(20)].map(() => (
          <Col lg={3} md={4}>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
