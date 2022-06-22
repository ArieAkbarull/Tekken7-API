import express from 'express'
import mongoose from 'mongoose';
import 'dotenv/config'
import helmet from 'helmet';
import character from './src/router/character.js';
import main from './src/router/index.js';

const app = express()
app.use(helmet())
app.use('/asset',express.static('asset'))

app.use(main)
app.use(character)

mongoose.connect(process.env.APP_DB).then(() => {
    app.listen(3000, () => {
        console.log('App listen on port 3000');
    })
}).catch(err => console.log(err))