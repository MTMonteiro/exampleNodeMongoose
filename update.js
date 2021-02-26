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

Article.findByIdAndUpdate("60383eaa52077aaafba5ec4a", {body: "esse texto foi alterado"}).then(() => {
    console.log("update realizado")
}).catch(err => console.log(err))


