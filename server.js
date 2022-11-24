const app = require('./app');
const { notFoundError, serverError } = require('./controllers/errors/index')
const { authRouter, commentsRouter, postsRouter } = require('./routes/index')

const port = app.get('port');

app.use(authRouter);
app.use(postsRouter);
app.use(commentsRouter);
app.use(notFoundError);
app.use(serverError);

app.listen(port, () => {
  console.log(`App is live on http://localhost:${port}`);
});
