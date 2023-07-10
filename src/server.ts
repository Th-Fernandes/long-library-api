import express from 'express';
import { books } from './books';
import { Book } from './@types/book';
import { randomUUID } from 'crypto';

const app = express();
const port = process.env.PORT || 3333; 
app.use(express.json())

app.get('/', (req, res) => {
  res
    .status(200)
    .json(books)
})

app.post('/', (req, res) => {
  const { title, author }: Partial<Book> = req.body;

  if(title && author) {
    books.push({id: randomUUID(),title, author})
    return res.status(200).json({})
  } 
  return res.status(400).json({status: 400, message: 'invalid req params'})

})

app.listen(port, () => console.log(`API entry: http://localhost:${port}`))