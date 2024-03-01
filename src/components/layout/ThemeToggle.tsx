'use client'
import * as React from 'react';
import { FaSun, FaMoon } from "react-icons/fa";
import $ from "jquery";

export interface IAppProps {
}

export function ThemeToggle (props: IAppProps) {
 const [ theme, setTheme ] = React.useState('light')

  const toggleTheme = () => {
    if(typeof document !== 'undefined') {
      const element = $("html");
      const classes = element.attr("class");

      if(classes === 'light') {
        element.addClass("dark").removeClass("light");
        setTheme('dark')
      } else {
        element.addClass("light").removeClass("dark");
        setTheme('light')
      }
    }
  }

  return (
    <button
      className="myButton"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? <FaMoon />: <FaSun />}
    </button>
  );
}
