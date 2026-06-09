const express=require('express')
const noteRoute= express.Router()
const {getAllNotes} = require("../controller/note.controller")
// features
noteRoute.get("/".getAllNotes)
noteRoute.post("/")
noteRoute.put("/")
noteRoute.delete("/:id")
noteRoute.get("/:id")


module.exports= noteRoute