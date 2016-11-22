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
    		setTimeout(escribirName,1500);
    	}
    };
    escribirName();
    //Barra de progreso
    var bar = new ProgressBar.Line(barrita, {
		strokeWidth: 4,
  		easing: 'easeInOut',
  		duration: 25000,
  		color: '#d0a31d',
  		trailColor: '#eee',
  		trailWidth: 1,
  		svgStyle: {width: '100%', height: '100%'
  		}
	});
	bar.animate(.50);
	bar.setText('Intermedio');
});