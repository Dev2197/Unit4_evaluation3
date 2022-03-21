const express = require("express")

const userController = require("./controllers/user.controller")
const bookController = require("./controllers/books.controller")
const commentController = require("./controllers/comments.controller")
const publicationController = require("./controllers/publication.controller")

const app = express();

app.use(express.json())

app.use("/user",userController)
app.use("/books", bookController)
app.use("/comment", commentController)
app.use("/publications",publicationController)

module.exports = app;