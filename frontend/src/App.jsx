import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          color: "white",
          padding: "40px 20px",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1488459716781-31db52582fe5')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          SmartFood
        </h1>
        <p style={{ fontSize: "20px", maxWidth: "600px", margin: "0 auto" }}>
          La piattaforma per valorizzare i prodotti tipici locali e supportare i produttori del territorio.
        </p>

        <Link to="/products">
          <button style={{ marginTop: "30px", fontSize: "18px" }}>
            Scopri i Prodotti
          </button>
        </Link>
      </div>
    </>
  );
}
