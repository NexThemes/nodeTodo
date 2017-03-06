// browser task module
(function(){
  // output tasks
  jQuery.get('/api/task/index/tasks', function(data){
    jQuery.each(data, function(key,value) {
      jQuery('#task_content').append('<div class="w3-container"><h5 class="w3-opacity"><b>' + value.title + '</b></h5><h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>' + value.date + '</h6><p>' + value.text + '</p><hr></div>');
    });
  });
})();
// KOA UPLOAD File (github / example koa upload)
