export default function AcordeonC2() {
    return (
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Características de C++
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Su sintaxis es heredada del lenguaje C.
                        Programa orientado a objetos (POO).
                        Permite la agrupación de instrucciones.
                        Es portátil y tiene un gran número de compiladores en diferentes plataformas y sistemas operativos.
                        Permite la separación de un programa en módulos que admiten compilación independiente.
                        Es un lenguaje de alto nivel.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">

                        Tamaños asociados
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">

                        Según la máquina y el compilador que se utilice los tipos primitivos pueden ocupar un determinado tamaño en memoria. La siguiente lista ilustra el número de bits que ocupan los distintos tipos primitivos en la arquitectura x86.
                        Otras arquitecturas pueden requerir distintos tamaños de tipos de datos primitivos. C++ no dice nada acerca de cuál es el número de bits en un byte, ni del tamaño de estos tipos; más bien, ofrece solamente las siguientes "garantías de tipos":

                        De acuerdo al estándar C99, un tipo char debe ocupar exactamente un byte compuesto de un mínimo de 8 bits independientemente de la arquitectura de la máquina.
                        El tamaño reconocido de char es de 1. Es decir, sizeof(char) siempre devuelve 1.
                        Un tipo short tiene al menos el mismo tamaño que un tipo char.
                        Un tipo long tiene al menos el doble tamaño en bytes que un tipo short.
                        Un tipo int tiene un tamaño entre el de short y el de long, ambos incluidos, preferentemente el tamaño de un apuntador de memoria de la máquina. Su valor máximo es 2147483647, usando 32 bits.
                        Un tipo unsigned tiene el mismo tamaño que su versión signed.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">

                        Principios
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Todo programa en C++ debe tener la función principal main() (a no ser que se especifique en tiempo de compilación otro punto de entrada, que en realidad es la función que tiene el main())
                        La primera es la forma por omisión de un programa que no recibe parámetros ni argumentos. La segunda forma tiene dos parámetros: argc, un número que describe el número de argumentos del programa (incluyendo el nombre del programa mismo), y argv, un puntero a un array de punteros, de argc elementos, donde el elemento argv[i] representa el i-ésimo argumento entregado al programa. En el tercer caso se añade la posibilidad de poder acceder a las variables de entorno de ejecución de la misma forma que se accede a los argumentos del programa, pero reflejados sobre la variable env.

                        El tipo de retorno de main es un valor entero int. Al finalizar la función main, debe incluirse el valor de retorno (por ejemplo, return 0;, aunque el estándar prevé solamente dos posibles valores de retorno: EXIT_SUCCESS y EXIT_FAILURE, definidas en el archivo cstdlib), o salir por medio de la función exit. Alternativamente puede dejarse en blanco, en cuyo caso el compilador es responsable de agregar la salida adecuada.
                    </div>
                </div>
            </div>
        </div>
    )
}