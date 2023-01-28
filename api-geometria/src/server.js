const express =  require("express");
const cors =  require("cors");

const geometriaRouters =  require("./routes/geometria.routes.js");

const app = express();

app.use(express.json());
app.use(cors());
app.use(geometriaRouters);

const port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
