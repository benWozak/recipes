import * as React from 'react';
import Link from 'next/link';
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export interface IFooterProps {
}

export default function Footer (props: IFooterProps) {
  return (
    <footer className='app-footer'>
      <Link href='/' className="nav-container">
        <FaHome />
        <span className="nav-text">Home</span>
      </Link>

      <Link href='/catalogue' className="nav-container">
        <FaBook />
        <span className="nav-text">Recipes</span>
      </Link>

      <Link href='/profile' className="nav-container">
        <FaUser />
        <span className="nav-text">Profile</span>
      </Link>
    </footer>
  );
}
