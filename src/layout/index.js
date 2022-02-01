import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((value) => !value);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div className={'app-container'}>
        <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />
        <Container fluid className={'app-main'}>
          {children}
        </Container>
      </div>
    </>
  );
};

export default Layout;
