import React from "react";
import Nav from "./Nav";
import Footer from "../componentes/Footer";
import AcordeonC2 from "../componentes/AcordeonC2";

export default function C2() {
    return (
        <><h1>Lenguajes de programacion: C++</h1>
            <Nav></Nav>
            <section className="contenedor">
                <p>
                C++ es un lenguaje compilado que fue desarrollado en 1980 por Bjarne Stroustroup en los laboratorios At&T como una extensión orientada a objetos del lenguaje C.
                </p>
                <p>
                Por ello, código fuente escrito en C puede compilarse como C++. Esto fue una virtud en los primeros años, pero a la larga también ha sido una debilidad pues, para garantizar la compatibilidad, ha mantenido algunos de los graves inconvenientes del lenguaje C.

El lenguaje C fue creado por Dennis Ritchie entre los años 1970-73. D. Ritchie fue cocreador junto a Ken Thompson del sistema operativo UNIX.

Durante el curso usaremos principalmente C++11, que es la cuarta revisión del Lenguaje de Programación C++ aprobada por la Organización Internacional para la Estandarización (ISO) en 2011.

La versión estándar más actual es la C++20. Eso no significa que vayamos a estudiar unas características del lenguaje desfasadas. Las novedades que se han ido incorporando en los últimos años respecto a la versión C++11 están enfocadas a programas/programadores de muy alto nivel.
                </p>

            </section>
            <section className="contenedor">
            <iframe width="720" height="480" src="https://www.youtube.com/embed/0NPFJ73Pmu0" title="Lenguaje C++ en 3 Minutos!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>

            <section className="contenedor">
                <h2>Caracteristicas</h2>
                <AcordeonC2></AcordeonC2>
            </section>
            <Footer></Footer>

        </>
    )
}