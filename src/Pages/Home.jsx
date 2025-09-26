
import { Link } from 'react-router-dom';
import HomeBtn from '../Components/HomeBtn';
import styles from '../assets/styles/home.module.css';

function Home() {
   return (
      <>
         <Link to="/" title="Home">
            <nav className={styles.nav}>
               <i className="fas fa-house"></i>
            </nav>
         </Link>

         <a href="https://github.com/NickFrost2/ReactPlayz" target="_blank" rel="noopener noreferrer" title="Go to repository">
            <div className={styles.githubIcon}>
               <i className="fab fa-github"></i>
            </div>
         </a>

         <main className={styles.main}>
            <HomeBtn name='Counter' icon="fa-solid fa-abacus" link='/counter' />
            <HomeBtn name='Stopwatch' icon="fas fa-stopwatch" link='/stopwatch' />
            <HomeBtn name='CLock' icon="fas fa-clock" link='/clock' />
         </main>
      </>
   )
}

export default Home
