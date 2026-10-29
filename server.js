const express = require('express');
const app= express()
const SECRET_TOKEN = "Castel 3456";
function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (authHeader && authHeader === `Bearer ${SECRET_TOKEN}`) {
    next();
  } else {
    res.status(403).json({ error: "Acess denied: Invalid token."});
  }
}
app.get('/api/check-update', verifyToken, (req, res) => {
  res.json({
    latestVersion: "1.2,0"
    downloadUrl: "https://github.com/NeogenesisFuture/NeogenesisFuture/releases/latest/download/mod-actualizado.zip"
});
    });
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor activo en puerto ${PORT}`));
