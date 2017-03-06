fs.readdir('./app/components', {}, (err, subdir)=>{
  if(err){
    console.error("Directory not found!");
  }
  global.components = {};
  subdir.forEach((dir, index)=>{
    fs.readdir(`./app/components/${dir}`,{},(err, files)=>{
      if(err){
        return console.error('Cannot find Subdirectory');
      }
      global.components[dir] = {};
      files.forEach((module)=>{
        global.components[dir][module.replace('.js','').replace('.','_')] = require(`../../app/components/${dir}/${module}`);
      });
    });
  });
});
