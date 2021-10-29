import express from 'express';
import uploadConfig from './config/upload';
import multer from 'multer';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';


const app = express();

app.use(express.json());
const upload = multer(uploadConfig);

app.use(morgan('dev'));
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.post('/teste', upload.fields([
  {
    name: 'documentBack',
    maxCount: 1,
  },
  {
    name: 'documentFront',
    maxCount: 1,
  },
  {
    name: 'socialContract',
    maxCount: 1,
  },
]) , async (req, res) => {
  console.log('files', req.files);
  console.log('body', req.body);
  return res.json({ ok: true });
});

app.get('/', async (req, res) => { 
  return res.json({ ok: true });
});
  

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`api executando na porta ${port}`);
});
