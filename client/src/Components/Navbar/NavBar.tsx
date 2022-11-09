import  React  from "react";

export default function NavBar() {
    return (
        <div>
            <div className="navbar-container">
                <h1>myMarket</h1>
                <div>
                    <button>Sobre nosotros</button>
                    <button>Que ofrecemos</button>
                    <button>Registrarse</button>
                    <button>Acceso</button>
                </div>
            </div>
        </div>
    );
}
