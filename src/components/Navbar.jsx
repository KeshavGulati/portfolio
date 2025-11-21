import React from 'react';
import { Link } from 'react-router-dom';
import myPhoto from "../assets/haha(5).jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to={"//"}>
        <FontAwesomeIcon icon={faHouse} className='homeIcon' />
      </Link>
      <div className="img-div">
        <a href="https://www.linkedin.com/in/keshav-gulati/" target='__blank'>
          <img className='myPhoto' src={ myPhoto } alt="" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar