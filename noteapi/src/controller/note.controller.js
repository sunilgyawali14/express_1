const fs = require("fs");
const path = require("path");

const NOTE_DIR = path.join(__dirname, "../../notes");

const getAllNotes = (req, res) => {
  const { search } = req.query;

  fs.readdir(NOTE_DIR, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "failed to read note directory" });
    }

    let notes = files.filter((file) => file.endsWith(".txt"));

    if (search) {
      notes = notes.filter(note => note.includes(search));
    }

    res.json({
      success: true,
      data: notes,
      total: notes.length,
    });
  });
};

// POST - create note
const createNote=(req,res)=>{
  // step1: retrive the data
  const  {fileName,content}=req.body

  // step2: validating the incomming data "fileName" ;
if(!fileName || !fileName.trim())
{
  return res.status(400).json({message:'the file require  file name'})
}
// validating the incomming data "Content" 
if(!content || !content.trim())
{
  return res.status(400).json({message:'the file require  content'})
}
// step3: validation of the file either a .txt file or else 
// now we have to  make that these accept the .txt file rather than (.pdf, .js, .json etc...)

if(!fileName.endsWith(".txt")){
  return res.status(400).json({message:"The file must end with txt"})
}

//step4: the path of the file is defined 
const filepath = path.join(NOTE_DIR,fileName)

//step5: make sure that server make the file when the data is given by the [postman]
fs.writeFile(filepath,content.trim(),"utf-8",(err)=>{
  if(err){
    return res.status(500).json({message:"couldn't create a file"})
  }

  // if the file is created then we have to create the response as json 
  res.status(201).json({
    success:true,
    message:`Note is created successfully ${fileName}`,
    createdAt: new Date().toISOString()
  })
})
}
module.exports= 
{
  getAllNotes,
  createNote
}