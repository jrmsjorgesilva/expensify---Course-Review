import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Erro 404 - oops</h1>
      <Link to='/'> Go Home </Link>
    </div>
  );
}

export default NotFoundPage;
