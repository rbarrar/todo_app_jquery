// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function(){

  $('#new_task').submit(function(x){
    x.preventDefault();
    var form_data = ($('#new_task').serialize());
    var form_action = $('#new_task').attr('action');
    $.post(form_action, form_data, function(html_data, status_text, some_object){

      $('tbody').append(html_data);
      $('#task_name').val("");
    });
  });
});
