const express = require("express");
const router = express.Router();
const prisma = require("../utils/prismaClient");
const auth = require("../middleware/auth");

// GET tutti i prodotti
router.get("/", async (req, res) => {
  const prodotti = await prisma.product.findMany({
    include: { producer: true, reviews: true },
  });

  res.json(prodotti);
});

// POST crea prodotto (solo PRODUCER o ADMIN)
router.post("/", auth, async (req, res) => {
  const { userId, role } = req.user;

  if (!["PRODUCER", "ADMIN"].includes(role)) {
    return res.status(403).json({ error: "Non autorizzato" });
  }

  const { name, description, method, certification, imageUrl } = req.body;

  const prodotto = await prisma.product.create({
    data: {
      name,
      description,
      method,
      certification,
      imageUrl,
      producerId: userId,
    },
  });

  res.json(prodotto);
});

module.exports = router;
