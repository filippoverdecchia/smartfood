import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    description: "",
    method: "",
    certification: "",
    imageUrl: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:3000/api/products", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    navigate("/products");
  };

  return (
    <form onSubmit={submit}>
      <h2>Crea Prodotto</h2>

      <input
        placeholder="Nome"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        placeholder="Descrizione"
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />
      <input
        placeholder="Metodo"
        onChange={(e) => setData({ ...data, method: e.target.value })}
      />
      <input
        placeholder="Certificazione"
        onChange={(e) => setData({ ...data, certification: e.target.value })}
      />
      <input
        placeholder="URL Immagine"
        onChange={(e) => setData({ ...data, imageUrl: e.target.value })}
      />

      <button>Crea prodotto</button>
    </form>
  );
}
