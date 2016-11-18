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
    		setTimeout(escribirName,1000);
    	}
    };
    escribirName();

});