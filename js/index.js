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

  //Longitud de Variables
  var xlenght = x_array.length ;
  var ylenght = y_array.length *2;
  var restlenght = y_array.length;


  //Array Multidimensiona
  var mult_array = new Array();
  var multlenght = mult_array.length;
  //Multiplicacion de Columnas
  var n=0;
  var z= 0;


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
          if(isNaN(mult_array[n]))
          {
            mult_array[n] = 0;
          }
          n++;
    }
          z = 0;
  }


  //Array Resultado
  var resultado = new Array(ylenght);


  // Sumar los valores de la matriz
  for (var i = 0; i < ylenght; i++)
  {
    var indi=i;
    var sumando = 0;
    for (var d = 0; d < xlenght ; d++)
    {
        sumando = mult_array[indi] + sumando;
        indi = ylenght + indi+d;
    }

    resultado[i] = sumando;
  }








  //Test de Salida
  document.getElementById("test").innerHTML =  "x= "+ x_array+"Longitud x="+ xlenght+ "y= "+ y_array+ " longitud Y= "+
  ylenght+"Longitud = "+ mult_array.length + "Cadena= "+ mult_array[6];
  //Array completo
  //document.convPeriodica.resultado.value =  mult_array;
  document.convPeriodica.resultado.value =  resultado;
  //celda en especifico
  // document.convPeriodica.resultado.value = result_array[1][0];

}
