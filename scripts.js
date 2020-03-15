$(document).ready(function() {

  $(document).on('click', '.js-gender-select', function(e, i){
    e.preventDefault();
    $('.js-gender-select').removeClass('gender__option--selected');
    $(this).addClass('gender__option--selected');
  });

  $(document).on('click', '.js-confirmation-button', function(e, i){
    e.preventDefault();
    $('.js-confirmation-button').removeClass('confirmation__button--active');
    $(this).addClass('confirmation__button--active');
  });
  
});