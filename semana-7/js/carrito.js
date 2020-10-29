function insertar(){
  var precio=$("#producto").val();
  var producto= document.getElementById("producto");
  var selected = producto.options[producto.selectedIndex].text;
  var cantidad= $("#cantidad_product").val();
  var total= cantidad * precio ;
  var carrito= $("#comment").val();
  {
    $("#comment").text(carrito + cantidad )
    document.getElementById("comment").innerHTML = otro;
  }
  else if (cantidad <=0 & precio<=0 ){
    Swal.fire("Error","No has ingresado valores", 'error')
  }

  else if (cantidad>0 & cantidad>=10 & precio>0){
    Swal.fire("Error", "La cantidad del producto debe ser mayor a 0 y menor a 10", 'error');
  }

  else if (precio>0 & cantidad<=0 || precio<=0 & cantidad>0 ){
    Swal.fire("Error","No has insertado valores completos", 'error')
  }
}

function limpiar(){
  $("#comment").empty();
};

