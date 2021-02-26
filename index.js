const mongoose = require("mongoose");
const articleModel1 = require("./article");

// mongoose.connect("mongodb://root:root!p4sswd@localhost:27018/nodemongoose", {
mongoose.connect("mongodb://localhost:27018/nodemongose", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   user: "root",
//   user: "admin",
//   pass: "root!p4sswd",
//   pass: "pass",
});

const Article = mongoose.model("Article", articleModel1);

const artigo = new Article({
  title: "segundo artigo",
  author: "Matheus",
  body: "Vejamos que temos mais um artigo",
});

artigo.save().then(() => {
    console.log("artigo salvo!")
}).catch(err => {
    console.log(err)
});
