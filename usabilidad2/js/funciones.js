function auditoria(){
 	var sumaPares = 0;
 	var sumaImpares = 0;
 	var x = 0;
 for(x = 1; x < 11; x++){
 	if(x == 1){
 		var resultado = sumaPuntos("resultados");
 		if(resultado % 2 ){
 			sumaImpares = parseFloat(sumaImpares) + parseFloat(resultado);
 		}
    else{
 			sumaPares = parseFloat(sumaPares) + parseFloat(resultado);
 		}
 	}
 	else{
 		var resultado = sumaPuntos("resultados" + x);
 		if(resultado % 2 ){
 			sumaImpares = parseFloat(sumaImpares) + parseFloat(resultado);
 		}else{
 			sumaPares = parseFloat(sumaPares) + parseFloat(resultado);
 		}
 	}
 }
 alert("suma de pares " + sumaPares);
 alert("suma de impares " + sumaImpares);
}

function sumaPuntos(nombreRadioButton){
	if($('input:radio[name='+nombreRadioButton+']:checked')){
		return $('input:radio[name='+nombreRadioButton+']:checked').val();
	}
}