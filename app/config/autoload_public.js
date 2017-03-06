//// Loading all public commponents /public/components/*.js
global.browser_scripts = "";

fs.readdir('./public/js/components', {}, (err, browser_files)=>{
  if(err){
    console.error("Browser files not found!");
  }
  browser_files.forEach((script, index)=>{
    browser_scripts += `<script src="/js/components/${script}"></script>`;
  });
});
//// Loading all public commponents /public/components/*.js
global.browser_css = "";

fs.readdir('./public/css', {}, (err, browser_files)=>{
  if(err){
    console.error("Browser files not found!");
  }
  browser_files.forEach((css, index)=>{
    browser_css += `<link rel="stylesheet" href="/css/${css}">`;
  });
});
