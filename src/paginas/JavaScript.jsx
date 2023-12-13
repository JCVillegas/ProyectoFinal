import React from "react";
import Nav from "./Nav";
import Footer from "../componentes/Footer";
import AcordeonJS from "../componentes/AcordeonJS";

export default function JavaScript() {
    return (
        <><h1>Lenguajes de programacion: JAVASCRIPT</h1>
            <Nav></Nav>
            <section className="contenedor">
                <p>
                    JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,2​ basado en prototipos, imperativo, débilmente tipado y dinámico.

                    Se utiliza principalmente del lado del cliente, implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámicas3​ y JavaScript del lado del servidor (Server-side JavaScript o SSJS). Su uso en aplicaciones externas a la web, por ejemplo en documentos PDF, aplicaciones de escritorio (mayoritariamente widgets) es también significativo. El lenguaje de programación Java fue desarrollado originalmente por James Gosling, de Sun Microsystems constituida en 1983 y posteriormente adquirida el 27 de enero de 2010 por la compañía Oracle, y publicado en 1995 como un componente fundamental de la plataforma Java de Sun Microsystems. Su sintaxis deriva en gran medida de C y C++, pero tiene menos utilidades de bajo nivel que cualquiera de ellos. Las aplicaciones de Java son compiladas a bytecode clase Java, que puede ejecutarse en cualquier máquina virtual Java JVM sin importar la arquitectura de la computadora subyacente.
                </p>

            </section>
            <section className="contenedor">
            <iframe width="720" height="480" src="https://www.youtube.com/embed/E8weQyNVWug" title="¿Qué es Java y cuál es su historia?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>

            <section className="contenedor">
                <h2>Caracteristicas</h2>
                <AcordeonJS></AcordeonJS>
            </section>
            <Footer></Footer>

        </>
    )
}