import React, { useState } from "react";
import { useAuth } from "../../Context/authContext";
import { useHistory } from "react-router-dom";

export default function Register() {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { signUp } = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(user.email, user.password);
      history.push("/");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setError("Correo invalido");
      }
      if (error.code === "auth/internal-error") {
        setError("La contrasena debe tener 7 o mas caracteres");
      }
      console.log(error);
    }
  };

  return (
    <div className="form_box">
      <h1>Formulario de Login</h1>
      <h2>Ingresá tus datos</h2>
      {error && <p>{error}</p>}
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Registrarse
        </button>
      </form>
    </div>
  );
}
