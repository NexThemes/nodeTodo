exports.tasks = function(ctx) {
  ctx.set('Content-type','application/json')
  ctx.body = JSON.stringify([{
    title: "Task number One",
    text : "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.",
    date : "10 Mar 2012"
  },{
    title: "Task number Two",
    text : "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.",
    date : "20 Dec 2013"
  },{
    title: "Task number Three",
    text : "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.",
    date : "30 Nov 2015"
  }]);
}
