

export default function Nav(){
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/ProyectoFinal">Home</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/Java">Java</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/Python">Python</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/JavaScript">JavasCript</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/C1">C#</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/C2">C++</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/Sql">SQL</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/Html">HTML</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/contacto">CONTACTANOS</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/Credito">CREDITOS</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}
