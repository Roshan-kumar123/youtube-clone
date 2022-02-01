import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className={'login'}>
      <div className={'login-container'}>
        <h2 className={'text-white'}>Something went wrong</h2>
        <Link to={'/'}>
          <button className={'btn btn-primary'}>Go to home</button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
