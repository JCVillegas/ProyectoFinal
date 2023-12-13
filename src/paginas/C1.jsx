import React from "react";
import  Nav  from "./Nav";
import AcordeonC1 from "../componentes/AcordeonC1";
import CarruselC1 from "../componentes/CarruselC1";
import Footer from "../componentes/Footer";

export default function C1(){
    return(
        <><h1>Lenguajes de programacion: C#</h1>
            <Nav></Nav>
            <section className="contenedor">
                <p>
                C# (pronunciado "si sharp" en inglés) es un lenguaje de programación moderno, basado en objetos y con seguridad de tipos. C# permite a los desarrolladores crear muchos tipos de aplicaciones seguras y sólidas que se ejecutan en .NET. C# tiene sus raíces en la familia de lenguajes C, y a los programadores de C, C++, Java y JavaScript les resultará familiar inmediatamente. Este paseo proporciona información general de los principales componentes del lenguaje en C# 8 y versiones anteriores. 
                </p>
                <AcordeonC1></AcordeonC1>
            </section>
            <section className="contenedor">
                <h2>Carrusel de imagenes</h2>
                <CarruselC1></CarruselC1>
            </section>
            
            <Footer></Footer>

        </>
    )
}