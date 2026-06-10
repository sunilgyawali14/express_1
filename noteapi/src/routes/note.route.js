const express=require('express')
const noteRoute= express.Router()
const {getAllNotes,createNote} = require("../controller/note.controller.js")
// features
noteRoute.get("/",getAllNotes)
noteRoute.post("/",createNote)
// noteRoute.put("/:id")
// noteRoute.delete("/:id")
// noteRoute.get("/:id")


module.exports= noteRoute