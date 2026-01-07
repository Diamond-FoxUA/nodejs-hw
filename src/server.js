import express from 'express';
// import pino from 'pino';
// import cors from 'cors';
import 'dotenv/config';

const app = express();

const PORT = process.env.PORT ?? 3000;

app.get('/notes', (req, res) => {
  res.status(200).json({ message: "Retrived all notes" });
});

app.get('/notes/:noteId', (req, res) => {
  const noteId = req.params.noteId;
  res.status(200).json({ message: `Retrived note with ID: ${noteId}` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
