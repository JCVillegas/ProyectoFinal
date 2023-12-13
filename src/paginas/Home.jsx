import React from "react";
import  Nav  from "./Nav";
import Lenguaje from "../imagenes/lenguaje.avif";
import Acordeon from "../componentes/Acordeon";
import ColumnaHome from "../componentes/ColumnaHome";
import Footer from "../componentes/Footer";

export default function Home(){
    return(
        <><h1>Lenguajes de programacion</h1>
            <Nav></Nav>
            <section className="contenedor">
                <img src={Lenguaje} class="img-fluid" alt="imagen"></img>
            </section>
            <section className="contenedor">
                <Acordeon></Acordeon>
            </section>
            <section className="contenedor">
                <ColumnaHome></ColumnaHome>
            </section>
            <Footer></Footer>

        </>
    )
}