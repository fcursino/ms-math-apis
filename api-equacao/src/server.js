const express =  require("express");
const cors =  require("cors");

const equacaoRouters =  require("./routes/equacao.routes.js");

const app = express();

app.use(express.json());
app.use(cors());
app.use(equacaoRouters);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
