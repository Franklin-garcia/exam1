//salida de un documento
/*
<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>**/

//llamada de un archivo externo
//<script src="myScript2.js"></script>

/*
Escribir en un elemento HTML, usando innerHTML.
document.getElementById("demo").innerHTML = 5 + 6;

Escribir en la salida HTML usando document.write().
document.write(5 + 6);

Escribir en un cuadro de alerta, usando window.alert().
<button type="button" onclick="document.write(5 + 6)">Try it</button>

Escribir en la consola del navegador, usando console.log().
window.alert(5 + 6);**/

//declaracion de variables
/*var x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;**/

/*
funciones
function myFunction (parametros) {
  alerta ("¡Hola Mundo!");
}

llamar una funcion
Usando el ejemplo anterior, se myfunction refiere al objeto de función, y se myFunction()refiere al resultado de la función.
Acceder a una función sin () devolverá la definición de la función en lugar del resultado de la funció

document.getElementById("demo").innerHTML = myFunction(argumentos);

**/

//objetos
//var car = {type:"Fiat", model:"500", color:"white"};
//llamar atrubuto nombreobjeto.atributo
//this se refiere al mismo objeto


/**
eventos 
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>

if else  condiciones
function myFunction() {
  var greeting;
  var time = new Date().getHours();
  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  document.getElementById("demo").innerHTML = greeting;
}

ciclo for
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
for (var i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;

ciclo while
while (i < 10) {
  text += "The number is " + i;
  i++;
}

funcion flecha

hello = function() { funcion normal
  return "Hello World!";
}

hello = () => {
  return "Hello World!";
}


clases en java scritpt


<h2>JavaScript Class Method</h2>

<p>Demonstration of how to add a method in a JavaScript Class.</p>

<p id="demo"></p>

<script>
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

var mycar = new Car("Ford");

document.getElementById("demo").innerHTML = mycar.present();
</script>

</body>
</html>







































































































































*/