/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Link } from 'react-router-dom';
import HomeBtn from '../Components/HomeBtn';
import './home.css';

function Home() {
   return (
      <>
         <Link to="/" title="Home">
            <nav>
               <i className="fas fa-house"></i>
            </nav>
         </Link>
         <a href="https://github.com/NickFrost2/ReactPlayz" target="_blank" rel="noopener noreferrer" title="Go to repository">
            <div className="github-icon">
               <i className="fab fa-github"></i>
            </div>
         </a>

         <main>
            <HomeBtn name='Counter' icon="fa-solid fa-abacus" link='/counter' />
            <HomeBtn name='Stopwatch' icon="fas fa-stopwatch" link='/stopwatch' />
         </main>
      </>
   )
}

export default Home
