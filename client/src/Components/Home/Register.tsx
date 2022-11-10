import React from "react";

export default function Register() {
  return (
    <div className="form_box">
      <h1>Formulario de Registro</h1>
      <h2>Ingresá tus datos</h2>
      <form>
        <div className="form-group">
          <label>Usuario</label>
          <input type="text" className="form-control" placeholder="Usuario" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" className="form-control" placeholder="Email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Registrarse
        </button>
      </form>
    </div>
  );
}
