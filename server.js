const express = require('express');
const app = express();

app.get('/api/check-update', (req, res) => {
    res.json({
        latestVersion: "1.2.0",
        downloadUrl: "https://github.com/NeogenesisFuture/NeogenesisFuture/releases/latest/download/mod-actualizado.zip",
        message: "Actualización sincronizada correctamente"
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor activo en el puerto ${PORT}`));
