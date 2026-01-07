import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  pino({
    level: 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
        messageFormat: '{req.method} {req.url} {res.statusCode} - {responseTime}ms',
        hideObject: true,
      },
    },
  }),
);

const PORT = process.env.PORT ?? 3000;

app.get('/notes', (req, res) => {
  res.status(200).json({ message: "Retrieved all notes" });
});

app.get('/notes/:noteId', (req, res) => {
  const noteId = req.params.noteId;
  res.status(200).json({ message: `Retrieved note with ID: ${noteId}` });
});

app.get('/test-error', (req, res) => {
  throw new Error("Something went wrong");
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  console.log("Error:", err.message);
  res.status(500).json({
    message: "Internal Server Error",
    error: err.message
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
