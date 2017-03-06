// Configure routes - Pages
router.get('/', async (ctx,next) => {
  await ctx.render('main-layout', {
    partials: {
      sidebar:'sidebar',
      content:'content',
      footer :'footer'
    },
    scripts  : browser_scripts,
    css      : browser_css
  });
});
// API ============================== //
var action = async (ctx,next)=>{
  if(!ctx.params.module) return;  // no module -> return;
  if(!ctx.params.action) ctx.params.action = 'index';
  if(!ctx.params.file) ctx.params.file = 'index';
  await components[ctx.params.module][ctx.params.file][ctx.params.action](ctx,next);
}
router.get(['/api/:module/:file/:action',
            '/api/:module/:file',
            '/api/:module'
          ], action );
router.post(['/api/:module/:file/:action',
            '/api/:module/:file',
            '/api/:module'
          ], action );
