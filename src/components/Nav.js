import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav'>
      <Link className='link' to={'/create'}>Добавить гостя</Link>
      <Link className='link' to={'/guests'}>Список гостей</Link>
    </div>
  )
};

export default Nav;
