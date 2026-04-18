const express = require("express");
const noteModel = require("./models/note.model");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors())

app.post("/api/note", async (req, res) => {
  const { titel, diss } = req.body;

  const note = await noteModel.create({
    titel,
    diss,
  });

  res.status(201).json({
    msg: "note created suff",
    note,
  });
});

app.get("/api/note", async (req, res) => {
  const note = await noteModel.find();

  res.status(200).json({
    msg: "fetched all notes suff",
    note,
  });
});

app.delete("/api/note/:id", async (req, res) => {
  // const deleteNote = await noteModel.findByIdAndDelete(req.params.id)

  const id = req.params.id;
  const deleteNote = await noteModel.findByIdAndDelete(id);

  res.status(200).json({
    msg: "Selected note deleted suff",
    deleteNote,
  });
});

app.patch("/api/note/:id", async (req, res) => {
  const id = req.params.id;

  const updateNote = await noteModel.findByIdAndUpdate(id, {
    diss: req.body.diss,
  });

  res.status(200).json({
    msg: "diss updated suff",
    updateNote,
  });
});

app.put("/api/note/:id", async (req, res) => {
  const id = req.params.id;
  const {titel,diss} = req.body
  const updateAll = await noteModel.findByIdAndUpdate(
    id,
    {titel,diss}
  )

  res.status(200).json({
    msg:"full note updated",
    updateAll
  })
});


module.exports = app;
