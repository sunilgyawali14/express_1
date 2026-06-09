const express=require('express')
const noteRoute= express.Router()

// features
noteRoute.get("/")
noteRoute.post("/")
noteRoute.put("/")
noteRoute.delete("/:id")
noteRoute.get("/:id")


module.exports= noteRoute