# 🛰 WeatherApp — Weather_OS

Aplicação web de consulta climática em tempo real, desenvolvida com **TypeScript**, **Node.js**, **Express** e integração com a API pública **OpenWeatherMap**.

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) versão 18 ou superior
- [npm](https://www.npmjs.com/) (já incluso com o Node.js)
- Uma **API Key** gratuita do [OpenWeatherMap](https://openweathermap.org/api)

---

## 📁 Estrutura do Projeto

```
weatherapp/
├── src/
│   └── server.ts       # Servidor Express + rota /weather
├── views/
│   └── index.html      # Frontend (HTML, CSS, JS)
├── .env                # Variáveis de ambiente (criado por você)
├── tsconfig.json       # Configuração do TypeScript
└── package.json
```

---

## ⚙️ Configuração

### 1. Clone ou extraia o projeto

```bash
# Se vier como .zip, extraia e entre na pasta:
cd weatherapp
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Crie o arquivo `.env` na raiz do projeto

O arquivo `.env` **não está incluso** no projeto por segurança. Você precisa criá-lo manualmente na pasta raiz `weatherapp/`.

Crie um arquivo chamado `.env` e adicione exatamente o seguinte conteúdo:

```env
API_KEY=sua_chave_aqui
PORT=3000
```

> ⚠️ Substitua `sua_chave_aqui` pela sua chave real do OpenWeatherMap. Sem esse arquivo o servidor não conseguirá se conectar à API e retornará erro 500.

> 💡 Para obter uma chave gratuita, crie uma conta em [openweathermap.org](https://openweathermap.org/api), acesse **API Keys** no painel e gere uma nova chave. Ela pode levar até **10 minutos** para ativar após a criação.

---

## ▶️ Rodando o projeto

### Modo desenvolvimento (recomendado)

```bash
npm run dev
```

Acesse no navegador: [http://localhost:3000](http://localhost:3000)

### Modo produção

```bash
npm run build   # Compila o TypeScript para /dist
npm start       # Inicia o servidor compilado
```

---

## 🌐 Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/` | Página principal do app |
| `GET` | `/weather?city={nome}` | Retorna dados climáticos da cidade |

**Exemplo de resposta** (`/weather?city=São Paulo`):

```json
{
  "city": "São Paulo",
  "country": "BR",
  "temp": 24.5,
  "feels_like": 25.1,
  "humidity": 72,
  "description": "céu limpo",
  "iconCode": "01d",
  "icon": "https://openweathermap.org/img/wn/01d@2x.png"
}
```

---

## 🛠 Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor em modo desenvolvimento com `ts-node` |
| `npm run build` | Compila o TypeScript para JavaScript na pasta `/dist` |
| `npm start` | Inicia o servidor a partir dos arquivos compilados |

---

## 🔧 Tecnologias utilizadas

- **TypeScript** — tipagem estática
- **Node.js + Express** — servidor backend
- **Axios** — requisições HTTP para a API externa
- **dotenv** — gerenciamento de variáveis de ambiente
- **OpenWeatherMap API** — dados climáticos em tempo real
- **HTML + CSS + JavaScript** — frontend sem frameworks

---

## ⚠️ Solução de problemas

**Erro 500 ao buscar cidade**
Verifique se a `API_KEY` no `.env` está correta e se a chave já foi ativada no painel do OpenWeatherMap.

**Erro de compilação TypeScript**
Certifique-se de que o `tsconfig.json` contém `"module": "commonjs"` e não possui `verbatimModuleSyntax`.

**Porta em uso**
Altere o valor de `PORT` no `.env` para outra porta disponível (ex: `3001`).

---

## 📄 Licença

Projeto desenvolvido para fins acadêmicos — **Desenvolvimento Web III, Fatec**.
