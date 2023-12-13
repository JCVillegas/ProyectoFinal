export default function AcordeonSql() {
    return (
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Orígenes y evolución
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Los orígenes de SQL están ligados a las bases de datos relacionales, específicamente las que residían en máquinas IBM bajo el sistema de gestión System R, desarrollado por un grupo de la IBM en San José, California.

                        Al principio fue IBM, e IBM creó SQL. SQL, originalmente un acrónimo de "Lenguaje de consulta estructurado" ("Structured Query Language”), es un lenguaje unificado para definir, consultar, modificar y controlar los datos en una base de datos relacional. Su nombre se pronuncia oficialmente "ess-cue-ell" (según el American National Standards Institute).

                        El modelo relacional de gestión de bases de datos fue propuesto en 1970 por el Dr. E. F. Codd en el Laboratorio de Investigación de IBM en San José, California, y se desarrolló durante la década siguiente en universidades y laboratorios de investigación. SQL, uno de varios lenguajes que surgieron de este trabajo inicial, ahora se ha apoderado casi por completo del mundo de los lenguajes de bases de datos relacionales. Los proveedores de sistemas de administración de bases de datos relacionales que inicialmente eligieron otros lenguajes han acudido en masa a SQL; Las organizaciones de normalización nacionales e internacionales han propuesto una versión codificada del lenguaje.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">

                        Características generales de SQL
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">

                        SQL es un lenguaje de acceso a bases de datos que explota la flexibilidad y potencia de los sistemas relacionales y permite así gran variedad de operaciones.6

                        Es un lenguaje declarativo de "alto nivel" o "de no procedimiento" que, gracias a su fuerte base teórica y su orientación al manejo de conjuntos de registros —y no a registros individuales— permite una alta productividad en codificación y la orientación a objetos. De esta forma, una sola sentencia puede equivaler a uno o más programas que se utilizarían en un lenguaje de bajo nivel orientado a registros. SQL también tiene las siguientes características:

                        Lenguaje de definición de datos: El LDD de SQL proporciona comandos para la definición de esquemas de relación, borrado de relaciones y modificaciones de los esquemas de relación.
                        Lenguaje interactivo de manipulación de datos: El LMD de SQL incluye lenguajes de consultas basado tanto en álgebra relacional como en cálculo relacional de tuplas.
                        Integridad: El LDD de SQL incluye comandos para especificar las restricciones de integridad que deben cumplir los datos almacenados en la base de datos.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">

                        Interoperabilidad
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        El lenguaje de consultas de los diferentes sistemas de gestión de bases de datos son incompatibles entre ellos y no necesariamente siguen completamente el estándar. En particular, la sintaxis de fecha y tiempo, la concatenación de cadenas, nulas, y la comparación de textos en cuanto al tratamiento de mayúsculas y minúsculas varían de un proveedor a otro. Una excepción particular es PostgreSQL, que se esfuerza por lograr el cumplimiento del estándar.9

                        Las implementaciones populares de SQL omiten comúnmente soporte para funciones básicas de SQL estándar, como la de los tipos de dato DATE o TIME. Es el caso del manejador de bases de datos de Oracle (cuyo tipo DATE se comporta como DATETIME, y carece de un tipo TIME)10​ y MS SQL Server (antes de la versión de 2008). Como resultado, el código SQL rara vez puede ser portado entre los sistemas de base de datos sin modificaciones.
                    </div>
                </div>
            </div>
        </div>
    )
}