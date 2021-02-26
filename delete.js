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

// retorna o objeto deletado
Article.findByIdAndDelete("60383efe6ba5d0ad6581c37d").then(articles =>{
    console.log(articles);
}).catch(err => console.log(err))
