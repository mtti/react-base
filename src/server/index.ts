import path from 'path';
import express from 'express';

const port = process.env.PORT || 8080;

const app = express();
app.use(express.static(path.join(__dirname, '../client')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});
app.listen(port);
