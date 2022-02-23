import '../styles/components/ContactPage.scss';
function Contact() {
  return (
    <div className="contact">
      <div className="form">
        <h1 className="form_title">Contacto</h1>
        <h3 className="form_subtitle">
          Si en algún momento quiere ponerse en contacto conmigo, rellene el
          formulario y estare encantada de contestarle
        </h3>
        <small className="form_small">
          Todos los campos marcados <span> * </span> son obligatorios
        </small>

        <form action="https://formspree.io/f/xdoyqbgl" method="post">
          <fieldset>
            <label htmlFor=" nombre">Nombre completo *</label>
            <input type="text" placeholder="Escribe tu nombre" />
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email *</label>
            <input type="email" placeholder="tumail@gmail.com" />
          </fieldset>
          <fieldset>
            <label htmlFor="phone">Teléfono</label>
            <input type="tel" placeholder="456823791" />
          </fieldset>
          <fieldset>
            <label htmlFor="mensaje">Mensaje * </label>
            <textarea
              name="messaje"
              id="message"
              cols="30"
              rows="10"
              placeholder="¿Qué necesitas?"
            ></textarea>
          </fieldset>
          <button type="submit"> Enviar </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;