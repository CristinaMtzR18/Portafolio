var texto = 'Cristina Martinez';
var i=0;
$(document).ready(function(){
	//Efecto flipPage
  $('#sketch').turn({
   	when : {
   		turned : function(event, page, pageObj) {
   			console.log("Turn: ", page);
   			if (page >= 3) {
    				//mostar el cuadro gris
    				//$(".cuadro").show();
   			}
   			if (page < 3) {
    				//Ocultar el cuadro gris
    				//$("#cuadro").hide();
   			}
   		}
   	}
  });
  //Escribir texto
  function escribirName(){
  	$('#name').append(texto[i]);
  	if(i<texto.length){
   		i++;
   		setTimeout(escribirName,300);
   	}
  };
  escribirName();
  //Barra de progreso
  var bar = new ProgressBar.Line(progresoIntermedio, {
    strokeWidth: 6,
  	easing: 'easeInOut',
  	duration: 25000,
  	color: '#d0a31d',
  	trailColor: '#AFE2FF',
  	trailWidth: 6,
  	svgStyle: {width: '80%', height: '100%'}
	});
  bar.setText('Intermedio');
	bar.animate(.50);
  bar.text.style.color = '#fffaf0';
  bar.text.style.fontSize = '1.5rem';
  bar.text.style.fontWeight ='bold';
  //Barra de progreso
  var bar = new ProgressBar.Line(progresoBasico, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 25000,
    color: '#d0a31d',
    trailColor: '#AFE2FF',
    trailWidth: 6,
    svgStyle: {width: '80%', height: '100%'},
  });
  bar.setText('Básico');
  bar.animate(.35);
  bar.text.style.color = '#fffaf0';
  bar.text.style.fontSize = '1.5rem';
  bar.text.style.fontWeight ='bold';

  //Grfica de corazon
  var bar = new ProgressBar.Path('#heart-path', {
  easing: 'easeInOut',
  duration: 25000
  });
  bar.set(0);
  bar.animate(1.0);
});