'use client'
import * as React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import Image from 'next/image';

import { ThemeToggle } from './ThemeToggle';

import { FaPowerOff } from "react-icons/fa";

export interface IAppProps {
}

export default function Header() {
  const { user } = useUser();

    return (
      <header className="app-header">
        <Link href='/' className='app-logo'>
          <Image height={24} width={24} src='/icons-48.png' alt='recipe icon'/> myRecipes
        </Link>
        <div></div>
        <div></div>
        <div className="nav-container">
          <ThemeToggle />
          Theme
        </div>
        <Link className="nav-container" href={`/api/auth/${user ? 'logout' : 'login'}`}> <FaPowerOff /> {user ? 'Logout' : 'Login'}</Link>
      </header>
    );
}
