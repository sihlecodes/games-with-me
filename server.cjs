const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const SOURCE_PATH = path.join(__dirname, 'src');
const PUBLIC_PATH = path.join(SOURCE_PATH, 'public');
const VIEWS_PATH = path.join(SOURCE_PATH, 'views');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(VIEWS_PATH))

if (process.env.NODE_ENV !== 'production') {
  const livereload = require('livereload');
  const connectLiveReload = require('connect-livereload');

  const liveReloadServer = livereload.createServer({
    exts: ['html', 'css', 'js', 'ejs']
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

app.get('/', (request, response) => {
  response.render('index', { message: 'Hello, world!' });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
