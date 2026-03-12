$(function(){

const modal = $('#infoModal');
const boton = $('#modalTrigger');

modal.on('show.bs.modal', function(){

console.log("Modal empezando a abrir");

boton
.prop('disabled', true)
.removeClass('btn-primary')
.addClass('btn-warning');

});

modal.on('shown.bs.modal', function(){

console.log("Modal abierto completamente");

});

modal.on('hide.bs.modal', function(){

console.log("Modal empezando a cerrarse");

});

modal.on('hidden.bs.modal', function(){

console.log("Modal cerrado");

boton
.prop('disabled', false)
.removeClass('btn-warning')
.addClass('btn-primary');

});

});