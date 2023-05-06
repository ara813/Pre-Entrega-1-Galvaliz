import CartWidget from "./CartWidget";

const NavBar = () => { 
    return (
        <div>
        <nav class="navbar bg-body-tertiary fixed-top">
<div class="container-fluid">
< CartWidget />
<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="principal.html">Inicio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="productos.html">Productos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="pedidos.html">Pedidos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.instagram.com/merendarsintacc/">Instagram</a>
      </li>
    </ul>
    <form class="d-flex mt-3" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</div>
</nav>
    </div>
    )
 }

 export default NavBar; 