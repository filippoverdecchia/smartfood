import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { token, logout } = useContext(AuthContext);

  return (
    <nav style={{
      display: "flex",
      gap: "20px",
      padding: "10px",
      borderBottom: "1px solid #ccc",
      marginBottom: "20px"
    }}>
      <Link to="/" style={{ fontWeight: "bold" }}>
        🏠 Home
      </Link>
      <Link to="/products">Prodotti</Link>

      {!token && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}

      {token && (
        <>
          <Link to="/create">Crea Prodotto</Link>
          <button onClick={logout} style={{ cursor: "pointer" }}>
            Logout
          </button>
        </>
      )}
    </nav>
  );
}
