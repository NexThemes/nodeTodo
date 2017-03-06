// Require modules
const Koa         = require('koa');
const bodyParser  = require('koa-bodyparser')
const app         = new Koa();
const serve       = require('koa-static');
const logger      = require('koa-logger');
const Router      = require('koa-router');
const router      = new Router();
const views       = require('koa-views');
const fs          = require('fs');
// global access
global.bodyParser = bodyParser;
global.app        = app;
global.serve      = serve;
global.views      = views;
global.router     = router;
global.logger     = logger;
global.fs         = fs;

// loading our modules
require('./autoload.js');
require('./router.js');
// loading browser scripts list
require('./autoload_public.js');
