document.getElementById("header").innerHTML = `
<div><a href="index.html"><img class="logo" src="img/logo.png" alt="Mister Latita"></a></div>

<div class="title-container">
    <div class="title1">
        <p>Mister Latita</p>
    </div>
    <div class="title2">
        <p>Almac&eacute;n de Bebidas</p>
    </div>
</div>

<div class="navbar-container">
    <input type="checkbox" id="menu-check">
    <label id="menu" for="menu-check">
        <span id="menu-abrir">&#9776;</span>
        <span id="menu-cerrar">X</span>
    </label>
    
    <nav>
        <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="nosotros.html">Nosotros</a></li>
            <li><a href="encuentranos.html">Encuentranos</a></li>
            <li><a href="contacto.html">Contacto</a></li>
        </ul>
    </nav>
</div>
`