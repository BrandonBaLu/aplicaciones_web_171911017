function insertar(){
  var cantidad= $("#cantidad_product").val();
  var nombreProducto = $("#producto option:selected").text();
  var precio=$("#producto").val();
  var carrito = $("#comment").val();
  var total=0;
  
  if(cantidad<10 & cantidad >0 &  precio >0){
    $("#comment").text(carrito +"La cantidad del producto es: "+ cantidad + "\tEl producto es: " + nombreProducto +  "\tPrecio:$" + precio + "\tEl total es de:$"+ parseFloat(cantidad)*parseFloat(precio)+"\n");
    llenaTotal(parseFloat(cantidad)* parseFloat(precio));
  }
  else if (cantidad <=0 & precio<=0 ){
    Swal.fire("Error","No has ingresado valores", 'error')
  }

  else if (cantidad>0 & cantidad>=10 & precio>0){
    Swal.fire("Error", "La cantidad del producto debe ser mayor a 0 y menor a 10", 'error');
  }

  else if (precio>0 & cantidad<=0 || precio<=0 & cantidad>0 ){
    Swal.fire("Error","Ingresa producto o cantidad", 'error')
  }
}

function limpiar(){
  $("#comment").empty();
  $("#cantidad_product").val(" ");
  $("#totalCompra").val('0');
  $("#producto").val("0");
}


function llenaTotal(costo){
  var totalActual = $("#totalCompra").val();
  var totalFinal = parseFloat(totalActual)+parseFloat(costo);
  $("#totalCompra").val(totalFinal);
}

