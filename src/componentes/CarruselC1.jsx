import C1 from '../imagenes/c1.png';
import C2 from '../imagenes/c2.png';
import C3 from '../imagenes/c3.png';


export default function CarruselC1() {
    return (
        <section>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={C1} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={C2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src={C3} class="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}