import React from "react";

export default function NavBar() {
    return (
        <div>
            <div>
                <h1>myMarket</h1>
                <div  className="NavBar_btns" >
                    <button type="button" className="btn btn-outline-light">
                        Sobre Nosotros
                    </button>
                    <button type="button" className="btn btn-outline-light">
                        Que Ofrecemos
                    </button>
                    <button type="button" className="btn btn-outline-light">
                        Registrarse
                    </button>
                    <button type="button" className="btn btn-outline-light">
                        Acceso
                    </button>
                </div>
            </div>
        </div>
    );
}
