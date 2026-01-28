import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/products")
      .then((res) => {
        setProdotti(res.data);
      })
      .catch((err) => {
        console.error("Errore nel recupero prodotti", err);
      });
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Prodotti</h2>

      <div className="product-grid">
        {prodotti.map((p) => (
          <div className="product-card" key={p.id}>

            {/* IMMAGINE PRODOTTO */}
            {p.imageUrl && (
              <img
                src={`/images/${p.imageUrl}`}
                alt={p.name}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
            )}

            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p>
              <b>Certificazione:</b> {p.certification || "N/A"}
            </p>
            <p>
              <i>Metodo: {p.method || "—"}</i>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
