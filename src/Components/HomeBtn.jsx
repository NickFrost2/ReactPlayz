import { Link } from 'react-router-dom';

function HomeBtn(prop) {
   return (
      <Link to={prop.link}>
         <i className={prop.icon}></i>
         <span>{prop.name}</span>
      </Link>
   );
}

export default HomeBtn;