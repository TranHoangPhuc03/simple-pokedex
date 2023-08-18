import express from 'express'
import * as exphbs from 'express-handlebars';
import path from 'path';
import { getDirname } from './src/libs/utils.js';
import pokemon from './src/routes/pokemon.js';

const PORT = 3000;
const __dirname = getDirname(import.meta.url);

const app = express();

app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'src/views/layouts'),
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'));
app.use('/public', express.static(path.join(__dirname, 'src/public')));

app.get('/', (req, res) => {
    res.render('pokemon', { title: 'Pokédex' });
});
app.use('/pokemon', pokemon);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});