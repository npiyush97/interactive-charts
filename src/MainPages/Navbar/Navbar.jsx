import React, { useEffect, useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { IoOptionsOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import './Navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {
  const [active, setActive] = useState('/');
  useEffect(() => {
    const { pathname } = window.location;
    setActive(pathname);
  }, []);

  return (
    <div className="Navbar d-flex justify-content-between align-items-center px-3">
      <div>
        <img
          className="wasserstoffLogo"
          src="https://www.thewasserstoff.com/images/logo-top.png"
          alt=""
        />
        <p className="logo-text d-inline mx-1">WASSERSTOFF</p>
      </div>

      <div className="search d-flex align-items-baseline">
        <input type="text" className="search-box" />
        <CiSearch className="mx-2" size={15} />
      </div>

      <div className="nav-items d-flex ">
        <Link
          to="/"
          className="mx-3 text-muted"
          onClick={() => {
            setActive('/');
          }}
        >
          Statistics
        </Link>
        <Link
          to="/"
          onClick={() => {
            setActive('/');
          }}
          className={`mx-3 ${active === '/' ? 'active' : 'text-muted'}`}
        >
          Overview
        </Link>
        <Link
          to="/dashboard"
          onClick={() => {
            setActive('/dashboard');
          }}
          className={`mx-3 ${active === '/dashboard' ? 'active' : 'text-muted'}`}
        >
          Dashboard
        </Link>
        <Link
          to="/"
          className="mx-3 text-muted"
          onClick={() => {
            setActive('/');
          }}
        >
          Analytics
        </Link>
      </div>

      <div className="profile-nav-items">
        <span className="mx-3">
          <FiUser size={22} className="icon-color" />
        </span>
        <span className="mx-3">
          <IoOptionsOutline size={22} className="icon-color" />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
