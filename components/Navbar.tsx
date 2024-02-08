"use client"

import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '@/public/vercel.svg';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex justify-center items-center py-8 px-24 ">
      <div className="flex justify-center items-center ">
        <div className="gpt3__navbar-links_logo">
        <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 139.398L0 339.925H43.4188L43.4188 148.824C43.4188 95.9745 86.2621 53.1313 139.112 53.1313C191.962 53.1313 234.805 95.9746 234.805 148.825L234.805 339.925H278.796V139.398C278.796 62.4106 216.385 6.10352e-05 139.398 6.10352e-05C62.4106 6.10352e-05 0 62.4107 0 139.398Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M513.601 61.1294L313.074 61.1294V104.548L504.175 104.548C557.025 104.548 599.868 147.392 599.868 200.241C599.868 253.091 557.025 295.935 504.175 295.935H313.074V339.925H513.602C590.589 339.925 652.999 277.515 652.999 200.527C652.999 123.54 590.589 61.1294 513.601 61.1294Z" fill="white"/>
</svg>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Accueil</a></p>
          <p><a href="#wgpt3">Nos services</a></p>
          <p><a href="#features">A propos de nous</a></p>

        </div>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          <p><a href="#home">Accueil</a></p>
          <p><a href="#wgpt3">Nos services</a></p>
          <p><a href="#features">A propos de nous</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;