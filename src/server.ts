import express, { Request, Response } from 'express';
import axios from 'axios';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../views')));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

app.get('/weather', async (req: Request, res: Response) => {
  const city = req.query.city as string;

  if (!city || city.trim() === '') {
    return res.status(400).json({ error: 'Nome da cidade não pode ser vazio.' });
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=pt_br`;
    const response = await axios.get(url);
    const data = response.data;

    const result = {
  city: data.name,
  country: data.sys.country,
  temp: data.main.temp,
  feels_like: data.main.feels_like,
  humidity: data.main.humidity,
  description: data.weather[0].description,
  iconCode: data.weather[0].icon,   // ← adicionar esta linha
  icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
};

    return res.json(result);
   } catch (error: any) {
    console.log('Erro detalhado:', error.response?.data);
    console.log('Status:', error.response?.status);
    
    if (error.response?.status === 404) {
      return res.status(404).json({ error: 'Cidade não encontrada.' });
    }
    return res.status(500).json({ error: error.response?.data?.message || 'Erro ao buscar dados climáticos.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
