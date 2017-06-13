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
  var xlenght = x_array.length ;
  var ylenght = y_array.length ;

  //Array Multidimensiona
  var mult_array = new Array();
  var multlenght = mult_array.length;
  //Multiplicacion de Columnas
  var n=0;
  var z= 0;
  //

  for (var x = 0; x < xlenght; x++)
  {
    for (var y=0; y < ylenght; y++)
    {
          while (z<x)
          {
            mult_array[n]= 0;
            n++;
            z++;
          }
          mult_array[n] = y_array[y]*x_array[x];
          n++;
    }
          z = 0;
  }


  //Array Resultado
  var resultado = new Array(ylenght);
  var f=0;
  for (var i = 0; i < ylenght; i++)
  {
    for(var q = 0; q < multlenght; q++)
    f= q * ylenght +1;
    resultado[0]= mult_array[q].value +resultado[0].value;
  }


  //Test de Salida
  document.getElementById("test").innerHTML =  "x= "+ x_array+"    y= "+ y_array;
  //Array completo
   document.convPeriodica.resultado.value =   resultado;
  //celda en especifico
  // document.convPeriodica.resultado.value = result_array[1][0];

}
