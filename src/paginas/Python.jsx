import React from "react";
import  Nav  from "./Nav";
import AcordeonPython from "../componentes/AcordeonPython";
import Footer from "../componentes/Footer";

export default function Python(){
    return(
        <><h1>Lenguajes de programacion: PYTHON</h1>
            <Nav></Nav>
            <section className="contenedor">
                <p>
                Python es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código, se utiliza para desarrollar aplicaciones de todo tipo, por ejemplo: Instagram, Netflix, Spotify, Panda3D, entre otros.2​ Se trata de un lenguaje de programación multiparadigma, ya que soporta parcialmente la orientación a objetos, programación imperativa y, en menor medida, programación funcional. Es un lenguaje interpretado, dinámico y multiplataforma.
                </p>
                <AcordeonPython></AcordeonPython>
            </section>
            <section className="contenedor">
            <iframe width="720" height="480" src="https://www.youtube.com/embed/lc5JJTQa4r8" title="🔥¿Qué es PYTHON y para qué SIRVE?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>
            
            <Footer></Footer>

        </>
    )
}