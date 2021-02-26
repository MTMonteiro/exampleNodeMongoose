const mongoose = require("mongoose");
const articleModel1 = require("./article");

// mongoose.connect("mongodb://root:root!p4sswd@localhost:27018/nodemongoose", {
mongoose.connect("mongodb://localhost:27018/nodemongose", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Article = mongoose.model("Article", articleModel1);

//todos os dados
Article.find({}).then(articles => {
    console.log(articles);
}).catch(err => {
    console.log(err)
})

Article.find({'_id': '60383efe6ba5d0ad6581c37d'}).then(articles => {
    console.log(articles);
}).catch(err => {
    console.log(err)
})

// se nao achar retorna uma lista vazia
Article.find({'resume.content': 'conteudo'}).then(articles => {
    console.log(articles);
}).catch(err => {
    console.log(err)
})

// se nao acher retorn null
Article.findOne({'resume.content': 'conteudo'}).then(articles => {
    console.log(articles);
}).catch(err => {
    console.log(err)
})