// ========== IMPORTS ==========//
const express = require("express");
const { join } = require("path");
// ============================//

// ========== CONFIGURATION ==========//

const PORT = process.env.PORT || 3000;
const app = express();

const publicFolder = join(__dirname, "../public/");

app.use(express.static(publicFolder));
app.set("views", publicFolder);

// ==================================//

app.get("/", (req, res) => {

    res.sendFile(publicFolder + "index.html");

});

// ========== INIT ==========//
app.listen(PORT, () => console.log(`Server initializated at http://localhost:${PORT}`));