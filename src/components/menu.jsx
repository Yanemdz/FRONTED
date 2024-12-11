"use client";
import { useState } from "react";
import Link from "next/link";

export default function Menu() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchType, setSearchType] = useState("usuarios");

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm) {
            // Redirigir a la página de búsqueda según el tipo seleccionado
            window.location.href = `/${searchType}/mostrar?search=${searchTerm}`;
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
                            <li className="nav-item">
                                <div className="d-flex justify-content-between w-100">
                                    <div className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle fs-6"
                                            href="#"
                                            id="usuariosDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Usuarios
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="usuariosDropdown">
                                            <li>
                                                <Link className="dropdown-item" href="/usuarios/mostrar">
                                                    Ver Usuarios
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="/usuarios/nuevo">
                                                    Agregar Usuario
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle fs-6"
                                            href="#"
                                            id="productosDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Productos
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="productosDropdown">
                                            <li>
                                                <Link className="dropdown-item" href="/productos/mostrar">
                                                    Ver Productos
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="/productos/nuevo">
                                                    Agregar Producto
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle fs-6"
                                            href="#"
                                            id="ventasDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Ventas
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="ventasDropdown">
                                            <li>
                                                <Link className="dropdown-item" href="/ventas/mostrar">
                                                    Ver Ventas
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="/ventas/nuevo">
                                                    Agregar Venta
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={handleSearch}>
                            <select 
                                className="form-select me-2" 
                                value={searchType} 
                                onChange={(e) => setSearchType(e.target.value)}
                            >
                                <option value="usuarios">Usuarios</option>
                                <option value="productos">Productos</option>
                                <option value="ventas">Ventas</option>
                            </select>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Buscar"
                                aria-label="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
