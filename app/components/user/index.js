exports.count = function(ctx) {
  ctx.set('Content-type','application/json')
  ctx.body = JSON.stringify({total: 1000});
}
exports.profile = function(ctx) {
  ctx.set('Content-type','application/json')
  ctx.body = JSON.stringify({name: "Valentin Scarevnea", avatar: "http://www.pngmart.com/files/3/Man-PNG-Pic.png"});
}
// sign up
exports.signup = async function(ctx) {
  await ctx.render('signup');
}
exports.create = function(ctx) {
  ctx.body = "User Registered!";
  console.log(ctx.request.body);
}
exports.login = function(ctx) {
  ctx.body = "User Loged In!";
  console.log(ctx.request.body);
}
// sign in
exports.signin = async function(ctx) {
  await ctx.render('signin');
}




/*
count() -> all items count
all()   -> list of all items
create() -> new item
update() -> update on items
delete() -> delete a items
delete_all() -> delete all items
find() - find some item
*/
