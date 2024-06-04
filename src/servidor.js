// Importa o módulo Express, que é um framework para criar servidores web em Node.js
// Importa o módulo URL para manipulação de URLs
// Importa o módulo Path para manipulação de caminhos de arquivos e diretórios
import express from "express";
import url from "url";
import path from "path";

// Cria uma instância do Express
// Define a porta em que o servidor irá rodar. Usa a variável de ambiente PORT se estiver definida, caso contrário usa a porta 3001.
const app = express();
const port = process.env.PORT || 3001;

// Obtém o caminho completo do arquivo atual (URL do módulo) e converte para o caminho do sistema de arquivos
// Define o caminho para o diretório público onde estarão os arquivos estáticos, navegando para dois diretórios acima do caminho atual e depois para o diretório "public"
// Configura o Express para servir arquivos estáticos a partir do diretório público definido acima
const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public")
app.use(express.static(diretorioPublico));

// Inicia o servidor na porta definida e imprime uma mensagem no console quando o servidor estiver rodando
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
