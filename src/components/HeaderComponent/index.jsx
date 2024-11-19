import React from 'react'
import './HeaderComponent.css'
import { Link } from 'react-router-dom';

const HeaderComponent = ({postsLength}) => {
  return (
    <div className='headerComponent'>
      <div className='image-section'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKsvwfiL_PA52Zo1_Jt2ZaZ4kL8P3v_84Z3A&s" alt="" />
      </div>
      <div className="list">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
      <div>
        <p>All items: {postsLength}</p>
      </div>
    </div>
  )
}

export default HeaderComponent;
