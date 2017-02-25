//
// Scripts
// -------------------

// Main scripts


$(function(){

  // Change
  $('.navbar-toggle').on('click.bs.collapse', function(e){
    if ($(this).data('label-expanded')) {
      var $toggleLabel = $(this).find('.navbar-toggle-label')

      if ($(this).hasClass('collapsed')) {
        // Save current label
        $(this).data('label-collapsed', $toggleLabel.text())
        // Set new text
        $toggleLabel.text($(this).data('label-expanded'))
      }
      else {
        $toggleLabel.text($(this).data('label-collapsed'))
      }
    }
  })

});
