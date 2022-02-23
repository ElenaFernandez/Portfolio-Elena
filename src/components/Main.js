import '../styles/components/InfoPage.scss';
import elena from '../images/myself.jpg';
function Main() {
  return (
    <div className="appPage">
      <img className="appPage_image" src={elena} alt="Elena" />
      
      <h3 className="appPage_text">
        Educadora Infantil de origen madrileño. Después de no encontrar trabajo
        en Madrid, decidio irse a vivir a Alemania, donde vivió una experiencia
        única e irrepetbile. Hace un año volvió a Madrid y decidió dar un giro
        de 180 grados a su vida. Se embarco en esta nueva aventura de Adalab
        dispuesta a aprender desde 0 todo el mundo de la programación y lograr
        su objetivo: ser una Full Stack Developer.
      </h3>
    </div>
  );
}

export default Main;
