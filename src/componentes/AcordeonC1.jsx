export default function AcordeonC1() {
    return (
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Arquitectura de .NET
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Los programas de C# se ejecutan en .NET, un sistema de ejecución virtual denominado Common Language Runtime (CLR) y un conjunto de bibliotecas de clases. CLR es la implementación de Microsoft del estándar internacional Common Language Infrastructure (CLI). CLI es la base para crear entornos de ejecución y desarrollo en los que los lenguajes y las bibliotecas funcionan juntos sin problemas.

                        El código fuente escrito en C# se compila en un lenguaje intermedio (IL) que guarda conformidad con la especificación de CLI. El código y los recursos de IL, como los mapas de bits y las cadenas, se almacenan en un ensamblado, normalmente con una extensión .dll. Un ensamblado contiene un manifiesto que proporciona información sobre los tipos, la versión y la referencia cultural.

                        Cuando se ejecuta el programa C#, el ensamblado se carga en CLR. CLR realiza la compilación Just-In-Time (JIT) para convertir el código IL en instrucciones de máquina nativas. Además, CLR proporciona otros servicios relacionados con la recolección de elementos no utilizados, el control de excepciones y la administración de recursos. El código que se ejecuta en CLR a veces se conoce como "código administrado". El "código no administrado" se compila en un lenguaje nativo de la máquina destinado a un sistema concreto.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">

                        Tipos y variables
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">

                        Un tipo define la estructura y el comportamiento de los datos en C#. La declaración de un tipo puede incluir sus miembros, tipo base, interfaces que implementa y operaciones permitidas para ese tipo. Una variable es una etiqueta que hace referencia a una instancia de un tipo específico.

                        Hay dos clases de tipos en C#: tipos de valor y tipos de referencia. Las variables de tipos de valor contienen directamente sus datos. Las variables de tipos de referencia almacenan referencias a los datos, lo que se conoce como objetos. Con los tipos de referencia, es posible que dos variables hagan referencia al mismo objeto y que, por tanto, las operaciones en una variable afecten al objeto al que hace referencia la otra. Con los tipos de valor, cada variable tiene su propia copia de los datos y no es posible que las operaciones en una variable afecten a la otra (excepto para las variables de parámetro ref y out).

                        Un identificador es un nombre de variable. Un identificador es una secuencia de caracteres Unicode sin ningún espacio en blanco. Un identificador puede ser una palabra reservada de C# si tiene el prefijo @. El uso de una palabra reservada como identificador puede ser útil al interactuar con otros lenguajes.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">

                        Estructura del programa
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Prototipos
                        Los conceptos organizativos clave de C# son programas, espacios de nombres, tipos, miembros y ensamblados. Los programas declaran tipos, que contienen miembros y pueden organizarse en espacios de nombres. Las clases, estructuras e interfaces son ejemplos de tipos. Los campos, los métodos, las propiedades y los eventos son ejemplos de miembros. Cuando se compilan programas de C#, se empaquetan físicamente en ensamblados. Normalmente, los ensamblados tienen las extensiones de archivo .exe o .dll, en función de si implementan aplicaciones o bibliotecas, respectivamente.
                    </div>
                </div>
            </div>
        </div>
    )
}