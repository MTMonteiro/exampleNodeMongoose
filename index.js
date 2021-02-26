const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27018/nodemongoose", {useNewUrlParser: true, useUnifiedTopology: true, user: 'root', pass: "root!p4sswd"});

