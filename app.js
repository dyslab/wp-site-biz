/* eslint-disable */
const path = require('path');
const createError = require('http-errors');
const express = require('express');
const config = require('./webpack.server.config.js');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'server', 'views'));
app.use('/dist', express.static(config.devServer.static.directory));

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

console.log(`\nWeb Server Started. Click Link \x1b[36;1mhttp://localhost:${config.devServer.port}/dist/\x1b[0m\n`);
console.log(`\x1b[33;1mCtrl + C\x1b[0m to Exit...\n`);

app.listen(config.devServer.port);
