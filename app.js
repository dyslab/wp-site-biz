/* eslint-disable */
const path = require('path');
const createError = require('http-errors');
const express = require('express');
const config = require('./webpack.server.config.js');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'server', 'views'));
app.use('/dist', express.static(config.devServer.contentBase));

app.get('/', (req, res) => {
  res.render('index', { title:'INDEX' });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'ERROR' });
})

console.log('Web Server Started.');
console.log(`Link: [http://localhost:${config.devServer.port}]`);
console.log(`Ctrl+C to Exit...`);

app.listen(config.devServer.port);
