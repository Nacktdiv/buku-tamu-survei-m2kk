const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const BukuTamu = require('./models/buku-tamu')
const Survey = require('./models/survey')
const {db, testConnection} = require('./config/db');

const CreateTamu = require('./controllers/createTamu');
const CreateSurvey = require('./controllers/createSurvey');
const GetSurvey = require('./controllers/getSurvey');

dotenv.config();
const app = express()

app.use(cors());
app.use(helmet());
app.use(express.json());

app.post('/tamu', async (req, res) => {
    await CreateTamu(req.body, res);
});

app.post('/survey', async (req, res) => {
    await CreateSurvey(req.body, res);
});

app.get('/survey', async (req, res) => {
    await GetSurvey(req, res);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await testConnection();
    await db.sync({alter : true});
});