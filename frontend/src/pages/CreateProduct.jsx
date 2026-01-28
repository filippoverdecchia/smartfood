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

    const payload = {
      ...data,
      imageUrl: data.imageUrl?.trim() ? data.imageUrl.trim() : "OlioEVO.png",
    };

    await axios.post("http://localhost:3000/api/products", payload, {
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
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        placeholder="Descrizione"
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />
      <input
        placeholder="Metodo"
        value={data.method}
        onChange={(e) => setData({ ...data, method: e.target.value })}
      />
      <input
        placeholder="Certificazione"
        value={data.certification}
        onChange={(e) => setData({ ...data, certification: e.target.value })}
      />
      <input
        placeholder="Nome file immagine (es. OlioEVO.png)"
        value={data.imageUrl}
        onChange={(e) => setData({ ...data, imageUrl: e.target.value })}
      />

      <button type="submit">Crea prodotto</button>
    </form>
  );
}
