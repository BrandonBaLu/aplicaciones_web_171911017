function insertar(){
  var precio=$("#producto").val();
  var producto= document.getElementById("producto");
  var selected = producto.options[producto.selectedIndex].text;
  var cantidad= $("#cantidad_product").val();
  var total= cantidad * precio
  var texto = "La cantidad de productos es : "+ cantidad + "\nEl producto es: " + selected +  "\nEl precio es de:$" + precio + "\nEl total es de:$"+ total+"\n";
  var otro = $("#comment").val()+ texto;
  var totalcompra=total + total
  if(cantidad<10 & cantidad >0 &  precio >0) 
  {
  
    document.getElementById("comment").innerHTML = otro;
  }
  else if (cantidad <=0 & precio<=0 ){
    alert("No has ingresado valores")
  }

  else if (cantidad>0 & cantidad>=10 & precio>0){
    alert("La cantidad de productos es igual o mayor a 10")
  }

  else if (precio>0 & cantidad<=0 || precio<=0 & cantidad>0 ){
    alert("No has insertado valores completos")
  }
}

function limpiar(){
  $("#comment").val('');

};