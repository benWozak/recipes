'use client'
import * as React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

import { ThemeToggle } from './ThemeToggle';

import { IoPersonCircleOutline } from "react-icons/io5";
import { IoPowerSharp } from "react-icons/io5";

export interface IAppProps {
}

export default function Header() {
  const { user } = useUser();

    return (
      <header className="header-container">
        <a href="/profile">Profile <IoPersonCircleOutline /></a>
        <ThemeToggle />
        {user ? <a href="/api/auth/logout">Logout <IoPowerSharp /></a> : <a href="/api/auth/login">Login <IoPowerSharp /></a>}
      </header>
    );
}
