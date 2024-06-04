import express from "express";
import url from "url";
import path from "path";


const app = express();
const port = process.env.PORT || 3001;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");
app.use(express.static(diretorioPublico));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});