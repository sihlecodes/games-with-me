import express from 'express';
import path from 'path';

import indexRouter from './src/routes/index.js';
import connectFourRouter from './src/routes/connect-four.js';

const PORT = process.env.PORT || 3000;
const SOURCE_PATH = path.join(import.meta.dirname, 'src');
const PUBLIC_PATH = path.join(SOURCE_PATH, 'public');
const VIEWS_PATH = path.join(SOURCE_PATH, 'views');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(VIEWS_PATH))

if (process.env.NODE_ENV !== 'production') {
  const { default: livereload } = await import('livereload');
  const { default: connectLiveReload } = await import('connect-livereload');

  const liveReloadServer = livereload.createServer({
    exts: ['html', 'css', 'js', 'ejs'],
    delay: 300,
  });

  liveReloadServer.watch([
    PUBLIC_PATH,
    VIEWS_PATH
  ]);

  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });

  app.use(connectLiveReload());
}

app.use(express.static(PUBLIC_PATH));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/connect-four', connectFourRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
