// Include files
require('./app/config/bootstrap.js');
app.use(bodyParser());
// configure middleware
app
  .use(views('./app/views',{
    map: {
      html: 'mustache'
    }
  }))
  .use(serve('./public'))      // serve static content
  .use(router.routes())         // routes list
  .use(router.allowedMethods()) // method list
  .use(logger());               // log activity

// start server and listen to port 3000
app.listen(3000, ()=>{ console.log('Server Running')} );
