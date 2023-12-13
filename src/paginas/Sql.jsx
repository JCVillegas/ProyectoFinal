import React from "react";
import Nav from "./Nav";
import AcordeonSql from "../componentes/AcordeonSql";
import Footer from "../componentes/Footer";

export default function Sql() {
    return (
        <><h1>Lenguajes de programacion: SQL</h1>
            <Nav></Nav>
            <section className="contenedor">
                <p>
                    SQL (por sus siglas en inglés Structured Query Language; en español lenguaje de consulta estructurada) es un lenguaje específico de dominio, diseñado para administrar, y recuperar información de sistemas de gestión de bases de datos relacionales.2​ Una de sus principales características es el manejo del álgebra y el cálculo relacional para efectuar consultas con el fin de recuperar, de forma sencilla, información de bases de datos, así como realizar cambios en ellas.
                </p>
                <AcordeonSql></AcordeonSql>
            </section>
            <section className="contenedor">
                <iframe width="720" height="480" src="https://www.youtube.com/embed/Atpj2UsF65M" title="¿Qué es SQL? 🤓" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>

            <Footer></Footer>

        </>
    )
}