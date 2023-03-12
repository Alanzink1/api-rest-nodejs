const http = require("http");
const port = 3000;

http
  .createServer((req, res) => {
    if (req.url === "/produto") {
      res.end(
        JSON.stringify({
          message: "Vc esta na rota Produto",
        })
      );
    }

    if (req.url === "/usuarios") {
      res.end(
        JSON.stringify({
          message: "Vc esta na rota Usuarios",
        })
      );
    }

    res.end(
      JSON.stringify({
        message: "Qualquer outra rota",
      })
    );

  })
  .listen(port, () => console.log(`O Servidor foi Aberto na Porta ${port}`));
