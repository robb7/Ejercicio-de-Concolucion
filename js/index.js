function calConvolucionPeriodica(){

  //Obtener los números de entrada.
  var x_input = document.convPeriodica.operandoX.value;
  var y_input = document.convPeriodica.operandoY.value;
  //Creamos los arrays para hacer las operaciones
  var x_array = new Array();
  var y_array = new Array();
  //Separamos los datos de entrada  por "," y los guardamos
  //en el array

  var x_array = x_input.split(',');
  var y_array = y_input.split(',');

  //Calculamos la Longitud
  var xlenght = x_array.length;
  var ylenght = y_array.length;

  //Array Multidimensiona
  var result_array = new Array();

  for (w =0; w < xlenght; w++) // Altura y
  {
   result_array[w]=new Array(); // Ancho x
   for (j=0; j < ylenght; j++)
   {
    result_array[w][j]=0;
   }
  }

  //Multiplicacion de Columnas
  for (var d = 0; d < xlenght; d++) {
    for (var i = 0; i < ylenght; i++)
    {
          result_array[d][i] = x_array[d] * y_array[i];
    }
  }

 for (var z = 1; z < ylenght; z++)
 {
   for (var m = 0; i < z;  m++)
   {
     result_array.unshift(0);
   }
 }

  //Test de Salida
  document.getElementById("test").innerHTML =  "x= "+ x_array+"    y= "+ y_array;
  document.convPeriodica.resultado.value = result_array;
}
