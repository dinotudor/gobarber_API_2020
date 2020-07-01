import express from 'express';

import routes from './routes';

// const PORT = 3333;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log(`Server started at port: 3333`);
});
