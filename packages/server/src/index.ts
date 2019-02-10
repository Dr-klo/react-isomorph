import express from 'express';
import { user } from 'conrollers/user';

const app = express();
const port = 3000;

app.get('/api/v1/users', (req, res) => {
  res.json(user);
})

app.listen(port, () => console.log(`1Example app listening on port ${port}!`));
