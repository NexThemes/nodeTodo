// browser user module
(function(){
  // on click to any link
  jQuery('body').on('click','a.api', function(e){
    e.preventDefault();
    var link = jQuery(this);
    jQuery.get( link.attr('href'), function(data){
      jQuery( link.attr('data-container') ).html( data );
    });
  });
  // on click to any button
  jQuery('body').on('click','button.api', function(e){
    e.preventDefault();
    var user = {};
    var form = jQuery(this).parents('form');
    form.find('input').each(function(i,e){
      user[jQuery(e).attr('name')] = jQuery(e).val();
    });
    jQuery.post(form.attr('action'), user).done(function( data ) {
        alert( "Data Loaded: " + data );
    });
  });


  // total users
  jQuery.get('/api/user/index/count', function(data){
    jQuery('#user_online').html( data.total );
  });
  jQuery.get('/api/user/index/profile', function(data){
    jQuery('#user_name').html( data.name );
    jQuery('#user_avatar').attr('src', data.avatar );
  });
})();
