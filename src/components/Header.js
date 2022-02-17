import '../styles/components/Header.scss'
function Header(){
 return(<div className='container'>
  <h1 className='title'>Bienvenido!</h1>
  <a href='#' className='subtitle'> Inicio </a>
  <a href='#' className='subtitle'> Formación</a>
  <a href='#' className='subtitle'> Experiencia </a>
  <a href='#' className='subtitle'> Contacto </a>
 </div>)
 
}

export default Header;