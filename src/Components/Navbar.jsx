import { Link } from "react-router-dom";
import styled from 'styled-components';

function Navbar() {
   const Nav = styled.nav`
   width: 3rem;
   height: 3rem;
   background: var(--dark);
   margin: 10px;
   border-radius: 100%;
   aspect-ratio: 1;
   display: flex;
   justify-content: center;
   align-items: center;
   color: var(--white);
   font-size: 1.5rem;
   padding: 10px;
   position: fixed;
   top: 0;
   right: 0;
   z-index: 1000;
   transition: all 300ms;

   &:hover {
      background: var(--accent);
      /* color: #001014; */
   }
   `
   return (
      <Link to="/">
         <Nav>
            &#10174;
         </Nav>
      </Link>
   );
}

export default Navbar;