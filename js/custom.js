$(function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 100,
    step: 1,
    values: [ 10, 50 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( nonlinear(ui.values[ 0 ]) + "€ - " + nonlinear(ui.values[ 1 ]) + "€" );
    }
  });
  
  $( "#amount" ).val( nonlinear($( "#slider-range" ).slider( "values", 0 )) + "€ - " + nonlinear($( "#slider-range" ).slider( "values", 1 )) + "€" );
});

function nonlinear(slider_value) {
  var return_value = 0;
  if (slider_value < 10) {
    return_value = (slider_value / 10) * 50000;
  } else if (slider_value <= 90) {
    return_value = 50000 + (slider_value - 10) / 80 * 50000;
  } else {
    return_value = 200000 + (slider_value - 90) / 10 * 800000;
  }
  return String(return_value);
}