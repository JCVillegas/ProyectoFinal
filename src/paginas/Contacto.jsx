import Nav from "./Nav";
import Contact from "../componentes/Contact";
import Footer from "../componentes/Footer";


export default function Contacto() {
  return (
    <><h1>Lenguajes de programacion</h1>
      <Nav></Nav>
      <h1>CONTACTANOS</h1>
      <section className="contenedor">
        <Contact></Contact>
      </section>
      <Footer></Footer>
    </>
  )
}
