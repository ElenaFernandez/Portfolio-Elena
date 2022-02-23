import { Link } from 'react-router-dom';
import '../styles/components/Header.scss'
function Header(){
 return(<div className='container'>
  <h1 className='title'>Bienvenido!</h1>
  <a href='#' className='subtitle'> <Link to='/'> Inicio</Link> </a>
  <a href='#' className='subtitle'> <Link to='/study'>Formación</Link></a>
  <a href='#' className='subtitle'> <Link to='/job'>Experiencia</Link>  </a>
  <a href='#' className='subtitle'> <Link to='/project'>Proyectos </Link> </a>
  <a href='#' className='subtitle'><Link to='/contact'> Contacto </Link> </a>
 </div>)
 
}

export default Header;