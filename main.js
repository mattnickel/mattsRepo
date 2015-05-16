$(".plusbutton").on('click', function(){
  $('form:hidden').show();
  $('#newTask').focus();
});
$('.form').on('submit', function(e){
  e.preventDefault();
  $(".form")[0].reset();
});
$(".cancel").on('click', function(){
  $('form').hide();
});
$('.add').click(function() {
  var new_task = $('#newTask').val();
  $('.taskList').append('<li><span class="checkbox unchecked list__box"></span><div class="edit__list">'+new_task+'</div><p class="delete">x</p></li>');
  $(".edit__list").attr('contentEditable',true);
  $('.form').hide();
  $('li:last .list__box').bind('click', function () {
    $(this).toggleClass('unchecked checked');
  });
  $('li:last .delete').on('click', function () {
   $(this).parent().remove();
  });
});
